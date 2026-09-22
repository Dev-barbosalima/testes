import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseApiHttp {
  constructor(private _httpClient: HttpClient) {
  }

  public GetTaskById(id: number): Observable<{ titulo: string; descricao: string; id: number; status: string; }> {
    throw new Error('Method not implemented.');
  }

  public UpdateTaskById(id: number, task: { titulo: string; descricao: string; id: number; status: string; }): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public DeleteTaskById(id: number): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public AddTask(title: string, description: string): Observable<{
    titulo: string,
    descricao: string,
    id: number,
    status: string
  }> {
    throw new Error('Method not implemented.');
  }
}
