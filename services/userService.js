const User = require("../models/User");
const Role=require('../models/Role')

class UserService {

    findUserAndRoleById( id ){
        return User.findById( id,{include:{model:Role}} );
    }

    registerNewUser( body ,imageName , hash ){
       return User.create({
           firstName:body.firstName,
           lastName:body.lastName,
           email:body.email,
           password:hash,
           phoneNumber:body.phoneNumber,
           imageName:imageName,
           RoleId:2
       })
    }
}

module.exports = UserService;