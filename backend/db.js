const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:pinkesh@cluster0.d4bccqw.mongodb.net/todo_app")

const todoSchema = new mongoose.Schema({ title: String, description: String, completed: Boolean})

const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo
}