import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';

import { Events } from 'ionic-angular';
import { EditTaskPage } from '../edit-task/edit-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public taskList: Array<any> = []

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public taskService: TaskService,
    public events: Events
  ) {
    this.GetTask()

    events.subscribe('task:created', (task) => {
      this.taskList.push(task);
    });

  }

  GetTask() {
    this.taskService.GetTask().subscribe(
      res => {
        this.taskList = res
      }, err => {
        console.error(err.message)
      })
  }

  DeleteTask(task) {

    this.taskService.DeleteTask(task.id).subscribe(
      res => {
        this.GetTask()
      }, err => {
        console.error(err.message)
      })

  }

  UpdateTaskPage(task) {
    this.navCtrl.push(EditTaskPage, { task });
  }

  async AlertDeleteTask(task) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure to delete the task <strong>${task.taskname}</strong>?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'Cancel',
          handler: () => { }
        }, {
          text: 'Accept',
          handler: () => {
            this.DeleteTask(task);
          }
        }
      ]
    });

    await alert.present();
  }

}
