const express = require('express')
const sideMenuController = require('../controller/sideMenuController')

const sideMenuRouter = express.Router()

sideMenuRouter.post('/', sideMenuController.createSideMenu)
sideMenuRouter.get('/', sideMenuController.getSideMenu)
sideMenuRouter.put('/', sideMenuController.addTitle)


module.exports = sideMenuRouter