import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-sidenav',
    templateUrl: './dashboard-sidenav.component.html',
    styleUrls: [ './dashboard-sidenav.component.scss' ]
})

export class DashboardSidenavComponent implements OnInit {
    viewTitle:string = "Dashboard Menu";
    sideNav:any = [
        { path: 'dashboard', name: 'Home', icon: 'home' },
        { path: 'documents', name: 'Documents', icon: '' },
        { path: 'timesheet', name: 'Messages', icon: 'comments' },
        { path: 'apps', name: 'Apps', icon: '' },
        { path: 'users', name: 'Users', icon: 'users' },
        { path: 'activity', name: 'Activity', icon: 'line-chart' },
        { path: 'bin', name: 'Bin', icon: 'fa fa-trash' }
    ]
    constructor(){

    }

    ngOnInit(){

    }

}