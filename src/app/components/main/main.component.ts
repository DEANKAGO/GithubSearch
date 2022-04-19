import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repos } from 'src/app/classes/repos';
import { Users } from 'src/app/classes/users';
import { UsersService } from 'src/app/services/users.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  searchInput: any={}
  profile=<Users>{}
  repos:Array<Repos>= []
  isEmpty= true

  async submitInput(name: string, myForm: NgForm){
    try{
      
      this.repos.length=0
    this.searchInput.name= name
    // console.log(this.searchInput)
    await this.usersService.getUserInfo(this.searchInput.name)
    this.profile=this.usersService.githubUser
    // console.log(this.profile)
    this.repos=this.usersService.repos
    this.isEmpty=false
    myForm.reset()
    }catch(e){
      console.log("Hei I coutch an Error: ",e)
    }

  }



  


  constructor(private usersService: UsersService) {
    this.profile.userName=""
  }

  public searchUser(){}


  

  


  ngOnInit(): void {
    // this.usersService.getUserInfo("deankago")
    // this.profile=this.usersService.githubUser

  }

}


function newDate(): any {
  throw new Error('Function not implemented.');
}

