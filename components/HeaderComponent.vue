<template>
  <header>
    <div class="header-left">
      <img
        class="header-left__logo-img"
        src="@/assets/svg/header/flitto_logo.svg"
        alt="flitto_logo"
      />
      <p class="header-left__title">기술블로그</p>
    </div>
    <div class="header-right">
      <input
        class="header-right__search-input"
        placeholder="검색할 내용을 입력해주세요"
      />
      <img
        class="header-right__search-icon"
        src="@/assets/svg/header/search_icon.svg"
        alt="search_icon"
      />
      <div class="profile-wrapper">
        <div class="profile-wrapper__profile-img" />
        <div class="profile-wrapper__alert" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}
.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header-left__logo-img {
  width: 10em;
}
.header-left__title {
  font-family: 'NanumGothic-Regular';
  font-weight: 700;
  font-size: 1.75em;
  color: $black;
  padding-top: 0.25em;
}
.header-right {
  display: flex;
  flex-direction: row;
  width: 35vw;
  justify-content: space-between;
}
.header-right__search-input {
  background-color: $normal-gray;
  border-radius: 1em;
  width: 18.75em;
  height: 3.125em;
}
.header-right__search-input {
  padding-left: 1rem;
  color: $black;
}
.profile-wrapper {
  padding-left: 2em;
}
.profile-wrapper__profile-img {
  width: 2.5em;
  height: 2.5em;
  background-color: $deep-gray;
  border-radius: 5em;
  position: relative;
}
.profile-wrapper__alert {
  width: 0.625em;
  height: 0.625em;
  background-color: $normal-blue;
  border-radius: 0.625em;
  position: absolute;
  top: 1.75rem;
  right: 1rem;
}
</style>
