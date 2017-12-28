import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from '../../app/app.material.module';

import { CreateAccountPage } from "./create-account";
import { CreateAccountRoutingModule } from "./create-account.routing";
import { CreateAccountComponent } from "../../components/create-account/create-account.component";

@NgModule({
    declarations: [ 
        CreateAccountPage,
        CreateAccountComponent
    ],
    imports: [ 
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CreateAccountRoutingModule,
        AppMaterialModule 
    ],
    exports: [ CreateAccountComponent ],
    providers: [ ]
})

export class CreateAccountModule {}