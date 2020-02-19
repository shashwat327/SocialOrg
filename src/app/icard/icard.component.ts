import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-icard',
  templateUrl: './icard.component.html',
  styleUrls: ['./icard.component.css']
})
export class IcardComponent implements OnInit {
  dob: string;
  mob: string;
  email: string;
  city: string;
  firstname: string;
  lastname: string;
  image: SafeResourceUrl;
  images: string;
  id: string;
  

  constructor(private domSanitizer: DomSanitizer, private router: Router) { }
 
  ngOnInit() {
    this.id = localStorage.getItem("id");
    this.images=localStorage.getItem("imageShow");
    // console.log(this.images); 
    this.image =this.domSanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.images);
    // console.log(this.image); 
    this.dob= localStorage.getItem("dob");
    this.mob= localStorage.getItem("mobile");
    this.email= localStorage.getItem("email");
    this.city= localStorage.getItem("city");
    this.firstname= localStorage.getItem("firstname");
    this.lastname= localStorage.getItem("lastname");

  }
 
  downloadImage(){
    // let element = document.querySelector("#capture");
    html2canvas(document.getElementById('capture')).then(function(canvas) {
        // Convert the canvas to blob
        canvas.toBlob(function(blob){
            // To download directly on browser default 'downloads' location
            let link = document.createElement("a");
            link.download = "image.png";
            link.href = URL.createObjectURL(blob);
            link.click();

            // To save manually somewhere in file explorer
            // window.saveAs(blob, 'image.png');

        },'image/png');
    });
}
gotoHome(){
  this.router.navigate(['']);
}
}
