 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
  <h3>You selected department with id = {{departmentId}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <h3>You selected department with id = {{departmentId}}<br>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    <br>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    //let id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{ let id = parseInt(params.get('id') || '{}');
      this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    //this.router.navigate(['/departments', previousId]);
    this.router.navigate(['../',{id: previousId}, {relativeTo:this.route}]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    //this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../',{id: nextId}, {relativeTo:this.route}]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId: null;
    //this.router.navigate(['/departments',{id:selectedId}]);
    this.router.navigate(['../',{id: selectedId}, {relativeTo:this.route}]);
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }

}
