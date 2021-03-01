const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    // connect to your own database here
    client: 'pg',
    connection: {
        host: 'localhost',
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'smartbrain',
    },
});

const app = express();

app.use(cors());

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: true }));

app.get('/', (req, res) => {
    res.send(db.users);
});

app.post('/signin', signin.handleSignin(db, bcrypt));

app.post('/register', (req, res) => {
    register.handleRegister(req, res, db, bcrypt);
});

app.get('/profile/:id', (req, res) => {
    profile.handleProfileGet(req, res, db);
});

app.put('/image', (req, res) => {
    image.handleImage(req, res, db);
});

app.post('/imageurl', (req, res) => {
    image.handleApiCall(req, res);
});

const port = 4000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});