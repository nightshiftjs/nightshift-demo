'use strict';

module.exports = function configure(injector) {
    injector.register(require('./logger'), 'logger');
};