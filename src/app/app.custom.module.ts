import { NgModule } from "@angular/core";
/*
* comments
*/

import { ForgotPasswordModule } from '../pages/forgot-password/forgot-password.module';
import { RegisterModule } from '../pages/register/register.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { TimesheetModule } from '../pages/timesheet/timesheet.module';
import { HomeModule } from '../pages/home/home.module';
/*
* comments
*/

@NgModule({
    imports: [
        ForgotPasswordModule,
        RegisterModule,
        DashboardModule,
        HomeModule,
        TimesheetModule
    ],
    exports: [
        ForgotPasswordModule,
        RegisterModule,
        DashboardModule,
        HomeModule,
        TimesheetModule,
     ]
})

export class AppCustomModule { }