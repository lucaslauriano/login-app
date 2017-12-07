import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route
} from '@angular/router';
import {AuthService} from './auth.service';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private authService : AuthService, private router : Router) {}

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
  }
  
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable < boolean > | boolean   {
      console.log('state: ', state)
      console.log('AuthGuard');

      if (localStorage.getItem('currentUser')) {
        //Logado
        return true;
      }

      this.router.navigate(['/login'], 
        { queryParams: { returnUrl: state.url }
      });
    return false;
  }

    
  canLoad(route : Route) : Observable < boolean >| Promise < boolean >| boolean {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo');

    return this.verificarAcesso();
  }


}