import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  list: News[];
  list2: News[];
  constructor(private router: Router, private service:NewsService) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoSports() {
    this.router.navigate(['sports']); 
  }
  gotoBigNews(data) {
    this.router.navigate(['sub',{sports:data}]); 
  }
  gotoBigNews2(data) {
    this.router.navigate(['sub',{sports2:data}]); 
  }
  
  ngOnInit() {
    this.service.getSports().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      // console.log(JSON.stringify(this.list)); 
   });

   this.service.getSports2().subscribe(actionArray => {
    this.list2 = actionArray.map(a => {
      const data = a.payload.doc.data() as News;
      data.id = a.payload.doc.id;
      // console.log(data);
      return data; 
    });
    // console.log(JSON.stringify(this.list2)); 
 });


  }
}
