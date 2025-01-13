import api from '../../services/api';

const todoService = {
  getTodos: async () => {
    const response = await api.get('/todos');
    return response.data;
  },
  createTodo: async (text) => {
    const response = await api.post('/todos', { text });
    return response.data;
  },
  toggleTodo: async (id) => {
    const response = await api.patch(`/todos/${id}`);
    return response.data;
  },
};

export default todoService;