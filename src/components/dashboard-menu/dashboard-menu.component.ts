import { Component } from '@angular/core';

@Component({
    selector: ' dashboard-menu',
    templateUrl: './dashboard-menu.component.html',
    styleUrls: [ './dashboard-menu.component.scss' ]
})

export class DashboardMenuComponent {
    
    viewTitle:string = "Dashboard";

    dashboardOptions:any = [
        { 
            label: 'Login',
            icon: 'input'
        },
        {
            label: 'Logout',
            icon: 'power_settings_new'
        }
    ]

    constructor() {

    }
}