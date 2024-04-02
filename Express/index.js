

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = require('./githubData.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Raunakrajsingh620')
})
app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code </h1>');
});
app.get('/github', (req, res) => {
    res.json(githubData)

})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})