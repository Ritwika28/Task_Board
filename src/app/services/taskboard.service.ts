import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { of, forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskboardService {
  constructor(private http: HttpClient) {}

  getToDoCheckList(limit: number): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.http
      .get<any>(`https://dummyjson.com/todos`, {
        observe: 'response',
        params: params,
      })
      .pipe(
        map((res) => res.body),
        catchError((error) => of(error.url))
      );
  }
}
