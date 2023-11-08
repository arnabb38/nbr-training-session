"use strict";

const { API } = require("../utils/routes")
const dbConfig = require("../utils/db.config.json")
const { Client } = require("pg")

const get_user_list = {
    method: 'GET',
    path: API.GET_USER_LIST_FROM_DB,
    options:{
        auth:{
            mode: 'required',
            strategy: 'authentication'
        },

        // auth: false
    },
    handler: async function (request, response) {
        try {
            let querySql = `select id, userid, username from login`;

            const client = new Client(dbConfig);

            await client.connect();

            const result_set = await client.query(querySql);

            await client.end();

            let result = result_set.rows;

            if (result.length > 0) {
                return {
                    status: true,
                    code: 200,
                    message: `Successfully Get User List`,
                    data: result
                }
            } else {
                return {
                    status: false,
                    code: 400,
                    message: `No Record Found`
                }
            }
        } catch (err) {
            console.log(err);
            return { status: false, code: 500, message: err.message };
        }
    }
}

module.exports = get_user_list;
