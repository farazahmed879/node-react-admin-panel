const mongoose = require('mongoose')

const sideMenuSchema = mongoose.Schema({
    content:[{
        title: {type:String, required:true},
        url: {type:String, required:true},
    }],
    type: {type:String, required:true},
})


module.exports = mongoose.model('sideMenu',sideMenuSchema)