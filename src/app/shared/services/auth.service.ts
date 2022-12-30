import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private OAUTH_CLIENT: string
  private OAUTH_SECRET: string
  private API_URL: string
  public redirectUrl = ''
  private HTTP_OPTIONS: Object

  constructor(private http: HttpClient, private tokenService: TokenService) { 
    this.OAUTH_CLIENT = 'express-client'
    this.OAUTH_SECRET = 'express-secret'
    this.API_URL = 'http://localhost:3000/'
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic' + btoa(this.OAUTH_CLIENT + ':' + this.OAUTH_SECRET)
      })
    }  
  }

  public login(loginData: any): Observable<any> {
    this.tokenService.removeToken()
    this.tokenService.removeRefreshToken()
    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password)
      .set('grant-type', 'password')
    
    return this.http.post<any>(this.API_URL + 'oauth/token', body, this.HTTP_OPTIONS)
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res.access_token)
          this.tokenService.saveRefreshToken(res.refresh_token)
        }),
        catchError(AuthService.handleError)
      )
  }

  public refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken()
    this.tokenService.removeRefreshToken()
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant-type', 'refresh_token')
    
    return this.http.post<any>(this.API_URL + 'oauth/token', body, this.HTTP_OPTIONS)
      .pipe(
        tap(res =>{
          this.tokenService.saveToken(res.access_token)
          this.tokenService.saveRefreshToken(res.refresh_token)
        }),
        catchError(AuthService.handleError)
      )
  }

  logout(): void {
    this.tokenService.removeToken()
    this.tokenService.removeRefreshToken()
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'oauth/signup', data)
      .pipe(
        tap(_ => AuthService.log('register')),
        catchError(AuthService.handleError)
      )
  }

  secured():Observable<any> {
    return this.http.get<any>(this.API_URL + 'secret')
      .pipe(catchError(AuthService.handleError))
  }

  private static handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message)
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }

  private static log(message: string): void {
    console.log(message)
  }

}
