"use strict";

const { API } = require("../utils/routes")
const connect_to_db = require("../helpers/connect-to-db")

const user_registration = {
    method: 'POST',
    path: API.USER_REGISTRATION,
    handler: async function (request, response) {

        let id = request.payload.id;
        let userId = request.payload.userId;
        let password = request.payload.password;
        let username = request.payload.username;

        try {
            // let querySql = `with rows as (insert into login(id, userId, password, username) values('${id}', '${userId}', '${password}', '${username}') returning 1) select count(*)::int4 from rows`;

            // let result = await connect_to_db(querySql);

            // if (result.length > 0) {
            //     return {
            //         status: true,
            //         code: 200,
            //         message: `User Registration Successful`,
            //         data: result
            //     }
            // } else {
            //     return {
            //         status: false,
            //         code: 400,
            //         message: `User Registration  Failed`
            //     }
            // }

            let querySql = `insert into login(id, userId, password, username) values('${id}', '${userId}', '${password}', '${username}')`;

            await connect_to_db(querySql);

            return {
                status: true,
                code: 200,
                message: `User Registration Successful`
            }
        } catch (err) {
            console.log(err);
            return { status: false, code: 500, message: err.message };
        }
    }
}

module.exports = user_registration;
