import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: AngularFirestore) { }
 
  getIndia()
  
  {
    return this.firestore.collection('india').snapshotChanges();
  }

  getIndia2()
  
  {
    return this.firestore.collection('india2').snapshotChanges();
  }

  getWorld() {
    return this.firestore.collection('world').snapshotChanges();
  }

  getWorld2() {
    return this.firestore.collection('world2').snapshotChanges();
  }

  getSports() {
    return this.firestore.collection('sports').snapshotChanges();
  }

  getSports2() {
    return this.firestore.collection('sports2').snapshotChanges();
  }

  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
  }

  getMovies2() {
    return this.firestore.collection('movies2').snapshotChanges();
  }

  getBusiness() {
    return this.firestore.collection('business').snapshotChanges();
  }

  getBusiness2() {
    return this.firestore.collection('business2').snapshotChanges();
  }

  GetBreak() {
    return this.firestore.collection('breaknewz').snapshotChanges();
  }

  getLogin() {
    return this.firestore.collection('logindata').snapshotChanges();
  }
}


