import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getTasks(): Observable<Task[]> {
    const token = this.cookieService.get('token');

    return this.http.get<Task[]>('/api/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  saveTask(task: Task): Observable<Task> {
    const token = this.cookieService.get('token');

    return this.http.post<Task>('/api/tasks', task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  editTask(task: Task): Observable<Task> {
    const token = this.cookieService.get('token');

    return this.http.put<Task>(`/api/tasks/${task.id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteTask(task: Task): Observable<Task> {
    const token = this.cookieService.get('token');

    return this.http.delete<Task>(`/api/tasks/${task.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
