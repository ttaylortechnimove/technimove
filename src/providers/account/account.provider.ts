import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AccountProvider {
    constructor( private http: Http, private router: Router ) {}
    create( usercreds ) {
        const url = 'http://localhost:8300/create-account';
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
    read(){

    }
    update( data ){

    }
    delete( data ){

    }
    login(){

    }
}