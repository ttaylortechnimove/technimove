import { Component, OnInit } from '@angular/core';

import { NavBarProvider } from '../../providers/nav-bar/nav-bar.provider';
import { Navigation } from '../../models/navigation/navigation.model';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {
    
    navBar:Navigation ;
    brand:string;

    constructor( public navBarCtrl:NavBarProvider ) {
        this.brand = this.navBarCtrl.getTitle();
        this.navBar = this.navBarCtrl.getNavBar();
    }

    ngOninit(){
        
    }
}