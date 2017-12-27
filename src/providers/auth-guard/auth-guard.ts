import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Injectable()

export class LoggedInAuthGuard implements CanActivate {
    
    public isLoggedIn: boolean = false;
    public redirectUrl: string;
    
    constructor( private router: Router ) {

    }
    
    public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
        
        this.redirectUrl = state.url;
        
        return this.checkLogin(this.redirectUrl);

    }

    checkLogin( url:string ): boolean {
        
        return this.isLoggedIn;
    }
}