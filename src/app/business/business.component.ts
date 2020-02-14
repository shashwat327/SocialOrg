import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

 
  list: News[];
  list2: News[];
  constructor(private router: Router,private service:NewsService) { }
  goHome() {
    this.router.navigate(['']); 
  }
  
  gotoBigNews(data) {
    this.router.navigate(['sub',{business:data}]); 
  }

  gotoBigNews2(data) {
    this.router.navigate(['sub',{business2:data}]); 
  }
  
  ngOnInit() {
    this.service.getBusiness().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      console.log(JSON.stringify(this.list)); 
   });

   this.service.getBusiness2().subscribe(actionArray => {
    this.list2 = actionArray.map(a => {
      const data = a.payload.doc.data() as News;
      data.id = a.payload.doc.id;
      // console.log(data);
      return data; 
    });
    console.log(JSON.stringify(this.list)); 
 });
}

}
