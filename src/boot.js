'use strict';

module.exports = function createBootFunction(http, logger) {
    return function boot(config) {

        // Create HTTP server
        var server = http.createServer(function (request, response) {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Welcome to ' + config.env);
        });

        // Start HTTP server
        server.listen(config.port);
        logger.log('Server running on port ' + config.port + ' in ' + config.env + '...');
    };
};