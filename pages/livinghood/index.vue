<template lang="pug">
.page-wrapper
  .page-content
    <!-- 収入エリア -->
    .income-container
      md-toolbar.md-accent
        md-icon.toolbar-icon account_balance_wallet
        h3.md-title 収入

      item-list(:items='getIncomeItems')

    <!-- 支出エリア -->
    .expence-container
      md-toolbar.md-primary
        md-icon.toolbar-icon shopping_cart
        h3.md-title 支出

      item-list(:items='getExpenceItems')

  <!-- フッター -->
  .footer-container
    md-toolbar.md-accent.result-area
      md-icon.toolbar-icon attach_money
      h3.md-title 収支: {{ calcPayments }} 円

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
import { mapActions, mapGetters } from 'vuex'
import ItemList from '../../components/ItemList.vue'

export default {
  components: {
    ItemList
  },
  data: function () {
    return {
      name: '',
      price: 0
    }
  },
  computed: {
    ...mapGetters(['getIncomeItems', 'getExpenceItems', 'calcPayments'])
  },
  methods: {
    ...mapActions(['addItem', 'loadItems']),
    submit: function () {
      console.log('hogehoge')
      if (!this.name || !this.price) return false
      const item = {
        name: this.name,
        price: this.price
      }
      this.addItem(item)

      // フォームの中身を空にする
      this.name = ''
      this.price = 0
    }
  },
  created: function () {
    this.loadItems()
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

//-- フッター --
.footer-wrapper {
  min-height: 64px;
}
</style>
