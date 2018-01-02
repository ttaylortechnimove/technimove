/**
* @author: Tony Taylor
* @authorUrl: http://github.com/tonytyronetaylor
* @authorEmail: tony.tyrone.taylor@gmail.com
* @license: G.N.U General Public License V3
* @licenseUrl: https://www.gnu.org/licenses/gpl-3.0.en.html
**/
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
      // loadChildren:'C:/workspace/www/dev/technimove/src/pages/home/home#HomePage'
      component: LoginPage
    },
    {
      path: '**',
      // loadChildren:'C:/workspace/www/dev/technimove/src/pages/not-found/not-found#NotFoundPage'
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
