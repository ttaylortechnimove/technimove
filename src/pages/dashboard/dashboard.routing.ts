import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard';

const routes: Routes = [
    {
        path: 'dashboard',
        // component: DashboardPage
        // loadChildren: '/home/ubuntu/shared/technimove/src/pages/dashboard/dashboard.module#DashboardModule'
        loadChildren: 'C:/workspace/www/dev/technimove/src/pages/dashboard/dashboard.module#DashboardModule'
    }
];
const routesConfig: Routes = [
    /*{
        path: '',
        redirectTo: 'dashbord',
        pathMatch: 'full'
    },*/
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
    imports: [ RouterModule.forChild( routesConfig ) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule {}
