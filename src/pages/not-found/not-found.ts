import { Component } from '@angular/core';

@Component({
  selector:'not-found-page',
  templateUrl:'./not-found.html',
  styleUrls:['./not-found.scss']
})

export class NotFoundPage {
  viewTitle:string = '404 not found';

  constructor( ) { }

}
