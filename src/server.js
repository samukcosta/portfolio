const express = require('express')  
const nunjunks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set("view engine", "njk")

nunjunks.configure("src/app/views", {
    express:server,
    autoescape: false,
    noCache: true
})

let port = process.env.PORT || 8000

server.listen(5000, function(){
    console.log("server is running")
})