import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AppMaterialModule } from './app.material.module';
import { LoginComponent } from '../components/login/login.component';
import { AuthProvider } from '../providers/auth/auth.provider';
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
    // HomePage,
    LoginComponent, 
    LoginPage,
    NotFoundPage 
  ],
  imports:[
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports:[ 
    RouterModule,
    LoginComponent 
  ],
  providers: [ AuthProvider ]
})

export class AppRoutingModule { }
