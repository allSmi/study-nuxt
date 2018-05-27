// let bodyParser = require('body-parser')
// let session = require('express-session')

module.exports = {
    // render: {
    //     bundleRenderer: {
    //       cache: require('lru-cache')({ // https://www.cnblogs.com/stealth7/p/7372403.html
    //         max: 1000,
    //         maxAge: 1000 * 60 * 15
    //       })
    //     }
    //   },
    // loading: '~/components/loading.vue',
    // mode: 'spa',
    // loadingIndicator: {
    //     name: 'circle',
    //     color: '#3B8070',
    //     background: 'white'
    // }, // 当mode为spa模式生效
    dev: (process.env.NODE_ENV !== 'production'),
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js' }
        ]
    },
    css: [
        '~assets/global.scss'
    ],
    router: {
        middleware: ['visits', 'user-agent']
    },
    plugins: [{ src: '~/plugins/vue-notifications', ssr: 'false' }],
    build: {
        verdor: ['axios', '~/plugins/vue-notifications'],
        // publicPath: 'https://cdn.nuxtjs.org', // 设置cdn地址，如果找不到文件，发生回源
        // analyze: true
    }
    // serverMiddleware: [
    //     // body-parser middleware
    //     bodyParser.json(),
    //     // session middleware
    //     session({
    //         secret: 'super-secret-key',
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: { maxAge: 600000 }
    //     }),
    //     // Api middleware
    //     // We add /api/login & /api/logout routes
    //     '~/server/api/index0'
    // ]
}
