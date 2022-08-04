<template>
  <div class="container">
    <div class="wrap">
      <div class="content-wrap">
        <div class="display-icons">
          <img
            class="display-icons__icon"
            :src="require(`@/assets/svg/common/${displayIcons.grid}`)"
            @click="selectDisplay('grid')"
          />
          <img
            class="display-icons__icon"
            :src="require(`@/assets/svg/common/${displayIcons.list}`)"
            @click="selectDisplay('list')"
          />
        </div>
        <div class="posts-wrap">
          <div v-if="isShowingGrid" class="posts">
            <GridPostContent
              v-for="post in posts"
              :key="post.post_id"
              :post-obj="post"
            />
          </div>
          <div v-else>
            <ListPostContent
              v-for="post in posts"
              :key="post.post_id"
              :post-obj="post"
            />
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
import GridPostContent from '@/components/content/GridPostContent.vue'
import ListPostContent from '@/components/content/ListPostContent.vue'

export default {
  name: 'TempMainPage',
  components: { ListPostContent, GridPostContent },
  data() {
    return {
      tags: [...tagArr],
      posts: [...postsArr],
      displayIcons: {
        grid: 'grid_selected.svg',
        list: 'list.svg',
      },
      selectedTag: '',
      isShowingGrid: false,
    }
  },
  methods: {
    searchByTag(_tag) {
      this.selectedTag = _tag
    },
    selectDisplay(_display) {
      if (_display === 'grid') {
        this.displayIcons.grid = 'grid_selected.svg'
        this.displayIcons.list = 'list.svg'
        this.isShowingGrid = true
      } else if (_display === 'list') {
        this.displayIcons.grid = 'grid.svg'
        this.displayIcons.list = 'list_selected.svg'
        this.isShowingGrid = false
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
  justify-content: center;
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

.posts-wrap {
  width: 63em;

  @include laptop {
    width: 43.75em;
  }
  @include tablet {
    width: 18.75em;
  }
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-auto-flow: row;
  grid-gap: 2em 1em;
  width: 100%;

  @include laptop {
    grid-template-columns: 1fr 1fr;
  }
  @include tablet {
    grid-template-columns: 1fr;
  }
}
</style>
