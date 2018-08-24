import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

  private url = 'http://192.168.1.59:3000';

  constructor(private http: HttpClient) { }

  GetTask():Observable<any>{
    return this.http.get(`${this.url}/task`)
  }

}