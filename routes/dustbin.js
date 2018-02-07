const express = require('express');
const router = express.Router();

const Dustbin = require('../models/dustbin');

router.get("/", function(req, res) {
    res.render('dust-dash');
})