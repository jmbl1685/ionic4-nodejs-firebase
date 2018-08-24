import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public taskList: Array<any> = []

  constructor(
    public navCtrl: NavController,
    public taskService: TaskService
  ) {
    this.GetTask()
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
