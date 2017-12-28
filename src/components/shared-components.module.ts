import { NavBarProvider } from './../providers/nav-bar/nav-bar.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';

@NgModule({
  declarations: [ 
    NavBarComponent,
    // DashboardSidenavComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ 
    NavBarComponent,
    // DashboardSidenavComponent
  ],
  providers:[ NavBarProvider ]
})

export class SharedComponentsModule { }
