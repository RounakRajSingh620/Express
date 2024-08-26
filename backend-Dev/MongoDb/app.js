const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "RaunakSingh",
        username: "Raunak1234",
        email: "raunakraj213@gmail.com"
    })
    res.send(createduser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})
app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        { username: "Raunak123" },
        { name: "Raunak Raj" },
        { new: true }
    )
    res.send(updateduser);
})
app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({ username: "Raunak123" });
    res.send(users);
})

app.listen(8000);