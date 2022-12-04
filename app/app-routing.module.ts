import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome/welcome.component';
import { HasfavsComponent } from './hasfavs/hasfavs.component';
import { AddfavoriteComponent } from './welcome/addfavorite/addfavorite.component';

const routes:Routes=[{path:'',component:AddfavoriteComponent},
{path:'welcome',component:WelcomeComponent},{path:'hasfavs',component:HasfavsComponent}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
