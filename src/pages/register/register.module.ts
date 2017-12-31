import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from '../../app/app.material.module';
/*
* comments
*/

import { RegisterPage } from "./register";
import { RegisterRoutingModule } from "./register.routing";
import { RegisterComponent } from "../../components/register/register.component";
import { AuthProvider } from "../../providers/auth/auth.provider";
/*
* comments
*/

@NgModule({
    declarations: [ 
        RegisterPage,
        RegisterComponent
    ],
    imports: [ 
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterRoutingModule,
        AppMaterialModule 
    ],
    exports: [ RegisterComponent ],
    providers: [ AuthProvider ]
})

export class RegisterModule {}