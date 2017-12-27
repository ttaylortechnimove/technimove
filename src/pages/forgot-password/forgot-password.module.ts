import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppMaterialModule } from '../../app/app.material.module';

import { ForgotPasswordPage } from './forgot-password';
import { ForgotPasswordRoutingModule } from './forgot-password.routing';

@NgModule({
    declarations: [ ForgotPasswordPage ],
    imports: [ 
        BrowserModule,
        FormsModule,
        AppMaterialModule,
        ForgotPasswordRoutingModule
    ]
})

export class ForgotPasswordModule { }