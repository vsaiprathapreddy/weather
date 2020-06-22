import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import Weather from  './Weather.js'
import navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
    <h1 style={{backgroundColor:'#2E8B57',fontStyle:'YELLOWTAIL'}}>WEATHER</h1>
        <Weather />
    </div>
  );
}

export default App;
