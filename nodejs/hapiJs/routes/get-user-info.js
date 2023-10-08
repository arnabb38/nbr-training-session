"use strict";

const get_user_info = {
    method: 'GET',
    path: '/api/v1/user',
    handler: function (request, response) {
        return {
            status: true,
            code: 200,
            message: "From : http://172.24.79.155:3000/api/v1/user"
        }
    }
}

module.exports = get_user_info;