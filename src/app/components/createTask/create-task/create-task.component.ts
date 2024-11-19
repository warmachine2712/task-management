import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../model/task';
import { CommonModule } from '@angular/common';
import { subTask } from '../../../model/subTask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpServiceService } from '../../../service/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, HttpClientModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {
  httpService = inject(HttpServiceService);


  taskData: Task[] = [
    {
      id: 1,
      date: new Date(),
      name: 'Main Task 1',
      deadline: new Date(),
      progress: 0,
      status: 'In Progress',
      priority: 'High',
      subTasks: []
    }
  ];
  mainTask: Number = 0;
  newTask: Task = new Task();
  newSubTask: subTask = new subTask();
  data: any;
  constructor(private formsModule: FormsModule) {
  }
  ngOnInit(): void {
    console.log(this.newTask);
  }

  submitTask() {
    console.log("data", this.newTask)
    this.newTask.id = 4;
    this.newTask.date = new Date();
    this.data = this.httpService.createTask(this.newTask);
    console.log("data", this.data)

  }
  submitSubTask() {
    console.log("task data", this.taskData)
    console.log("main Task", this.mainTask)
    this.newSubTask.mainTask = this.mainTask;
    console.log("data", this.newSubTask)
  }
}
