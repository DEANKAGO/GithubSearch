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
  


  getUserInfo(search: string){
    return new Promise((resolve,reject)=>{
      this.httpClient.get("https://api.github.com/users/"+search+"?access_key="+environment.apiKey).toPromise().then((res)=>{
        console.log(res)
        resolve(res)
      }).catch((e)=>{console.log(e);reject(e)})
    })
    // return new Promise<void>((resolve,reject)=>{
    //   this.httpClient.get<any>("https://api.github.com/users/"+search+"?access_key="+environment.apiKey).toPromise().then(response=>{
      
    //   this.githubUser.userName= response.login
    //   this.githubUser.avatar=response.avatar_url
    //   this.githubUser.bio=response.bio
    //   this.githubUser.t(followers=response.followers
    //   this.githubUser.following=response.following
    //   this.githubUser.home=response.html_url
    //   this.githubUser.date=response.created_at

    //   console.log(this.githubUser)
  
    //     resolve()
    //   },
    //   error=>{
    //     reject(error)
    //   })

    //   this.httpClient.get<any>("https://api.github.com/users/"+search+"/repos?access_key="+environment.apiKey).toPromise().then(response=>{
    //     for(let repo of response){
    //       let repository = new Repos("", "", "", 0, new Date())
    //       repository.name=repo.name;
    //       repository.description=repo.description;
    //       repository.home=repo.html_url;
    //       repository.fork=repo.forks
    //       repository.date=repo.created_at
    //       this.repos.push(repository)
          
          
    //     }
    //     resolve()
    //     // console.log(this.repos)


    //   },error=>{
    //     reject(error)
    //   })
      


    // })

  }

 
  


  constructor(private httpClient: HttpClient) { 
    // this.githubUser=new Users("", "", "", 0, 0, "", new Date())


  }

}
