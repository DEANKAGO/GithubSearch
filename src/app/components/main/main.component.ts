import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public githubUser: string | undefined;
  public githubProfile:any;
  public githubRepos:any[];
  public errorMessage:string;

  


  constructor(private githubService:GithubService) { }

  public searchUser(){
    this.githubService.getProfile(this.githubUser).subscribe((data: any) => {
      this.githubProfile = data;
    }, (error: any)=>{
      this.errorMessage = error;
    })
  }

  ngOnInit(): void {
  }

}
