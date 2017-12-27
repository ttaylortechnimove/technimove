import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'create-account-component',
    templateUrl: './create-account.component.html',
    styleUrls: [ './create-account.component.scss' ]
})

export class CreateAccountComponent implements OnInit {
    viewTitle:string = "Create Account";
    
    model = {
        firstName:'',
        lastName:'',
        companyName:'',
        email:'',
        password:''
    }
    constructor(){

    }

    ngOnInit(){
        
    }

    onSubmit(){
        if( this.model.firstName !== '' && this.model.firstName !== undefined){}
        let data = {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            companyName: this.model.companyName,
            email: this.model.email,
            password: this.model.password
        }
        console.log(data)
    }
}