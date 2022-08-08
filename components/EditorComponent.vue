<template>
  <div>
    <client-only class="container">
      <ckeditor
        :value="value"
        :editor="editor"
        :config="editorConfig"
        @input="(event) => $emit('input', event)"
      ></ckeditor>
    </client-only>
  </div>
</template>

<script>
import MyUploadAdapter from '@/assets/editor.js'

let Editor
let CKEditor

/* ckeditor는 client side only이다. */
if (process.client) {
  Editor = require('@ckeditor/ckeditor5-build-classic')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = {
    component: { template: '<div></div>' },
  }
}

export default {
  name: 'EditorComponent',
  components: { ckeditor: CKEditor.component },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: Editor,
      editorConfig: {
        extraPlugins: [MyUploadAdapter],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
