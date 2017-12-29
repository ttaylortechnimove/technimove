import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AccountProvider {
    constructor( private http: Http) {}
    create( usercreds ) {
        // console.log( usercreds );
        var headers = new Headers();
        var creds = 'firstName' + usercreds.firstName + 'lastName' + usercreds.lastName + 'companyName ' + usercreds.companyName + 'email=' + usercreds.email + '&password=' + usercreds.password;

        headers.append( 'Access-Control-Allow-Origin', '*' );
        /*headers.append( 'Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS' );
        headers.append( 'Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token' );*/
        headers.append( 'Content-Type', 'application/X-www-form=urlencoded' );
        return new Promise( ( resolve ) => {
            console.log(headers);
            this.http.post( 'http://127.0.0.1:8300/create-account', creds, { headers: headers } ).subscribe( ( data ) => {
                //console.log( data );    
            /*if( data.json().success ){
                    window.localStorage.setItem( 'auth_key', data.json().token );
                    //this.isLoggedIn = true;
                } */// End of if

                //resolve( this.isLoggedIn )

            }) // End of subscribe

        }) // End of return

    }
    read(){

    }
    update( data ){

    }
    delete( data ){

    }
}