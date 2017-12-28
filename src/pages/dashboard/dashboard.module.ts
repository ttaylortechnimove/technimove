import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardPage } from './dashboard';
import { AppMaterialModule } from '../../app/app.material.module';
import { DashboardMenuComponent } from '../../components/dashboard-menu/dashboard-menu.component';
import { DashboardSidenavComponent } from '../../components/dashboard-sidenav/dashboard-sidenav.component';
import { DashboardContentComponent } from '../../components/dashboard-content/dashboard-content.component';

@NgModule({
    declarations: [ 
        DashboardPage, 
        DashboardSidenavComponent,
        DashboardMenuComponent,
        DashboardContentComponent
    ],
    imports: [ 
        BrowserModule,
        DashboardRoutingModule,
        AppMaterialModule,
    ],
    exports: [ 
        DashboardSidenavComponent,
        DashboardMenuComponent,
        DashboardContentComponent         
    ],
    providers: [ ]
})

export class DashboardModule { }