'use strict';

module.exports = function configureDependencyInjection(nightShift) {
    // create a new injector
    var injector = nightShift.di.newInjector();

    // enrich the injector with global variables
    injector.register(console, 'console', false);
    injector.register(process, 'process', false);

    // enrich the injector with external dependencies
    injector.register(require('http'), 'http', false);

    // enrich the injector with internal dependencies
    injector.register(require('./boot'), 'boot');
    injector.register(require('./env'), 'configureEnvironment');
    injector.configure(module);

    // promise to resolve the dependencies
    return injector.resolveAll();
};