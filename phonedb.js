const mongo = require('mongoose')

if (process.argv.length < 3) {
    console.log('No password was supplied')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://helios:${password}@cluster0-z0nly.mongodb.net/persons?retryWrites=true&w=majority`

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const contactSchema = new mongo.Schema({
    content: String,
    number: String,
})

const Person = mongo.model('Person', contactSchema)

const person = new Person({
    content: process.argv[3],
    number: process.argv[4]
})

person.save().then(result => {
    console.log('contact saved!')
    mongo.connection.close()
})

Person.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(element => {
        console.log(`${element.content} ${element.number}`)        
    })
    mongo.connection.close()
})