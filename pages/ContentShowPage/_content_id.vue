<template>
  <div class="wrap">
    <div class="post-wrapper">
      <div class="post-top-wrapper">
        <div class="title-wrapper">
          <strong class="title">{{ POST.title }}</strong>
          <StatusContent
            v-if="isAuthenticated && isWriter"
            :status="POST.status"
          />
        </div>
        <div class="extra-wrapper">
          <div class="profile-wrapper">
            <div class="profile-wrapper__profile-img" />
            <p class="profile-wrapper__profile-writer">
              작성자 : {{ POST.writer_user_id }}
            </p>
            <span class="profile-wrapper__date">{{ POST.updated_at }}</span>
            <img
              class="profile-wrapper__share"
              src="@/assets/svg/content/share_icon.svg"
              alt="share_icon"
              @click="shareContent"
            />
          </div>
          <div class="action-wrapper">
            <p
              v-if="isAuthenticated && hasPermission && isRejected"
              class="action__reject"
              @click="rejectAction('reject')"
            >
              거절사유
            </p>
            <p
              v-if="isAuthenticated && hasPermission && isRejected"
              class="action__claim"
              @click="claimAction('claim')"
            >
              이의제기
            </p>
            <p
              v-if="isAuthenticated && isWriter"
              class="action__modify"
              @click="modifyAction('modify')"
            >
              <nuxt-link to="contenteditpage">수정하기</nuxt-link>
            </p>
            <p
              v-if="isAuthenticated && hasPermission"
              class="action__remove"
              @click="removeAction('remove')"
            >
              삭제하기
            </p>
          </div>
        </div>
      </div>
      <DefaultModal v-if="simpleModalObj.isShow">
        <SimpleModal
          :modal-obj="simpleModalObj"
          @confirm="confirmModal"
          @close="closeModal"
        />
      </DefaultModal>
      <DefaultModal v-if="rejectModalObj.isShow">
        <RejectModal
          v-model="rejectInput"
          :modal-obj="rejectModalObj"
          @close="closeModal"
          @sendInput="sendInput"
        />
      </DefaultModal>
      <div class="text-wrapper">
        <div class="tags">
          <TagContent
            v-for="tag in tags"
            :key="tag"
            class="tag-content"
            :tag="tag"
          />
        </div>
        <div class="content">
          <div class="content__wrapper">
            <div class="paragraph" v-html="POST.content" />
            <div
              v-if="!isAuthenticated || (!isAdmin && isPublished)"
              class="like-wrapper"
            >
              <div class="like-wrapper__top">
                <div class="top__paragraph">{{ likedParagraph }}</div>
                <div class="top__liked-count">{{ POST.like_count }}</div>
                <img
                  class="top__liked-button"
                  :src="require(`@/assets/svg/flitto/${likedButton}`)"
                  alt="flitto_logo"
                  @click="clickLikeButton"
                />
              </div>
              <p class="sharing-button" @click="shareContent">공유하기</p>
            </div>
          </div>
        </div>
      </div>
      <DefaultButtonContent v-if="isAdmin && isWaiting">
        <ButtonContent :value="'승인'" :is-major="true" @click="acceptAction" />
        <ButtonContent :value="'거절'" @click="rejectAction" />
      </DefaultButtonContent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TagContent from '@/components/content/TagContent'
import StatusContent from '@/components/content/StatusContent'
import { postObj, userObj } from '@/api/test'
import SimpleModal from '@/components/modal/SimpleModal'
import DefaultModal from '@/components/modal/DefaultModal'
import RejectModal from '@/components/modal/RejectModal'
import DefaultButtonContent from '@/components/content/DefaultButtonContent.vue'
import ButtonContent from '@/components/content/ButtonContent.vue'

