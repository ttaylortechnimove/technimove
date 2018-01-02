import { Injectable } from '@angular/core';

import { IStorage } from '../../models/storage/storage';

@Injectable()
export class LocalStorage {
    storage = {
     ready: () => {

     },
     set: ( key: string, value: string ) => {
        window.localStorage.setItem( key, value );
      },
     get: ( key: string ) => {
        window.localStorage.getItem( key );
      }
    };

    constructor() {

    }

    /*
    public setValue( key: string, value: string ): Promise<boolean> {
        return this.storage.ready()
          .then( () => {
            return this.storage.set( key, value )
              .catch( () => {
                return null;
              });
          });
          // TODO: Handle storage not being available
      }

    public getValue( key: string ): Promise<string> {
        return this.storage.ready()
          .then( () => {
            return this.storage.get( key )
              .catch( () => {
                return null;
              });
          });
          // TODO: Handle storage not being available
    }
      */
}
