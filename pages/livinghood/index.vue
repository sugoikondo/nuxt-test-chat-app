<template lang="pug">
.page-wrapper
  .page-content
    .income-container
      md-toolbar.md-primary
        md-icon.toolbar-icon shopping_cart
        h3.md-title 支出

    .expence-container
      md-toolbar.md-accent
        md-icon.toolbar-icon account_balance_wallet
        h3.md-title 収入
  md-toolbar.footer-wrapper.md-accent
    md-icon.toolbar-icon attach_money
    h3.md-title 収支:
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// ページのレイアウト
.page-wrapper {
    display:        flex;
    min-height:     100vh;
    flex-direction: column;
    // ページのコンテンツ部
    .page-content {
      flex: 1;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-auto-rows: 100%;
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
      // background-color: #fff;
    }
    .expence-container {

    }
}

// フッター
.footer-wrapper {
  min-height: 64px;
}
</style>
