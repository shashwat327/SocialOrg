import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import html2canvas from 'html2canvas';
 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { IndiaComponent } from './india/india.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';
import { NewsdashboardComponent } from './newsdashboard/newsdashboard.component';
import { environment } from 'src/environments/environment';
import { WorldComponent } from './world/world.component';
import { NewsService } from './shared/news.service';
import { SportsComponent } from './sports/sports.component';
import { MoviesComponent } from './movies/movies.component';
import { BusinessComponent } from './business/business.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { BrakingnewzComponent } from './brakingnewz/brakingnewz.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { Imgslider2Component } from './imgslider2/imgslider2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IcardComponent } from './icard/icard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubcontentComponent,
    IndiaComponent,
    HomepageComponent,
    FormComponent,
    NewsdashboardComponent,
    WorldComponent,
    SportsComponent,
    MoviesComponent,
    BusinessComponent,
    BrakingnewzComponent,
    ImgsliderComponent,
    Imgslider2Component,
    ContactusComponent,
    AboutusComponent,
    IcardComponent,

  ],
  imports: [
    BrowserModule,
    SidebarModule, AppRoutingModule, AccordionModule,
    InputTextModule, BrowserAnimationsModule, MatSliderModule,
    MatSidenavModule,  FormsModule , MatCheckboxModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,  AngularFireStorageModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,  NgxUiLoaderModule,
    MatDatepickerModule, MatNativeDateModule, NgMultiSelectDropDownModule.forRoot(),
    NgbModule, NgImageSliderModule, AngularFireAuthModule, 
   
  ],
  providers: [NewsService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
