let mongoose = require('mongoose');
let express = require('express');
let app = express();
let user = require('./routes/user')
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const User = require('./models/user');
mongoose.connect('mongodb://localhost/ecommerce')
    .then(console.log('connected'))
    .catch(err => console.log('err: ' + err));

app.use(express.json());


app.post('/login', async(req, res) => {
    try {
        let user = await User.findByCradentails(req.body.email, req.body.password);
        let token = user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/logout', async(req, res) => {
    try {
        let user = await User.findByCradentails(req.body.token);
        jwt.destroy(token);
        res.send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
})






app.use('/user', user);

app.listen(5000)