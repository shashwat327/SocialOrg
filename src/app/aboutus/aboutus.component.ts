import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 
  testform:FormGroup;
  imageUploadUrl: any;

    constructor(private router: Router, 
    private formBuilder:FormBuilder, 
    private firestore: AngularFirestore,
    private ngxService: NgxUiLoaderService,
    private afStorage: AngularFireStorage,) { }

  ngOnInit() {

    this.testform=this.formBuilder.group({

      firstname: new FormControl("",Validators.required),
      lastname: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      mbno: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      date: new FormControl("",Validators.required),
      city: new FormControl("",Validators.required),
      country: new FormControl("",Validators.required),
      address: new FormControl("",Validators.required),  
      })
  }

  submitform(value){
    this.ngxService.start();
    if(this.imageUploadUrl){
      value.imgUpload = this.imageUploadUrl;
    }else{
      value.imgUpload = "";
    }
    this.firestore.collection('registration').add(value);
    this.ngxService.stop();
  }

  upload(event) {
    this.ngxService.start();
    const randomId = Math.random().toString(36).substring(2);
    this.afStorage.upload("HelpChild/" + event.target.files[0].name + randomId, event.target.files[0]).then(rst => {
      rst.ref.getDownloadURL().then(url => {
        console.log(url);

        this.imageUploadUrl = url;
        this.ngxService.stop();
        
      })
    })
  }

  gotoHome(){
    this.router.navigate(['']);
  }
}
