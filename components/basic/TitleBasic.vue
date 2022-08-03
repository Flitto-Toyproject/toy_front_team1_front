<template>
  <h1 class="title-content">
    <strong>{{ titleContent }}</strong>
  </h1>
</template>

<script>
export default {
  name: 'TitleBasic',
  props: {
    titleContent: {
      type: String,
      default: '',
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.title-content {
  color: $deep-blue;
  font: {
    family: 'HelveticaNeue-Bold';
    size: 1.5rem;
  }
}
</style>
