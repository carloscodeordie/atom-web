import { Injectable } from '@angular/core';
import { TaskService } from './task-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  constructor(private taskService: TaskService) {}

  private tasks = new BehaviorSubject<Task[]>([]);
  public tasks$: Observable<Task[]> = this.tasks.asObservable();

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks.next(tasks);
    });
  }

  saveTask(task: Task) {
    this.taskService.saveTask(task).subscribe(() => {
      this.getTasks();
    });
  }

  editTask(task: Task) {
    this.taskService.editTask(task).subscribe(() => {
      this.getTasks();
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.getTasks();
    });
  }
}
