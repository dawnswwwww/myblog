<template>
  <div>
    <FuncWrap :title="'近期'">
      <div class="main" slot="default">
        <ul class="listContainer">
          <li class="listItem">首页</li>
          <li class="listItem"><a href="https://www.baidu.com">百度一下</a></li>
          <li class="listItem">开源中国</li>
          <li class="listItem">哔哩哔哩</li>
          </ul>
      </div>
    </FuncWrap>
  </div>
</template>
<style lang="less" scoped>
  .main {

    .listContainer {
      .listItem {
        text-align: left;
        list-style: disc inside;
      }
    }
  }
</style>
<script>
import FuncWrap from './FuncWrap'
export default {
  components: {FuncWrap}
}
</script>