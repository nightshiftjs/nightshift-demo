'use strict';

// configure NightShift
var nightShift = require('nightshift-core');
var bluebird = require('nightshift-bluebird');
var di = require('nightshift-dependency-injection');

nightShift.plugin(bluebird);
nightShift.plugin(di);

// configure the dependency injection
require('./di')(nightShift).then(function (injector) {

    // configure the environment (defaults to 'development')
    var env = process.env.NODE_ENV || 'development';
    var config = injector.get('configureEnvironment')(env);

    // boot
    injector.get('boot')(config);
});