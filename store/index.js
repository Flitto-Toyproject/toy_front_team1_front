// constants
import { getPosting, getPostingByKeyword } from '@/api'
export const GET_POSTS = 'GET_POSTS'

// store
export const state = () => ({
  posts: [],
  keyword: '',
})

export const mutations = {
  getPosts(state, newPosts) {
    state.posts = [...newPosts]
  },

  changeKeyword(state, newKeyword) {
    state.keyword = newKeyword
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
}
