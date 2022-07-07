import { Component } from '@angular/core';
import { Observable } from 'rxjs';


import { custObservable } from './custObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  constructor(){
     const text$ = new Observable(sub => {
      sub.next('ALex');
      sub.next('britto');
     });

     text$.subscribe(x => {
      console.log('1',x);
     });

     const check$ = new custObservable(sub => {
          sub.next('Alex');
          sub.next('Britto');
     });
     //console.log(x);
  }
}
