import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestCanActivate, TestCanActivateChild, TestCanDeactivate, TestResolve } from "./gaurds";
import { AddEditUserComponent } from "./users/addEditUser/addEditUser.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [{
      path: 'test',
      component: AddEditUserComponent
    }],
    canActivateChild: [TestCanActivateChild],
    canActivate: [TestCanActivate]
  },
  {
    path: "users/add",
    component: AddEditUserComponent
  },
  {
    path: "users/:id",
    component: AddEditUserComponent,
    canDeactivate: [TestCanDeactivate],
    resolve: {
      resolvedData: TestResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
