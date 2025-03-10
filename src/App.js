import './App.css';
import React from 'react';
import { RateDashBoard } from './pages/MilkRatesDashboard';
import { Home } from './components/Home';
import './components/header/Header.js';
import { Header } from './components/header/Header.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/Login';
import { MainRoute } from './routes/MainRoute';
import { Dashboard } from './components/Dashboard';
import { ProtectedRoute } from './routes/ProtectedRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        path: 'dashboard',
        element: <ProtectedRoute element={<Dashboard />} />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
