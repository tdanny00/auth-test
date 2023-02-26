import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";

import {AngularFireAuth} from "@angular/fire/compat/auth";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userPhotoUrl: string | null | undefined ;
  userDisplayName: string | null | undefined ;
  constructor(private authService: AuthService, private angularFireAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.getUserData()
  }

  userLogout() {
    this.authService.userLogout()
  }


  getUserData() {
  if (this.angularFireAuth.user) {
  this.angularFireAuth.user.subscribe((user) => {
    this.userPhotoUrl = user?.photoURL;
    this.userDisplayName = user?.displayName;
  })
}
  }

}
