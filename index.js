const express = require('express')
const app = express()

const contacts = [
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
    }
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
    console.log(req.params)
    const id = Number(req.params.id)
    const note = contacts.find(note => note.id === id)
    if  (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
}) 

const port = 3001
app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})