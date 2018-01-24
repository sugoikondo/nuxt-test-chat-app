<template lang="pug">
md-list-item.item
  md-icon add
  span.md-list-item-text {{item.name}}
  span.md-list-item-text.price {{item.price}}
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created: () => {
    console.log('Item created')
  }
}
</script>

<style lang="scss">
.item {
  .price {
    text-align: right;
    align-items: flex-end !important;
  }
}
</style>
