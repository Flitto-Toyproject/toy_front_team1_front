<template>
  <div class="content-wrap">
    <HeaderComponent />
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
            class="content-additional__tag-content"
            :tag="tag"
            @remove="removeTag(tag)"
          />
        </div>
      </div>
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
      <div class="button-wrapper">
        <ButtonContent :value="'발행'" />
        <ButtonContent :value="'임시저장'" />
        <ButtonContent :value="'취소'" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import ButtonContent from '@/components/content/ButtonContent'
import InputBasic from '@/components/basic/InputBasic'
import TagContent from '@/components/content/TagContent'
export default {
  name: 'ContentPage',
  components: { TagContent, InputBasic, ButtonContent },
  data() {
    return {
      tags: [
        'frontend',
        'vue.js',
        'nuxt.js',
        'javascript',
        'html5',
        'css5',
        'java',
        'backend',
        'nest.js',
        'typescript',
      ],
      thumbnail: '',
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
  },
}
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}
.content-additional {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 180px);
  padding: 1em 2.5em;
  &__tags-wrapper {
    display: flex;
    flex-direction: column;
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
  :not(:first-child) {
    margin-left: 1em;
  }
}
</style>
