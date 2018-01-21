<template lang="pug">
.page-wrapper
  .page-content
    .forms-container
      .income-container
        md-toolbar.md-transparent

      expence-container
        md-toolbar.md-accent
  .footer-wrapper
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
    }

    .forms-container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-auto-rows: 100%;
    }
    .income-container {
      background-color: #fff;
    }
}

// フッター
.footer-wrapper {
  min-height: 50px;
  background-color: #aaaaaa;
}
</style>
