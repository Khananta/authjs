const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user')
const user = require('../controllers/user')
const { verifyToken } = require("../middlewares/authJwt");
      
router.get('/users', [verifyToken],usercontroller.index)

router.get('/user/:id', usercontroller.show)

router.post('/user', usercontroller.store)

router.put('/user/:id', usercontroller.update)

router.delete('/user/:id', usercontroller.delete)

module.exports = router