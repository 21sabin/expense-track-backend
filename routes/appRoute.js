const router = require('express').Router();
const authController = require('../controllers/authController');
const salesController = require('../controllers/salesController')

router.use( '/auth',authController );
router.use('/sales',salesController );

module.exports = router;
