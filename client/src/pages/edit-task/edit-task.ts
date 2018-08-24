import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  task: any = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public taskService: TaskService,
    public events: Events
  ) {
    this.task = this.navParams.get('task')
  }

  ionViewDidLoad() {

  }

  UpdateTask() {
    this.taskService.UpdateTask(this.task.id,this.task).subscribe(
      res => {
        this.navCtrl.pop();
      }, err => {
        console.error(err.message)
      })
  }

}
