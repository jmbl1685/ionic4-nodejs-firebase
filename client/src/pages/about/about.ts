import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../app/services/task.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public taskService: TaskService
  ) {
    
  }


}
