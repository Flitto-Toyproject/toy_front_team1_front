<template>
  <ul class="pagination">
    <li
      v-if="isDisplayPrevButton"
      class="pagination__page-link"
      @click="paginate('prev')"
    >
      〈
    </li>
    <li v-for="page in pages" :key="page" class="pagination__page-item">
      <div
        :class="[
          page === currentPage
            ? 'pagination__page-link--active'
            : 'pagination__page-link',
        ]"
        @click="paginate(page)"
      >
        {{ page }}
      </div>
    </li>
    <li
      v-if="isDisplayNextButton"
      class="pagination__page-link"
      @click="paginate('next')"
    >
      〉
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PaginationBasic',
  props: {
    size: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pages: [],
      startIndex: 1,
      endIndex: 1,
      isDisplayPrevButton: true,
      isDisplayNextButton: true,
    }
  },
  watch: {
    currentPage() {
      this.getPages()
    },
  },
  created() {
    this.getPages()
  },
  methods: {
    getPages() {
      const newPages = []
      const totalPage = Math.ceil(this.total / this.size)

      this.startIndex =
        Math.ceil(this.currentPage / this.max - 1) * this.max + 1
      this.endIndex =
        this.startIndex + this.max > totalPage
          ? totalPage
          : this.startIndex + this.max - 1
      for (let i = this.startIndex; i <= this.endIndex; i++) {
        newPages.push(i)
      }

      this.pages = [...newPages]

      this.isDisplayPrevButton = !(
        this.startIndex === 1 && this.currentPage === 1
      )
      this.isDisplayNextButton = this.currentPage !== totalPage
    },
    paginate(_page) {
      this.$emit('paginate', _page)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.5em 0;
  &__page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &__page-link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: $black;
    width: 1.7em;
    height: 1.7em;
    border: 1px solid $deep-gray;
    border-radius: 5px;
    margin: 0 0.5em;
    &--active {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 1.7em;
      height: 1.7em;
      border: 1px solid $normal-blue;
      border-radius: 5px;
      background-color: $normal-blue;
      color: white;
      margin: 0 0.5em;
    }
  }
}
</style>
