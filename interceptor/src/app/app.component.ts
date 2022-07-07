import { Component, OnInit } from '@angular/core';


import { AppService } from './app.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular';
  users: any;
  title = 'interceptor';
  local:any;
  cookie: any;
  cookie_name: any;
  all_cookies:any;
  session_name: any;

  constructor(public appService: AppService,private cookieService:CookieService){
    this.appService.getAllUsers().subscribe(data => this.users =data);
  }

  ngOnInit(): void {
        }

  setLocal(){
    console.log('hii');
    this.name="user";
    localStorage.setItem(this.name,'alex');
    this.local = localStorage.getItem(this.name);
  }
  delLocal(){
    this.local = localStorage.removeItem(this.name);
  }
  setCookie(){
    console.log('SetCookie');
    this.cookie_name = 'User Id';
    this.cookieService.set(this.cookie_name,'Sabbatech');
  }
  getCookie(){
    console.log('GetCookie');
    alert(this.cookieService.get(this.cookie_name));
  }
   
  deleteCookie(){
    console.log('DelCookie');
    this.cookie_name = this.cookieService.delete(this.cookie_name);
  }

  setSession(){
    console.log('Set session');
    this.session_name = 'user id';
    sessionStorage.setItem(this.session_name,'sabbatech');
  }

  delSession(){
    console.log('Set session');
    sessionStorage.removeItem(this.session_name);
    this.session_name = sessionStorage.getItem(this.session_name);
    return this.session_name;
  }
   
  /* deleteAll(){
    this.cookieService.deleteAll();
  } */
}
