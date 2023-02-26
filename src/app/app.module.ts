import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,


    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0AUXpyN5v39lv3dTm5Gny5y5OgU6O9hw",
      authDomain: "movie-mate-80e7c.firebaseapp.com",
      projectId: "movie-mate-80e7c",
      storageBucket: "movie-mate-80e7c.appspot.com",
      messagingSenderId: "1019419768459",
      appId: "1:1019419768459:web:e5ed60d439fe24e44ec68e",
      measurementId: "G-2SHLGCWC1Z"
    }),
    FormsModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
