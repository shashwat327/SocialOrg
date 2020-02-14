import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  list: News[];
  list2: News[];
  constructor(private router: Router, private service:NewsService) { }

  goHome() {
    this.router.navigate(['']); 
  }
  gotoIndia() {
    this.router.navigate(['india']); 
  }
  gotoBigNews(data) {
    // console.log(data);
    this.router.navigate(['sub',{india:data}]); 
  }

  gotoBigNews2(data) {
    // console.log(data);
    this.router.navigate(['sub',{india2:data}]); 
  }
  
  ngOnInit() {

    this.service.getIndia().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      // console.log(JSON.stringify(this.list)); 
   });

   this.service.getIndia2().subscribe(actionArray => {
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
