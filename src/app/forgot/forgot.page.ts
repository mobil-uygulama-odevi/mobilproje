import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  constructor(public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }

  mail:string="";

  async forgotpassword(){          
    var auth =firebase.auth();
    auth.sendPasswordResetEmail(this.mail)
            
  }

}

