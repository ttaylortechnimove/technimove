import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login.html',
    styleUrls: [ './login.scss' ]
})

export class LoginPage implements OnInit {
    viewTitle: string = "Login";
    email:string;
    password:string;
    user = {
        email:'',
        password:''
    }
    
    
    constructor() {
        // End of Constructor
    }

    ngOnInit(){

    }

    login(){

        console.log( this.email + ', ' + this.password )
    }

    // End of Class
}