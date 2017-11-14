import { Component, OnInit } from '@angular/core';
import {AuthService}from'../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:String;
  name:String;
  email:String;
  password:String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router

  ) { }


  ngOnInit() {
  }
  registerData(){
    const user={
      username:this.username,
      name:this.name,
      email:this.email,
      password:this.password
    };


    this.authService.registerUser(user).subscribe(res=>{
if(res.state) {
  this.flashMessage.show("you're registered", {cssClass: 'alert-success', timeout: 1500});
  this.router.navigate(['/login']);
}
else{
  this.flashMessage.show(res.msg , {cssClass: 'alert-danger', timeout: 1500});
  this.router.navigate(['/register']);
}
    });

  }

}
