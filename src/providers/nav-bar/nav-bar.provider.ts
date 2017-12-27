import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NavBarProvider {
    navBar:any = [];
    viewTitle:string;
    constructor() { }
        
    push( page: string ) {
        this.navBar.push( page );
    }
    getTitle = ( ) => {
        return this.viewTitle;
    }
    getNavBar() {
        return this.navBar;
    }
    setRoot() {

    }
    switchPage() {

    }
}