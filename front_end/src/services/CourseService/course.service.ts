import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CourseDto} from "../../model/CourseDto";
import {catchError, Observable, retry, throwError} from "rxjs";
import {AddCourseRequest} from "../../model/AddCourseRequest";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>('http://localhost:8080/api/course/').pipe(
      retry(3),
      catchError(this.handleError))
  }

  add(course : AddCourseRequest) : Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/course/add', course).pipe(
      retry(3),
      catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
