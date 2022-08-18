<template>
  <div class="mynoti">
    <div class="mynoti__wrap">
      <div class="mynoti__header">
        <TitleBasic :title-content="'Notification'" />
        <div class="read-all" @click="readAllNoti">모두 읽음 처리</div>
      </div>

      <div
        v-for="(notifications, key) in notiPerDays"
        :key="key"
        class="mynoti__per-day"
      >
        <div class="mynoti__day">{{ key }}</div>
        <div class="noti-wrap">
          <div
            v-for="noti in notifications"
            :key="noti.notification_id"
            class="noti"
          >
            <div class="noti__content">
              <div class="noti__message" v-html="noti.message"></div>
              <div class="noti__time">{{ noti.created_at }}</div>
            </div>
            <div v-if="noti.read" class="notification-alert"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatRelative } from 'date-fns'
import TitleBasic from '@/components/basic/TitleBasic.vue'
import { notiDataArr } from '@/api/test.js'

export default {
  name: 'MyNoti',
  components: { TitleBasic },
  middleware: ['auth'],
  asyncData() {
    const notiPerDays = {}
    const dayExpression = { today: '오늘', yesterday: '어제' }
    const today = new Date()

    notiDataArr.forEach((noti) => {
      const day = noti.created_at.split(' ')[0]
      const relativeDay = formatRelative(new Date(day), today).split(' at')[0]
      const dayKey = dayExpression[relativeDay] ?? day

      const value = notiPerDays[dayKey]
      notiPerDays[dayKey] = value ? [...value, noti] : [noti]
    })

    return { notiPerDays }
  },
  methods: {
    readAllNoti() {
      console.log('read all notifications')
    },
  },
}
</script>

<style lang="scss" scoped>
.mynoti {
  display: flex;
  justify-content: center;
}

.mynoti__wrap {
  width: 42rem;
}

.mynoti__header {
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
}

.read-all {
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  font: {
    size: 0.8rem;
    weight: 500;
  }

  display: flex;
  flex-direction: column;
  justify-content: end;
}

.mynoti__per-day {
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
}

.mynoti__day {
  color: $light-blue;
  font: {
    size: 1.1rem;
    weight: 600;
  }
}

.noti-wrap {
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.noti {
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.8rem;

  display: flex;
  justify-content: space-between;

  cursor: pointer;
  &:hover {
    background-color: $light-gray;
  }
}

.noti__message {
  padding-bottom: 0.5rem;
}

.noti__time {
  color: $deep-gray;
}

.notification-alert {
  width: 5px;
  height: 5px;
  background-color: $normal-blue;
  border-radius: 0.35em;
  margin-top: 0.3em;
}
</style>
