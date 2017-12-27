import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPage } from './login';
// import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    }
]

@NgModule({
    declarations: [ 
        LoginPage,
        // LoginComponent
     ],
    imports: [ 
        RouterModule.forChild( routes )
    ],
    exports: [ 
        RouterModule,
        // LoginComponent
     ]
})

export class LoginRoutingModule { }