import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, Validators, } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-brakingnewz',
  templateUrl: './brakingnewz.component.html',
  styleUrls: ['./brakingnewz.component.css']
})



export class BrakingnewzComponent implements OnInit {

  
  
  headform:FormGroup;
  
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  groupList= [];
  list: News[];
  lists: News[];
  listX: News[];
  groupHeadline=[];
  

  
  
  constructor(   private service:NewsService,
                 private router: Router,
                 private route: ActivatedRoute,
                 private formBuilder:FormBuilder, 
                 private firestore: AngularFirestore,
                 private afStorage: AngularFireStorage,
                 private ngxService: NgxUiLoaderService) { }
 
  ngOnInit() {

    this.headform=this.formBuilder.group({

      dropdown: new FormControl("",Validators.required),
     
      })

      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
      
this.getIndia();
this.getWorld();
this.getSports();

}

  onItemSelect(item: any) {
    // console.log(item);
    
      this.groupHeadline.push({ headline: item.item_text });
      // console.log(this.groupHeadline);
    
  }
  onSelectAll(items: any) {
    // console.log(items);
    this.groupHeadline=[];

    for(let i=0; i < items.length; i++) {
      this.groupHeadline.push({  headline: items.item_text });
      // console.log(this.groupHeadline);
    } 
  }

  onItemDeSelect(item:any){
    this.groupHeadline.splice(item.item_text, 1);
    // console.log(this.groupHeadline);
  }

  onItemDeSelectAll(item:any){
    this.groupHeadline=[];
    // console.log(this.groupHeadline);
  }

  submitform(value)
    {

      console.log(value);
      console.log(this.groupHeadline);
       this.ngxService.start();
       let JSON = { headlinebrak:this.groupHeadline}
       this.firestore.collection('breaknewz').add(JSON);
       console.log(JSON);
       this.ngxService.stop();
    }

   


getIndia()
     {
        this.service.getIndia().subscribe(actionArray => {
          this.list = actionArray.map(a => {
            const data = a.payload.doc.data() as News;
            data.id = a.payload.doc.id;
            // console.log(data);
            return data; 
          });
          // console.log(JSON.stringify(this.list)); 
      for(let i=0; i < this.list.length; i++) {
        this.groupList.push({ item_id: i+1, item_text: this.list[i].headline });
      }
      // this.dropdownList =   this.groupList;

      //  console.log(JSON.stringify(this.groupList)); 
       })
      }

      getWorld()
       {
        this.service.getWorld().subscribe(actionArray => {
          this.lists = actionArray.map(a => {
            const data = a.payload.doc.data() as News;
            data.id = a.payload.doc.id;
            // console.log(data);
            return data; 
          });
          // console.log(JSON.stringify(this.lists)); 
          for(let i=0; i < this.lists.length; i++) {
            this.groupList.push({ item_id: i+100, item_text: this.lists[i].headline });
          }
          // this.dropdownList =   this.groupList;
          
    
          //  console.log(JSON.stringify(this.dropdownList)); 
           })
      }

      getSports()
       {
        this.service.getSports().subscribe(actionArray => {
          this.listX = actionArray.map(a => {
            const data = a.payload.doc.data() as News;
            data.id = a.payload.doc.id;
            // console.log(data);
            return data; 
          });
          // console.log(JSON.stringify(this.listX)); 
          for(let i=0; i < this.listX.length; i++) {
            this.groupList.push({ item_id: i+200, item_text: this.listX[i].headline });
          }
          this.dropdownList =   this.groupList;
          
    
           console.log(JSON.stringify(this.dropdownList)); 
           })
      } 
  


}
