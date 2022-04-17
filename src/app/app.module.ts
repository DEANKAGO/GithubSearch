import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './Directives/custom-directive.directive';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    MainComponent,
    ProfileComponent,
    ReposComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
