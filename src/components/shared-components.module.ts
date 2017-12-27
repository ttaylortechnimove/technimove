import { NavBarProvider } from './../providers/nav-bar/nav-bar.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ NavBarComponent, LoginComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ NavBarComponent, LoginComponent ],
  providers:[ NavBarProvider ]
})

export class SharedComponentsModule { }
