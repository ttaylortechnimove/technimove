const web = require('./server/web.server');
const api = require('./server/api.server');

const webServer = web();
const apiServer = api();