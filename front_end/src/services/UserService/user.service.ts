import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserDto} from "../../model/UserDto";
import {catchError, Observable, retry, throwError} from "rxjs";
import {SignUpRequest} from "../../model/SignUpRequest";
import {SignInRequest} from "../../model/SignInRequest";

class UtenteDto {
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<UserDto[]> {
    return this.http.get<UserDto[]>('http://localhost:8080/api/user/').pipe(
      retry(3),
      catchError(this.handleError))
  }

  getUserByEmail(email : string) : Observable<UserDto> {
    return this.http.get<UserDto>('http://localhost:8080/api/user/' + email).pipe(
      retry(3),
      catchError(this.handleError))
  }

  signIn(user : SignInRequest) : Observable<string> {
    return this.http.post<string>('http://localhost:8080/api/user/login', user).pipe(
      catchError(this.handleError))
  }

  signUp(user : SignUpRequest) : Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/user/signup', user).pipe(
      catchError(this.handleError))
  }

  subscribe(idUser : number, idCourse : number) : Observable<void> {
    return this.http.put<void>('http://localhost:8080/api/user/' + idUser.toString() +'/course/' + idCourse.toString() +'/subscribe', idUser).pipe(
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
