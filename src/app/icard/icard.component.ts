import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-icard',
  templateUrl: './icard.component.html',
  styleUrls: ['./icard.component.css']
})
export class IcardComponent implements OnInit {


 

  constructor() { }

  ngOnInit() {
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
