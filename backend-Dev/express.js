const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log("I am a middleware");
    next();
});
app.get('/about', function (req, res) {
    res.send("about page ayega");
})
app.get('/profile', function (req, res, next) {
    return next("Soommething went wrong");
})

app.use(function (err, req, res, next) {
    console.log(err);
    res.send("There is an error");
})

app.listen(3000)