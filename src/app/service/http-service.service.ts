
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl: string = "http://ec2-65-1-110-241.ap-south-1.compute.amazonaws.com:8080/createTask"


  constructor(private http: HttpClient) { }


  createTask(task: Task): void {
    console.log("api call", task)
    this.http.post<any>(this.apiUrl, task).subscribe((res: any) => {
      console.log("res", res)
    });

  }
}
