<template>
  <div class="container">
    <div class="wrap">
      <div class="content-wrap">
        <div v-if="keyword" class="search-wrap">
          Searched For :
          <span class="search-wrap__keyword">{{ keyword }}</span>
        </div>
        <div class="display-icons">
          <img
            class="display-icons__icon"
            alt="display-grid-icon"
            :src="require(`@/assets/svg/common/${displayIcons.grid}`)"
            @click="selectDisplay('grid')"
          />
          <img
            class="display-icons__icon"
            alt="display-list-icon"
            :src="require(`@/assets/svg/common/${displayIcons.list}`)"
            @click="selectDisplay('list')"
          />
        </div>
        <div class="posts-wrap">
          <div v-if="isShowingGrid" class="posts">
            <GridPostContent
              v-for="post in $store.state.posts"
              :key="post.post_id"
              :post-obj="post"
              @click="test"
            />
          </div>
          <div v-else>
            <ListPostContent
              v-for="post in $store.state.posts"
              :key="post.post_id"
              :post-obj="post"
            />
          </div>
        </div>
        <PaginationBasic
          :size="SIZE"
          :max="MAX"
          :total="total"
          :current-page="currentPage"
          @paginate="paginate"
        />
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
import { tagArr } from '@/api/test'
import GridPostContent from '@/components/content/GridPostContent.vue'
import ListPostContent from '@/components/content/ListPostContent.vue'
import PaginationBasic from '@/components/basic/PaginationBasic'
import { GET_POSTS } from '@/store'
export default {
  name: 'IndexPage',
  components: { PaginationBasic, ListPostContent, GridPostContent },
  middleware: ['auth'],
  async asyncData({ store }) {
    const params = {
      search_type: 'all',
      limit: 9,
      offset: 0,
      keyword: store.state.keyword,
      status: 'P',
    }
    await store.dispatch(GET_POSTS, params)
    return { posts: store.state.posts }
  },
  data() {
    return {
      tags: [...tagArr],
      displayIcons: {
        grid: 'grid_selected.svg',
        list: 'list.svg',
      },
      selectedTag: '',
      isShowingGrid: true,
      SIZE: 9, // TODO: constant 처리
      MAX: 3,
      total: 0,
      currentPage: 1,
    }
  },
  async fetch() {
    await this.$store.dispatch(GET_POSTS)
    this.total = this.$store.state.posts.length
  },
  computed: {
    keyword() {
      return this.$store.state.keyword
    },
  },
  watch: {
    'this.$store.state.keyword'(val) {
      console.log(val)
    },
  },
  methods: {
    test() {
      console.log('test')
    },
    searchByTag(_tag) {
      this.selectedTag = _tag
    },
    selectDisplay(_display) {
      switch (_display) {
        case 'grid':
          this.displayIcons.grid = 'grid_selected.svg'
          this.displayIcons.list = 'list.svg'
          this.isShowingGrid = true
          break
        case 'list':
          this.displayIcons.grid = 'grid.svg'
          this.displayIcons.list = 'list_selected.svg'
          this.isShowingGrid = false
          break
      }
    },
    paginate(_page) {
      switch (_page) {
        case 'prev':
          this.currentPage--
          break
        case 'next':
          this.currentPage++
          break
        default:
          this.currentPage = _page
          break
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
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.search-wrap {
  font-size: 1.5em;
  font-weight: 700;
  color: $deep-blue;
  border-bottom: 1px solid $deep-gray;
  padding-bottom: 0.3em;
  &__keyword {
    font-size: 1em;
    font-weight: 700;
    color: $normal-blue;
  }
}

.display-icons {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin: 1em 0;
  :first-child {
    margin-right: 0.5em;
  }
  &__icon {
    cursor: pointer;
  }
}

.tags-list {
  line-height: 2.4em;
  margin: 1em 0px;

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
    font-size: 1em;
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
  //width: 63em;

  @include laptop {
    //width: 43.75em;
  }
  @include tablet {
    //width: 18.75em;
    min-width: 18.75em;
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
