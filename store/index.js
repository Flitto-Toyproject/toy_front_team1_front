// constants
import { getPosting, getPostingByKeyword } from '@/api'
import { userObj } from '@/api/test'

export const GET_POSTS = 'GET_POSTS'
export const GET_TOKEN_FROM_SERVER = 'GET_TOKEN_FROM_SERVER'
export const SET_LOGIN_TOKEN = 'SET_LOGIN_TOKEN'
export const GET_USER_INFO_FROM_SERVER = 'GET_USER_INFO_FROM_SERVER'
export const LOG_OUT = 'LOG_OUT'

// store
export const state = () => ({
  posts: [],
  keyword: '',
  token: '',
  userInfo: {},
})

export const mutations = {
  getPosts(state, newPosts) {
    state.posts = [...newPosts]
  },

  changeKeyword(state, newKeyword) {
    state.keyword = newKeyword
  },

  setStoreToken(state, token) {
    state.token = token
  },

  setUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo
  },
}

export const getters = {
  isAuthenticated: (state) => {
    // 토큰이 있는지 확인
    return !!state.token
  },
  getUserInfo: (state) => {
    return state.userInfo
  },
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    // 유저 정보
    dispatch(GET_USER_INFO_FROM_SERVER)

    // 토큰
    let token
    const tokenInCookie = this.$cookiz.get('token')

    if (tokenInCookie) {
      try {
        token = tokenInCookie
      } catch (err) {
        console.error(err)
      }
    }
    dispatch(SET_LOGIN_TOKEN, token)
  },
  async [GET_POSTS]({ commit }, _params) {
    let res
    if (state.keyword) {
      res = await getPostingByKeyword(_params)
      state.keyword = ''
    } else {
      res = await getPosting(_params)
    }
    const posts = [...res.data.post_list]
    commit('getPosts', posts)
  },
  [GET_TOKEN_FROM_SERVER]({ dispatch }) {
    // 토큰을 서버에서부터 가져와 로그인하는 로직
    const res = { token: '123456789' }
    if (res.token) {
      dispatch(SET_LOGIN_TOKEN, res.token)
    }
  },
  [SET_LOGIN_TOKEN]({ commit }, _token) {
    // store와 쿠키에 토큰을 넣는 로직 : server side(nuxtServerInit)
    commit('setStoreToken', _token)
    this.$cookiz.set('token', _token)
  },
  [GET_USER_INFO_FROM_SERVER]({ commit }) {
    // 서버에서부터 유저 정보를 받아서 store에 저장하는 로직
    const newUserInfo = userObj
    commit('setUserInfo', newUserInfo)
  },
  [LOG_OUT]({ commit }) {
    // 토큰을 확인하는 로직
    this.$cookiz.remove('token')
  },
}
