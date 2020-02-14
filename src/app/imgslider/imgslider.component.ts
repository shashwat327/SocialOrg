import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.css']
})
export class ImgsliderComponent implements OnInit {
  scrHeight:any;
  scrWidth:any;
  sliderWidth:any;
  sliderImageWidth: number;
  ngOnInit(){ 


  }

  

  @ViewChild('nav', {static: false}) ds: NgImageSliderComponent;
  title = 'Ng Image Slider';
  showSlider = true;

  //  sliderWidth: Number = 1100;
  
  // sliderImageWidth: Number = 270;
  sliderImageHeight: Number = 200;
  sliderArrowShow: Boolean = true;
  sliderInfinite: Boolean = false;
  sliderImagePopup: Boolean = true;
  sliderAutoSlide: Boolean = false;
  sliderSlideImage: Number = 1;
  sliderAnimationSpeed: any = 1;
  imageObject: Array<object> = [];

  constructor() {
      this.setImageObject();
      this.getScreenSize();
  }
  

  onChangeHandler() {
      this.setImageObject();
      this.showSlider = false;
      setTimeout(() => {
          this.showSlider = true;
      }, 10);
  }



  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight.typeOf, this.scrWidth);
        this.scrWidth>992 && this.scrWidth<1999
        if(this.scrWidth>1200)
        {
          console.log(">1200");
          this.sliderWidth = 1100;
          this.sliderImageWidth = 270;
        }else if (this.scrWidth>992 && this.scrWidth<1999){
          console.log("992to1999");
          this.sliderImageWidth = 350;
          this.sliderWidth = 1050;
        }else if (this.scrWidth>768 && this.scrWidth<991){
          console.log("768to991");
          this.sliderImageWidth = 290;
          this.sliderWidth = 875;
        }else if  ( this.scrWidth> 601 && this.scrWidth<767){
          console.log("601to767");
          this.sliderImageWidth =345;
          this.sliderWidth = 700;
        }else if  ( this.scrWidth<600){
          console.log("<600");
          this.sliderImageWidth = 390;
          this.sliderWidth = 390;
        }
  
      }



  setImageObject() {
      this.imageObject = [{
          video: 'https://youtu.be/tYa6OLQHrEc',
          title: 'Youtube example one with title.',
          alt: 'youtube video'
      }, {
          video: 'https://youtu.be/6pxRHBw-k8M',
          alt: 'youtube video'
      }, {
        video: 'https://youtu.be/tYa6OLQHrEc',
        title: 'Youtube example one with title.',
        alt: 'youtube video'
      },  {
          image: 'assets/img/firstimage.jpg',
          thumbImage: 'assets/img/firstimage.jpg',
          title: 'image five'
      }, {
        image: 'assets/img/secondimage.jpg',
        thumbImage: 'assets/img/secondimage.jpg',
        title: 'image five'
      }, {
        image: 'assets/img/thirdimage.jpg',
        thumbImage: 'assets/img/thirdimage.jpg',
        title: 'image five'
      }, {
        image: 'assets/img/fourthimage.jpg',
        thumbImage: 'assets/img/fourthimage.jpg',
        title: 'image five'
      }, {
        image: 'assets/img/black-bg.jpg',
        thumbImage: 'assets/img/black-bg.jpg',
        title: 'image five'
      }];
  }

  imageOnClick(index) {
      console.log('index', index);
  }

  arrowOnClick(event) {
      console.log('arrow click event', event);
  }

  lightboxArrowClick(event) {
      console.log('popup arrow click', event);
  }

  prevImageClick() {
      this.ds.prev();
  }

  nextImageClick() {
      this.ds.next();
  }
}

