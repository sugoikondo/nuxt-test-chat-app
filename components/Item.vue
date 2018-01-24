<template lang="pug">
md-list-item.item
  md-icon(v-if='isPricePositive()').plus-icon add
  md-icon(v-else).minus-icon remove
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
  methods: {
    isPricePositive: function () {
      return this.item.price > 0
    }
  }
}
</script>

<style lang="scss">
.item {
  .plus-icon {
    color: #83D947 !important;
  }
  .minus-icon {
    color: #F44336 !important;
  }

  .price {
    text-align: right;
    align-items: flex-end !important;
  }
}
</style>
