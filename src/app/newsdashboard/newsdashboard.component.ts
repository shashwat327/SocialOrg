import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from 'angularfire/storage';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-newsdashboard',
  templateUrl: './newsdashboard.component.html',
  styleUrls: ['./newsdashboard.component.css']
})
export class NewsdashboardComponent implements OnInit {
  // storageRef: AngularFireStorageReference;
  newsform:FormGroup;

  // ref: any;
  // task: any;
  // uploadProgress: any;
  // downloadURL: any;
  imageUploadUrl: any;
  shashwat:any;
  selected:any;

  constructor(
               private router: Router, 
               private elementRef: ElementRef,
               private formBuilder:FormBuilder, 
               private firestore: AngularFirestore,
               private afStorage: AngularFireStorage,
               private ngxService: NgxUiLoaderService
             ) { }

 
  // ngAfterViewInit(){
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "white";
  // }

  ngOnInit() {

this.newsform=this.formBuilder.group({

category: new FormControl("",Validators.required),
subcategory: new FormControl("",Validators.required),
headline: new FormControl("",Validators.required),
description: new FormControl("",Validators.required),
paragraph: new FormControl("",Validators.required),
dateTime: new FormControl("",Validators.required),

})
if(sessionStorage.getItem("auth")=="success"){
  console.log("insideif");
}
    else{
      console.log("insideelse");
      this.router.navigate(['form']);
      
    }
}

goHome() {
sessionStorage.setItem("auth","");
  this.router.navigate(['']);
}

  submitform(value){
    // console.log(value);
    // console.log(value.dateTime);

    if(value.category==="India" ){
      if(value.subcategory==="Top News")
      {
      this.ngxService.start();

      if(this.imageUploadUrl){
        value.imgUpload = this.imageUploadUrl;
      }else{
        value.imgUpload = "";
      }
    
     this.firestore.collection('india').add(value);
      this.ngxService.stop();
    }
    else{
      
      this.ngxService.start();

      if(this.imageUploadUrl){
        value.imgUpload = this.imageUploadUrl;
      }else{
        value.imgUpload = "";
      }
    
     this.firestore.collection('india2').add(value);
      this.ngxService.stop();

    }
  
 }else if (value.category==="World"){
  if(value.subcategory==="Top News")
  {
  this.ngxService.start();

  if(this.imageUploadUrl){
    value.imgUpload = this.imageUploadUrl;
  }else{
    value.imgUpload = "";
  }

 this.firestore.collection('world').add(value);
  this.ngxService.stop();
}
else{
  
  this.ngxService.start();

  if(this.imageUploadUrl){
    value.imgUpload = this.imageUploadUrl;
  }else{
    value.imgUpload = "";
  }

 this.firestore.collection('world2').add(value);
  this.ngxService.stop();

}
  }else if (value.category==="Sports"){
    if(value.subcategory==="Top News")
    {
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('sports').add(value);
    this.ngxService.stop();
  }
  else{
    
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('sports2').add(value);
    this.ngxService.stop();
  
  }
  }else if (value.category==="Movies"){
    if(value.subcategory==="Top News")
    {
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('movies').add(value);
    this.ngxService.stop();
  }
  else{
    
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('movies2').add(value);
    this.ngxService.stop();
   }
                  
  }else if (value.category==="Business"){
    if(value.subcategory==="Top News")
    {
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('business').add(value);
    this.ngxService.stop();
  }
  else{
    
    this.ngxService.start();
  
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
  
   this.firestore.collection('business2').add(value);
    this.ngxService.stop();
   }
                  
  }
  }
  
        // onSelect(Element){
        //                      console.log(Element);
        //                      // console.log(this.shashwat)
        //                  } 



    upload(event) {
      this.ngxService.start();
      // const randomId = Math.random().toString(36).substring(2);
      // this.ref = this.afStorage.ref(randomId);
      // this.task = this.ref.put(event.target.files[0]).downloadURL();
      // this.uploadProgress = this.task.percentageChanges();
      // // this.downloadURL = this.task.downloadURL();
      // this.task.snapshotChanges().pipe(
      //   finalize(() => {
      //     this.downloadURL = this.ref.getDownloadURL(); // <-- Here the downloadURL is available.
      //   })
      // ).subscribe();customElements
      // console.log(this.downloadURL);
      const randomId = Math.random().toString(36).substring(2);
      this.afStorage.upload("news/"+ event.target.files[0].name+randomId, event.target.files[0]).then(rst => {
        rst.ref.getDownloadURL().then(url => {
          console.log(url);

          this.imageUploadUrl= url;
          this.ngxService.stop();
          
        })
      })
    }

    // uploadImage(base64data) {

    //   const filePath = (`myURL/photo.jpg`);
    //   //const storageRef = firebase.storage().ref();
    
    //   var metadata = {
    //     contentType: 'image',
    //     cacheControl: "public, max-age=31536000",
    //   };
    
    //   const ref = this.afStorage.ref('new/');
    //   const task = ref.putString(base64data, 'data_url', metadata);
    //   const downloadURL = task.downloadURL();
    
    //   downloadURL.subscribe(url=>{
    //      if(url){
    //          console.log(url);
    //          //wirte the url to firestore
    //      }
    //   })
    
    // }

}
