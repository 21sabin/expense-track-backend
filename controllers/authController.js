const router = require("express").Router();
const httpResponse = require("../httpResponse/response");
const fs = require("fs");
const helper = require("../helper");
const AuthService = require('../services/authServices');
const authService = new AuthService();
const UserService = require('../services/userService');
const userService = new UserService();

const token = require('../middleware/token')

router.post("/register", (request, response) => {
  const imagePath = request.body.imagePath;
  const ext = imagePath.split(",");
  const base64 = ext[1];
  let bitmap = new Buffer(base64, "base64");
  let imageExt = helper.getImageExtension(ext[0]);
  const imageName = request.body["email"] + "." + imageExt;
  fs.writeFile("images/" + imageName, bitmap, err => {if (err) console.log(err);});
  helper.bcryptPassword(request.body["password"]) .then( async ( hash ) => {
    const userCreate = await userService.registerNewUser( request.body , imageName , hash );
    })
    .catch(error => {
      httpResponse.error(response, error);
    });
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  try{
    const user = await authService.checkUserWithEmail( email );
    if( user ) {
      const userToken = token.createToken( user );
      const userDetail = await userService.findUserAndRoleById( user.id );
      httpResponse.success(response, { user:userDetail , token:userToken ,succes:true });
    }else{
      httpResponse.success(response, { success:false});
    }
  }catch(error){
    httpResponse.error(response, error);
  }
});

router.get('/user' ,async ( request, response )=>{
  const userDetail = await userService.getUserRoleById( 1 );
  httpResponse.success(response, {  succes:userDetail });
})

module.exports = router;
