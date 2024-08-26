const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Raunak",
        username: "Raunak123",
        email: "raunakraj213@gmail.com"
    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        { username: "Raunak123" },
        { name: "Raunak Raj" },
        { new: true }
    )
    res.send(updateduser);
})

app.listen(8000);