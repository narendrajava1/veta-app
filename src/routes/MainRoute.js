import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../components/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../components/Dashboard';

export const MainRoute = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute element={<Dashboard />} />
    }
  ]);
};
