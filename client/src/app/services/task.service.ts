import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../model/task.model';

@Injectable()
export class TaskService {

  private url = 'http://192.168.1.59:3000';
  public headers: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

  }

  GetTask(taskId?: string): Observable<any> {
    return this.http.get(`${this.url}/task/${taskId}`, { headers: this.headers })
  }

  AddTask(task: any): Observable<any> {
    return this.http.post(`${this.url}/task`, task, { headers: this.headers })
  }

  DeleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.url}/task/${taskId}`, { headers: this.headers })
  }

  UpdateTask(taskId: string, task: Task): Observable<any> {
    return this.http.put(`${this.url}/task/${taskId}`, task, { headers: this.headers })
  }

}