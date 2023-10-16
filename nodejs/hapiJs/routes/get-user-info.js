"use strict";

const { API } = require("../utils/routes")

const get_user_info = {
    method: 'GET',
    path: API.GET_USER_INFO,
    handler: function (request, response) {
        const user_info = {
            name: "Mashud",
            email: "mashud@gamil.com",
            userId: "arnab",
            address: "dhaka"
        };

        return {
            status: true,
            code: 200,
            message: "Successfully get user information",
            data: user_info
        }
    }
}

module.exports = get_user_info;