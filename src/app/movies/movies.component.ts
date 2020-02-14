import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  list: News[];
  list2: News[];
  constructor(private router: Router,private service:NewsService) { }
  goHome() {
    this.router.navigate(['']); 
  }

  gotoBigNews(data) {
    this.router.navigate(['sub',{movies:data}]);  
  }
  gotoBigNews2(data) {
    this.router.navigate(['sub',{movies2:data}]);  
  }
  
  ngOnInit() {
    this.service.getMovies().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        // console.log(data);
        return data; 
      });
      // console.log(JSON.stringify(this.list)); 
   });


   this.service.getMovies2().subscribe(actionArray => {
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
