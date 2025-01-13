let todos = [];

const getTodosByUserId = async (userId) => {
    return todos.filter(todo => todo.userId === userId);
};

const createTodo = async (userId, text) => {
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        userId
    };
    todos.push(newTodo);
    return newTodo;
};

module.exports = { getTodosByUserId, createTodo };