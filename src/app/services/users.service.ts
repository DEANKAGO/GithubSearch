import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private username: string;
  private clientid = "3c69cc3dfb84ec9fc7e4";
  private clientsecret = "6e5f0e51d8d70dca92b3868f643ee1fe4d72dbac";
  map: any;

  constructor(private http: HttpClient) { 
    console.log("service is now ready!");
    this .username= "deankago";
  }

  myMap = new Map();

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
    this.map((res: { json: () => any; }) => res.json());
  }
}
