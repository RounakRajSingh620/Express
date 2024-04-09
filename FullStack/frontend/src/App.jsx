/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  });
  return (
    <>
      <h1> Chai and FullStack </h1>
      <p>JOKES: {jokes.length} </p>

      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App