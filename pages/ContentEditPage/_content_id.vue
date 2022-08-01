<template>
  <div class="content-container">
    <div class="content-wrap">
      <div class="title-input">
        <input
          class="title-input__form"
          type="text"
          :value="title"
          :placeholder="'제목을 입력하세요'"
          @input="updateTitle"
        />
      </div>
      <EditorComponent v-model="editorInput" />
      <div class="content-additional">
        <div class="content-additional__tags-wrapper">
          <div class="content-additional__items">
            <strong class="content-additional__title">Tags</strong>
            <InputBasic
              v-model="inputTag"
              :placeholder="'태그를 입력해주세요'"
              :add-button="true"
              :type="'text'"
              @add="addTag(inputTag)"
            />
          </div>
          <div class="content-additional__tags">
            <TagContent
              v-for="tag in tags"
              :key="tag"
              :is-editing="true"
              class="content-additional__tag-content"
              :tag="tag"
              @remove="removeTag(tag)"
            />
          </div>
        </div>
        <div class="content-additional__thumbnail-wrapper">
          <div class="content-additional__items">
            <strong class="content-additional__title">Thumbnail</strong>
            <InputBasic
              v-model="thumbnail"
              :placeholder="'썸네일 URL을 입력해주세요'"
              :add-button="true"
              :type="'text'"
            />
            <div class="content-additional__preview" />
          </div>
        </div>
        <div class="button-wrapper">
          <ButtonContent
            :value="'발행'"
            :is-major="true"
            @click="publishContent"
          />
          <ButtonContent :value="'임시저장'" @click="saveContent" />
          <ButtonContent :value="'취소'" @click="cancelContent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

import ButtonContent from '@/components/content/ButtonContent'
import InputBasic from '@/components/basic/InputBasic'
import TagContent from '@/components/content/TagContent'
import EditorComponent from '@/components/EditorComponent.vue'

export default {
  name: 'ContentPage',
  components: { TagContent, InputBasic, ButtonContent, EditorComponent },
  asyncData({ params, error }) {
    let isNewContent
    let editingData = null

    if (params.content_id === undefined) {
      // 새 컨텐츠 작성
      isNewContent = true
    } else if (isNaN(params.content_id)) {
      // 에러 페이지, 추후 content_id GET 실패 시 에러 호출로 수정 필요
      error(404)
    } else {
      // 기존 컨텐츠 작성
      isNewContent = false

      const { postObj } = require('@/api/test.js')
      editingData = postObj
    }

    const title = editingData?.title ? editingData.title : ''
    const editorInput = editingData?.content ? editingData.content : ''
    const tags = editingData?.tags ? editingData.tags : []
    const thumbnail = editingData?.thumbnail ? editingData.thumbnail : ''

    return { isNewContent, title, editorInput, tags, thumbnail }
  },
  data() {
    return {
      inputTag: '',
    }
  },
  methods: {
    removeTag(_tag) {
      const tag = this.tags.filter((tag) => tag !== _tag)
      this.tags = tag
    },
    addTag(_inputTag) {
      const isEqual = this.tags.find((tag) => tag === _inputTag)
      if (isEqual) {
        alert('같은 내용의 태그를 또 입력할 수 없습니다.')
        return
      }
      this.tags.push(_inputTag)
    },
    updateTitle(e) {
      this.title = e.target.value
    },
    publishContent() {
      console.log('content published')
      // const contentData = {
      //   writer_user_id: WRITER_USER_ID,
      //   title: this.title,
      //   content: this.editorInput,
      //   tags: this.tags,
      //   thumnail: THUMBNAIL,
      //   status: 'W', // 발행 : editing -> waiting
      // }

      // const res = await axios.post('localhost:33000/', { params: contentData })
      // console.log('res', res)
    },
    saveContent() {
      console.log('content saved')
      // const contentData = {
      //   writer_user_id: WRITER_USER_ID,
      //   title: this.title,
      //   content: this.editorInput,
      //   tags: this.tags,
      //   thumnail: THUMBNAIL,
      //   status: 'E', // 임시저장 : editing
      // }

      // const res = await axios.post('localhost:33000/', { params: contentData })
      // console.log('res', res)
    },
    cancelContent() {
      console.log('canceled')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  justify-content: center;
}
.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  padding: 1rem 2rem;
}
.title-input {
  width: 55rem;
  margin: 1rem;
  &__form {
    border: 0.1rem solid $light-gray;
    border-radius: 0.3rem;
    width: 100%;
    height: 2rem;
    padding-left: 0.5rem;
  }
}
.content-additional {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  // height: calc(100vh - 180px);
  padding: 1em 2.5em;
  &__tags-wrapper {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
  }
  &__tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__tag-content {
    display: flex;
    flex-direction: row;
    margin: 0.5em 1em 0px 0px;
  }
  &__thumbnail-wrapper {
    margin: 1.5rem 0;
  }
  &__title {
    color: $deep-blue;
    font-size: 1.75rem;
    font-weight: 700;
  }
  &__input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &__preview {
    width: 18rem;
    height: 15rem;
    background-color: $light-gray;
    border-radius: 1em;
  }
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  :not(:first-child) {
    margin-left: 1em;
  }
}
</style>
