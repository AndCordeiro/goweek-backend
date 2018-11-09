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
mongoose.connect(`mongodb://${USER_DB}:${PASSWORD_DB}@ds155203.mlab.com:55203/jiraiyadb`, { 
    useNewUrlParser: true 
});

app.use(express.json());
app.use(require('./routes'));


server.listen(3001, () => {
    console.log('Server started on port 3001!');
});

