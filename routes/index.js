const Router = require('koa-router')
const router = new Router({
  prefix: '/api/v1',
})

router.get('/', async (ctx) => {})
router.get('/user', User.index)

module.exports = router
