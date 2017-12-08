import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router : Router) {}

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {

        let  isAdmin = JSON.parse(localStorage.getItem('currentUser'));

        if(isAdmin.isSuperUser) {
            return true;
        }
        this
            .router
            .navigate(['/']);
        return false;
    }

}