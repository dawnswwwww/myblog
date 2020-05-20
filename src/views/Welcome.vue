<template>
  <div class="welcomeContaniner">
    <div class="welcomeTextContainer">
      <span class="welcomeText">
        Welcome, XXX
      </span>
    </div>
    <div class="funcArea">
      <Recently></Recently>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .welcomeContaniner {
    padding: 20px 30px 10px 30px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // position: absolute;
    width: 100%;
    height: 100%;
    // height: calc(100% - 40px);
    background: no-repeat url('../assets/test/welcomeBackground.jpg')  center center;
    background-size: cover;
    z-index: -1;
    opacity: 0.8;

    .welcomeBackground {
      position: absolute;
      width: 100%;
      height: 100%;
      // height: calc(100% - 40px);
      background: no-repeat url('../assets/test/welcomeBackground.jpg')  center center;
      background-size: cover;
      background-origin: content-box;
      z-index: -1;
      opacity: 0.8;
    }

    .welcomeTextContainer {
      height: 100px;
      // float: left;
      padding: 30px 0 0 30px;
      text-align: left;

      .welcomeText {
        font-size: 32px;
        color: white;
      }
    }
  }
</style>
<script>
import Recently from '../components/Rencently'
export default {
  name: 'welcome',
  components: {Recently}
}
</script>