import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule,Routes } from '@angular/router';
import { HasfavsComponent } from './hasfavs/hasfavs.component';
import { AppRoutingModule } from './app-routing.module';
import { AddfavoriteComponent } from './welcome/addfavorite/addfavorite.component';

const routes:Routes=[{path:' ',component:AddfavoriteComponent},{path:'welcome',component:WelcomeComponent},{path:'hasfavs',component:HasfavsComponent}]

@NgModule({
  declarations:( [
    AppComponent,
    AddfavoriteComponent,
    WelcomeComponent,
    HasfavsComponent, 
  ]),
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
