"use strict";

const { API } = require("../utils/routes")
const connect_to_db = require("../helpers/connect-to-db")

const get_user_list = {
    method: 'GET',
    path: API.GET_USER_LIST_FROM_COMMON_METHOD,
    handler: async function (request, response) {
        try {
            let querySql = `select id, userid, username from login`;

            let result = await connect_to_db(querySql);

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
