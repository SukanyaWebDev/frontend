import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        const data = await response.json();
        setJokes(data.jokes);
      } catch (error) {
        console.error('Error fetching jokes:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Implement any additional logout logic if needed
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Jokes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke) => (
              <tr key={joke.id}>
                <td>{joke.id}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
