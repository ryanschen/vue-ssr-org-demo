// const Vue = require('vue')
const express = require('express')
const server = express()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})

const createApp = require('./dist/main.server.js').default

server.use('/dist', express.static('./dist'))

server.get('*', (req, res) => {
  const context = { url: req.url }
  createApp(context).then(app => {
    if (!app) {
      return res.status(404).end('Page not found')
    }
    renderer.renderToString(app, (err, html) => {
      if (err) {
        err.code === 404
          ? res.status(404).end('Page not found')
          : res.status(500).end('Internal Server Error')
      } else {
        res.end(html)
      }
    })
  })
})

const port = 8081
server.listen(8081, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
