require('dotenv').config()

const Server = require('./Back/Models/Server')

const server = new Server()

server.listen()