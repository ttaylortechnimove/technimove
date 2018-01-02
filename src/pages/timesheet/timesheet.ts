import { Component } from '@angular/core';

import { NavBarProvider } from '../../providers/nav-bar/nav-bar.provider';
import { navbar } from './timesheet.routes';

import { ITimesheet } from './../../models/Timesheet/timesheet.model';
import { TimesheetProvider } from './../../providers/timesheet/timesheet.provider';

@Component({
    selector: 'timesheet-page',
    templateUrl: './timesheet.html',
    styleUrls: [ './timesheet.scss' ]
})

export class TimesheetPage {
    timesheetData: any = [
        { week: 'current', hours: 15, cc: 0, etd: 180 },
        { week: '3', hours: 30, cc: 30, etd: 230 },
        { week: '2', hours: 45, cc: 0, etd: 380 },
        { week: '1', hours: 60, cc: 80, etd: 420 }
    ]
    viewTitle: string = 'timesheet';

    constructor( private navBarCtrl: NavBarProvider, private timesheetCtrl: TimesheetProvider ) { 
        this.navBarCtrl.viewTitle = this.viewTitle;
        this.navBarCtrl.navBar = navbar;

        // End of Constructor
    }

     // End of Class
}
