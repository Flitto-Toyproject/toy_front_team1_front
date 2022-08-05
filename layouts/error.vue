<template>
  <div v-if="error.statusCode === 404" class="error">
    <img class="image" src="@/assets/svg/error/404_error.svg" alt="404_error" />
    <div class="text-wrapper">
      <div class="text-wrapper--not-found">
        요청하신 페이지를 찾을 수 없습니다.
      </div>
      <div class="text-wrapper--after-five-min">
        <b class="text-wrapper--after-five-min__bold">5초 뒤 메인으로 이동</b
        >합니다.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: ['error'],
  data() {
    return {
      SECOND: 5000,
    }
  },
  created() {
    setTimeout(() => this.$router.push('/'), this.SECOND)
  },
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.image {
  width: 30em;
  height: 20em;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;
  margin-top: 2em;
  color: $deep-gray;
  &--after-five-min__bold {
    color: $black;
  }
}
</style>
