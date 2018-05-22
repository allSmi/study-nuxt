let getUserInfoBySession = require('../utils').getUserInfoBySession;


module.exports = function(router) {
    // 发起 POST /api/login 请求完成用户登录，并添加该用户到 req.session.authUser
    router.post('/login', function(req, res) {
        if (req.body.username === 'demo' && req.body.password === 'demo') {
            req.session.authUser = { username: 'demo' }
            return res.json({ username: 'demo' })
        }
        res.status(401).json({ error: 'Bad credentials' })
    })

    // 发起 POST /api/logout 请求注销当前用户，并从 req.session 中移除
    router.post('/logout', function(req, res) {
        delete req.session.authUser
        res.json({ ok: true })
    })

    router.post('/test', function(req, res) {
        // console.log('test:' + JSON.stringify(req.session));
        // req.session.user = '666'
        let userInfoInSession = getUserInfoBySession(req.body.sessionID, req).then((data) => {
            let userInfo = data;
            res.json({ userInfo: userInfo })
        })
    })
}
