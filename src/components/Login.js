import { React, useState } from 'react';
import { isAuthenticated, login } from '../utils/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import './Login.css';
export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((userData) => ({ ...userData, [name]: value }));
  };
  const handleSubmit = () => {
    login(user);
    navigate('dashboard'); // Redirect to dashboard upon successful login
  };
  return (
    <>
      <h2 className={'main-header-text'}>Milk-Veta {new Date().toLocaleDateString()}</h2>
      {!isAuthenticated() && (
        <div>
          <h2>Please Login</h2>
          <div>
            <label htmlFor="email">
              <input type="email" name="email" value={user?.email} onChange={handleOnChange} />
            </label>
            <br />
            <label htmlFor="password">
              <input type="password" name="password" value={user?.password} onChange={handleOnChange} />
            </label>
            <button type="submit" onClick={handleSubmit}></button>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
