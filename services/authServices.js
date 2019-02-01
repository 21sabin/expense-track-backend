const User = require("../models/User");

class AuthService{

    checkUserWithEmail( email  ){
       return  User.findOne({ where: { email: email }  })
    }
}

module.exports = AuthService;