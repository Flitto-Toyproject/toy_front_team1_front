<template>
  <div class="post-wrap">
    <div class="post-skeleton">
      <img
        class="post-skeleton__flitto-logo"
        src="@/assets/svg/flitto/flitto_logo.svg"
      />
    </div>
    <div class="post-content-wrap">
      <strong class="post-title">{{ postObj.title }}</strong>
      <div class="post-content">{{ postObj.content }}</div>
      <div class="post-user-wrap">
        <img class="post-user__img" />
        <div class="post-user__default-img" />
        <span class="post-user__name">작성자 : {{ postObj.writer_name }}</span>
      </div>
      <div class="post-tag-wrap">
        <TagContent
          v-for="tag in postObj.tag_list"
          :key="tag"
          class="tag-content"
          :tag="tag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagContent from './TagContent.vue'

export default {
  name: 'GridPostContent',
  components: { TagContent },
  props: {
    postObj: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      sampleData: '',
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
.post-wrap {
  margin: 1rem 0;

  display: flex;

  @include tablet {
    flex-direction: column;
  }
}

.post-skeleton {
  width: 15em;
  height: 10em;
  background-color: $deep-gray;
  margin-right: 2rem;
  border-radius: 1em;
  position: relative;

  flex: 0 15em;

  &__flitto-logo {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    bottom: 0.7em;
    right: 0.7em;
  }

  @include tablet {
    width: 100%;
    margin-right: 0;

    display: flex;
    justify-content: center;
  }
}

.post-content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5em 0;

  flex: 1;
}

.post-title {
  font-size: 1.5em;
  color: $black;

  cursor: pointer;
  &:hover {
    color: $normal-blue;
  }
}

.post-content {
  color: $deep-gray;
  margin: 0.5em 0px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-user {
  &-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__name {
    color: $black;
    font-weight: 500;
    margin-left: 0.5em;
  }
  &__default-img {
    width: 2em;
    height: 2em;
    background-color: $deep-gray;
    border-radius: 2em;
  }
}

.post-tag-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tag-content {
  margin: 0.5em 0.5em 0px 0px;
}
</style>
