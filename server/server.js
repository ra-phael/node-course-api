const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser'); //takes JSON and convert into an object
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e)
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(400).send('Invalid id');
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            res.status(404).send('Todo not found')
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send()
    })

})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send('Invalid id');
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            res.status(404).send('Todo not found')
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send()
    })

});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        res.status(404).send('Invalid id');
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send()
    })
})

app.listen(port, () => {
    console.log('Started on port 3000');
});


module.exports = { app };

