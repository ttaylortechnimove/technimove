import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home';
import { HomeRoutingModule } from './home.routing';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  
  declarations: [ HomePage ],
  imports: [ 
    HomeRoutingModule, 
    SharedComponentsModule
  ],
  exports: [  ]

})

export class HomeModule { }