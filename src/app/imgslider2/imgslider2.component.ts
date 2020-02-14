import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-imgslider2',
  templateUrl: './imgslider2.component.html',
  styleUrls: ['./imgslider2.component.css']
})
export class Imgslider2Component implements OnInit {

  ngOnInit(){ }
  
  @ViewChild('nav', {static: false}) ds: NgImageSliderComponent;
  title = 'Ng Image Slider';
  showSlider = true;

  sliderWidth: Number =810;
  sliderImageWidth: Number = 270;
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
  }

  onChangeHandler() {
      this.setImageObject();
      this.showSlider = false;
      setTimeout(() => {
          this.showSlider = true;
      }, 10);
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
