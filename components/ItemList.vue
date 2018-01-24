<template lang="pug">
md-list.item-list
  item(v-for="item in items", :item="item")
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'item-list',
  components: {
    Item
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.item-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
