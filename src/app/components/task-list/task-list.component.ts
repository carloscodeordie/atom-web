import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { TaskFacadeService } from '../../services/task-facade.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  constructor(private taskFacadeService: TaskFacadeService) {}

  @Input() tasks: Task[] | null = [];

  isNewTask: boolean = false;
  task: Task = {
    id: '',
    name: '',
    description: '',
    status: 'Pending',
    creationDate: '',
  };

  newTask() {
    this.isNewTask = true;
  }

  hideTask() {
    this.isNewTask = false;
    this.task = {
      id: '',
      name: '',
      description: '',
      status: 'Pending',
      creationDate: '',
    };
  }

  createTask() {
    this.taskFacadeService.saveTask(this.task);
    this.hideTask();
  }

  handleEditTask(task: Task) {
    console.log('---EDIT TASK: ', task);
    this.taskFacadeService.editTask(task);
  }

  handleDeleteTask(task: Task) {
    this.taskFacadeService.deleteTask(task);
  }
}
