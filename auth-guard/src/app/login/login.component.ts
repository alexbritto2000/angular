import { Component, OnInit } from '@angular/core';

import { AuthorizeService } from '../authorize.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthorizeService]
})
export class LoginComponent implements OnInit {

  name:any;
  pwd:any;
  constructor(private auth: AuthorizeService, private localStorageService:LocalStorageService, private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.getAuthToken(this.name, this.pwd).then(res=>{
      if(res){
        this.localStorageService.store('user',res);
        this.route.navigate(['home']);
      }
      else{
        alert("Login Failed")
      }
    })
  }

}
