import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';

import './index.css';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
      .then(response => response.json())
      .then(data => {
        setJokes(data.jokes);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    // Redirect to login page on logout
    navigate('/login');
  };

  return (
    <div>
      <nav className="nav-header">
        <div className="nav-content">
          <ul className="nav-menu">
            <li className="nav-link" onClick={() => navigate('/')}>
              Home
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className='text-info text-center'>Jokes Table</h2>
        {loading ? (
          <FaSpinner className="spinner" />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='text-warning'>ID</th>
                <th scope="col" className='text-warning'>CATEGORY</th>
                <th scope="col" className='text-warning'>JOKE</th>
              </tr>
            </thead>
            <tbody>
              {jokes.map((joke) => (
                <tr key={joke.id}>
                  <td>{joke.id}</td>
                  <td>{joke.category}</td>
                  <td>{joke.joke}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Homepage;
