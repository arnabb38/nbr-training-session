"use strict";

const get_user_details = {
    method: 'GET',
    path: '/api/v1/user/details',
    handler: function (request, response) {

        let userId = request.query.userId;

        return {
            status: true,
            code: 200,
            data: userId
        };
    }
}

module.exports = get_user_details;