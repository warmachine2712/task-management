import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  date: string;
  name: string;
  deadline: string;
  progress: string;
  status: string;
  priority: string;
  subTasks?: Task[];
  expanded?: boolean;
}


@Component({
  selector: 'app-list-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-model.component.html',
  styleUrl: './list-model.component.css'
})
export class ListModelComponent {

  toggleTask: any = {};


  tasks: Task[] = [
    {
      date: '2024-11-15',
      name: 'Main Task 1',
      deadline: '2024-12-01',
      progress: '50%',
      status: 'In Progress',
      priority: 'High',
      expanded: false,
      subTasks: [
        {
          date: '2024-11-16',
          name: 'Sub-task 1.1',
          deadline: '2024-11-20',
          progress: '90%',
          status: 'Done',
          priority: 'Medium'
        },
        {
          date: '2024-11-17',
          name: 'Sub-task 1.2',
          deadline: '2024-11-25',
          progress: '20%',
          status: 'In Progress',
          priority: 'High'
        }
      ]
    },
    {
      date: '2024-11-18',
      name: 'Main Task 2',
      deadline: '2024-12-05',
      progress: '0%',
      status: 'Not Started',
      priority: 'Low',
      expanded: false,
      subTasks: [
        {
          date: '2024-11-19',
          name: 'Sub-task 2.1',
          deadline: '2024-11-30',
          progress: 'Not Started',
          status: 'Not Started',
          priority: 'Medium'
        },
        {
          date: '2024-11-20',
          name: 'Sub-task 2.2',
          deadline: '2024-12-02',
          progress: 'Not Started',
          status: 'Not Started',
          priority: 'Low'
        }
      ]
    }
  ];

  toggleSubTasks(task: Task): void {
    task.expanded = !task.expanded;
    this.toggleTask = task;
  }

}
