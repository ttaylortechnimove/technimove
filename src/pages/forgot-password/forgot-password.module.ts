import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ForgotPasswordPage } from './forgot-password';
import { ForgotPasswordRoutingModule } from './forgot-password.routing';

@NgModule({
    declarations: [ ForgotPasswordPage ],
    imports: [ 
        BrowserModule,
        FormsModule,
        ForgotPasswordRoutingModule
    ]
})

export class ForgotPasswordModule { }