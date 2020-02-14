import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  list: News[];
  list2: News[];
  constructor(private router: Router,private service:NewsService) { }
  goHome() {
    this.router.navigate(['']); 
  }
  gotoWorld() {
    this.router.navigate(['world']); 
  }
  gotoBigNews(data) {
    this.router.navigate(['sub',{world:data}]);
  }
  gotoBigNews2(data) {
    this.router.navigate(['sub',{world2:data}]);
  }
  
  ngOnInit() {
    this.service.getWorld().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      // console.log(JSON.stringify(this.list)); 
   });

   this.service.getWorld2().subscribe(actionArray => {
    this.list2 = actionArray.map(a => {
      const data = a.payload.doc.data() as News;
      data.id = a.payload.doc.id;
      // console.log(data);
      return data; 
    });
    // console.log(JSON.stringify(this.list)); 
 });
}

}
