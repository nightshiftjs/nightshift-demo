'use strict';

// plug the dependency injection
var nightShift = require('nightshift-core');
var di = require('nightshift-dependency-injection');
nightShift.plugin(di);

// create a new injector
var injector = nightShift.di.newInjector();

// configure the injector
injector.register(console, 'console', false);
injector.configure(module);

// resolve the dependencies
injector.resolveAll().then(function () {
    var greeter = injector.get('greeter');
    greeter.greet('NightShift user');
});