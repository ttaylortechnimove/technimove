import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, FormControl, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    viewTitle:string = "Login";
    options: FormGroup;
    model = {
        email: "",
        password: ""
    }

    constructor( public fb: FormBuilder ){
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }

    ngOnInit(){
        
    }

    onSubmit(){
        
    }
}