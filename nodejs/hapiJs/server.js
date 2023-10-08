'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '127.0.0.1',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, response) {
            return "Welcome to NBR Training Session"
        }
    })

    server.route({
        method: 'GET',
        path: '/api/v1/user',
        handler: function (request, response) {
            return "From /api/v1/user"
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();