import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserJson } from '@state';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sweeper-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrls: ['./auth-verify.component.scss'],
})
export class AuthVerifyComponent {
  title = "auth-verify";
  loading = false;
  isSubmitted = false;
  user?:UserJson;
  verifyForm:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder){
    this.auth.loading$.subscribe(loading => this.loading = loading);
    this.auth.me$.subscribe(user => this.user = user);
    this.verifyForm = this.fb.group({
      action:['verify',Validators.required],
      code:['',[
        Validators.required,
        Validators.pattern('[a-z0-9]$')]],
    });
  }
  get f(){return this.verifyForm.controls;}
  hasErrors(){return this.isSubmitted && this.verifyForm.invalid;}
  submitForm(){
    const o = {
      ...this.verifyForm.value,
      email:this.user?.email,
      phn:this.user?.phn,
    };
    this.auth.send(o);
    this.verifyForm.reset({action:"verify",code:""});
  }
}