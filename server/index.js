const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = require('express')()
let nuxtConfig = require('../nuxt.config.js')

import apiRouter from './api' //express.Router()

// Body parser，用来封装 req.body
app.use(bodyParser.json())
app.use(cookieParser('super-secret-key'))

// Sessions 来创建 req.session
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
}))

app.use('/api', apiRouter) // express.Router()

// 我们用这些选项初始化 Nuxt.js：
const isProd = process.env.NODE_ENV === 'production'

const nuxt = new Nuxt(Object.assign(nuxtConfig, { dev: !isProd }))
// 生产模式不需要 build
if (!isProd) {
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')
