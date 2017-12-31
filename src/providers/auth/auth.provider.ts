import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthProvider {
    isLoggedIn: boolean;
    constructor( private http: Http, private router: Router ) {

    } // End of constructor
    register( usercreds ) {
        let url = 'http://localhost:8300/create-account';
        let headers = new Headers();
        let creds = 'firstName=' + usercreds.firstName + '&lastName=' + usercreds.lastName + '&companyName=' + usercreds.companyName + '&email=' + usercreds.email + '&password=' + usercreds.password + '&role=Admin&provider=local';
        headers.append( "Content-Type", "application/x-www-form-urlencoded" );
        return new Promise( ( resolve ) => {
                this.http.post(url, creds, { headers: headers } ).subscribe( ( data ) => {
                    let user = data.json();
                    if( user._id ){
                        this.router.navigate(['/login']);
                    }
            }) // End of subscribe

        }) // End of return

    }

    login( usercreds ) {
        this.isLoggedIn = false;
        const url = "http://127.0.0.1:8300/auth";
        let headers = new Headers();
        let creds = 'email=' + usercreds.email + '&password=' + usercreds.password;
        headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
        return new Promise( ( resolve ) => {
        
            this.http.post( url, creds, { headers: headers } ).subscribe( ( data ) => {
                console.log( data );
                //if( data.json() ){
                //    window.localStorage.setItem( 'auth_key', data.json()._id );
                //    this.isLoggedIn = true;
                //} // End of if

                //resolve( this.isLoggedIn )

            }) // End of subscribe

        }) // End of return

    } // End of LogInByEmail()
    logout() {

    }
}