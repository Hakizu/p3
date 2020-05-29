require('dotenv').config()
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const url = process.env.MONGOURL

console.log('connecting to ', url)

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
    .then(result => {
        console.log('connected to DB')
    })
    .catch((error) => {
        console.log('error connecting to DB' , error.message)
    })

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 30,
        trim: true,
        required: true,
        uniqueCaseInsensitive: true,
        unique: true
    },
    number: {
        type: String,
        maxlength: 15,
        minlength: 2,
        required: true,
    }
})

contactSchema.plugin(uniqueValidator)

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', contactSchema)