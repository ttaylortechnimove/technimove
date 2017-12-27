import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'login-component',
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