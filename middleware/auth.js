export default function ({ store, error, redirect}) {
    if (!store.state.authUser) {
      // error({
      //   message: 'You are not connected',
      //   statusCode: 403
      // })
      return redirect('/about') // 重定向，跳转到指定页面，如登陆页
    }
  }
