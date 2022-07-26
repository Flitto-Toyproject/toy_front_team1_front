<template>
  <div class="login-form">
    <img
      class="login-form__logo-img"
      src="@/assets/svg/login/flitto_logo_centered.svg"
      alt="flitto_logo"
    />
    <div class="login-form__decription">
      <p><strong>세상의 모든 번역,</strong></p>
      <p><strong>Flitto의 기술 블로그에 참여해보세요!</strong></p>
    </div>
    <div class="login-form__google-login-form" @click="handleAuthClick">
      <img
        class="login-form__continue-with-google"
        src="@/assets/svg/login/continue_with_google.svg"
        alt="continue_with_google"
      />
      <img
        class="login-form__signup-with-google"
        src="@/assets/svg/login/signup_with_google.svg"
        alt="continue_with_google"
      />
    </div>
  </div>
</template>

<script>
const API_KEY = process.env.API_KEY
const CLIENT_ID =
  '1050855462729-r7kb0jlqlf6mvuc0iu9nvkivvoinmjer.apps.googleusercontent.com'
const SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly'
const DISCOVERY_URL =
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'

let GoogleAuth
let isAuthorized
let currentApiRequest

export default {
  name: 'BeforeLoginDropdown',
  async fetch() {
    await window.gapi.load('client:auth2', this.initClient)
  },
  data() {
    return {}
  },
  methods: {
    initClient() {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPE,
          discoveryDocs: [DISCOVERY_URL],
        })
        .then(function () {
          GoogleAuth = window.gapi.auth2.getAuthInstance()
          console.log('googleauth', GoogleAuth)

          // Listen for sign-in state changes.
          GoogleAuth.isSignedIn.listen(this.updateSigninStatus)

          const user = GoogleAuth.currentUser.get()
          console.log('user', user)
          this.setSigninStatus()
        })
    },
    updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        isAuthorized = true
        if (currentApiRequest) {
          this.sendAuthorizedApiRequest(currentApiRequest)
        }
      } else {
        isAuthorized = false
      }
    },
    sendAuthorizedApiRequest(requestDetails) {
      currentApiRequest = requestDetails
      if (isAuthorized) {
        // Make API request
        // gapi.client.request(requestDetails)

        // Reset currentApiRequest variable.
        currentApiRequest = {}
      } else {
        GoogleAuth.signIn()
      }
    },
    setSigninStatus() {
      const user = GoogleAuth.currentUser.get()
      const isAuthorized = user.hasGrantedScopes(SCOPE)
      if (isAuthorized) console.log('authorized')
      else console.log('unauthorized')
    },
    handleAuthClick() {
      if (GoogleAuth.isSignedIn.get()) {
        // User is authorized and has clicked "Sign out" button.
        GoogleAuth.signOut()
      } else {
        // User is not signed in. Start Google auth flow.
        GoogleAuth.signIn()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 25rem;
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  border-radius: 2rem;
  // border: solid $black 0.1rem;
}

.login-form__logo-img {
  width: 6.25rem;
}

.login-form__decription {
  font: {
    family: 'NanumGothic-Bold';
    size: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-form__google-login-form {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
