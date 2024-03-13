/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos  - Done 👍
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123  - Done 👍
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" } - Done 👍
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true } - Done 👍
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123 - Done 👍

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  const app = express();
  
  app.use(bodyParser.json());
  
  app.get('/todos', (req, res) => {
    fs.readFile('./todos.json', 'utf-8', function(error, data){
      if(error) res.send('<h1>No Flight Found</h1>');
      else res.send(JSON.parse(data));
    })
  })

  function findIndex(todos, id){
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === id) return i;
    }
    return -1;
  }

  app.get('/todos/:id', (req, res) => {
    fs.readFile('./todos.json', 'utf-8', function(error, data){
      if(error) res.send('<h1>No Flight Found</h1>');
      else {
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if(todoIndex === -1) res.send('<h1>No Flight Found</h1>');
        else res.send(todos[todoIndex]);
      }
    })
  })

  app.post('/todos', (req, res) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000), // unique random id
      title: req.body.title,
      description: req.body.description
    };
    fs.readFile('./todos.json', 'utf-8', function(error, data){
      if(error) res.send('<h1>No Flight Found</h1>');
      else {
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
          if(err) throw err;
          res.status(201).json(newTodo);
        });
      }
    })
  })

  app.put('/todos/:id', (req, res) => {
    fs.readFile('./todos.json', 'utf-8', function(error, data){
      if(error) res.send('<h1>No Flight Found</h1>');
      else {
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if(todoIndex === -1) res.send('<h1>No Flight Found</h1>');
        else {
          todos[todoIndex].title = req.body.title;
          todos[todoIndex].description = req.body.description;
          res.json(todos[todoIndex]);
        }
      }
    })
  })

  app.delete('/todos/:id', (req, res) => {
    fs.readFile('./todos.json', 'utf-8', function(error, data){
      if(error) res.send('<h1>No Flight Found</h1>');
      else {
        const todos = JSON.parse(data);
        const todoIndex = findIndex(todos, parseInt(req.params.id));
        if(todoIndex === -1) res.send('<h1>No Flight Found</h1>');
        else {
          todos.splice(todoIndex, 1);
          fs.writeFile('./todos.json', JSON.stringify(todos), (err) => {
            if(err) throw err;
            res.json(todos);
          });
        }
      }
    })
  })

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  })
  // module.exports = app;