"use strict";

const { API } = require("../utils/routes");
const dbConfig = require("../utils/db.config.json");
const { Client } = require("pg");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../utils/jwt-token-credentials.json");

const user_login = {
  method: "POST",
  path: API.USER_LOGIN_WITH_DB,
  handler: async function (request, response) {
    let userId = request.payload.userId;
    let password = request.payload.password;

    try {
      let querySql = `select * from login where userId = '${userId}' and password = '${password}'`;

      const client = new Client(dbConfig);

      await client.connect();

      const result_set = await client.query(querySql);

      await client.end();

      let result = result_set.rows;

      if (result.length > 0) {
        let token = jwt.sign({ userId: userId }, jwtSecret.TOKEN_SECRET, {
          algorithm: jwtSecret.ALGORITHM,
          expiresIn: jwtSecret.EXPIRES_IN,
        });

        return {
          status: true,
          code: 200,
          message: `User Login Successful`,
          accessToken: token,
        };
      } else {
        return {
          status: false,
          code: 400,
          message: `Invalid UserID or Password`,
        };
      }
    } catch (err) {
      console.log(err);
      return { status: false, code: 500, message: err.message };
    }
  },
};

module.exports = user_login;
