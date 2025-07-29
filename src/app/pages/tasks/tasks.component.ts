import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TaskFacadeService } from '../../services/task-facade.service';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/Task';
import { AsyncPipe } from '@angular/common';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-tasks',
  imports: [AsyncPipe, HeaderComponent, TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  constructor(private taskFacadeService: TaskFacadeService) {}

  tasks$: Observable<Task[]> = new Observable<Task[]>();

  ngOnInit(): void {
    this.taskFacadeService.getTasks();
    this.tasks$ = this.taskFacadeService.tasks$;
  }
}
