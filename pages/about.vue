<template>
  <div>
    <p>Hi from {{ name }} {{aaa}}</p>
    <!-- <nuxt-link to="?page=1">Home page</nuxt-link> 变为/about?page=1-->
    <nuxt-link to="/">Home page</nuxt-link>
    <div class="container">
      <h2>Users</h2>
      <p><button @click="showLoginError">Notif me!</button></p>
      <ul class="users">
        <li v-for="user in users" :key="user.id">
          <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  watchQuery:['page'],//监听router.query.page变化，调用组件的方法
  transition: "bounce",
  key: (to) => {
    return to.fullPath
  }, //如果不加key，那么query变化时，不会触发动画,因为会认为组件没有改变，如果key变了，会认为组件变化了，会触发动画
  async asyncData({ req ,route,query}) {
    // console.log(route,query);
    // console.log(req);

    let aaa = "777";
    // console.log('666');

    // let keys;
    // for (const key in req) {
    //     keys += ' '+key;
    // }
    // const cookie = typeof req; //跳转进来没有req
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      name: process.static ? "static" : process.server ? "server" : "client",
      aaa,
      users: data
      // cookie
      // keys
    };
  },
  head: {
    title: "About page"
  },
  data() {
    return {
      aaa: 888
    };
  },

  notifications: {
    showLoginError: {
      title: 'Welcome!',
      message: 'Hello from nuxt.js',
      type: 'info'
    }
  },
  // server和client端都会执行
  beforeCreate() {
    // console.log('222');
  },
  // server和client端都会执行

  created() {
    // console.log(1111);
  },

  // beforeMount(){
  //   console.log(1111);
  // },
  // client端执行
  mounted() {
    // console.log(333);
  }
  // destroyed(){
  //   console.log(2222)
  // }
};
</script>
