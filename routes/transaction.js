var express = require("express");
var router = express.Router();

const transaction = require('../models/transaction');

router.get('/', function(req, res, next) {
    res.render('./transaction/shop');
})

module.exports = router;