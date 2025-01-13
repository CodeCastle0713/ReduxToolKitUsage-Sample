const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');

const users = [{ id: 1, email: 'test@test.com', password: 'password123' }];

const login = async (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    return { token, user: { id: user.id, email: user.email } };
};

module.exports = { login };