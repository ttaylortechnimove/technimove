import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomePage } from './home';

const routes: Routes = [
  {
    path:'home',
    component: HomePage
    // loadChildren:'../pages/home/home#HomePage'
  }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
