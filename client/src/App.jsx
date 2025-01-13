import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import TodoList from './components/todos/TodoList';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/dashboard" element={<TodoList />} />
                <Route path="/profile" element={<TodoList />} />
                <Route path="/settings" element={<TodoList />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;