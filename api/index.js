// 模块化api
let user = require('./user')

let express = require('express')
let router = express.Router()

router.use(user)

module.exports = router;
