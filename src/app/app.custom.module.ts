import { NgModule } from "@angular/core";

import { ForgotPasswordModule } from '../pages/forgot-password/forgot-password.module';
import { CreateAccountModule } from '../pages/create-account/create-account.module';
import { TimesheetModule } from '../pages/timesheet/timesheet.module';
import { HomeModule } from '../pages/home/home.module';
// import { SharedComponentsModule } from './../components/shared-components.module';

@NgModule({
    imports: [
        // SharedComponentsModule,
        ForgotPasswordModule,
        CreateAccountModule,
        HomeModule,
        TimesheetModule
    ],
    exports: [
        // SharedComponentsModule,
        ForgotPasswordModule,
        CreateAccountModule,
        HomeModule,
        TimesheetModule,
     ]
})

export class AppCustomModule { }