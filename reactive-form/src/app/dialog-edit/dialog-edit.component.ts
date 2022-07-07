import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  editForm: any;
  submitted= false;
  editVal: any;
  error: any;

  constructor(@Inject(MAT_DIALOG_DATA)  public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Hii hello');
    console.log(this.data);
    this.editVal = this.data.name;
    console.log(this.data.action);

    //console.log(ELE)
    this.editForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    });
  }
  get f() { 
    //console.log(this.registrationForm.controls);
    return this.editForm.controls; }

    onSubmit(formVal: any){
      console.log(this.data.name.userName);
      this.submitted=true;
      console.log(this.editForm.value);
      this.data.name.userName = this.editForm.value.userName;
      //this.formValues = this.registrationForm.value;
      /* this.userName = this.registrationForm.value.userName;
      this.email = this.registrationForm.value.email;
      this.password = this.registrationForm.value.password;
      this.address = this.registrationForm.value.address; */
      console.log("reactive form submitted");
      console.log(this.editForm);
      console.log(this.editForm.status);
      this.error = this.editForm.status;
      if(this.editForm.invalid){
        return;
      }
    }
    check(){
      if(this.error=='VALID'){
        return('mat-dialog-close');
      }
      else{
        return false;
      }
    }

}
