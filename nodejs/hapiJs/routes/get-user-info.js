"use strict";

const get_user_info = {
    method: 'GET',
    path: '/api/v1/user',
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