// 模块化api
import user from './user'

let express = require('express')
let router = express.Router()

router.use(user)

export default router;
