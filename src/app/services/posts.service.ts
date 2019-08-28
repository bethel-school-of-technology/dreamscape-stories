import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { post } from '../model/post';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class postsService {
  postsUrl = 'api/posts';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('postsService');
  }

  /** GET posts from the server */
  getPosts (): Observable<post[]> {
    return this.http.get<post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }

  /* GET posts whose name contains search term */
  searchPosts(term: string): Observable<post[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('content', term) } : {};

    return this.http.get<post[]>(this.postsUrl, options)
      .pipe(
        catchError(this.handleError<post[]>('searchPosts', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new post to the database */
  addPost (Post: post): Observable<post> {
    return this.http.post<post>(this.postsUrl, Post, httpOptions)
      .pipe(
        catchError(this.handleError('addPost', Post))
      );
  }

  /** DELETE: delete the post from the server */
  deletePost (id: number): Observable<{}> {
    const url = `${this.postsUrl}/${id}`; // DELETE api/posts/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletePost'))
      );
  }

  /** PUT: update the post on the server. Returns the updated post upon success. */
  updatePost (Post: post): Observable<post> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<post>(this.postsUrl, Post, httpOptions)
      .pipe(
        catchError(this.handleError('updatePost', Post))
      );
  }
}