import { NgModule } from '@angular/core';

// import { LoginPage } from './login';
// import { LoginComponent } from '../../components/login/login.component';
//import { LoginRoutingModule } from './login.routing';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { AppMaterialModule } from '../../app/app.material.module';

@NgModule({
    declarations: [ 
        // LoginPage, 
        // LoginComponent 
        ],
    imports: [
        // LoginRoutingModule
    ],
    exports: [
        // LoginComponent
    ],
    providers: [ AuthProvider ]
})

export class LoginModule { }