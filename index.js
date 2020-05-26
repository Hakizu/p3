const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

morgan.token('type', (req, res) => {
    return [JSON.stringify(req.body)]
})
app.use(morgan(':method :url :status ' 
    + ':res[content-length] - :response-time ms :type'))

let contacts = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
    },
    { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
    },
    { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
    },
    { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
    },
]

app.get('/', (req, res) => {
    res.send('<h1> Trial </h1>')
})
  
app.get('/api/persons', (req, res) => {
    res.json(contacts)
})

app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${contacts.length} people`
            + '<br/>' + `${new Date()}`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = contacts.find(note => note.id === id)
    if  (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
}) 

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    contacts = contacts.filter(p => p.id !== id)

    res.status(204).end()
})

const generateID = parseInt(Math.random() * 50000)

app.post('/api/persons', (req, res) => {

    const body = req.body

    if  (!body.content) {
        return res.status(400).json('Name is missing')
    }
    if  (!body.number) {
        return res.status(400).json('Number is missing')
    }
    if  (contacts.some(p => 
        p.name === body.content)) {
        return res.status(400).json('Name alreay exists')
    }
    
    const person = {
        content : body.content,
        number : body.number,
        id : generateID
    }

    contacts = contacts.concat(person)
    res.json(contacts)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})