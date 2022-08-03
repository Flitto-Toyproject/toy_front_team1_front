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
          <TitleBasic title-content="Publication" />
        </div>
        <div class="result__menu">
          <MyPageMenuContent
            v-for="menu in menuArr"
            :key="menu"
            :menu="menu"
            :content-count="contentCount"
            :focused="selectedMenu === menu"
            @click="selectMenu(menu)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBasic from '@/components/basic/TitleBasic.vue'
import MyPageMenuContent from '@/components/content/MyPageMenuContent.vue'
import { userObj } from '@/api/test'

export default {
  name: 'MyPage',
  components: { TitleBasic, MyPageMenuContent },
  asyncData() {
    const {
      displayed_name: nickName,
      email,
      photo_url: photoUrl,
      user_type: userType,
    } = userObj

    return { nickName, email, photoUrl, userType }
  },
  data() {
    return {
      url: require('~/assets/img/vue_logo.png'),
      isEditing: false,
      menuArr: ['All', 'Editing', 'Waiting', 'Rejected', 'Published'],
      selectedMenu: 'All',
      contentCount: 53,
      focused: true,
    }
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
  },
}
</script>

<style lang="scss" scoped>
.mypage {
  display: flex;
  justify-content: center;

  &__wrap {
    width: 70%;
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
    height: 13rem;
    margin: 0.5rem 0 2rem 0;
    padding: 1rem;
    border: 0.1rem solid $deep-gray;
    border-radius: 1.2rem;
    position: relative;

    display: flex;
    align-items: center;
  }

  &__img {
    height: 10rem;
    width: 10rem;
    border-radius: 10rem;
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
    width: 90%;

    display: flex;
    justify-content: space-between;
  }
}
</style>