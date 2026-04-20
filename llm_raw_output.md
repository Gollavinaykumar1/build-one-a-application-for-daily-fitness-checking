# LLM Output

=== FILE: src/App.jsx ===
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Home from './Home';
import FitnessCheck from './FitnessCheck';
import History from './History';

function App() {
  const [fitnessData, setFitnessData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFitnessData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/fitness`);
      setFitnessData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFitnessData();
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness-check" element={<FitnessCheck />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
=== END ===

=== FILE: src/main.jsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const BASE_URL = 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
=== END ===

=== FILE: src/index.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #3e8e41;
}
=== END ===

=== FILE: src/api.js ===
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const getFitnessData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fitness`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const postFitnessData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/fitness`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getFitnessData, postFitnessData };
=== END ===