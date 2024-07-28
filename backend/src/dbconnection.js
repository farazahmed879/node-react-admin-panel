const mongoose = require('mongoose')

const databaseConnection = () => {
  mongoose.connect('mongodb+srv://bisham495:NcK1jkG6qddRNkuC@cluster0.enilskg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Database Connected!")
  }).catch((e)=>{
    console.log('Error while connecting to database', e)
  })
}

module.exports = databaseConnection;


// password: NcK1jkG6qddRNkuC