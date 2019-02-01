const jwt = require('jsonwebtoken')
const SECRET_1 = "onetouchapi token secret key";
const httpResponse = require('../httpResponse/response');


function createToken(user) {
    return jwt.sign({
        firstName:user.firstName,
        lastname:user.lastName,
        phoneNumnber:user.phoneNumnber,
        email:user.email,
        uid:user.id
    }, SECRET_1, {
        expiresIn: '1d'
    })
}


const validateToken = ( request , response , next )=>{
    var token = request.headers['x-access-token'] || request.headers.authorization;
    jwt.verify( token,SECRET_1,( error , decoded )=>{
        if( error ) return httpResponse.error(response, "Authorization failed. Invalid token!")
        request.UserId=decoded.UserId;
        next();
    })
}
module.exports = { createToken , validateToken  };