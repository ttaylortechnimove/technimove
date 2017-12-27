import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ForgotPasswordPage } from './forgot-password';

const routes: Routes = [
    { 
        path:'forgot-password',
        component:ForgotPasswordPage
    }
]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class ForgotPasswordRoutingModule { }