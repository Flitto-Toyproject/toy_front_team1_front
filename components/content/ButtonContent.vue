<template>
  <div
    class="button-content"
    :class="{
      'button-content__major': isMajor,
    }"
    @click="clickButton"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'ButtonContent',
  props: {
    value: {
      type: String,
      required: true,
    },
    isMajor: {
      // 버튼 배경이 navy or white
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    clickButton() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.button-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 2em;
  cursor: pointer;
  color: $deep-blue;
  border: 2px solid $deep-blue;
  border-radius: 0.6em;
  font-size: 1.1em;
  text-align: center;
  word-break: keep-all;

  &__major {
    background-color: $deep-blue;
    color: white;
    font-weight: 700;
  }
}
</style>
