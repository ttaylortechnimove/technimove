import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateAccountPage } from './create-account';

const routes:Routes = [
    { 
        path: 'create-account', 
        component: CreateAccountPage 
    }
]

@NgModule({
    imports:[ 
        RouterModule.forChild( routes ) 
    ],
    exports: [ RouterModule ]
})

export class CreateAccountRoutingModule { }