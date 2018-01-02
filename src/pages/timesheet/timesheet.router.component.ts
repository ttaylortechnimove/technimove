// Not being used
import { TimesheetPage } from './timesheet';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'timesheet',
        component: TimesheetPage
        // loadChildren: 'C:/workspace/www/dev/technimove/src/pages/timesheet/timesheet.module#TimesheetModule'
    }
];

@NgModule({
    imports:[ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class TimesheetRouterComponent { }