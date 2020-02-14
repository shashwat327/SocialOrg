import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  

  constructor(    private router: Router){}
    
  ngOnInit() {
    
  }

  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  gotoregisterForm(){
    this.router.navigate(['aboutus']);
  }
}
