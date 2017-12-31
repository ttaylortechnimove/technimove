import { TimesheetRouterComponent } from './timesheet.router.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { TimesheetPage } from './timesheet';

const routes: Routes = [
    {
        path:'timesheet',
        //component: TimesheetRouterComponent
        component: TimesheetPage
        //loadChildren:'./src/app/pages/timesheet/timesheet.module#Timesheet'
      }
]

@NgModule({
    imports: [ 
        RouterModule.forChild(
            routes/*,  { preloadingStrategy: PreloadAllModules }*/
        )
    ],
    exports: [ RouterModule ]
})

export class TimesheetRoutingModule { }