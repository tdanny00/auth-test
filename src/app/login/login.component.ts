import { Component } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup ;
  email : string = '';
  password : string = '';

  constructor(private authService : AuthService) {
    this.initForm()

  }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.authService.userLogin(this.email,this.password);

    this.email = '';
    this.password = '';

  }

  signInWithGoogle() {
    this.authService.userGoogleSignIn()
  }

  get emailControl(): FormControl {
    return this.loginForm.get("email") as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get("password") as FormControl;
  }


  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{6,}")],
      )});
  }
}
