// constants
import { getPosting } from '@/api'
export const GET_POSTS = 'GET_POSTS'

// store
export const state = () => ({
  posts: [],
})

export const mutations = {
  getPosts(state, newPosts) {
    state.posts = [...newPosts]
  },
}

export const actions = {
  async [GET_POSTS]({ commit }) {
    const { data } = await getPosting()
    const posts = [...data.post_list]
    commit('getPosts', posts)
  },
}
