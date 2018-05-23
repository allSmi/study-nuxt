// 根据sessionId获取用户信息
function getUserInfoBySession(sessionId, req) {
    return new Promise((resolve)=>{
        let userInfo = null
        if (sessionId) {
            // 服务端发送的请求
            req.sessionStore.get(sessionId, function(err, session) {
                if (session && session.authUser) {
                    userInfo = session.authUser
                } else {
                    console.log('用户未登录');
                }
                resolve(userInfo)
            })
        } else {
            // 客户端请求
            if (req.session && req.session.authUser) {
                userInfo = req.session.authUser
            } else {
                console.log('用户未登录');
            }
            resolve(userInfo)
        }
    })
}

module.exports = {
    getUserInfoBySession
}
