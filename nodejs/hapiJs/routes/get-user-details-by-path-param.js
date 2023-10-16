"use strict";

const { API } = require("../utils/routes")

const get_user_details = {
    method: 'GET',
    path: API.GET_USER_DETAILS + '/{userId}',
    handler: function (request, response) {

        let userId = request.params.userId;

        return {
            status: true,
            code: 200,
            data: userId
        };
    }
}

module.exports = get_user_details;