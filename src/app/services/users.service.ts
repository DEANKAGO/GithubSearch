import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Users } from '../classes/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  githubUser: Users
  


  getUserInfo(search: string){
    return new Promise<void>((resolve,reject)=>{
      this.httpClient.get<any>("https://api.github.com/users/"+search+"?access_key="+environment.apiKey).toPromise().then(response=>{
      
      this.githubUser.userName= response.login
      this.githubUser.avatar=response.avatar_url
      this.githubUser.bio=response.bio
      this.githubUser.followers=response.followers
      this.githubUser.following=response.following
      this.githubUser.home=response.html_url
      // console.log(this.githubUser)
  
        resolve()
      },
      error=>{
        reject(error)
      })
    })
  }

 
  


  constructor(private httpClient: HttpClient) { 
    this.githubUser=new Users("", "", "", 0, 0, "")


  }

}
