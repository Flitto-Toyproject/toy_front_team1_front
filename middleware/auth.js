export default ({ store, route, redirect }) => {
  const whiteList = ['/', 'contentshowpage'] // 로그인이 필요하지 않은 페이지

  if (!whiteList.includes(route.path) && !store.getters.isAuthenticated) {
    console.log('로그인이 필요한 페이지입니다.')
    redirect('/')
  }
}
