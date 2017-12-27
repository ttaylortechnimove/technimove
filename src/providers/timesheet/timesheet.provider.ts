// import { Http, Headers } from '@angular/http';

export class TimesheetProvider {
    
    constructor( /*private http: Http*/ ) {
        //console.log('Hello TimesheetProvider');
    }
    getAll(){
        return JSON.parse( localStorage.getItem('timesheets') );
    }
    logStart( data ) {
        localStorage.setItem( 'timesheets' , JSON.stringify( data ) );
    }
    filterDate( date ){
        date = date.replace( 'T', '-' );
        let parts = date.split( '-' );
        let timeParts = parts[3].split( ':' );

        return new Date(parts[0], parts[1]-1, parts[2], timeParts[0], timeParts[1] );
    }
    getTimesheets() {
        //console.log({ message: "Getting timesheets"});
        
    }
}