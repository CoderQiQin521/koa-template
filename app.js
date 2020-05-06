const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
  ctx.body = 'hello world'
})
var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port
  console.log('koa服务已启动, http://%s:%s', host, port)
})
