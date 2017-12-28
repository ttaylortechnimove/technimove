import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule
    ],
    exports: [ 
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTabsModule,
        MatToolbarModule 
    ]
})

export class AppMaterialModule { }