const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5c373c1a0cbc2dcc1fc58c2c1';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid')
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

