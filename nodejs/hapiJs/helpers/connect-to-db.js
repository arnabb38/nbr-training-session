'use strict';

const dbConfig = require("../utils/db.config.json")
const { Client } = require("pg")

const connect_to_db = async (query) => {
    const connect_stream = new Client(dbConfig);

    await connect_stream.connect();

    const result_set = await connect_stream.query(query);

    await connect_stream.end();

    let result = result_set.rows;

    return result;
}

module.exports = connect_to_db;