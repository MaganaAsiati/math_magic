import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/Quotes">Quotes</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
