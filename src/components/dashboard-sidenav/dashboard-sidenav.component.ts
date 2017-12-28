import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-sidenav',
    templateUrl: './dashboard-sidenav.component.html',
    styleUrls: [ './dashboard-sidenav.component.scss' ]
})

export class DashboardSidenavComponent implements OnInit {
    viewTitle:string = "Dashboard Menu";
    sideNav:any = [
        { path: 'dashboard', name: 'Home' },
        { path: 'timesheet', name: 'Timesheet' },
        { path: 'new-user', name: 'Add User' }
        /*{ path: 'jobsheet', name: 'Jobsheet' },
        { path: 'expense', name: 'Expense' },
        { path: 'audit', name: 'Audit' }*/
    ]
    constructor(){

    }

    ngOnInit(){

    }

}