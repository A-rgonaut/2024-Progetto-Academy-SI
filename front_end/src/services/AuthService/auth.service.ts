import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {UserDto} from "../../model/UserDto";
import {SignInRequest} from "../../model/SignInRequest";
import {SignUpRequest} from "../../model/SignUpRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email : string) : Observable<UserDto> {
    return this.http.get<UserDto>('http://localhost:8080/api/auth/' + email).pipe(
      retry(3),
      catchError(this.handleError))
  }

  signIn(user : SignInRequest) : Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/auth/signin', user).pipe(
      catchError(this.handleError))
  }

  signUp(user : SignUpRequest) : Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/auth/signup', user).pipe(
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
