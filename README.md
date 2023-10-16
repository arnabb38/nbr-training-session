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



        console.log(dbConfig)

        const client = new Client(dbConfig)

        await client.connect()

        const result = await client.query('SELECT NOW()')
        console.log(result.rows)

        await client.end()


        {
    "user": "postgres",
    "host": "localhost",
    "database": "nbrtraining",
    "password": "postgres",
    "port": "5432"
}


const { Client } = require("pg")
const dbConfig = require("../db.config.json")