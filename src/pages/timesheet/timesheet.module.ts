import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TimesheetPage } from './timesheet';
import { NewTimesheetPage } from '../new-timesheet/new-timesheet';
import { TimesheetRouterComponent } from './timesheet.router.component';
import { TimesheetRoutingModule } from './timesheet.routing';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { TimesheetFormComponent } from '../../components/timesheet-form/timesheet-form.component';
import { TimesheetProvider } from './../../providers/timesheet/timesheet.provider';
import { FilterDatePipe } from './../../pipes/filter-date/filter-date.pipe';

@NgModule({
    declarations:[ TimesheetPage, NewTimesheetPage, TimesheetFormComponent, FilterDatePipe ],
    imports: [ 
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatToolbarModule,
        FormsModule,
        TimesheetRoutingModule,
        TimesheetRouterComponent,
        SharedComponentsModule 
    ],
    providers: [ TimesheetProvider ],
    exports: [ TimesheetFormComponent, FilterDatePipe ]
})

export class TimesheetModule { }