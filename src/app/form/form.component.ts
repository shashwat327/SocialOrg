import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  email: string;
  password:string;
  constructor(   private router: Router, 
                 private service:ConnectionService,
                 private ngxService: NgxUiLoaderService) { }
  goHome() {
    this.router.navigate(['']); 
  }
  gotoNewsDashboard() {
    this.router.navigate(['dashboard']); 
  }
  ngOnInit() {


  }

  login(){
    this.ngxService.start();
    this.service.gotoLogin(this.email, this.password);
    this.email=this.password='';
    this.ngxService.stop();
  }

}
