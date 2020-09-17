const express = require('express')
const routes = express.Router()

const pageController = require('./app/controller/pageController')

routes.get("/", pageController.index)

routes.get("/portfolio", pageController.portfolio)

routes.get("/contact", pageController.contact)

module.exports = routes