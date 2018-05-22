// 模块化api
let userApi = require('./user.js')

let express = require('express')
let router = express.Router()

userApi(router)

module.exports = router;
