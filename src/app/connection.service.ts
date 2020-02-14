import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  user: Observable<firebase.User>;

  constructor(private router: Router , public afAuth: AngularFireAuth) { }

  gotoLogin(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log("success", value);
       sessionStorage.setItem("auth","success");
        this.router.navigate(['dashboard']);
    }).catch(error => {
      console.log("something went wrong:",error.message);
      window.alert("Check email or password again");
    })
  }
}
