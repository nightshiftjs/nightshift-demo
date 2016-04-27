'use strict';

module.exports = function createEnvironmentConfigurationFunction(process) {
    return function configureEnvironment(env) {
        return {
            // the environment (e.g. development, test, production)
            env: env,

            // the port the server is running on
            port: parseInt(process.env.PORT) || 9000
        };
    };
};