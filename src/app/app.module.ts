import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import firebaseConfig from './firebase'
import {AngularFireModule} from '@angular/fire'
import { environment } from '../environments/environment.prod';
import {AngularFireAuthModule} from '@angular/fire/auth'

const config = {
  apiKey: "AIzaSyBjU7-zZfonCT4DDCMSsL3gUv2VFcWYNC4",
  authDomain: "mobilproje-49d46.firebaseapp.com",
  databaseURL: "https://mobilproje-49d46.firebaseio.com",
  projectId: "mobilproje-49d46",
  storageBucket: "mobilproje-49d46.appspot.com",
  messagingSenderId: "381327104728",
  appId: "1:381327104728:web:b5a19de5cd654d47"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
