import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundPage } from './not-found';

const routes: Routes = [
  /*{
    path:'**',
    //component: NotFoundPage
    loadChildren:'../pages/not-found/not-found#NotFoundPage'
  }*/
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})

export class NotFoundRoutingModule { }
