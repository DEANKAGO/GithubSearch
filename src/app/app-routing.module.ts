import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{path:"home", component:HomeComponent}, {path:"", redirectTo:"/home", pathMatch:"full"}, {path:"search",component:MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
