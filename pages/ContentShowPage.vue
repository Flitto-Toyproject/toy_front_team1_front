<template>
  <div class="wrap">
    <HeaderComponent />
    <div class="content-wrapper">
      <div class="content-top-wrapper">
        <div class="title-wrapper">
          <strong class="title">{{ post.title }}</strong>
          <StatusContent :is-show="true" :status="post.status" />
        </div>
        <div class="extra-wrapper">
          <div class="profile-wrapper">
            <div class="profile-wrapper__profile-img" />
            <p class="profile-wrapper__profile-writer">
              작성자 : {{ post.writer_user_id }}
            </p>
            <span class="profile-wrapper__date">{{ post.updated_at }}</span>
            <img
              class="profile-wrapper__share"
              src="@/assets/svg/content/share_icon.svg"
              alt="share_icon"
              @click="shareContent"
            />
          </div>
          <div class="action-wrapper">
            <p class="action__reject">거절사유</p>
            <p class="action__claim">이의제기</p>
            <p class="action__modify">수정하기</p>
            <p class="action__remove">삭제하기</p>
          </div>
        </div>
      </div>
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
          <div class="paragraph">{{ post.content }}</div>
          <div class="like-wrapper">
            <div class="like-wrapper__top">
              <div class="top__paragraph">{{ likedParagraph }}</div>
              <div class="top__liked-count">{{ post.like_count }}</div>
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
    <FooterComponent />
  </div>
</template>

<script>
import TagContent from '@/components/content/TagContent'
import StatusContent from '@/components/content/StatusContent'
import { postObj } from '@/api/test'

export default {
  name: 'ContentShowPage',
  components: { StatusContent, TagContent },
  data() {
    return {
      post: { ...postObj },
      tags: ['frontend', 'react', 'vue'],
      likedParagraph:
        '이 글이 도움이 되었다면 플리토 로고를 눌러주세요! \n 더 좋은 글을 발행하는 데 힘이 됩니다.',
      likedButton: 'flitto_logo.svg',
    }
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
  },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  min-height: calc(100vh - 240px);
  padding: 1em 2em;
}
.content-top-wrapper {
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
}
.profile-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
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
