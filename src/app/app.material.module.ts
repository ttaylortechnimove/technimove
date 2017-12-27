import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatOptionModule } from '@angular/material/option';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule
    ],
    exports: [ 
        MatButtonModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule 
    ]
})

export class AppMaterialModule { }