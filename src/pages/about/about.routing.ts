import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AboutPage } from './about';

const routes: Routes = [
  {
    path:'about',
    component: AboutPage
    //loadChildren:'src/app/pages/about/about#AboutPage'
  }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})

export class AboutRoutingModule { }
