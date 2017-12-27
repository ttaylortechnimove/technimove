import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { LoginComponent } from '../../components/login/login.component';
import { LoginPage } from "./login";
// import { LoginReactiveComponent } from "../../components/login/login.reactive.component";
import { LoginRoutingModule } from "./login.routing";
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
    declarations: [ 
        // LoginComponent,
        LoginPage ],
    imports: [ 
        BrowserModule,
        BrowserAnimationsModule,
        // CommonModule,
        FormsModule,
        LoginRoutingModule,
        SharedComponentsModule
    ],
    exports: [
        // LoginComponent
    ]
})


export class LoginModule { }