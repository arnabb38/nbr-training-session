"use strict";

const { API } = require("../utils/routes")
const dbConfig = require("../utils/db.config.json")
const { Client } = require("pg")

const user_login = {
    method: 'POST',
    path: API.USER_LOGIN_WITH_DB,
    handler: async function (request, response) {

        let userId = request.payload.userId;

        try {

            let querySql = `select * from login where userId = '${userId}'`;

            const client = new Client(dbConfig);

            await client.connect();

            const result_set = await client.query(querySql);

            await client.end();

            let result = result_set.rows;

            if (result.length > 0) {
                return {
                    status: true,
                    code: 200,
                    data: result
                }
            } else {
                return {
                    status: false,
                    code: 400,
                    data: result
                }
            }
        } catch (err) {
            console.log(err);
            return { status: false, code: 500, message: err.message };
        }
    }
}

module.exports = user_login;
