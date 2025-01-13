const todoService = require('../services/todoService');

const getTodos = async (req, res) => {
    const todos = await todoService.getTodosByUserId(req.userId);
    res.json(todos);
};

const createTodo = async (req, res) => {
    const todo = await todoService.createTodo(req.userId, req.body.text);
    res.json(todo);
};

module.exports = { getTodos, createTodo };