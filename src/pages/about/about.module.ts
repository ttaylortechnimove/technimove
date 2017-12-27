import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AboutPage } from './about';
import { AboutRoutingModule } from './about.routing';

@NgModule({
  declarations: [ AboutPage ],
  imports: [ BrowserModule, FormsModule, AboutRoutingModule ]
})

export class AboutModule { }
