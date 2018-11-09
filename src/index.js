const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    return next();
});
app.use(cors());

//Iniciando o MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true 
});

app.use(express.json());
app.use(require('./routes'));


server.listen(3000, () => {
    console.log('Server started on port 3000!');
});

