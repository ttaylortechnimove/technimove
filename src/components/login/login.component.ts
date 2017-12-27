import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    
    model = {
        email: "",
        password: ""
    }

    constructor(){

    }

    ngOnInit(){
        
    }

    onSubmit(){
        
    }
}