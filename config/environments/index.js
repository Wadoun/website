/**
 * Settings
 */

'use strict';

const production = require('./production');
const development = require('./development');

const environments = function() {
  if (process.env.NODE_ENV === 'production') {
    return production
  } else {
    return development
  }
}

module.exports = environments();
