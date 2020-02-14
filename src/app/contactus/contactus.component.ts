import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactform:FormGroup;

  constructor(  private router: Router, 
                private formBuilder:FormBuilder, 
                private firestore: AngularFirestore,
                private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.contactform=this.formBuilder.group({

      name: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      message: new FormControl("",Validators.required),
      })
  }

  submitform(value){
    this.ngxService.start();
    this.firestore.collection('contacts').add(value);
    this.ngxService.stop();

  }
  
}
