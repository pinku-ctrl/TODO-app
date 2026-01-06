const express = require('express');
const app = express();
const mongoose = require('mongoose')
const {schema1} = require('./types.js')
const {schema2} = require('./types.js')
const {todo} = require('./db.js')
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = schema1.safeParse(createPayload);
    if(!parsedPayload.success) {
	  res.status(411).json({
		  msg: "You sent the wrong inputs",
          })
	  return;
    }
    // Put it in DB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo got created"
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = schema2.safeParse(updatePayload);
    if(!parsedPayload.success) {
	  res.status(411).json({
		  msg: "You sent the wrong inputs",
          })
	  return;
    }

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000)