import { Component } from '@angular/core';


class item {  
  name: string;  
  val: number;  
}  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
    selectedValue: string= 'One';
}
