import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  activeroute: any;
  welcome: any;
  
  constructor(private router:Router) { }

  ngOnInit()

  {
 
  }
  addfavs():void{
    this.router.navigate(['/hasfavs'])
  }

  }
  
  

