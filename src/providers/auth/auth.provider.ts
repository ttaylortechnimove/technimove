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
        const url = 'http://localhost:8300/register';
        const headers = new Headers();
        let creds = 'firstName=' + usercreds.firstName;
        creds += '&lastName=' + usercreds.lastName;
        creds += '&companyName=' + usercreds.companyName;
        creds += '&email=' + usercreds.email;
        creds += '&password=' + usercreds.password;
        creds += '&role=Admin';
        // creds += '&provider=local';
        headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
        return new Promise( ( resolve ) => {
                this.http.post(url, creds, { headers: headers } ).subscribe( ( data ) => {
                    const user = data.json();
                    if ( user._id ) {
                        this.router.navigate(['/login']);
                    }
            }); // End of subscribe

        }); // End of return

    }

    login( usercreds ) {
        this.isLoggedIn = false;
        const url = 'http://127.0.0.1:8300/login';
        const headers = new Headers();
        let creds = 'email=' + usercreds.email;
        creds += '&password=' + usercreds.password;
        headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
        return new Promise( ( resolve ) => {
            this.http.post( url, creds, { headers: headers } ).subscribe( ( data ) => {
                console.log( data );
                // if( data.json() ){
                //    window.localStorage.setItem( 'auth_key', data.json()._id );
                //    this.isLoggedIn = true;
                // } // End of if

                // resolve( this.isLoggedIn )

            }); // End of subscribe

        }); // End of return

    } // End of LogInByEmail()
    logout() {

    }
}