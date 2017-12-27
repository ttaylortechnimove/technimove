import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { LoginPage } from './login';
import {LoginComponent } from '../../components/login/login.component';
import { LoginRoutingModule } from './login.routing';
import { AuthProvider } from '../../providers/auth/auth.provider';

@NgModule({
    declarations: [ LoginPage, LoginComponent ],
    imports: [ 
        LoginRoutingModule,
        // FormsModule
    ],
    exports: [ LoginComponent ],
    providers: [ AuthProvider ]
})

export class LoginModule {}