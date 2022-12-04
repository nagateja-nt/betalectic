import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addfavorite',
  templateUrl: './addfavorite.component.html',
  styleUrls: ['./addfavorite.component.css']
})
export class AddfavoriteComponent implements OnInit {
  
  

  constructor(private router:Router) { }

  ngOnInit(){}
  submit():void{
    this.router.navigate(['/welcome']);
  
  }

   }
  
  
