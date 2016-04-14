'use strict';

module.exports = function createGreeter(logger) {

    function Greeter() {
    }

    Greeter.prototype.greet = function (person) {
        logger.log('Hello, ' + person);
    };

    return new Greeter();
};