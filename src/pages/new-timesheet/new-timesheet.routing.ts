import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTimesheetPage } from './new-timesheet';
//import { routes } from './new-timesheet.routes';;
const routes:Routes = [
    { path: 'timesheet/new', component: NewTimesheetPage }
]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: []
})

export class NewTimesheetRouting { }