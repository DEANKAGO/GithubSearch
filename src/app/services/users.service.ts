import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Users } from '../classes/users';
import { Repos } from '../classes/repos';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  githubUser=<Users>{}
  repos:Array<Repos>= []

  constructor(private httpClient: HttpClient) { 
    // this.githubUser=new Users("", "", "", 0, 0, "", new Date())
  }
  


  getUserInfo(search: string){
    return new Promise((resolve,reject)=>{
      this.httpClient.get<any>("https://api.github.com/users/"+search+"?access_key="+environment.apiKey).toPromise().then((res)=>{
        console.log(res)
        this.githubUser.userName= res.login
        this.githubUser.avatar=res.avatar_url
        this.githubUser.bio=res.bio
        this.githubUser.followers=res.followers
        this.githubUser.following=res.following
        this.githubUser.home=res.html_url
        this.githubUser.date=res.created_at
  
        resolve(res)
      }).catch((e)=>{console.log(e);reject(e)})
      this.httpClient.get<any>("https://api.github.com/users/"+search+"/repos?access_key="+environment.apiKey).toPromise().then(res=>{
        for(let repo of res){
          let repository = new Repos("", "", "", 0, new Date())
          repository.name=repo.name;
          repository.description=repo.description;
          repository.home=repo.html_url;
          repository.fork=repo.forks
          repository.date=repo.created_at
          this.repos.push(repository)
          resolve(res)
        }  
      }).catch((e)=>{console.log(e);reject(e)})
      
    

      console.log(this.githubUser)
      }

      


    )

  }


 
  


  


  

}
