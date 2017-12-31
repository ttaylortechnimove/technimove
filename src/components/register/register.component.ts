import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { CreateAccount } from '../../models/create-account/create-account.model';
import { AuthProvider } from '../../providers/auth/auth.provider';
/*
* comments
*/

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.scss' ]
})
/*
* comments
*/

export class RegisterComponent implements OnInit {

    viewTitle:string = "Register";
    form: FormGroup;
    cA: CreateAccount;
    model = {
        firstName:'',
        lastName:'',
        companyName:'',
        email:'',
        password:''
    }
    constructor( private fb: FormBuilder, public authService: AuthProvider ){
       
    } // End of constructor

    ngOnInit(){
        /*this.form.get('validate').valueChanges.subscribe(

        )*/
        this.form = new FormGroup({
            firstName: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            lastName: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            companyName: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            email: new FormControl('', {
                validators: [
                        Validators.required,
                        Validators.email
                    ],
                updateOn: 'change'
            }),
            password: new FormControl('', {
                validators: Validators.compose( 
                    [ 
                        Validators.required, 
                        Validators.minLength( 6 ), 
                        Validators.maxLength( 20 ) 
                    ] 
                ),
                updateOn: 'change'
            }),
        })
    } // End of ngOnInit

    onSubmit( business ){
        this.authService.register( business );
    } /// End of submit

} // End of class