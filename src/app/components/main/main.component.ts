import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/classes/users';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // @Input() userProfile: Users

  searchInput: any={}
  profile=new Users("", "", "", 0, 0, "")

  submitInput(name: string){
    this.searchInput.name= name
    // console.log(this.searchInput)
    this.usersService.getUserInfo(this.searchInput.name)
    this.profile=this.usersService.githubUser
    console.log(this.profile)

  }

  


  constructor(private usersService: UsersService) {
    this.profile.userName=""
  }

  public searchUser(){}


  

  


  ngOnInit(): void {
    this.usersService.getUserInfo("deankago")
    this.profile=this.usersService.githubUser

  }

}


