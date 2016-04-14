'use strict';

module.exports = function createLogger(console) {

    function Logger() {
    }

    Logger.prototype.log = function (message) {
        console.log(message);
    };

    return new Logger();
};