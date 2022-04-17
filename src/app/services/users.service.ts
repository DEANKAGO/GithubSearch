import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CLIENT_ID } from '../credentials/githubCred';
import { CLIENT_SECRET } from '../credentials/githubCred';
import { count } from 'console';
import * as e from 'cors';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  public getUserInfo(search: any): Observable<any>{
    let dataUrl = 'https://api.github.com/users/${search}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}';
    console.log('it works')
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(),
      catchError(this.handleErrors)
    )
  }

  public handleErrors (error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      errorMessage = 'MESSAGE : ${error.error.message}';
    }
    else{
      errorMessage = 'STATUS : ${error.status} MESSAGE : ${error.message}';
    }
    return throwError(errorMessage)
  }



  constructor(private httpClient: HttpClient) { }

}
