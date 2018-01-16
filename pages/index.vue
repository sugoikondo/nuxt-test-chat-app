<template>
<section class="container">
  <div>
    <counter></counter>
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
