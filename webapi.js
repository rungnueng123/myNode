const express = require('express')
const app = express()
const Admin = require('./models/admin')

app.get('/', (req, res) => {
    res.send(Admin.showUser.user)
})

app.get('/username', (req,res) => {
    res.json(Admin.showUser)
})

const server = app.listen(3000, function (req, res) {
    console.log('server start port : 3000');
});