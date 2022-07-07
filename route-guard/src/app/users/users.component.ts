import { Component, VERSION } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class UsersComponent  {

  constructor(public appService: AppService){
    
  }
}
