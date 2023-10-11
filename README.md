# NBR Training Session

## Training Outline

![Training Outline](docs/NBR_Training_Outline.png)

## Node.js

- To create a New Node.js project: `npm init`
- To Run a JS file with Node: `node FILE_NAME.js`
- Node.js download link: https://nodejs.org/en/download
- Git Download Link (Windows): https://git-scm.com/download/win
- GitHub Link: https://github.com/

## Angular

- Angular Documentation: https://angular.io/guide/what-is-angular

## To Install Packages

- npm install "hapi-auto-route"

<!-- const fs = require("fs");

// Read users.json file
fs.readFile("users.json", function(err, data) {

	// Check for errors
	if (err) throw err;

	// Converting to JSON
	const users = JSON.parse(data);

	console.log(users); // Print users
});  -->



options: {
            enabled: true,
            pathLimit: 2,
            pathCache: {
                expiresIn: 10000
            }
        }


            await server.register({
        plugin: require('hapi-rate-limit'),
        options: {
            enabled: true,
            pathLimit: 2,
            pathCache: {
                expiresIn: 10000
            }
        }
    });