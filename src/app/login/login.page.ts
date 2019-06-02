import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'
import * as firebase from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 username:string;
 password:string;

  constructor(public afAuth:AngularFireAuth,public router: Router) { }

  ngOnInit() {
  }

  async login(){
    const{username,password}=this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username+'@gmail.com',password)
    } catch (error) {
      console.dir(error)
      if(error.code==="auth/user-not-found"){
        console.log("User not found")
      }
    }
    this.router.navigate(['/tabs'])
  }

  logingoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res=> {
      console.log(res);
    })
    this.router.navigate(['/tabs'])
  }
  
}
