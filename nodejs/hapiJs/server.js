'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '127.0.0.1',
        // host: '172.24.79.155',
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    await server.register({
        plugin: require("hapi-auto-route"),
        options: {
            routes_dir: Path.join(__dirname, "routes"),
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();