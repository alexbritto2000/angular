import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'custom-pipe';
  //let heroes.push(hero);
/*   @Pipe({  
    name: 'employeeTitle'  
})  */
  employees: any[] = [  
    {  
        code: 'emp101', name: 'karthik', gender: 'Male',  
        annualSalary: 5500, dateOfBirth: '25/6/1988'  
    },  
    {  
        code: 'emp102', name: 'sachin', gender: 'Male',  
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'  
    },  
    {  
        code: 'emp103', name: 'rahul', gender: 'Male',  
        annualSalary: 5900, dateOfBirth: '12/8/1979'  
    },  
    {  
        code: 'emp104', name: 'mary', gender: 'Female',  
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'  
    },  
];  

/* transform(value: string, gender: string): string {  
  if (gender.toLowerCase() == "male")  
      return "Mr." + value;  
  else  
      return "Miss." + value;  
}  */
}
