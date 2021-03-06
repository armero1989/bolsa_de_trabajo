//Configuracion local

'use strict';

var GLOBAL_CONFIG = require('../global-config');

var env = (process.env.NODE_ENV || 'development');
var isDevEnv = env === 'development' || env === 'test';

module.exports = {
  hostname: GLOBAL_CONFIG.hostname,
  restApiRoot: GLOBAL_CONFIG.restApiRoot,
  livereload: process.env.LIVE_RELOAD,
  isDevEnv: isDevEnv,
  

  port: GLOBAL_CONFIG.port,
  legacyExplorer: GLOBAL_CONFIG.legacyExplorer,

  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
  },

  db: {
    connector: 'mysql',
    hostname: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'empleo',
  },

  emailDs: {
    name: 'emailDs',
    connector: 'mail',
    transports: [{
      type: 'smtp',
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      tls: {
        rejectUnauthorized: false
      },
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    }]
  }
};