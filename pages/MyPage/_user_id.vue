<template>
  <div class="mypage">
    <div class="mypage__wrap">
      <div class="profile">
        <header class="mypage__header">
          <TitleBasic title-content="Profile" />
          <img
            v-if="!isEditing"
            class="edit-icon"
            src="@/assets/svg/content/edit_profile_icon.svg"
            alt="edit-icon"
            @click="editProfile"
          />
        </header>
        <article class="profile__wrap">
          <img class="profile__img" :src="url" alt="photo" />
          <section class="profile__data">
            <p v-if="!isEditing" class="profile__nickname">
              {{ nickName }}
            </p>
            <input
              v-else
              v-model="nickName"
              class="profile__nickname-input"
              type="text"
              placeholder="닉네임을 입력해주세요"
              spellcheck="false"
            />
            <p class="profile__email">{{ email }}</p>
            <div v-if="isEditing" class="profile__btn profile__btn--middledown">
              <button type="button" @click="adminRequest">
                관리자 권한 신청
              </button>
              <button
                class="profile__withdraw-btn"
                type="button"
                @click="withdrawRequest"
              >
                회원 탈퇴
              </button>
            </div>
            <div v-if="isEditing" class="profile__btn profile__btn--upright">
              <button class="profile__edit-btn" type="button" @click="saveEdit">
                수정
              </button>
              <p>|</p>
              <button
                class="profile__cancel-btn"
                type="button"
                @click="cancelEdit"
              >
                취소
              </button>
            </div>
          </section>
        </article>
      </div>
      <div class="result">
        <div class="mypage__header">
          <TitleBasic :title-content="isAdmin ? 'Request' : 'Publication'" />
        </div>
        <div v-if="isAdmin" class="result__menu">
          <div class="result__menu-content">
            <MyPageMenuContent
              v-for="menu in menuArrAdmin"
              :key="menu"
              :menu="menu"
              :content-count="contentCount"
              :focused="selectedMenu === menu"
              @click="selectMenu(menu)"
            />
          </div>
        </div>
        <div v-else class="result__menu">
          <div class="result__menu-content">
            <MyPageMenuContent
              v-for="menu in menuArrFlitto"
              :key="menu"
              :menu="menu"
              :content-count="contentCount"
              :focused="selectedMenu === menu"
              @click="selectMenu(menu)"
            />
          </div>
        </div>
        <div
          v-if="isAdmin && selectedMenu !== 'Authorization'"
          class="my-contents"
        >
          <ListPostContent
            v-for="postObj in postsArrSliced"
            :key="postObj.id"
            :post-obj="postObj"
          />
        </div>
        <div
          v-if="isAdmin && selectedMenu === 'Authorization'"
          class="admin-authorization"
        >
          <div
            v-for="(notifications, key) in notiPerDays"
            :key="key"
            class="auth-noti__per-day"
          >
            <div class="auth-noti-wrap">
              <div
                v-for="noti in notifications"
                :key="noti.notification_id"
                class="auth-noti"
              >
                <div class="auth-noti__texts">
                  <div class="auth-noti__message" v-html="noti.message" />
                  <div class="auth-noti__time">{{ noti.created_at }}</div>
                </div>

                <div class="auth-noti__btns">
                  <div class="auth-noti__auth">권한 부여</div>
                  <div class="auth-noti__reject">거절</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginationBasic
        :size="SIZE"
        :max="MAX"
        :total="total"
        :current-page="currentPage"
        @paginate="paginate"
      />
    </div>
  </div>
</template>

<script>
import { formatRelative } from 'date-fns'
import TitleBasic from '@/components/basic/TitleBasic.vue'
import MyPageMenuContent from '@/components/content/MyPageMenuContent.vue'
import ListPostContent from '@/components/content/ListPostContent.vue'
import { userObj, postsArr, authNotiDataArr } from '@/api/test'
import PaginationBasic from '@/components/basic/PaginationBasic'

