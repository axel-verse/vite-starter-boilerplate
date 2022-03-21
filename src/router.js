import { createRouter, createWebHistory } from 'vue-router'
// import { store } from '/src/store.js'
import { routes } from '/src/router/routes.js'

const dev = import.meta.env.DEV

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/*
router.beforeResolve(async (to) => {
  let status

  store.watch(
    (state) => state.auth.authenticating,
    () => {
      status = store.getters['auth/getAuthStatus']
      if (dev) console.log('Status:', status)
    },
    { immediate: true },
  )

  if (status.inProcess === 'init') {
    await store.dispatch('auth/fetchUser')
  }

  const requireAuth = to.meta.auth
  const isAuthenticated = status.isAuthenticated
  if (dev) console.log('Route:', { requireAuth, isAuthenticated })

  if (isAuthenticated && requireAuth === 'guest') {
    if (dev) console.log(to.name, '-> TestRoot')
    return { name: 'TestRoot' }
  }

  if (!isAuthenticated && requireAuth === true) {
    if (dev) console.log(to.name, '-> Auth')
    return { name: 'Auth', query: { redirect: to.path } }
  }

  if (dev) console.log('Page:', to.name)
})
*/

export { router }
