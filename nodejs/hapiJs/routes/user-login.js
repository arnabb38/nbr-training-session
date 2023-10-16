"use strict";

const { API } = require("../utils/routes")

const user_login = {
    method: 'POST',
    path: API.USER_LOGIN,
    handler: function (request, response) {
        let userIdFromDB = 'arnab';
        let passwordFromDB = 'arnab1234';

        let userId = request.payload.userId;
        let password = request.payload.password;

        if (userIdFromDB != userId || passwordFromDB != password) {
            return {
                status: false,
                code: 400,
                message: "The User is Invalid!"
            };
        } else {
            return {
                status: true,
                code: 200,
                message: "The User is Valid!"
            };
        }
    }
}

module.exports = user_login;
