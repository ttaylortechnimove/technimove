const web = require('./server/web.server');
const api = require('./server/api.server');
const mongoose = require('./server/config/mongoose');
const passport = require('./server/config/passport');

const db = mongoose();
passport();

const webServer = web();
const apiServer = api();