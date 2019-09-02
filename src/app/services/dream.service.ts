import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { dream } from '../model/dream';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class dreamsService {
  dreamsUrl = 'api/dreams';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('dreamsService');
  }

  /** GET dreams from the server */
  getdreams (): Observable<dream[]> {
    return this.http.get<dream[]>(this.dreamsUrl)
      .pipe(
        catchError(this.handleError('getdreams', []))
      );
  }

  /* GET dreams whose name contains search term */
  searchdreams(term: string): Observable<dream[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('content', term) } : {};

    return this.http.get<dream[]>(this.dreamsUrl, options)
      .pipe(
        catchError(this.handleError<dream[]>('searchdreams', []))
      );
  }

  //////// Save methods //////////

  /** dream: add a new dream to the database */
  adddream (dream: dream): Observable<dream> {
    return this.http.post<dream>(this.dreamsUrl, dream, httpOptions)
      .pipe(
        catchError(this.handleError('adddream', dream))
      );
  }

  /** DELETE: delete the dream from the server */
  deletedream (id: number): Observable<{}> {
    const url = `${this.dreamsUrl}/${id}`; // DELETE api/dreams/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletedream'))
      );
  }

  /** PUT: update the dream on the server. Returns the updated dream upon success. */
  updatedream (dream: dream): Observable<dream> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<dream>(this.dreamsUrl, dream, httpOptions)
      .pipe(
        catchError(this.handleError('updatedream', dream))
      );
  }
}