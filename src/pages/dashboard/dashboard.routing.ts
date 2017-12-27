import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard';

const routes:Routes = [
    {
        path: 'dashboard',
        component: DashboardPage
    }
]

@NgModule({
    declarations: [ 
        
    ],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule {}