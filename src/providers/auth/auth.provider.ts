import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()

export class AuthProvider {
    isLoggedIn: boolean;
    
    constructor( private _http: Http, private router:Router ) {

    }

    login( usercreds ) {
        this.isLoggedIn = false;
        var headers = new Headers();
        var creds = 'email=' + usercreds.email + '&password=' + usercreds.password;

        headers.append( 'Content-Type', 'application/x-www-form=urlencoded' );
        return new Promise( ( resolve ) => {
        
            this._http.post( 'http://127.0.0.1:8300/auth', creds, { headers: headers } ).subscribe( ( data ) => {
                if( data.json() ){
                    window.localStorage.setItem( 'auth_key', data.json()._id );
                    this.isLoggedIn = true;
                } // End of if

                resolve( this.isLoggedIn )

            }) // End of subscribe

        }) // End of return

    } // End of LogInByEmail()
    logout() {

    }
}