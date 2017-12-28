import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.html',
    styleUrls: [ './dashboard.scss' ]
})

export class DashboardPage implements OnInit {
    viewTitle:string = "Dashboard";
    
    constructor( public snackBar: MatSnackBar ){
        
    }

    ngOnInit(){

    }
    openSnackBar( message: string, action: string ) {
            this.snackBar.open( message, action, {
                duration: 2000 }
            );
        }
}