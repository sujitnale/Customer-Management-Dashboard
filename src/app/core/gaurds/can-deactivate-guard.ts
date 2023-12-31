import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  @Injectable({
    providedIn: 'root'
  })
  export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot,
      nextState: RouterStateSnapshot) {
      return (nextState.url === '/login') ? true : (component.canDeactivate ? component.canDeactivate() : true);
    }
  } 