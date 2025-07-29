import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskFacadeService } from '../../services/task-facade.service';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule, MatIconModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() editTaskEvent = new EventEmitter<Task>();
  @Output() deleteTaskEvent = new EventEmitter<Task>();

  isOpen = false;

  openEditTask() {
    this.isOpen = true;
  }

  saveTask(task: Task) {
    this.editTaskEvent.emit(task);
    this.isOpen = false;
  }

  completeTask(task: Task) {
    this.task.status = 'Completed';
    this.saveTask(task);
  }

  undoTask(task: Task) {
    this.task.status = 'Pending';
    this.saveTask(task);
  }

  deleteTask(task: Task) {
    console.log('Delete');
    this.deleteTaskEvent.emit(task);
  }
}
