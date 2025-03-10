import { Login } from '../components/Login';
import { isAuthenticated } from '../utils/auth';

export const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Login />;
};
