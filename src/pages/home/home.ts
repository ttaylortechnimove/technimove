import { Component } from '@angular/core';
import { NavBarProvider } from '../../providers/nav-bar/nav-bar.provider';

@Component({
  selector:'home-page',
  templateUrl:'./home.html',
  styleUrls:['./home.scss']
})

export class HomePage {
  viewTitle:string = 'Technimove WebApps';

  constructor(private navbarCtrl: NavBarProvider ) {
    this.navbarCtrl.viewTitle = this.viewTitle;
  }

  navigateTo ( page:string ) {
    //setRoot
  }
}
