import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(

    private router:Router,
   private authService:AuthService,
    private flashMessage:FlashMessagesService,
  ) { }

  user:any;

  logoutUser(){

    this.authService.logout();

    this.flashMessage.show("you're logged out", {cssClass: 'alert-success', timeout: 1500});
    this.router.navigate(['/login']);
    return false;

  }
  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user=res.user;

    })

  }



}
