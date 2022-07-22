<template>
  <div class="login-form">
    <img
      class="login-form__logo-img"
      src="@/assets/svg/login/flitto_logo_centered.svg"
      alt="flitto_logo"
    />
    <div class="login-form__decription">
      <p><strong>세상의 모든 번역,</strong></p>
      <p><strong>Flitto의 기술 블로그에 참여해보세요!</strong></p>
    </div>
    <div class="login-form__google-login-form">
      <img
        class="login-form__continue-with-google"
        src="@/assets/svg/login/continue_with_google.svg"
        alt="continue_with_google"
      />
      <img
        class="login-form__signup-with-google"
        src="@/assets/svg/login/signup_with_google.svg"
        alt="continue_with_google"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeLoginDropdown',
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 25rem;
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  border-radius: 2rem;
  // border: solid $black 0.1rem;
}

.login-form__logo-img {
  width: 6.25rem;
}

.login-form__decription {
  font: {
    family: 'NanumGothic-Bold';
    size: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form__google-login-form {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
