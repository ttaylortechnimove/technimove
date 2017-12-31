import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app/app.material.module';
import { TimesheetPage } from './timesheet';
import { TimesheetRouterComponent } from './timesheet.router.component';
import { TimesheetRoutingModule } from './timesheet.routing';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { TimesheetFormComponent } from '../../components/timesheet-form/timesheet-form.component';
import { TimesheetProvider } from './../../providers/timesheet/timesheet.provider';
import { FilterDatePipe } from './../../pipes/filter-date/filter-date.pipe';

@NgModule({
    declarations:[ 
        TimesheetPage, 
        TimesheetFormComponent, 
        FilterDatePipe
    ],
    imports: [ 
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TimesheetRoutingModule,
        TimesheetRouterComponent,
        SharedComponentsModule 
    ],
    providers: [ TimesheetProvider ],
    exports: [ TimesheetFormComponent, FilterDatePipe ]
})

export class TimesheetModule { }