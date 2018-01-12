<template>
<div class="">
  {{ counter }}
  <button type="button" @click="increment()">+</button>
  <button type="button" @click="decrement()">-</button>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'counter'
    ])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>
