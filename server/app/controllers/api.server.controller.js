exports.getTimesheet = ( req, res ) => {

  console.log( 'Timesheet request: ' + req.body );
  res.send ( { 'message': 'Hello World!' } );

};

exports.getTimesheets = ( req, res ) => {

  console.log('Timesheets request: ' + req );

};

exports.getLogin = ( req, res ) => {

  console.log('Login request: ' + req )
}