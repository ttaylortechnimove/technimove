import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NotFoundPage } from '../pages/not-found/not-found';

const routes: Routes = [
    {
      path :'login',
      //loadChildren:'../pages/home/home#HomePage'
      component: LoginPage
    },
    {
      path :'',
      //loadChildren:'../pages/home/home#HomePage'
      component: LoginPage
    },
    {
      path :'**',
      //loadChildren:'../pages/not-found/not-found#NotFoundPage'
      component: NotFoundPage
    }
]

@NgModule({
  declarations:[ 
    //HomePage, 
    LoginPage, 
    NotFoundPage 
  ],
  imports:[
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports:[ RouterModule ]
})

export class AppRoutingModule { }
