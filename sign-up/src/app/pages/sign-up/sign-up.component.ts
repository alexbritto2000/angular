import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userModel = new User(localStorage.getItem('email') || '',localStorage.getItem('password') || '',false);
  onSubmit(userForm:any){
    //userForm.value=this.userModel;
    console.log(this.userModel);
    if(userForm.value.remember==true){
      localStorage.setItem('email',this.userModel.email);
      localStorage.setItem('password',this.userModel.password);
    }
    if(userForm.valid){
    this.router.navigateByUrl('/home');
    }
    console.log(userForm);
  }

}
