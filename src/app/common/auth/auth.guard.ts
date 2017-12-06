import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    console.log('state: ', state)
    if (localStorage.getItem('currentUser')) {
      //Logado
      return true;
    }

    //Não Logado
    this
      .router
      .navigate(['/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
    return false;
  }
}