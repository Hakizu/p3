require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./phonedb')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('type', (req, res) => {
    console.log(req.body)
    return [JSON.stringify(req.body)]
})
app.use(morgan(':method :url :status ' 
    + ':res[content-length] - :response-time ms :type'))

  
app.get('/api/persons', (req, res) => {
    Person.find({}).then(person => {
        res.json(person.map(person => person.toJSON()))
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({
                erorr: 'malformatted id'
            })
        })
    }) 

app.get('/info', (req,res) => {
    res.send(`Phonebook curently ${Person.length} contacts`
        + '<br/>' + `${new Date()}`)
})

app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})


app.post('/api/persons', (req, res) => {
    const body = req.body

    if (body.name === undefined) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number || false,
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
})

app.put('/api/persons/:id', (req, res) => {
    const body = req.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(req.params.id, person, {new: true})
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)    

const errorHandler = (error, request, res, next) => {
    console.log(error.message)

    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})