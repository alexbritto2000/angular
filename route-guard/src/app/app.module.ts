import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddEditUserComponent } from './users/addEditUser/addEditUser.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, AddEditUserComponent ],
  providers: [AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
