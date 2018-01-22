<template lang="pug">
.page-wrapper
  .page-content
    <!-- 収入エリア -->
    .expence-container
      md-toolbar.md-accent
        md-icon.toolbar-icon account_balance_wallet
        h3.md-title 収入

      md-list.item-list
        md-list-item.item
          md-icon add
          span.md-list-item-text 給与
          span.md-list-item-text.price 220000

    <!-- 支出エリア -->
    .income-container
      md-toolbar.md-primary
        md-icon.toolbar-icon shopping_cart
        h3.md-title 支出

      md-list.item-list
        md-list-item.item
          md-icon remove
          span.md-list-item-text 食費
          span.md-list-item-text.price 10000
        md-list-item.item
          md-icon remove
          span.md-list-item-text 光熱費
          span.md-list-item-text.price 10000

  <!-- フッター -->
  .footer-container
    md-toolbar.md-accent.result-area
      md-icon.toolbar-icon attach_money
      h3.md-title 収支:

    md-toolbar
      form(style="width: 100%", novalidate, @submit.stop.prevent="submit")
        .md-layout.md-gutter
          .md-layout-item
            md-field(md-inline)
              label 名前
              md-input(required, v-model='name', @keydown.enter='submit')

          .md-layout-item
            md-field(md-inline)
              label 価格
              md-input(type="number", required, v-model='price', @keydown.enter='submit')
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
    return {
      name: '',
      price: 0
    }
  },
  methods: {
    ...mapActions(['addItem']),
    submit: function () {
      console.log('hogehoge')
      if (!this.name || !this.price) return false
      const item = {
        name: this.name,
        price: this.price
      }
      this.addItem(item)
    }
  }
}
</script>

<style lang="scss" scoped>
//-- ページ全体のレイアウト --
.page-wrapper {
    display:        flex;
    min-height:     100vh;
    flex-direction: column;
    // ページのコンテンツ部
    .page-content {
      flex: 1;
      display: flex;
      margin: 0 atuo;
    }
    // アイコン左寄せ
    .toolbar-icon {
      margin-left: .8rem;
    }
    // ツールバーのタイトル左寄せ
    .md-title {
      flex: 1;
    }

    .income-container {
      flex: 1;
    }
    .expence-container {
      flex: 1
    }
    .footer-container {
      display: flex;
      flex-direction: column;
    }
}
//-- メインコンテンツ --
.item-list-wrapper {}

.item-list {
  list-style: none;
  margin: 0;
  padding: 0;

  .item {

    .price {
      text-align: right;
      align-items: flex-end !important;
    }
  }
}
.form-area {
  min-height: 56px;
  display: flex;
  flex-direction: row;

  .change-button {
    margin-top: 8px;
  }
}

//-- フッター --
.footer-wrapper {
  min-height: 64px;
}
</style>
