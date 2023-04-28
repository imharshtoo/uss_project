const express = require('express');
const bcrypt = require("bcrypt");
const path = require('path');
// const pg=require("pg");
const bodyParser = require('body-parser');
// const bcrypt=require("bcrypt");
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Harsh@123',
        database: 'loginformytvideo'
    }
})

const app = express();

let intialPath = path.join(__dirname, "main");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get("/manager", (req, res) => {
    res.sendFile(path.join(intialPath, "one.html"));
})
app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"));
})

let passwordhashed = "";
// const bcrypt = require('bcrypt');

app.post('/register-user', async (req, res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        db("users").insert({
            name: name,
            email: email,
            password: hashedPassword
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})


app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email', 'password')
    .from('users')
    .where({
        email: email
    })
    .then(async data => {
        if(data.length){
            const isMatch = await bcrypt.compare(password, data[0].password);
            if(isMatch){
                res.json(data[0]);
            } else{
                res.json('email or password is incorrect');
            }
        } else{
            res.json('email or password is incorrect');
        }
    })
})
app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})