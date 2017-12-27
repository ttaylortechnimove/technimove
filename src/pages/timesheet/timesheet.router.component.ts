// Not being used
import { TimesheetPage } from './timesheet';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewTimesheetPage } from '../new-timesheet/new-timesheet';

const routes:Routes = [
    { path: 'timesheet', component: TimesheetPage },
    { path: 'timesheet/new', component: NewTimesheetPage }
]

@NgModule({
    //declarations:[ TimesheetPage, NewTimesheetPage ],
    imports:[ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class TimesheetRouterComponent { }