<template>
  <div
    class="button-content"
    :class="{ 'button-content__focus': isFocus }"
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
  },
  data() {
    return {
      isFocus: false,
    }
  },
  methods: {
    clickButton() {
      this.isFocus = !this.isFocus
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
  &__focus {
    background-color: $deep-blue;
    color: white;
    font-weight: 700;
  }
}
</style>
