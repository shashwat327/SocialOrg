import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
 
  testform:FormGroup;
  imageUploadUrl: any;
  list: any[];
  base64textString: string;
  imageShow: string;
  digits: any;

    constructor(private router: Router, 
    private formBuilder:FormBuilder, 
    private firestore: AngularFirestore,
    private ngxService: NgxUiLoaderService,
    private afStorage: AngularFireStorage,
    private service:NewsService) { }

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
//   private String toDate(long timestamp) {
//     Date date = new Date(timestamp * 1000);
//     return new SimpleDateFormat("yyyy-MM-dd").format(date);
// }

  submitform(value){
    // this.imageShow="'data:image/jpg;base64,'"+this.base64textString;
    this.imageShow=this.base64textString;
    localStorage.setItem("imageShow",this.imageShow); 
    localStorage.setItem("dob",value.date)
    localStorage.setItem("mobile",value.mbno);
    localStorage.setItem("email",value.email);
    localStorage.setItem("city",value.city);
    localStorage.setItem("firstname",value.firstname);
    localStorage.setItem("lastname",value.lastname);
    this.digits = Math.floor(Math.random() * 9000000000) + 1000000000;
    localStorage.setItem("id",this.digits );

    this.ngxService.start();
    // if(this.imageUploadUrl){
    //   value.imgUpload = this.imageShow;
    // }else{
    //   value.imgUpload = "";
    // }

    this.firestore.collection('registration').add(value);
    this.ngxService.stop();
    this.router.navigate(['icard']);
  }


  getloginData(){

    this.service.getData().subscribe(actionArray => {
      this.list = actionArray.map(a => {
        const data = a.payload.doc.data() as News;
        data.id = a.payload.doc.id;
        console.log(data);
        return data; 
      });
      console.log(JSON.stringify(this.list)); 
   });
  }

  upload(event) {
    this.ngxService.start();
    console.log("inside");

        var files = event.target.files;
        var file = files[0];

        if (files && file) {
             var reader = new FileReader();
             reader.onload =this.handleFile.bind(this);
             reader.readAsBinaryString(file);
    // const randomId = Math.random().toString(36).substring(2);
    // this.afStorage.upload("HelpChild/" + event.target.files[0].name + randomId, event.target.files[0]).then(rst => {
    //   rst.ref.getDownloadURL().then(url => {
    //     console.log(url);

    //     this.imageUploadUrl = url;
        this.ngxService.stop();
        
      // })
    }
  }

  
  handleFile(event) {
    var binaryString = event.target.result;
           this.base64textString= btoa(binaryString);
           console.log(btoa(binaryString));
           console.log(  this.base64textString);
   }


  
  gotoHome(){
    this.router.navigate(['']);
  }
 
}
