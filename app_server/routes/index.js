var express = require('express');
var router = express.Router();
var CtrlHome = require('../controllers/home')
// var homeController = function(req, res, next) {
  // res.render('index', { title: 'Express' });
// }
/* GET home page. */
router.get('/',CtrlHome.homepage);

module.exports = router;
