import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  /* {path:'', component:DepartmentListComponent}, */
  {path:'', redirectTo:'/departments-list',pathMatch:'full'},
  /* Default routing */
  {path:'departments-list', component:DepartmentListComponent},
  { 
    path: 'departments-list/:id', component:DepartmentDetailsComponent,
    children:[
      { path: 'overview',component: DepartmentOverviewComponent},
      { path: 'contact', component:DepartmentContactComponent}
    ]
  },
  {path:'employees', component:EmployeeListComponent},
  {path:'**', component:PageNotFoundComponent}
  /* wild card route */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  EmployeeListComponent,
                                  DepartmentDetailsComponent,
                                  DepartmentContactComponent,
                                  DepartmentDetailsComponent,
                                  PageNotFoundComponent]
