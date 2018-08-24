import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';
import { ToastController } from 'ionic-angular';
import { Task } from '../../app/model/task.model';

import { Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  taskname: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public taskService: TaskService,
    public events: Events
  ) {

  }

  AddTask() {
    let task = new Task();
    task.taskname = this.taskname;
    this.taskService.AddTask({taskname: this.taskname}).subscribe(
      res => {
        this.ShowToast();
        this.events.publish('task:created', res);
        this.taskname = "";
      },
      err => {
        console.log(err)
      }
    )
  }

  ShowToast() {
    const toast = this.toastCtrl.create({
      message: 'the task was created successfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