export default {
  name: 'MyPage',
  components: {
    PaginationBasic,
    TitleBasic,
    MyPageMenuContent,
    ListPostContent,
  },
  asyncData() {
    const {
      displayed_name: nickName,
      email,
      photo_url: photoUrl,
      user_type: userType,
    } = userObj
    const isAdmin = userType === 'A'
    const selectedMenu = isAdmin ? 'Waiting' : 'All'

    const postsArrSliced = postsArr.slice(0, 3)

    const notiPerDays = {}
    const dayExpression = { today: '오늘', yesterday: '어제' }
    const today = new Date()

    authNotiDataArr.forEach((noti) => {
      const day = noti.created_at.split(' ')[0]
      const relativeDay = formatRelative(new Date(day), today).split(' at')[0]
      const dayKey = dayExpression[relativeDay] ?? day

      const value = notiPerDays[dayKey]
      notiPerDays[dayKey] = value ? [...value, noti] : [noti]
    })

    return {
      nickName,
      email,
      photoUrl,
      userType,
      isAdmin,
      selectedMenu,
      postsArrSliced,
      notiPerDays,
    }
  },
  data() {
    return {
      url: require('~/assets/img/vue_logo.png'),
      isEditing: false,
      menuArrAdmin: ['Waiting', 'Objection', 'Authorization'],
      menuArrFlitto: ['All', 'Editing', 'Waiting', 'Rejected', 'Published'],
      contentCount: 53,
      focused: true,
      SIZE: 9, // TODO: constant 처리
      MAX: 3,
      total: 0,
      currentPage: 1,
    }
  },
  created() {
    this.total = postsArr.length
  },
  methods: {
    editProfile() {
      this.isEditing = true
    },
    saveEdit() {
      console.log('edit 사항 PUT')
    },
    cancelEdit() {
      this.isEditing = false
    },
    adminRequest() {
      console.log('관리자 권한 신청')
    },
    withdrawRequest() {
      console.log('회원 탈퇴')
    },
    selectMenu(_menu) {
      this.selectedMenu = _menu
    },
    paginate(_page) {
      switch (_page) {
        case 'prev':
          this.currentPage--
          break
        case 'next':
          this.currentPage++
          break
        default:
          this.currentPage = _page
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mypage {
  display: flex;
  justify-content: center;

  &__wrap {
    width: 42rem;
  }

  &__header {
    margin-bottom: 1rem;
    display: flex;
  }
}

.edit-icon {
  margin-left: 0.5rem;
  width: 1.5rem;
  cursor: pointer;
}

.profile {
  &__wrap {
    height: 10rem;
    margin: 0.5rem 0 2rem 0;
    padding: 1rem;
    border: 0.1rem solid $deep-gray;
    border-radius: 1.2rem;
    position: relative;

    display: flex;
    align-items: center;
  }

  &__img {
    height: 8rem;
    width: 8rem;
    border-radius: 8rem;
  }

  &__edit-btn,
  &__cancel-btn {
    color: $deep-gray;
  }

  &__withdraw-btn {
    color: $normal-red;
  }

  &__data {
    margin-left: 2rem;
  }

  &__nickname {
    margin-bottom: 0.5rem;
    font: {
      weight: 700;
      size: 1.5rem;
    }
  }

  &__nickname-input {
    margin-bottom: 0.5rem;
    color: $normal-blue;
    padding: 0;
    border-bottom: 0.1rem solid $normal-blue;
    font: {
      size: 1.5rem;
    }

    &:focus {
      outline: none;
    }
  }

  &__email {
    color: $deep-gray;
  }

  &__btn {
    position: absolute;
    display: flex;

    &--upright {
      top: 1rem;
      right: 1rem;
      color: $deep-gray;
    }

    &--middledown {
      bottom: 2rem;
      :first-child {
        padding-left: 0;
      }
    }
  }
}

.result {
  &__menu {
    padding-bottom: 0.5rem;
    border-bottom: 0.05rem solid $deep-gray;

    @include tablet {
      width: 70%;
      margin: 0 auto;
    }
  }

  &__menu-content {
    display: flex;
  }
}
.auth-noti__per-day {
  display: flex;
}

.auth-noti-wrap {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.auth-noti {
  padding: 1em 0.5em;
  font-size: 0.8rem;

  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: $light-gray;
  }
}

.auth-noti__message {
  padding-bottom: 0.5rem;
}

.auth-noti__time {
  color: $deep-gray;
}

.auth-noti__texts {
  display: flex;
  flex-direction: column;
}

.auth-noti__btns {
  display: flex;
}

.auth-noti__auth {
  @include auth-noti__btn;
  margin-right: 1em;
  border: 1px solid $normal-blue;
  background-color: $normal-blue;
}

.auth-noti__reject {
  @include auth-noti__btn;
  border: 1px solid $deep-gray;
  background-color: $deep-gray;
}
</style>
