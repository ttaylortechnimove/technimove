import { TimesheetRouterComponent } from './timesheet.router.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { TimesheetPage } from './timesheet';

const routes: Routes = [
    {
        path: 'timesheet',
        // component: TimesheetRouterComponent
        component: TimesheetPage
        // loadChildren:'C:/workspace/www/dev/technimove/src/pages/timesheet/timesheet.module#Timesheet'
      }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [ RouterModule ]
})

export class TimesheetRoutingModule { }
