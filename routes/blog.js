var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectId

var { dbstring } = require('../config')

// read blogs
router.get('/blogs',(req,res) => {
    // res.send('there is blog post')
    MongoClient.connect(dbstring.uri, { useNewUrlParser: true }, (err, client) => {
        var blogCollection = client.db('Blog').collection('blog')
        blogCollection.find({}).sort({ createDate: -1 }).toArray((err, docs) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(`The blog mount is : ${docs.length}`)
            res.send(docs)
        })
    })
})

// read a blog
router.get('/blog', (req, res) => {
    var _id = objectId(req.query._id)
    MongoClient.connect(dbstring.uri, { useNewUrlParser: true }, (err, client) => {
        var blogCollection = client.db('Blog').collection('blog')
        blogCollection.findOne({ _id: _id }, (err, doc) => {
            if (err) {
                console.log(err)
                return
            }
            res.send(doc)
        })

    })
})

// create a blog
router.post('/create', (req, res) => {
    const post = req.body
    // add operation
    const blog = {
        ...post,
        createDate: new Date()
    }
    MongoClient.connect(dbstring.uri, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log(err)
            return
        }
        var blogCollection = client.db('Blog').collection('blog')
        blogCollection.insertOne(blog)
        .then(result => {
            console.log(`the insertedCount is ${result.insertedCount}`)
            res.send({
                insertedCount: result.insertedCount
            })
        });
        client.close()
    })
})

// 

module.exports = router