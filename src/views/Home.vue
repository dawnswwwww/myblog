<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav class="nav"></Nav>
    <div class="mainView">
      <div class="mainViewBackground"></div>
      <transition :duration="{enter: 1000, leave: 200}" name="menuContanier">
        <div v-show="menuShow" class="menuContanier">
          menu area
          <Folder :list="menuArray"></Folder>
          <div class="hideMenu" @click.stop="hideMenu">{{'<'}}</div>
        </div>
      </transition>
      <div v-show="!menuShow" class="showMenu" @click="showMenu">></div>
      <div class="viewArea">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  height: 100vh;
  overflow: hidden;
  position: relative;

  .mainView {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    box-sizing: border-box;
    margin-top: 40px;

    // .mainViewBackground {
    //   position: absolute;
    //   width: 100%;
    //   height: calc(100% - 40px);
    //   background: no-repeat url('../assets/test/welcomeBackground.jpg')  center center;
    //   background-size: cover;
    //   z-index: -1;
    //   opacity: 0.8;
    // }

    .viewArea {
      width: 100%;
      height: 100%;
    }
  }

  .menuContanier {
    border-right: 2px solid rgba(31, 31, 31, 0.3);
    position: relative;
    background-color: green;
    width: 200px;
    height: 100%;

    .hideMenu {
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      right: 0;
      padding: 5px;
      background-color: red;
    }
  }

  .menuContanier-enter-active, .menuContanier-leave-active {
    transition-duration: 1s;
  }

  .menuContanier-enter, .menuContanier-leave-to {
    width: 0px;
  }


  .showMenu {
    // width: 50px;
    // height: 50px;
    padding: 2px 5px 2px 5px;
    background-color: yellow;
    position: absolute;
    z-index: 50;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav {
    float: left;
    position: absolute;
    top: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Folder from '../components/Folder'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav,
    Folder
  },
  data() {
    return {
      menuShow: true,
      menuArray: [{title: 'lala', subArray: [{content: '1', click: () => {console.log(123)}}, {content: 'about', src: '/about'}, {content: 'welcome', src: '/welcome'}, {content: '4'}, {content: '5'}]}, {title: 'haha', subArray: [{content: '1'}, {content: '2'}, {content: '3'}, {content: '4'}, {content: '5'}]}]
    }
  },
  methods: {
    hideMenu() {
      this.menuShow = false
    },
    showMenu() {
      this.menuShow = true
    },
  },
}
</script>
