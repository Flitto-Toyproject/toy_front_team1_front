<template>
  <footer>
    <ul class="footer-info">
      <li class="footer-info__description"><strong>대표자</strong> 이정수</li>
      <li class="footer-info__description">
        <strong>개인정보관리책임자</strong> 이정수
      </li>
      <li class="footer-info__description">
        <strong>사업자등록번호</strong> 215-87-72878
      </li>
      <li class="footer-info__description">
        <strong>통신판매업신고번호</strong> 2014-서울강남-02858호
      </li>
      <li class="footer-info__description">
        <strong>주소</strong> (06141) 서울특별시 강남구 테헤란로 211 9층 (역삼동
        678-39)
      </li>
    </ul>
    <div class="footer-bottom-wrapper">
      <ul class="footer-bottom-wrapper__right">
        <li>©2022 Flitto Inc. All rights reserved.</li>
      </ul>
      <ul class="footer-bottom-wrapper__sns-wrapper">
        <li>
          <img
            class="sns-wrapper__logo-img"
            src="@/assets/svg/footer/flitto_small_logo.svg"
            alt="flitto_small_logo"
            @click="goSite('flitto')"
          />
        </li>
        <li>
          <img
            class="sns-wrapper__logo-img"
            src="@/assets/svg/footer/sns_facebook_logo.svg"
            alt="sns_facebook_logo"
            @click="goSite('facebook')"
          />
        </li>
        <li>
          <img
            class="sns-wrapper__logo-img"
            src="@/assets/svg/footer/sns_instar_logo.svg"
            alt="sns_instar_logo"
            @click="goSite('instar')"
          />
        </li>
        <li>
          <img
            class="sns-wrapper__logo-img"
            src="@/assets/svg/footer/sns_naver_logo.svg"
            alt="sns_naver_logo"
            @click="goSite('naver')"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    goSite(_site) {
      const siteObj = {
        flitto: 'https://www.flitto.com/language/translation/text',
        facebook: 'https://www.facebook.com/flitto',
        instar: 'https://www.instagram.com/flitto_official',
        naver: 'https://blog.naver.com/flitto_inc',
      }
      window.location.href = siteObj[_site]
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5em 2em;
  background-color: $light-gray;
  color: $black;
  word-break: break-all;
  font-size: 0.875em;
}
.footer-info {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1em;
  @include tablet {
    flex-direction: column;
    justify-content: flex-start;
  }
  &__description:not(:first-child) {
    margin-left: 3em;
    @include tablet {
      margin-left: 0em;
    }
  }
}
.footer-bottom-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @include tablet {
    flex-direction: column;
  }
  &__sns-wrapper {
    display: flex;
    flex-direction: row;
    width: 10em;
    justify-content: space-between;
    @include tablet {
      margin-top: 1em;
    }
  }
}
.sns-wrapper__logo-img {
  cursor: pointer;
}
</style>
