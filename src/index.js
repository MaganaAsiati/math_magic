import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Calculator from './components/Calculator';
import './App.css';
import Home from './components/home';
import Quote from './components/Quote';

document.body.style = 'background-color: #131313;';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="Quotes" element={<Quote />} />
      </Route>
    </Routes>
  </Router>,
);
