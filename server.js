const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./dbConnection/connection')
const routes = require('./routes/appRoute');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(bodyParser.json({
    limit:'50mb'
}));
// app.use(multer({dest:'images'}).single('image'))

app.use( '/api',routes );

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`server started at ${PORT}`))
