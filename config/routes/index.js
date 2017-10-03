'use strict';

const routes = function (app){
  require('./homepage')(app);
  require('./communaute')(app);
  require('./fablab') (app);
  require('./contact')(app);
}

module.exports = routes;
