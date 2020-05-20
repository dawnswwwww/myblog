/*
*  prop: 
*     list: [{title:'', subArray: [{content: ''， click, src}, ...]}, ...]
*     title: 一级标题
*     content: 子菜单标题
*     click: 点击事件
*     src：跳转连接
* */

<template>
  <div class="folderContainer">
    <div class="levelOne" v-for="(item, index) in list" :key="index">
      <div class="title" @click="toggle(index)">{{item.title}}</div>
      <div :class="['subList', array4Closed[index] ? 'closed' : '']">
        <a class="subListItem" v-for="(subItem, subIndex) in item.subArray" :key="subIndex" @click="dealClickFunc(subItem.click)" :href="subItem.src">{{subItem.content}}</a>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .levelOne {
    width: 100%;
    
    .title {
      font-family: 'Courier New', Courier, monospace;
      border-top: 2px solid brown;
      border-bottom: 2px solid brown;
      text-align: left;
      line-height: 25px;
      text-indent: 5px;
      background-color: rgb(157, 189, 201);
      height: 25px;
    }

    .subList {
      transition: 1s;
      padding-left: 10px;

      &.closed {
        height: 0;
        overflow: hidden;
      }
           
      .subListItem {
        border: 1px solid #cccccc;
        display: block;
        width: 100%;
        text-align: left;
        background-color: rgb(238, 228, 226);
      }
    }
  }
</style>
<script>
export default {
  props: {
    list: {
      require: true,
      type: Array
    }
  },
  data() {
    return {
      array4Closed: [],
    }
  },
  methods: {
    toggle(index) {
      this.$set(this.array4Closed, index, !this.array4Closed[index])
    },
    dealClickFunc(click) {
      try {
        if (click) {
          click()
        }
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  created() {
    this.$set(this, 'array4Closed', [this.list.length].fill(false))
    console.log(this.list)
  }
}
</script>