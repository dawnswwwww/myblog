<template>
  <div>
     <div>login page</div>
      <div class="loginContainer">
        <div class="loginCOntainerTitle">注册</div>
        <div>
        <label for="username">登录名</label><input type="text" name="username" v-model="username">
        </div>
        <div>
        <label for="username">密码</label><input type="password" name="password" v-model="password">
        </div>
        <div>
          <button @click="register">注册</button>
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
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      this.axios.post('http://localhost:3000/register', {
        username: this.username,
        password: this.password
      }).then((result) => {
        console.log(result)
        if (result.data.statusCode === 1) {
          window.alert(result.data.msg)
        }
        if (result.data.statusCode === 0) {
          window.alert(result.data.msg)
        }
      })
    }
  }
}
</script>