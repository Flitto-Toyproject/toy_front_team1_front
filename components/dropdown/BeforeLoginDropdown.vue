<template>
  <div class="before-login">
    <img
      class="before-login__logo-img"
      src="@/assets/svg/login/flitto_logo_centered.svg"
      alt="flitto_logo"
    />
    <div class="before-login__decription">
      <p><strong>세상의 모든 번역,</strong></p>
      <p><strong>Flitto의 기술 블로그에 참여해보세요!</strong></p>
    </div>
    <div class="before-login__google-login-form">
      <img
        class="before-login__continue-with-google"
        src="@/assets/svg/login/continue_with_google.svg"
        alt="continue_with_google"
        @click="login"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeLoginDropdown',
  methods: {
    login() {
      this.$emit('login')
    },
  },
}
</script>

<style lang="scss" scoped>
.before-login {
  position: absolute;
  top: 3.2rem;
  right: 0;
  background-color: white;
  z-index: 999;
  border: 0.1rem solid $light-gray;

  width: 25rem;
  height: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  border-radius: 2rem 0 2rem 2rem;

  &__continue-with-google {
    cursor: pointer;
  }
}

.before-login__logo-img {
  width: 6.25rem;
}

.before-login__decription {
  font: {
    family: 'NanumGothic-Bold';
    size: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.before-login__google-login-form {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
