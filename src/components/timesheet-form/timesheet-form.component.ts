import { Component, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITimesheet } from '../../models/timesheet/timesheet.model';
import { TimesheetProvider } from '../../providers/timesheet/timesheet.provider';
import { FilterDatePipe } from './../../pipes/filter-date/filter-date.pipe';


@Component({
    selector: 'timesheet-form-component',
    templateUrl: './timesheet-form.component.html',
    styleUrls: [ './timesheet-form.component.css' ]
})

export class TimesheetFormComponent implements OnInit {
    form: FormGroup;
    model = {
        start: '',
        end: '',
        break: '',
        overnight: ''
    };
    // @Input() start: Date;
    // @Input() end: Date;
    // overnightOption: any = [ "please select", "personl expense", "company card" ]
    timesheetStart: any;
    timesheets: any = [];
    constructor( public timesheetCtrl: TimesheetProvider ) {
        //
    }
    ngOnInit() {
        this.form = new FormGroup({
            startDate: new FormControl( '', {
                validators: Validators.compose(
                    [
                        Validators.required
                    ]
                ),
                updateOn: 'change'
            } ),
            startTime: new FormControl( '', {
                validators: Validators.compose(
                    [
                        Validators.required
                    ]
                ),
                updateOn: 'change'
            } )
        });
        // this.timesheets = JSON.stringify(this.timesheetCtrl.getAll());
        // console.log(JSON.stringify(this.timesheets));
        this.timesheetStart = new Date().toISOString().slice( 0, 16);
        setInterval( () => {
            this.timesheetStart = new Date().toISOString().slice( 0, 16);
        }, 60000 );
    }
    /* Proper code */
    onSubmit( timesheet ) {

    }
    /* End of proper code */
}
