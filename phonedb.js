require('dotenv').config()
const mongo = require('mongoose')
const url = process.env.MONGOURL

console.log('connecting to ', url)

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('connected to DB')
    })
    .catch((error) => {
        console.log('error connecting to DB' , error.message)
    })

const contactSchema = new mongo.Schema({
    name: String,
    number: String,
})

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongo.model('Person', contactSchema)