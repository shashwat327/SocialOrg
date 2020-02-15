import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

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


 

  constructor() { }
 
  ngOnInit() {
   this.dob= localStorage.getItem("dob");
   this.mob= localStorage.getItem("mobile");
   this.email= localStorage.getItem("email");
    this.city= localStorage.getItem("city");
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

}
