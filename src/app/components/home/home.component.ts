import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/classes/repos';
import { Users } from 'src/app/classes/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile=<Users>{}
  repos = [] as Repos[] 

  constructor(private usersService: UsersService) {
    this.profile.userName=""
  }

  
  ngOnInit(): void {
    this.usersService.getUserInfo("deankago")
    this.profile=this.usersService.githubUser
    this.repos=this.usersService.repos

  }


}
