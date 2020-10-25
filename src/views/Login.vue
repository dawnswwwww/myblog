<template>
  <div>
     <div>login page</div>
      <div class="loginContainer">
        <div class="loginCOntainerTitle">login</div>
        <div>
        <label for="username">登录名</label><input type="text" name="username" v-model="username">
        </div>
        <div>
        <label for="username">密码</label><input type="password" name="password" v-model="password">
        </div>
        <div>
          <button @click="login">登录</button>
        </div>
        <div>
          <router-link to="/Register">去注册</router-link>
          <span>忘记密码</span>
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
    login() {
      console.log('login', this.Plugins)
      // console.log(this.axios)
      // this.axios.post('http://localhost:3000/login', {
      //   username: this.username,
      //   password: this.password
      // }).then((result) => {
      //   console.log(result)
      //   if (result.data.statusCode === 1) {
      //     window.alert(result.data.msg)
      //   }
      //   if (result.data.statusCode === 0) {
      //     window.alert(result.data.msg)
      //   }
      // })

      this.Plugins.request.api({
        url: '/api/login',
        params: {
          username: this.username,
          password: this.password
        }
      }).then((result) => {
        console.log(result)
        if (result.statusCode === 1) {
          window.alert(result.msg)
        }
        if (result.statusCode === 0) {
          window.alert(result.msg)
        }
      })
    }
  }
}
</script>