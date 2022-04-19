import { Component, Input, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Repos } from 'src/app/classes/repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})


export class ReposComponent implements OnInit {
  @Input() repos:Array<Repos>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
