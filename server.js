const web = require('./server/web.server');
const api = require('./server/api.server');
const mongoose = require('./server/config/mongoose');
const db = mongoose();

const webServer = web();
const apiServer = api();