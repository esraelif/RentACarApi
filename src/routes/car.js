"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:
const permissions = require('../middlewares/permissions')
const car = require('../controllers/car')

//URL: /cars
router.route('/')
    .get(car.list)
    .post(permissions.isLogin)











module.exports = router