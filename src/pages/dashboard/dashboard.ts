import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.html',
    styleUrls: [ './dashboard.scss' ]
})

export class DashboardPage implements OnInit {
    viewTitle:string = "Dashboard";

    constructor(){

    }

    ngOnInit(){

    }
}