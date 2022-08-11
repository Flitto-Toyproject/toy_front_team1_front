<template>
  <div class="after-login">
    <header class="after-login__header">
      <div class="after-login__header-left">
        <h2><strong class="user-name">플리토</strong> 님</h2>
        <!-- 유저 이름 들어가야 함 -->
        <p>안녕하세요!</p>
      </div>
      <div class="after-login__header-right">
        <button type="button" @click="closeDropdown">
          <img
            class="after-login__exit"
            src="@/assets/svg/login/exit.svg"
            alt="exit"
          />
        </button>
        <button type="button" class="after-login__logout" @click="logOut">
          로그아웃
        </button>
      </div>
    </header>
    <nav>
      <ul>
        <li class="nav__link"><NuxtLink to="/mypage">마이페이지</NuxtLink></li>
        <li class="nav__link">
          <NuxtLink to="/contenteditpage">새 글 쓰기</NuxtLink>
        </li>
        <li class="nav__link">
          <a href="https://www.flitto.com/careers">인재 채용</a>
        </li>
        <li class="nav__link">
          <NuxtLink to="/notificationpage">알림</NuxtLink>
          <button @click="showNoti">
            <img
              v-if="!isShowingNoti"
              src="@/assets/svg/login/down.svg"
              alt="show_notification"
            />
            <img
              v-else
              src="@/assets/svg/login/up.svg"
              alt="show_notification"
            />
          </button>
        </li>
        <div v-if="isShowingNoti">
          <LoginNotiDropdown />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import LoginNotiDropdown from './LoginNotiDropdown.vue'
export default {
  name: 'AfterLoginDropdown',
  components: { LoginNotiDropdown },
  data() {
    return {
      isShowingNoti: true,
    }
  },
  methods: {
    showNoti() {
      this.isShowingNoti = !this.isShowingNoti
    },
    closeDropdown() {
      this.$emit('close')
    },
    logOut() {
      this.$emit('logout')
    },
  },
}
</script>

<style lang="scss" scoped>
.after-login {
  position: absolute;
  top: 4rem;
  right: 0;
  background-color: white;
  z-index: 999;

  width: 25rem;
  padding: 2rem 0;
  border-radius: 1.5rem;
  border: 0.1rem solid $light-gray;
}

.after-login__header {
  height: 5rem;
  padding: 0rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.user-name {
  color: $normal-blue;
}

.after-login__header-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.after-login__logout {
  width: 6rem;
  height: 1.75rem;
  font-size: 1rem;
  background-color: $normal-gray;
  border-radius: 0.5rem;

  &:hover {
    background-color: $normal-blue;
  }
}

.after-login__header-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.after-login__exit {
  width: 1.25rem;
}

.nav__link {
  width: 100%;
  height: 3em;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: {
    size: 1.5em;
    weight: 500;
  }

  &:hover {
    background-color: $normal-gray;
  }
}
</style>
