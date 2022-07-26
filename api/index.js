import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.baseUR}/api/`,
})

// auth
function checkLogin() {
  return instance.get(`check-login`)
}

function authRegister() {
  return instance.post(`register`)
}

function login() {
  return instance.post(`login`)
}

function logout() {
  return instance.post(`logout`)
}

// user
function getUserById(_id) {
  return instance.get(`user/${_id}`)
}

function putUserById(_id) {
  return instance.put(`user/${_id}`)
}

function deleteUserById(_id) {
  return instance.delete(`user/${_id}`)
}

// post
function getPosting() {
  return instance.get(`post`)
}

function getPostingById(_id) {
  return instance.get(`post/${_id}`)
}

function postPosting() {
  return instance.post(`post`)
}

function putPostingById(_id) {
  return instance.put(`post/${_id}`)
}

function deletePostingById(_id) {
  return instance.delete(`post/${_id}`)
}

function postLikedById(_id) {
  return instance.post(`post/${_id}/like`)
}

// tag
function getTags() {
  return instance.get(`tag`)
}

// notification

function getNotification() {
  return instance.get(`notification`)
}

function postNotificationById(_id) {
  return instance.post(`notification/${_id}/read`)
}

export {
  checkLogin,
  authRegister,
  login,
  logout,
  getUserById,
  putUserById,
  deleteUserById,
  getPosting,
  getPostingById,
  postPosting,
  putPostingById,
  deletePostingById,
  postLikedById,
  getTags,
  getNotification,
  postNotificationById,
}
