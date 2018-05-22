<template>
  <div class="user">
    <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p><nuxt-link to="/about">List of users</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) { // 校验参数
    return !isNaN(+params.id)
  },
  layout: "dark",
  async asyncData({params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
.user {
    font-family: sans-serif;

    margin-top: 100px;

    text-align: center;
}

</style>
