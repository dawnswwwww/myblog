<template>
  <div>
     <div>login page</div>
      <div class="loginContainer">
        <div class="loginCOntainerTitle">login</div>
        <div>
        <label for="username">登录名</label><input type="text" name="username">
        </div>
        <div>
        <label for="username">密码</label><input type="text" name="password">
        </div>
        <div>
          <button>注册</button>
        </div>
        <div>
          <router-link to="/Login">去登录</router-link>
        </div>
      </div>
  </div>
</template>
<style lang="less" scoped>
  .loginContainer {
    margin: 0 auto;
    margin-top: 50px;
    width: 600px;
    height: 400px;
    background-color: rgba(22, 22, 22, 0.3);
  }
</style>