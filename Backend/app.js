const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const dbconnect = require('./config/db');
const userRoutes = require('./routes/user.routes')
const captionRoutes = require('./routes/caption.routes');


app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
dbconnect()

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users',userRoutes)
app.use('/captions',captionRoutes)

module.exports = app;