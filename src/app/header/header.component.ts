import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoIndia() {
    this.router.navigate(['india']); 
  }
  gotoWorld(){
    this.router.navigate(['world']);
  }
  gotoForm() {
    this.router.navigate(['form']); 
  }
  gotoSports() {
    this.router.navigate(['sports']); 
  }
  gotoMovies() {
    this.router.navigate(['movies']); 
  }
  gotoBusiness() {
    this.router.navigate(['business']); 
  }
  gotoContactUs(){
    this.router.navigate(['contact']); 
  }
  gotoAboutus(){
    this.router.navigate(['aboutus']); 
  }
  ngOnInit() {
    
  }

}
