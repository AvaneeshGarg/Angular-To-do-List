import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { }

  // Get all todos
  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  // Create a new todo
  createTodo(todo: { title: string, desc: string, category: string }): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl, todo);
  }

  // Update a todo
  updateTodo(id: string, todo: Partial<ToDo>): Observable<ToDo> {
    return this.http.put<ToDo>(`${this.apiUrl}/${id}`, todo);
  }

  // Delete a todo
  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Toggle todo active status
  toggleTodo(id: string): Observable<ToDo> {
    return this.http.patch<ToDo>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
