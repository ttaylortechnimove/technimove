import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'dashboard-sidenav',
    templateUrl: './dashboard-sidenav.component.html',
    styleUrls: [ './dashboard-sidenav.component.scss' ]
})

export class DashboardSidenavComponent implements OnInit {
    viewTitle: string = "Dashboard Menu";
    sideNav: any = [
        { path: 'dashboard', name: 'Home', icon: 'fa fa-home' },
        { path: 'documents', name: 'Documents', icon: '' },
        { path: 'timesheet', name: 'Messages', icon: 'fa fa-comments' },
        { path: 'apps', name: 'Apps', icon: '' },
        { path: 'users', name: 'Users', icon: 'fa fa-users' },
        { path: 'activity', name: 'Activity', icon: 'fa fa-line-chart' },
        { path: 'bin', name: 'Bin', icon: 'fa fa-trash' }
    ];
    mode = new FormControl('push');
    constructor(){

    }

    ngOnInit(){

    }

}