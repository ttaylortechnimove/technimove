import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthProvider } from '../../providers/auth/auth.provider';

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
    rForm: FormGroup;

    constructor( public fb: FormBuilder, private auth: AuthProvider ){
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }

    ngOnInit(){
        this.rForm = new FormGroup({
            email: new FormControl( '', {
                validators: Validators.compose(
                    [
                        Validators.required,
                        Validators.email
                    ]
                ),
                updateOn: 'change'
            }),
            password: new FormControl( '', {
                validators: Validators.compose(
                    [
                        Validators.required
                    ]
                ),
                updateOn: 'blur'
            })
        })
    }

    onSubmit( form ){
        this.auth.login( form )
    }
}