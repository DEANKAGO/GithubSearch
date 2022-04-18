import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './Directives/custom-directive.directive';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './components/repos/repos.component';
import {FormsModule} from '@angular/forms';
import { GitPipe } from './pipes/git.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    MainComponent,
    ReposComponent,
    GitPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
