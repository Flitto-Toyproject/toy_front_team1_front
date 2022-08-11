// constants
import { getPosting, getPostingByKeyword } from '@/api'
export const GET_POSTS = 'GET_POSTS'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

// store
export const state = () => ({
  posts: [],
  keyword: '',
  isAuthenticated: false,
})

export const mutations = {
  getPosts(state, newPosts) {
    state.posts = [...newPosts]
  },

  changeKeyword(state, newKeyword) {
    state.keyword = newKeyword
  },

  logIn(state) {
    state.isAuthenticated = true
  },

  logOut(state) {
    state.isAuthenticated = false
  },
}

export const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated
  },
}

export const actions = {
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
  [LOG_IN]({ commit }) {
    // 토큰을 확인하는 로직
    commit('logIn')
  },
  [LOG_OUT]({ commit }) {
    // 토큰을 확인하는 로직
    commit('logOut')
  },
}
