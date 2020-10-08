<template>
  <div class="editorContainer">
      New Article
      <div><label for="title">标题</label><input type="text" name="title"></div>
      <div><label for="tags">标签</label><select name="tags" id="">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select></div>
      <div>
        <quill-editor class="editor" v-model="editorContent"></quill-editor>
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
export default {
  components: {
    QuillEditor: quillEditor
  },
  data() {
    return {
      editorContent: ''
    }
  },
  methods: {
    submit() {
      console.log(this.editorContent)
      if (this.editorContent) {
        this.axios.post('http://localhost:3000/publish', {
          type: '1',
          value: this.editorContent
        }).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.error(err)
        })
      } else {

      }
    },
    save() {
      console.log(this.editorContent)
      if (this.editorContent) {
        this.axios.post('http://localhost:3000/save', {
          type: '1',
          value: this.editorContent
        }).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.error(err)
        })
      } else {

      }
    }
  }
}
</script>