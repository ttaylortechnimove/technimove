import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { LoginPage } from './login';

const routes: Routes = [
    /* {
        path: 'login',
        component: LoginPage
    }*/
];

@NgModule({
    declarations: [
       // LoginPage
     ],
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
     ]
})

export class LoginRoutingModule { }