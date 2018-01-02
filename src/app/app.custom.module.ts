import { NgModule } from '@angular/core';

/**
*
**/
import { ForgotPasswordModule } from '../pages/forgot-password/forgot-password.module';
import { RegisterModule } from '../pages/register/register.module';
// import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { TimesheetModule } from '../pages/timesheet/timesheet.module';
import { HomeModule } from '../pages/home/home.module';
import { NotificationComponent } from '../components/notification/notification.component';

/**
*
**/
@NgModule({
    declarations: [
        NotificationComponent
    ],
    imports: [
        ForgotPasswordModule,
        RegisterModule,
        // DashboardModule,
        HomeModule,
        TimesheetModule,
    ],
    exports: [
        ForgotPasswordModule,
        RegisterModule,
        // DashboardModule,
        HomeModule,
        TimesheetModule,
        NotificationComponent
     ]
})

/**
*
**/
export class AppCustomModule { }
