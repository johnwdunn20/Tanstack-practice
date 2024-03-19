import React from 'react';
import logo from './logo.svg';
import './App.css';
import TanStackGrid from './components/TanStackGrid';
import AGGrid from './components/AGGrid';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <h3>AG Grid</h3>
      <AGGrid />
      <br />
      <h3>TanStack Grid</h3>
      <TanStackGrid />
    </div>
  );
}

export default App;
