import { NgModule } from "@angular/core";

import { ForgotPasswordModule } from '../pages/forgot-password/forgot-password.module';
import { CreateAccountModule } from '../pages/create-account/create-account.module';
import { TimesheetModule } from '../pages/timesheet/timesheet.module';
import { HomeModule } from '../pages/home/home.module';

@NgModule({
    imports: [
        ForgotPasswordModule,
        CreateAccountModule,
        HomeModule,
        TimesheetModule
    ],
    exports: [
        ForgotPasswordModule,
        CreateAccountModule,
        HomeModule,
        TimesheetModule,
     ]
})

export class AppCustomModule { }