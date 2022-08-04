<template>
  <div class="button-wrap">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DefaultButtonContent',
}
</script>

<style lang="scss" scoped>
.button-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 1rem;
  :not(:first-child) {
    margin-left: 1em;
  }
}
</style>
