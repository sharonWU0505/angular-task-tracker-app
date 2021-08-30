import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.getTask());
  }

  toggleTaskReminder(task: Task): void {
    this.taskService.toggleTask(task).subscribe(() => this.getTask());
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(() => this.getTask());
  }
}
