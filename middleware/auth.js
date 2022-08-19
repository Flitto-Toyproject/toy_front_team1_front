export default ({ store, route, redirect, params, error }) => {
  const whiteList = ['/', 'contentshowpage'] // 로그인이 필요하지 않은 페이지
  const checkUserIdList = ['mypage', 'mynoti'] // userID가 parameter와 같은지 체크해야 하는 페이지
  const userInfo = store.getters.getUserInfo
  const isUserInfoEmpty = Object.keys(userInfo).length === 0

  if (!whiteList.includes(route.path) && !store.getters.isAuthenticated) {
    console.log('로그인이 필요한 페이지입니다.')
    redirect('/error')
  }

  for (const pageName of checkUserIdList) {
    if (route.path.includes(pageName)) {
      const userId = userInfo.user_id
      if (isUserInfoEmpty || userId !== parseInt(params.user_id)) {
        console.log('로그인이 필요한 페이지입니다.')
        redirect('/error')
      }
    }
  }
}
