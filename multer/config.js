const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/uploads')
    },
    filename:( req,file,cb )=>{
        cb( null, file.file.filename+'-'+Date.now())
    }
});

const upload = multer({storage:storage}); 

module.exports = upload ;

//bodyParser is not able to parse the image data therefore we need 3rd party library called multer 