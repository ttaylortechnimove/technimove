import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { CreateAccount } from '../../models/create-account/create-account.model';
import { AccountProvider } from '../../providers/account/account.provider';

@Component({
    selector: 'create-account-component',
    templateUrl: './create-account.component.html',
    styleUrls: [ './create-account.component.scss' ]
})

export class CreateAccountComponent implements OnInit {

    viewTitle:string = "Create Account";
    form: FormGroup;
    cA: CreateAccount;
    model = {
        firstName:'',
        lastName:'',
        companyName:'',
        email:'',
        password:''
    }
    constructor( private fb: FormBuilder, public account: AccountProvider ){
       
    }

    ngOnInit(){
        /*this.form.get('validate').valueChanges.subscribe(

        )*/
        this.form = new FormGroup({
            firstName: new FormControl('',{
                validators: Validators.required,
                updateOn: 'change'
            }),
            lastName: new FormControl('',{
                validators: Validators.required,
                updateOn: 'change'
            }),
            companyName: new FormControl('',{
                validators: Validators.required,
                updateOn: 'change'
            }),
            email: new FormControl('',{
                validators: [
                        Validators.required,
                        Validators.email
                    ],
                updateOn: 'change'
            }),
            password: new FormControl('',{
                validators: Validators.compose( 
                    [ 
                        Validators.required, 
                        Validators.minLength(6), 
                        Validators.maxLength(20) 
                    ] 
                ),
                updateOn: 'change'
            }),
        })
    }

    onSubmit( form ){
        this.account.create( form );
    }
}