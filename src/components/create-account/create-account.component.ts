import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'create-account-component',
    templateUrl: './create-account.component.html',
    styleUrls: [ './create-account.component.scss' ]
})

export class CreateAccountComponent implements OnInit {

    viewTitle:string = "Create Account";
    rForm: FormGroup;
    users:any = [];
    model = {
        firstName:'',
        lastName:'',
        companyName:'',
        email:'',
        password:''
    }
    constructor( private fb: FormBuilder ){
        /*this.rForm = fb.group({
            'firstName': [ null, Validators.required],
            'lastName': [ null, Validators.required],
            'companyName': [ null, Validators.required],
            'email': [ null, Validators.required],
            'password': [ 
                null, 
                Validators.compose( 
                    [ 
                        Validators.required, 
                        Validators.minLength(6), 
                        Validators.maxLength(20) 
                    ] 
                )
            ],
            'termsAndConditions' : ''
        });*/
    }

    ngOnInit(){
        /*this.rForm.get('validate').valueChanges.subscribe(

        )*/
        this.rForm = new FormGroup({
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
                validators: Validators.required,
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

    onSubmit(){
        
        let user = {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            companyName: this.model.companyName,
            email: this.model.email,
            password: this.model.password
        }
        this.users.push(user);
        //console.log(data);
        console.log(this.users)
    }
}