import { Component, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Timesheet } from '../../models/timesheet/timesheet.model';
import { TimesheetProvider } from '../../providers/timesheet/timesheet.provider';
import { FilterDatePipe } from './../../pipes/filter-date/filter-date.pipe';


@Component({
    selector: 'timesheet-form-component',
    templateUrl: './timesheet-form.component.html',
    styleUrls: [ './timesheet-form.component.css' ]
})

export class TimesheetFormComponent implements OnInit {
    user = {
        start:'',
        finish:'',
        break:'',
        overnight:''
    }
    @Input() start: Date;
    @Input() end: Date;
    break: any;
    overnight:any;
    overnightOption:any = [ "please select", "personl expense", "company card" ]
            
    timesheetStart:any;
    timesheets:any = [];
    fakeRate:number = 7.50;
    fakeShift = {
        start:'',
        end:''
    }
    constructor( public timesheetCtrl: TimesheetProvider ){
        
    }

    ngOnInit() {
        //this.timesheets = JSON.stringify(this.timesheetCtrl.getAll());
        // console.log(JSON.stringify(this.timesheets));
        this.timesheetStart = new Date().toISOString().slice( 0, 16);
        setInterval( () => {
            this.timesheetStart = new Date().toISOString().slice( 0, 16);
        }, 60000 );
    }
    selectAll() {
        
    }
    onStart() {
        let wage = 0;
        setInterval( () => {
            let pH = this.fakeRate /  (60 * 60);
            wage += pH;
            // console.log('£'+wage.toFixed(2));
        }, 3000 );
        this.timesheets.unshift( { 'shift': this.timesheetStart, 'wage': wage.toFixed(2) } );
        
        //this.timesheetCtrl.logStart( { 'shift': this.timesheetStart } );
        //this.timesheets = JSON.parse( localStorage.getItem( 'timesheets' ) );
        //console.log( data );
        return false;
        
    }
    startWager(){
        let earnings = 0;
        setInterval( () => {
            let pH = this.fakeRate /  (60 * 60);
            earnings += pH;
            return earnings;
            //console.log('£'+earnings.toFixed(2));
        }, 3000 );
    }
    endAll(){
    }
    endShift( shiftId ) {
        //console.log(shiftId);
        for( let i = 0; i < this.timesheets.length; i++ ){
            //console.log('index: ' +i);
            if( this.timesheets[i] !== shiftId ){
                this.timesheets = this.timesheets.splice( i, 1 );
                console.log(i);
            }
        }
    }
    submitTimesheet(){
        
    }
}