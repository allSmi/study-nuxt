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
    //   }
    // loading: '~/components/loading.vue'
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },
    css: [
        '~/css/global.css'
    ],
    router: {
        middleware: ['visits', 'user-agent']
    },
    plugins: [{ src: '~/plugins/vue-notifications', ssr: 'false' }],
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
