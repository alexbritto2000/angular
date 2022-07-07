import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TestCanActivate implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    console.log("can actviate check");
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000);
    });
  }
}

@Injectable({
  providedIn: "root"
})
export class TestCanActivateChild implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 10);
    });
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: "root"
})
export class TestCanDeactivate
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): any {
    return component && component.canDeactivate
      ? component.canDeactivate()
      : true;
  }
}

@Injectable({
  providedIn: "root"
})
export class TestResolve implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Gopi"), 1000);
    });
  }
}
