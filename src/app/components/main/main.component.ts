import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchInput={}
  submitInput(name: string){}

  


  constructor(private usersService: UsersService) {}

  public searchUser(){
  }


  

  


  ngOnInit(): void {
  }

}


