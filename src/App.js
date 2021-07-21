import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Weather from  './Weather.js'
function App() {
  return (
    <div className="App">
      
    <h1 style={{backgroundColor:'#2E8B57',fontStyle:'YELLOWTAIL'}}>WEATHER</h1>
        <Weather />
    </div>
  );
}

export default App;
