import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError=true;
  userModel = new User('alex','alex@test.com', 1231231231, '', 'morning', true);

  validateTopic(value: any){
    if(value == ''){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    console.log(this.userModel);
  }
}
