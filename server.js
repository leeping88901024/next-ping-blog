var express = require('express')
var next = require('next')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')

// process.env.NODE_ENV = 'production'
var port = parseInt(process.env.PORT, 10) || 80
var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev })
var handle = app.getRequestHandler()

// routers
var blogRouter = require('./routes/blog')

app.prepare()
  .then(() => {
    var server = express()

    // middleware
    server.use(logger('dev'))
    server.use(bodyParser.json({ limit: '100mb', extended: true }))
    server.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
    server.use(cookieParser())
  
    server.use('/blog', blogRouter)

    // handle resource
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })