import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardPage } from './dashboard';

@NgModule({
    declarations: [ DashboardPage ],
    imports: [ 
        BrowserModule,
        DashboardRoutingModule
    ],
    exports: [ 
        
    ],
    providers: []
})

export class DashboardModule { }