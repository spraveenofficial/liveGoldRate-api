// const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
// This module used at big data apis


// const ensureHeader = function (req, res, next) {
//     const bearerHeader = req.headers["authorization"];
//     if (typeof bearerHeader == undefined) {
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1]
//         req.token = bearerToken;
//         next();
//     } else {
//         res.json({
//             Message: 'No Token Provided'
//         })
//     }
// }

const headerChecker = async function (req, res, next){
    const authHeader = req.headers['authorization']
    if (authHeader == process.env.API_KEY){
        next();
    }else{
        res.json({
            message: 'Invalid Token, Please Check Documentation For Token'
        })
    }
}

module.exports = headerChecker