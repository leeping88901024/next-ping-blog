var express = require('express')
var next = require('next')

// run 'npm run build' before deploy.
// process.env.NODE_ENV = 'production'
var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev })
var handle = app.getRequestHandler()

app.prepare()
.then(() => {
    var server = express()

    server.get('*', (req,res) => {
        return handle(req, res)
    })

    server.listen(80,(err) => {
        if (err) throw err
        console.log('Server ready on http://localhost:80')
    })
})