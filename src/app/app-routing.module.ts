import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { IndiaComponent } from './india/india.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';
import { NewsdashboardComponent } from './newsdashboard/newsdashboard.component';
import { WorldComponent } from './world/world.component';
import { SportsComponent } from './sports/sports.component';
import { MoviesComponent } from './movies/movies.component';
import { BusinessComponent } from './business/business.component';
import { BrakingnewzComponent } from './brakingnewz/brakingnewz.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IcardComponent } from './icard/icard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    children: []
  },
  {
    path: 'india',
    pathMatch: 'full',
    component: IndiaComponent,
    children: []
  },
  {
    path: 'world',
    pathMatch: 'full',
    component: WorldComponent,
    children: []
  },
  {
    path: 'sports',
    pathMatch: 'full',
    component: SportsComponent,
    children: []
  },
  {
    path: 'movies',
    pathMatch: 'full',
    component: MoviesComponent,
    children: []
  },
  {
    path: 'business',
    pathMatch: 'full',
    component: BusinessComponent,
    children: []
  },
  {
    path: 'sub',
    pathMatch: 'full',
    component: SubcontentComponent,
    children: []
  },
  {
    path: 'break',
    pathMatch: 'full',
    component:BrakingnewzComponent,
    children: []
  },
  {
    path: 'form',
    pathMatch: 'full',
    component: FormComponent,
    children: []
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: NewsdashboardComponent,
    children: []
  },
  {
    path: 'aboutus',
    pathMatch: 'full',
    component:  AboutusComponent,
    children: []
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactusComponent,
    children: []
  },
  {
    path: 'icard',
    pathMatch: 'full',
    component: IcardComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
