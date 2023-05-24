const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const socketController = require('./sockets/socketController');
const { dbConnection } = require('./database/config')

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

dbConnection();

app.use(express.json());

app.use('/api', apiRoutes);

io.on('connection', socketController);

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
