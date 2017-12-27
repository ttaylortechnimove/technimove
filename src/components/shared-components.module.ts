import { NavBarProvider } from './../providers/nav-bar/nav-bar.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [ 
    NavBarComponent,

  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ 
    NavBarComponent,

  ],
  providers:[ NavBarProvider ]
})

export class SharedComponentsModule { }
