import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { post } from '../model/post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  getPosts(): Observable<post[]> {
    return this.http.get<post[]>(apiUrl)
      .pipe(
        tap(post => console.log('fetched posts')),
        catchError(this.handleError('getposts', []))
      );
  }
  
  getpost(id: number): Observable<post> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<post>(url).pipe(
      tap(_ => console.log(`fetched post id=${id}`)),
      catchError(this.handleError<post>(`getpost id=${id}`))
    );
  }
  
  addpost(post: post): Observable<post> {
    return this.http.post<post>(apiUrl, post, httpOptions).pipe(
      tap((art: post) => console.log(`added post w/ id=${art.id}`)),
      catchError(this.handleError<post>('addpost'))
    );
  }
  
  updatepost(id: any, post: post): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => console.log(`updated post id=${id}`)),
      catchError(this.handleError<any>('updatepost'))
    );
  }
  
  deletepost(id: any): Observable<post> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<post>('deletepost'))
    );
  }
}
