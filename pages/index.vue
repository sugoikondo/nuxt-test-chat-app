<template>
<section class="container">
  <div>
    <counter></counter>
    <nuxt-link to="livinghood">リンク</nuxt-link>
  </div>
</section>
</template>
<script>
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Counter
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
