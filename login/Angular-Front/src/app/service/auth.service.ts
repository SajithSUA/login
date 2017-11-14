import { Injectable } from '@angular/core';
import {Http,Headers}from'@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {


  user:any;
  token:any;


  constructor(
    private http:Http
  ) { }

  registerUser(user){
let headers=new Headers();
headers.append('content-Type','application/json');

    return this.http.post("http://localhost:3004/user/register",user,{headers:headers}).map(res=>res.json());

  }

  loginUser(user){
    let headers=new Headers();
    headers.append('content-Type','application/json');

    return this.http.post("http://localhost:3004/user/login",user,{headers:headers}).map(res=>res.json());

  }

  getProfile(){


    this.fetchToken();


    let headers=new Headers();
    headers.append('Authorization',this.token);
    headers.append('content-Type','application/json');

    return this.http.get("http://localhost:3004/user/profile",{headers:headers}).map(res=>res.json());


  }
  fetchToken(){
     const token=localStorage.getItem("tokenid");
     this.token=token;
  }



  storeData(token,userdata){
    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.token=token;
    this.user=userdata;


  }
  loggedIn() {
    this.fetchToken();
    if(this.token==null)
    return false;
    else
      return true;

  }

  logout(){
    this.token=null;
    this.user=null;
    localStorage.clear();
  }






}
