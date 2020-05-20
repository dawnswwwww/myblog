<template>
  <div class="FuncWrapContanier">
    <div class="FuncWrap-title">
      <div class="titleSubItem">{{title}}</div>
    </div>
    <div class="FuncWrap-Content"><slot></slot></div>
  </div>
</template>
<style lang="less" scoped>
  .FuncWrapContanier {
    float: left;
    min-width: 150px;
    max-width: 60vw;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: rgba(255, 255,255, .6);

    .FuncWrap-title {
      padding-top: 5px;
      text-align: left;
      font-weight: 700;
      font-family: Microsoft Yahei;

      .titleSubItem {
        width: 50%;
        padding-bottom: 2px;
        border-bottom: 1px solid black;
      }
    }

    .FuncWrap-Content {
      float: left;
      margin-top: 15px;
    }
  }
</style>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
