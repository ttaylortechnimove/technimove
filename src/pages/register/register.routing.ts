import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
/*
*   comments
*/

import { RegisterPage } from './register';
/*
*   comments
*/

const routes: Routes = [
    { 
        path: 'register', 
        component: RegisterPage 
    }
]
/*
*   comments
*/

@NgModule({
    imports: [ 
        RouterModule.forChild( routes ) 
    ],
    exports: [ RouterModule ]
})

export class RegisterRoutingModule { }