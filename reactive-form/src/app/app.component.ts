import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MustMatch } from './_helpers/match.validator';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

export interface FormElement {
  Id: any,
  userName: string;
  email: string;
  password: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  registrationForm: any;
  i: any;
  submitted = false;
  delete='delete';
  edit='edit';
  Id= 1;
  userName='example';
  email="example@123";
  password="123123";
  address="chennai";
  rows: any;

  ELEMENT_DATA: FormElement[]= [
    { Id:this.Id, userName:this.userName, email: this.email, password: this.password, address: this.address},
  ];
  displayedColumns: string[] = ['Id', 'userName', 'email', 'password', 'address', 'actions'];
  //dataSource = this.ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dialogService: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog){}

  ngOnInit(): void {
  this.registrationForm = this.fb.group({
    userName: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
    //email: ['',[Validators.required, Validators.email]],
    /* "[a-z0-9._%+-]+@[sabbatech]+\.[a-z]{2,3}$" */
    //email: ['', [Validators.required, emailDomain]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@(sabbatech)+\.(com)$')]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    confirmPassword: ['',[Validators.required, Validators.minLength(6)]],
    address: this.fb.group({
      city: ['',Validators.required],
      state: ['',Validators.required],
      postalCode: ['',Validators.required]
    })
  },{
      validator: MustMatch('password', 'confirmPassword')
    });
   };

  get f() { 
    //console.log(this.registrationForm.controls);
    return this.registrationForm.controls; }
  /* registrationForm = new FormGroup({
    userName: new FormControl('alex'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  }); */
  /* form model */

  loadApiData(){
    this.registrationForm.patchValue({
      Id: 1,
      userName:'BruceWayne',
      email: 'bruce@sabbatech.com',
      password: 'bruce@123',
      confirmPassword: 'bruce@123',
    });

  }
  onSubmit(formVal: any){
    this.submitted=true;
    console.log(this.registrationForm.value);
    //this.formValues = this.registrationForm.value;
    /* this.userName = this.registrationForm.value.userName;
    this.email = this.registrationForm.value.email;
    this.password = this.registrationForm.value.password;
    this.address = this.registrationForm.value.address; */
    console.log("reactive form submitted");
    console.log(this.registrationForm);
    console.log(this.registrationForm.errors);
    if(this.registrationForm.invalid){
      return;
    }
      console.log(this.ELEMENT_DATA);
      let values = this.registrationForm.value;
      console.log(values);
      let length=this.ELEMENT_DATA.length+1;
      let obj: any = {
        Id: length,
        userName: values.userName,
        email: values.email,
        password: values.password,        
        address: [values.address.city,values.address.state,values.address.postalCode]
      };  
      console.log('Length of ELEMENT DATA');
      console.log(this.ELEMENT_DATA);
      this.ELEMENT_DATA.push(obj);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      //this.registrationForm.reset();
      console.log(formVal);
      this.registrationForm.reset();
      this.submitted=false;
  }

  openDialog(element: any){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name:element}});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
      if(result == 'deleteTrue'){
        console.log(element);
        console.log(this.ELEMENT_DATA);
        console.log(element.Id);
        console.log('Before element data',this.ELEMENT_DATA);
        this.ELEMENT_DATA = this.ELEMENT_DATA.filter(({ Id }) => Id !== element.Id);  
        //this.myArray = this.myArray.filter(item => item !== obj);
        console.log('Id:',this.Id);
        console.log('Element Id:',element.Id);
        console.log('after element data:',this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    });
  }
  
  openEditDialog(element: any){
    console.log('dialog start');
    console.log(this.dialog);
    console.log('dialog end');
    let dialogRef = this.dialog.open(DialogEditComponent, {data: {name:element}});
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
      if(result == 'deleteTrue'){
        console.log(element);
        console.log(this.ELEMENT_DATA);
        console.log(element.Id);
        console.log('Before element data',this.ELEMENT_DATA);
        //this.ELEMENT_DATA = this.ELEMENT_DATA.filter(({ Id }) => Id !== element.Id);  
        //this.myArray = this.myArray.filter(item => item !== obj);
        console.log('Id:',this.Id);
        console.log('Element Id:',element.Id);
        console.log('after element data:',this.ELEMENT_DATA);
        //this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      }
    });
  }
/*   addElement() {
    ELEMENT_DATA.push({position: 1, name: this.value1, weight: 1.0079, symbol: 'H'})
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  } */
  
}
