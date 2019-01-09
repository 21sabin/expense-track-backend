const router = require('express').Router();
const model = require('../models/User');
const httpResponse = require('../httpResponse/response')
const upload = require('../multer/config');
const fs = require('fs');
const path = require('path');


// router.post('/college/update/photo', function(req, res ) {
//   var ext = req.body.fileExtension;
//   var imagePath = req.body.photoPath.split(",");
//   var base64Data = imagePath[1];
//  //var base64Data = req.body.photoPath.replace(/^data:image\/png;base64,/, "");
//  var imageName = req.body.collegeId +'_photo.'+ext;
//  var bitmap = new Buffer(base64Data, 'base64');
 
//  require("fs").writeFile('college_images/'+imageName, bitmap, function(err) {
//    console.log(err);
//  });

//  collegeService.uploadPhoto(imageName, req.body.collegeId)
//  .then(function(response){
//    if(response)
//    {
//      res.json({success:true,data:response});
//    }
//    else
//    {
//      res.json({success:false,data:null,message:'unable to update'});
//    }

//  },function(err){ errorHandler(err,res); });

//  });

router.post('/register',upload.single('image'),( request , response )=>{
  const imagePath = request.body.imagePath;
  const ext = imagePath.split(',');
  const base64 = ext[1];
  let bitmap = new Buffer(base64,'base64');
  console.log(bitmap,"bitmap")
  let imageExt = getImageExtension(ext[0]);
  const imageName = 'user1.'+imageExt;
  fs.writeFile('images/'+imageName,bitmap,(err)=>{
    if(err)console.log(err)
  })

  // model.User.create(request.body).then(sresult=>{
  //   httpResponse.success(response,request.body)
  // })
});

const getImageExtension = ( url )=>{
  console.log( url , "ulr");
  const array = url.split('/');
  const ext= array[1].split(';');
   return ext[0];
}
module.exports = router ;
