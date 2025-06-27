const Joi = require('joi');

exports.handler = async (event) => {
    console.log(Joi)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "this is log" }),
    };
};