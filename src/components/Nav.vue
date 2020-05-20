<template>
  <div class="navContainer">
    <div class="menuList">
      <router-link to="/newArticle" class="menuListItem">新建</router-link>
      <router-link to="/manage" class="menuListItem">管理</router-link>
    </div>
    <div class="userInfoContainer">
      <div v-if="isLogin">
          <div class="userAvatar">avatar</div>
          <div class="username">username</div>
      </div>
      <div v-else><router-link to="/login">登录</router-link></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .navContainer {
    width: 100%;
    height: 40px;
    background-color: lightblue;

    .menuList {
      float: left;
      display: flex;
      flex-wrap: nowrap;
      height: 100%;
      align-items: center;

      .menuListItem {
        margin-left: 10px;
      }
    }

    .userInfoContainer {
      color: white;
      height: 100%;
      width: 150px;
      background-color: darkblue;
      float: right;
    }
  }
</style>
<script>
export default {
  data() {
    return {
      isLogin: false
    }
  }
}
</script>