import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

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
    <div className="container">
      <div className="row justify-content-center mt-5 ">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="login-form-container">
            <div>
              <div className='main-login-form mt-8'>
                <h2 className='text-center text-black'>Login Form</h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