export default {
  name: 'ContentShowPage',
  components: {
    DefaultModal,
    SimpleModal,
    StatusContent,
    TagContent,
    RejectModal,
    DefaultButtonContent,
    ButtonContent,
  },
  asyncData({ params, error }) {
    if (isNaN(params.content_id)) {
      error(404)
    }
    const POST = { ...postObj }
    const USER = { ...userObj }

    const isWriter = POST.writer_user_id === USER.user_id
    const isAdmin = USER.user_type === 'A'

    if (!(isWriter || isAdmin) && POST.status !== 'P') {
      error(404)
    }

    return { POST, USER, isWriter, isAdmin }
  },
  data() {
    return {
      tags: ['frontend', 'react', 'vue'],
      likedParagraph:
        '이 글이 도움이 되었다면 플리토 로고를 눌러주세요! \n 더 좋은 글을 발행하는 데 힘이 됩니다.',
      likedButton: 'flitto_logo.svg',
      simpleModalObj: {
        isShow: false,
        buttonCount: 2,
        text: 'TEXT',
        confirm: '확인',
        yes: '예',
        no: '아니오',
      },
      rejectModalObj: {
        isReject: true, // true: 거절 사유, false: 이의제기 사유
        isShow: false,
        isInput: false,
        content: '',
      },
      rejectInput: '',
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    hasPermission() {
      return this.isWriter || this.isAdmin
    },
    isWaiting() {
      return this.POST.status === 'W'
    },
    isPublished() {
      return this.POST.status === 'P'
    },
    isRejected() {
      return this.POST.status === 'R'
    },
  },
  methods: {
    async shareContent() {
      try {
        await navigator.clipboard.writeText(window.location.href)
        await alert('공유할 주소가 복사되었습니다.') // TODO: modal로 교체
      } catch (err) {
        console.error(err)
      }
    },
    clickLikeButton() {
      this.post.is_like = !this.post.is_like
      if (this.post.is_like) this.likedButton = 'flitto_logo.svg'
      else this.likedButton = 'flitto_logo_gray.svg'
    },
    acceptAction() {},
    rejectAction() {
      console.log('window.scrollY', window.scrollY)
      this.rejectModalObj.isShow = true
      this.rejectModalObj.isReject = true // true= 거절 사유, false= 이의제기 사유
      switch (this.USER.user_type) {
        case 'F':
          this.rejectModalObj.isInput = false
          this.rejectModalObj.content = this.POST.reject_content
          break
        case 'A':
          this.rejectModalObj.isInput = true
          break
      }
    },
    claimAction() {
      this.rejectModalObj.isShow = true
      this.rejectModalObj.isReject = false
      switch (this.USER.user_type) {
        case 'F':
          this.rejectModalObj.isInput = true
          break
        case 'A':
          this.rejectModalObj.isInput = false
          this.rejectModalObj.content = this.POST.claim_content
          break
      }
    },
    removeAction() {
      this.simpleModalObj.isShow = true
      this.simpleModalObj.text = '삭제하시겠습니까?'
      this.simpleModalObj.buttonCount = 2
    },
    confirmModal() {
      console.log('삭제 로직 필요')
      this.simpleModalObj.isShow = false
    },
    closeModal() {
      if (this.simpleModalObj.isShow) this.simpleModalObj.isShow = false
      if (this.rejectModalObj.isShow) this.rejectModalObj.isShow = false
    },
    sendInput() {
      console.log('F일 때 이의 내용 send, A일 때 거절 내용 send 로직 필요')
      this.rejectInput = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
}
.post-wrapper {
  min-height: calc(100vh - 240px);
  padding: 1em 2em;
}
.post-top-wrapper {
  display: flex;
  flex-direction: column;
}
.title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title {
  color: $black;
  font-size: 1.6em;
  font-weight: 700;
  margin-right: 0.5em;
}
.extra-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $deep-gray;
  padding: 1em 0px 0.8em 0px;
  @include tablet {
    flex-direction: column;
    justify-content: center;
  }
}
.profile-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  @include tablet {
    margin-bottom: 1rem;
  }
  &__profile-img {
    width: 2em;
    height: 2em;
    background-color: $deep-gray;
    border-radius: 5em;
    margin-right: 0.5em;
  }
  &__profile-writer {
    color: $black;
    font-size: 1em;
    font-weight: 700;
    margin-right: 1em;
  }
  &__date {
    color: $deep-gray;
    font-size: 0.875em;
    margin-right: 1em;
  }
  &__share {
    color: $deep-gray;
    cursor: pointer;
  }
}
.action-wrapper {
  display: flex;
  flex-direction: row;
}
.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1em;
}
.tag-content {
  display: flex;
  flex-direction: row;
  margin: 0.5em 1em 0px 0px;
}
.content {
  padding: 2em;
  color: $black;
  line-height: 1.5em;

  display: flex;
  align-items: center;

  &__wrapper {
    width: 70rem;

    @include laptop {
      width: 50rem;
    }

    @include tablet {
      width: 25rem;
    }
  }
}
.action-wrapper {
  color: $normal-blue;
}
.action {
  &__reject {
    padding-right: 0.5em;
    cursor: pointer;
    font-weight: 700;
  }
  &__claim {
    padding-right: 0.5em;
    cursor: pointer;
    font-weight: 700;
  }
  &__modify {
    padding-right: 0.5em;
    cursor: pointer;
    font-weight: 700;
    & a {
      color: $normal-blue;
    }
  }
  &__remove {
    cursor: pointer;
    font-weight: 700;
  }
}
.like-wrapper {
  margin-top: 10em;
  text-align: center;
}
.top {
  &__paragraph {
    white-space: pre-line;
    color: $deep-gray;
  }
  &__liked-count {
    color: $normal-blue;
    font-weight: 700;
    margin: 1em 0px 0.5em 0px;
  }
  &__liked-button {
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
}
.sharing-button {
  color: $normal-blue;
  cursor: pointer;
  margin-top: 2em;
  font-weight: 700;
}
</style>
