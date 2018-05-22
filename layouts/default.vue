<template>
  <div class="default">
    <img src="../static/logo.png"/>
    <nuxt/>
    <visits class="visits"></visits>
  </div>
</template>

<script>
import Visits from '~/components/Visits'
export default {
  components: { Visits }
}
</script>


<style scoped>
img,.visits {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
.visits{
  top:100px;
}
</style>
