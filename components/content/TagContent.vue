<template>
  <div
    class="tag"
    :class="{ 'tag--not-editing': !isEditing, 'tag--is-in-list': isInList }"
  >
    <div class="tag__title">{{ tag }}</div>
    <img
      v-if="isEditing"
      class="tag__cancel-img"
      src="@/assets/svg/content/cancel_icon.svg"
      alt="cancel_icon"
      @click="removeTag"
    />
  </div>
</template>

<script>
export default {
  name: 'TagContent',
  props: {
    isEditing: {
      type: Boolean,
      default: false,
      required: false,
    },
    tag: {
      type: String,
      default: '',
      required: true,
    },
    isInList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    removeTag() {
      this.$emit('remove')
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  border: 1px solid $deep-gray;
  border-radius: 0.8em;
  position: relative;

  &__title {
    color: $black;
    word-break: break-word;
  }
  &__cancel-img {
    position: absolute;
    top: 0.2em;
    right: 0.1em;
    cursor: pointer;
  }
  &--not-editing {
    padding: 0.2em 1em;
    font-size: 0.8em;
    color: $deep-gray;
  }

  &--is-in-list {
    padding: 0.1em 0.8em;
    font-size: 0.6em;
  }
}
</style>
