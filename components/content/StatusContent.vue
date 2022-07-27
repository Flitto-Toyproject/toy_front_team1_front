<template>
  <div v-if="isShow" class="status" :class="computedStatus[1]">
    {{ computedStatus[0] }}
  </div>
</template>

<script>
export default {
  name: 'StatusContent',
  props: {
    status: {
      type: String,
      default: '',
      required: false,
    },
    isShow: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    computedStatus() {
      const statusObj = {
        E: { show: 'Editing', class: 'editing' },
        W: { show: 'Waiting', class: 'waiting' },
        R: { show: 'Rejected', class: 'rejected' },
        P: { show: 'Published', class: 'published' },
      }

      const showStatus = statusObj[this.status].show
      const classStatus = statusObj[this.status].class

      return [showStatus, classStatus]
    },
  },
}
</script>

<style lang="scss" scoped>
.status {
  width: 7em;
  height: 2em;
  line-height: 2.1em;
  border-radius: 2em;
  text-align: center;
  color: white;
  background-color: #333333;
}
.editing {
  color: $black;
  background-color: $light-gray;
}
.waiting {
  background-color: $normal-yellow;
}
.rejected {
  background-color: $normal-red;
}
.published {
  background-color: $light-blue;
}
</style>
