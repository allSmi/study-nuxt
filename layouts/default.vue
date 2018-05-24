<template>
  <div class="default">
    <!-- <img src="~static/logo.png"/> -->
    <!-- <img src="../static/logo.png"/> -->
    <img src="/logo.png"/>
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
img,
.visits {
    position: fixed;
    z-index: 1000;
    top: 20px;
    right: 20px;
}
.visits {
    top: 100px;
}

</style>
