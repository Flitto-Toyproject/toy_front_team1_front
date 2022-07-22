<template>
  <div>
    <div class="read-all">
      <button>모두 읽음 처리</button>
    </div>
    <ul>
      <li
        v-for="noti in notifications"
        :key="noti.notification_id"
        class="noti-dropdown__list"
      >
        <img
          src="@/assets/svg/flitto/flitto_logo.svg"
          alt="flitto_symbol"
          class="noti-dropdown__logo"
        />
        <div class="noti-dropdown__noti-content">
          <p>{{ noti.description }}</p>
          <p class="noti-dropdown__noti-time">{{ noti.time }}</p>
        </div>
      </li>
    </ul>
    <footer class="noti-dropdown__footer">
      <p v-if="notifications.length">총 {{ notifications.length }}개의 알림</p>
      <p v-else>더 이상 알림이 없습니다</p>
      <NuxtLink class="to-noti-page" to="contentpage">전체 알림 보기</NuxtLink>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'LoginNotiDropdown',
  data() {
    return {
      notifications: [],
    }
  },
  created() {
    this.notifications = [
      // fetch로 들고 올 예정
      {
        notification_id: '1',
        description: '김도경 님이 플리토 님의 글 발행 요청을 수락하였습니다!',
        time: '오늘 16:42:22',
        content_id: '1',
        isOpen: true,
      },
      {
        notification_id: '2',
        description: '김도경 님이 플리토 님의 글 발행 요청을 수락하였습니다!',
        time: '오늘 16:42:22',
        content_id: '1',
        isOpen: true,
      },
      {
        notification_id: '3',
        description: '김도경 님이 플리토 님의 글 발행 요청을 수락하였습니다!',
        time: '오늘 16:42:22',
        content_id: '1',
        isOpen: true,
      },
    ]
  },
}
</script>
<style lang="scss">
.read-all {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: end;
  text-decoration: underline;
}

.noti-dropdown__list {
  width: 100%;
  height: 5em;
  padding: 0.5rem 2rem;
  display: flex;
  font-size: 0.8rem;

  &:hover {
    background-color: $normal-gray;
    cursor: pointer;
  }
}

.noti-dropdown__logo {
  width: 1rem;
}

.noti-dropdown__noti-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 85%; // 수정 필요
}

.noti-dropdown__noti-time {
  color: $deep-gray;
}

.noti-dropdown__footer {
  width: 100%;
  height: 6rem;
  padding: 1rem;
  text-align: center;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
}

.to-noti-page {
  color: $light-blue;
  text-decoration: underline;
}
</style>
