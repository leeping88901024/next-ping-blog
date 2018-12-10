var express = require('express')
var fs = require('fs')
var path = require('path')
var rfs = require('rotating-file-stream')
var next = require('next')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')

process.env.NODE_ENV = 'production'
var port = parseInt(process.env.PORT, 10) || 3000
var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev })
var handle = app.getRequestHandler()

// routers
var blogRouter = require('./routes/blog')

app.prepare()
  .then(() => {
    var server = express()
    var logDirectory = path.join(__dirname, 'log')

    // ensure log directory exists
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

    // create a rotating write stream
    var accessLogStream = rfs('access.log', {
      interval: '1d',  // rotate daily
      path: logDirectory
    })

    // middleware

    // setup the logger
    server.use(logger('common', { stream: accessLogStream }))
    server.use(bodyParser.json({ limit: '100mb', extended: true }))
    server.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
    server.use(cookieParser())
  
    server.use('/blog', blogRouter)

    // test you should delete it 
    server.post('/api/security/token', (req,res) => {
      console.log(req.body)
    })

    // handle resource
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })