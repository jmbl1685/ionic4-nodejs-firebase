import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';

import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public taskList: Array<any> = []

  constructor(
    public navCtrl: NavController,
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
        console.log(this.taskList)
      }, err => {
        console.error(err.message)
      })
  }

}
