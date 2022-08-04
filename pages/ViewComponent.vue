<template>
  <div>
    <PaginationBasic
      :size="SIZE"
      :max="MAX"
      :total-page="totalPage"
      :current-page="currentPage"
      @paginate="paginate"
    />
  </div>
</template>

<script>
import PaginationBasic from '@/components/basic/PaginationBasic'
export default {
  name: 'ViewComponent',
  components: { PaginationBasic },
  data() {
    return {
      SIZE: 10,
      MAX: 3,
      totalPage: 11,
      currentPage: 1,
    }
  },
  methods: {
    paginate(_page) {
      if (_page === 'prev') {
        this.currentPage--
        return
      } else if (_page === 'next') {
        this.currentPage++
        return
      }
      this.currentPage = _page
    },
  },
}
</script>

<style lang="scss" scoped></style>
