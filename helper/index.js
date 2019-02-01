const bcrypt = require("bcrypt");

const getImageExtension = url => {
  const array = url.split("/");
  const ext = array[1].split(";");
  return ext[0];
};

const bcryptPassword = password => {
  const saltRound = 10; //cost factor
 return  bcrypt.hash(password, saltRound );
};

const comparePassword = ( hashPassword , password ) =>{
 return  bcrypt.compare( password , hashPassword );
}
module.exports = { getImageExtension ,bcryptPassword ,comparePassword };
