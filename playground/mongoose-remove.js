const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Remove everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Find one (matches the first) and remove: Todo.findOneAndRemove

// Find by id and remove
Todo.findByIdAndRemove('5c3762400a86a789a318271e').then((todo) => {
    console.log(todo)
});