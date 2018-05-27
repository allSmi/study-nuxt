<template>
  <div>
    <h1 class="title">Hello world!</h1>
    <!-- /about?num=2 -->
    <!-- <nuxt-link :to="{name:'about',query:{num: 2}}" target="_blank">about</nuxt-link> -->
    <nuxt-link to="/about">about</nuxt-link>
    <br/>
    <nuxt-link :to="{name:'slug',params:{slug:'bar'}}">slug</nuxt-link>
    <h1>Cached components</h1>
    <p>Look at the source code and see how the timestamp is not reloaded before 10s after refreshing the page.</p>
    <p>Timestamp: {{ date }}</p>
    <p><button @click="showLoginError">Notif me!</button></p>
    <p><button @click="greet">greet!</button></p>
    <br>
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">Logout</button>
    </div>
    <p><nuxt-link to="/secret">Super secret page</nuxt-link></p>
  </div>
</template>

<script>
// let miniToastr

// if (process.browser) { // 该文件只会在客户端被打包引入
//   miniToastr = require('mini-toastr')
// }
import axios from "axios";
export default {
  name: "date",
  // serverCacheKey() {
  //   // Will change every 10 secondes
  //   return Math.floor(Date.now() / 10000) // => 每十秒变化一次
  // },
  // middleware:['auth'],
  async asyncData({ req, res}) {
    if (req) {
      let test = await axios.post("http://localhost:3000/api/test", {
        sessionID: req.sessionID
      }); // 在服务端请求生成的sessionID不能发送到浏览器端设置成cookie,把sessionID当作参数传递，接口接收到参数根据参数获取session信息
    } else {
      let test = await axios.post("http://localhost:3000/api/test");
    }
  },
  data() {
    return {
      date: Date.now(),
      formError: null,
      formUsername: "",
      formPassword: ""
    };
  },

  mounted() {
    // miniToastr.init() // 放在插件里面初始化了，所有的页面都可用
  },

  notifications: {
    showLoginError: {
      title: "Welcome!",
      message: "Hello from nuxt.js",
      type: "info"
    }
  },

  methods: {
    greet() {
      console.log($('.title')[0].getBoundingClientRect());
      console.log("greet");
    },
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.formUsername,
          password: this.formPassword
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
</script>
