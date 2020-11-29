<template>
  <div class="editorContainer">
      New Article
      <div><label for="title">标题</label><input type="text" name="title" v-model="title" placeholder="请输入文章标题"></div>
      <div><label for="tags">标签</label><select name="tags" id="">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select></div>
      <div>
        <!-- <quill-editor class="editor" v-model="editorContent"></quill-editor> -->
        <mavon-editor 
        :toolbars="markdownOption" 
        v-model="editorContent"
        @save="save"
         />
      </div>
      <div class="controlContainer"><button class="save" @click="save">保存</button><button class="submit" @click="submit">发布</button></div>
  </div>
</template>
<style lang="less" scoped>
  .editorContainer {
    .editor {
      height: 70vh;
    }

    .save {
      margin-right: 20px;
    }

    .submit {
      margin-top: 100px;
    }
  }
</style>
<script>
import Vue from 'vue'
import { quillEditor } from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import mavonEditer from 'mavon-editor'
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditer)
export default {
  components: {
    QuillEditor: quillEditor,
    // mavonEditer
  },
  data() {
    return {
      editorContent: '',
      title: '',
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
      /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  },
  methods: {
    submit() {
      console.log(this.editorContent)
      return
      // if (this.editorContent) {
      //   this.axios.post('http://localhost:3000/publish', {
      //     type: '1',
      //     value: this.editorContent
      //   }).then((result) => {
      //     console.log(result)
      //   }).catch((err) => {
      //     console.error(err)
      //   })
      // }
    },
    save() {
      console.log(this.editorContent)
      if (this.editorContent) {
        this.plugins.api.request({url: '/api/save', params: {
          type: '1',
          value: this.editorContent,
          title: this.title
        }}).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.error(err)
        })
      }
    }
  }
}
</script>