import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase.config';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app.routing';
import { AppCustomModule } from './app.custom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    // CommonModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AppCustomModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
