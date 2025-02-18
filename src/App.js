import './App.css';
import React from 'react';
function App() {
  sessionStorage.setItem('Current version', process.env.REACT_APP_VERSION);
  return <div className="App"></div>;
}

export default App;
