import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/**
*
**/
import { LoginPage } from '../pages/login/login';
import { AppMaterialModule } from './app.material.module';
import { LoginComponent } from '../components/login/login.component';
import { AuthProvider } from '../providers/auth/auth.provider';
import { NotFoundPage } from '../pages/not-found/not-found';

/**
*
**/
const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginPage
    },
    {
      path: '**',
      component: NotFoundPage
    }
];

/**
*
**/
@NgModule({
  declarations: [
    LoginComponent,
    LoginPage,
    NotFoundPage
  ],
  imports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
  providers: [ AuthProvider ]
})

/**
*
**/
export class AppRoutingModule { }
