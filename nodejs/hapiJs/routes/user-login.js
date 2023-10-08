"use strict";

const user_login = {
    method: 'POST',
    path: '/api/v1/security/login',
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
