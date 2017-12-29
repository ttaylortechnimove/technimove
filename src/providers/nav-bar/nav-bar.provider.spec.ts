import { TestBed, inject } from '@angular/core/testing';

import { NavBarProvider } from './nav-bar.provider';

describe( 'NavBar Provider', () => {
    
    beforeEach( () => {
        TestBed.configureTestingModule( {
            providers: [ NavBarProvider ]
        })
    } )

    it('should be created',
        inject( [ NavBarProvider ], ( service: NavBarProvider ) => {
            expect( service ).toBeTruthy()
        } ) 
    )

    it('should have getNavBar function', 
        inject( [ NavBarProvider ], ( service: NavBarProvider ) => {
            expect( service.getNavBar ).toBeTruthy()
        } )
    )

} )