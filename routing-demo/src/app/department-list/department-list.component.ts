import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
    {{queryCountry}}
    {{queryTag}}
    {{queryTrending}}
  `,
  styles: 
  ['.items .selected { color: red; }']
})
export class DepartmentListComponent implements OnInit {
  selectedId:any;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  queryCountry:any;
  queryTag:any;
  queryTrending:any;
  constructor(private router: Router, private activateRoute:ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(data=>{
      this.queryCountry=data['country'];
      this.queryTag=data['tag'];
      this.queryTrending=data['queryTrending'];
      console.log(data);
    });
   }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params: ParamMap)=>{ let id = parseInt(params.get('id') || '{}');
      this.selectedId = id;
    });
  } 

  onSelect(department: any){
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id],{relativeTo: this.activateRoute});
    //don't care route url and only append id 
  }

  isSelected(department:any){
    return department.id === this.selectedId;
  }

}
