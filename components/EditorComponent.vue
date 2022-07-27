<template>
  <client-only class="container">
    <ckeditor
      :editor="editor"
      :config="editorConfig"
      v-model="editorData"
    ></ckeditor>
  </client-only>
</template>

<script>
let Editor
let CKEditor

/* ckeditor는 client side only이다. */
if (process.client) {
  Editor = require('@/assets/ckeditor/build/ckeditor')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = { component: { template: '<div></div>' } }
}

export default {
  name: 'EditorComponent',
  components: { ckeditor: CKEditor.component },
  data() {
    return {
      editor: Editor,
      editorData: '',
      editorConfig: {
        toolbar: {
          items: [
            'heading',
            '|',
            'fontColor',
            'fontBackgroundColor',
            'fontSize',
            'fontFamily',
            'bold',
            'italic',
            'underline',
            '|',
            'blockQuote',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'imageInsert',
            'specialCharacters',
            'link',
            'code',
            'codeBlock',
            '|',
            'undo',
            'redo',
            'findAndReplace',
          ],
        },
        language: 'ko',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
          ],
        },
      },
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
// .container {
//   max-width: 50rem;
// }
</style>
