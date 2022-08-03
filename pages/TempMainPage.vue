<template>
  <div class="container">
    <div class="wrap">
      <div class="content-wrap">
        <div class="display-icons">
          <img
            class="display-icons__icon"
            :src="require(`@/assets/svg/common/${displayIcons.block}`)"
            @click="selectDisplay('block')"
          />
          <img
            class="display-icons__icon"
            :src="require(`@/assets/svg/common/${displayIcons.list}`)"
            @click="selectDisplay('list')"
          />
        </div>
        <div class="posts">
          <div v-for="post in posts" :key="post.post_id" class="post-wrap">
            <div class="post-skeleton">
              <img
                class="post-skeleton__flitto-logo"
                src="@/assets/svg/flitto/flitto_logo.svg"
              />
            </div>
            <div class="post-content-wrap">
              <strong class="post-title">{{ post.title }}</strong>
              <div class="post-content">{{ post.content }}</div>
              <div class="post-user-wrap">
                <img class="post-user__img" />
                <div class="post-user__default-img" />
                <span class="post-user__name"
                  >작성자 : {{ post.writer_name }}</span
                >
              </div>
              <div class="post-tag-wrap">
                <TagContent
                  v-for="tag in post.tag_list"
                  :key="tag"
                  class="tag-content"
                  :tag="tag"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">페이지네이션</div>
      </div>
      <div class="tags-list">
        <div class="tags-list__border-wrapper">
          <strong class="tags-list__title">Tags</strong>
          <ul class="tags-list__items">
            <li
              v-for="tag in tags"
              :key="tag.tag_id"
              :class="[
                tag.tag_name === selectedTag
                  ? 'tags-list__selected-item'
                  : 'tags-list__item',
              ]"
              @click="searchByTag(tag.tag_name)"
            >
              {{ tag.tag_name }} <span>({{ tag.tag_count }})</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tagArr, postsArr } from '@/api/test'
import TagContent from '@/components/content/TagContent'

export default {
  name: 'TempMainPage',
  components: { TagContent },
  data() {
    return {
      tags: [...tagArr],
      posts: [...postsArr],
      displayIcons: {
        block: 'block_selected.svg',
        list: 'list.svg',
      },
      selectedTag: '',
    }
  },
  methods: {
    searchByTag(_tag) {
      this.selectedTag = _tag
    },
    selectDisplay(_display) {
      if (_display === 'block') {
        this.displayIcons.block = 'block_selected.svg'
        this.displayIcons.list = 'list.svg'
      } else if (_display === 'list') {
        this.displayIcons.block = 'block.svg'
        this.displayIcons.list = 'list_selected.svg'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.wrap {
  display: flex;
  justify-content: space-around;
  padding: 1em 2em;
  width: 85%;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.display-icons {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-bottom: 1em;
  :first-child {
    margin-right: 0.5em;
  }
  &__icon {
    cursor: pointer;
  }
}

.tags-list {
  line-height: 2.8em;
  @include laptop {
    margin-left: 1em;
  }
  &__border-wrapper {
    border-left: 1px solid $deep-gray;
    padding-left: 1.5em;
    margin-left: 1.5em;
  }
  &__title {
    color: $deep-blue;
    font-weight: 700;
    font-size: 1.5em;
  }
  &__items {
    color: $deep-gray;
    font-size: 1.1em;
  }
  &__selected-item {
    cursor: pointer;
    color: $deep-blue;
  }
  &__item {
    cursor: pointer;
  }
}

.post-tag-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1em 0px;
}

.tag-content {
  margin: 1em 0.5em 0px 0px;
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-auto-flow: row;
  grid-gap: 2em 1em;
  width: 1000px;
  @include laptop {
    width: 700px;
    grid-template-columns: 1fr 1fr;
  }
  @include tablet {
    width: 300px;
    grid-template-columns: 1fr;
  }
}

.post-wrap {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.post-skeleton {
  width: 20em;
  height: 14em;
  background-color: $deep-gray;
  border-radius: 1em;
  position: relative;
  &__flitto-logo {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 11.6em;
    right: 0.7em;
  }
}

.post-content-wrap {
  margin-top: 1em;
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

.post-title {
  font-size: 1.5em;
  color: $black;
}

.post-content {
  color: $deep-gray;
  margin: 0.5em 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
