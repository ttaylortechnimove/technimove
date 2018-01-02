import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPage
        // loadChildren: '/home/ubuntu/shared/technimove/src/pages/dashboard/dashboard.module#DashboardModule'
        // loadChildren: 'C:/workspace/www/dev/technimove/src/pages/dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
    declarations: [
        //
    ],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule {}
