import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        CommonModule,
        AppMaterialModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardPage,
        DashboardSidenavComponent,
        DashboardMenuComponent,
        DashboardContentComponent
    ],
    providers: [ ]
})

export class DashboardModule { }
