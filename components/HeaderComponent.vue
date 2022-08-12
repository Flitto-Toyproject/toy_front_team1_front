<template>
  <header>
    <div class="header-left" @click="goToHome">
      <img
        class="header-left__logo-img"
        src="@/assets/svg/header/flitto_logo.svg"
        alt="flitto_logo"
      />
      <p class="header-left__title">기술블로그</p>
    </div>
    <div class="header-right">
      <InputBasic
        v-model="keyword"
        :placeholder="'검색할 내용을 입력해주세요'"
        :type="'text'"
        :add-button="false"
      />
      <img
        class="header-right__search-icon"
        src="@/assets/svg/header/search_icon.svg"
        alt="search_icon"
        @click="searchKeyword"
      />
      <strong
        v-if="!isAuthenticated"
        class="header-right__login"
        @click="toggleDropdown"
      >
        로그인
      </strong>
      <div v-else class="profile-wrapper" @click="toggleDropdown">
        <div class="profile-wrapper__profile-img" />
        <div class="profile-wrapper__alert" />
      </div>
      <BeforeLoginDropdown
        v-if="isDropdownOpened && !isAuthenticated"
        @login="login"
      />
      <AfterLoginDropdown
        v-if="isDropdownOpened && isAuthenticated"
        @logout="logout"
        @close="toggleDropdown"
      />
    </div>
  </header>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import { GET_TOKEN_FROM_SERVER, LOG_OUT } from '@/store/index.js'
import InputBasic from '@/components/basic/InputBasic'
import BeforeLoginDropdown from '@/components/dropdown/BeforeLoginDropdown.vue'
import AfterLoginDropdown from '@/components/dropdown/AfterLoginDropdown.vue'

export default {
  name: 'HeaderComponent',
  components: { InputBasic, BeforeLoginDropdown, AfterLoginDropdown },
  data() {
    return {
      keyword: '',
      userInfo: {},
      isDropdownOpened: false,
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    login() {
      // const data = await axios.get(
      //   `http://localhost:33000/api/auth/login/google`,
      // )
      this.$store.dispatch(GET_TOKEN_FROM_SERVER)
      this.isDropdownOpened = false
    },
    logout() {
      this.$store.dispatch(LOG_OUT)
      this.isDropdownOpened = false
      window.location.reload()
    },
    goToHome() {
      this.$router.push('/')
    },
    goToMypage() {},
    searchKeyword() {
      this.$store.commit('changeKeyword', this.keyword)
      this.$router.push('/')
      this.keyword = ''
    },
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened
    },
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
  @media (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
  }
}
.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &__logo-img {
    width: 10em;
  }
  &__title {
    font-weight: 700;
    font-size: 1.75em;
    color: $black;
    padding-top: 0.25em;
    @include tablet {
      display: none;
    }
  }
}
.header-right {
  width: 25em;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__search-input {
    background-color: $normal-gray;
    border-radius: 1em;
    width: 18.75em;
    height: 3.125em;
    padding-left: 1em;
    color: $black;
  }
  &__search-icon {
    color: $black;
    cursor: pointer;
  }
  &__login {
    cursor: pointer;
  }
}
.profile-wrapper {
  padding-left: 2em;
  position: relative;
  cursor: pointer;
  &__profile-img {
    width: 2.5em;
    height: 2.5em;
    background-color: $deep-gray;
    border-radius: 5em;
  }
  &__alert {
    width: 0.625em;
    height: 0.625em;
    background-color: $normal-blue;
    border-radius: 0.625em;
    position: absolute;
    top: -0.1em;
    right: -0.1em;
  }
}
</style>
