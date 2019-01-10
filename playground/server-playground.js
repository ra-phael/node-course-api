const { mongoose } = require('./db/mongoose');

let newTodo = new Todo({
    text: 'Water the plants',
    completed: false,
    completedAt: -1
});

let otherTodo = new Todo({
    text: "  Edit this code "
})

otherTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo')
})

let user = new User({
    email: 'yo@yo.com '
})

user.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save todo', e)
})

