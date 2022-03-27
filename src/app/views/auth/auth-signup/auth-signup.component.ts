import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { checkAsyncError } from '@shared';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sweeper-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export class AuthSignUpComponent {
  title = "auth-signup";
  loading = false;
  isSubmitted = false;
  otherError = "";
  signupForm:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.error$.subscribe(error => {
      console.log(error);
      error?this.otherError = error.message:null});
    this.signupForm = this.fb.group({
      action:['signup',Validators.required],
      email:['',[
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
        checkAsyncError(this.auth.error$)],
    });
  }
  get f(){return this.signupForm.controls;}
  hasErrors(){return this.isSubmitted && this.signupForm.invalid;}
  submitForm(){
    this.isSubmitted = true;
    if(this.signupForm.valid){
      this.isSubmitted = false;
      const o = this.signupForm.value;
      this.auth.send(o);
      this.signupForm.reset({action:"signup",email:""});
    }
  }
}