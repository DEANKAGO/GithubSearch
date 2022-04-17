import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username!: string;
  private clientid = "3c69cc3dfb84ec9fc7e4";
  private clientsecret = "6e5f0e51d8d70dca92b3868f643ee1fe4d72dbac";
 
  getUserInfo(search: any){
    let dataUrl = 'https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.clientsecret';
  }

  constructor(private httpClient: HttpClient) { 
    console.log('working');
    this.username
  }

  // myMap = new Map();

//   getUserInfo(){
//     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
//     this.map((res: { json: () => any; }) => res.json());
//   }
// }
// ``
}