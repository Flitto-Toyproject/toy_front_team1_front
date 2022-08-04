<template>
  <div class="menu" @click="handleClick">
    <p class="menu__title" :class="{ 'menu__title--focus': focused }">
      {{ menu }}
    </p>
    <div
      class="menu__content-count"
      :class="{ 'menu__content-count--focus': focused }"
    >
      {{ contentCount > 30 ? 30 + '+' : contentCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPageMenu',
  props: {
    menu: {
      type: String,
      default: 'All',
      require: true,
    },
    contentCount: {
      type: Number,
      default: 0,
      require: true,
    },
    focused: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  margin-right: 1rem;
  cursor: pointer;
  font: {
    family: 'HelveticaNeue-Medium';
  }

  &__title {
    color: $deep-gray;

    &--focus {
      color: $normal-blue;
    }
  }

  &__content-count {
    color: white;
    background-color: $deep-gray;
    margin-left: 0.5rem;
    padding: 0 0.8rem;
    border-radius: 0.6rem;

    &--focus {
      background-color: $normal-blue;
    }

    @include tablet {
      display: none;
    }
  }
}
</style>
