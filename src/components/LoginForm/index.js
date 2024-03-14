import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials for demonstration
    if (username === 'sukanya' && password === 'sukanya@2021') {
      // Redirect to homepage on successful login
      navigate('/homepage');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className=" mt-5 main-container d-flex flex-column justify-content-center ">
      <div className='main-login-form '>
      <h2 className='text-center text-black'>Login</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;
