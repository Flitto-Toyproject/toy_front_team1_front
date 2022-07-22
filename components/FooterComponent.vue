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
            class="header-left__logo-img"
            src="@/assets/svg/footer/flitto_small_logo.svg"
            alt="flitto_small_logo"
          />
        </li>
        <li>
          <img
            class="header-left__logo-img"
            src="@/assets/svg/footer/sns_facebook_logo.svg"
            alt="sns_facebook_logo"
          />
        </li>
        <li>
          <img
            class="header-left__logo-img"
            src="@/assets/svg/footer/sns_instar_logo.svg"
            alt="sns_instar_logo"
          />
        </li>
        <li>
          <img
            class="header-left__logo-img"
            src="@/assets/svg/footer/sns_naver_logo.svg"
            alt="sns_naver_logo"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
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
  font-family: 'NanumGothic-Regular';
}
.footer-info {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1em;
}
.footer-info__description:not(:first-child) {
  margin-left: 3em;
}
.footer-bottom-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.footer-bottom-wrapper__sns-wrapper {
  display: flex;
  flex-direction: row;
  width: 10vw;
  justify-content: space-between;
}
</style>
