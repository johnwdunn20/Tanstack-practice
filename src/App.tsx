import React from 'react';
import './App.css';
import TanStackTable from './components/TanStackTable';
import AGGrid from './components/AGGrid';
import MapTest from './components/MapTest';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <MapTest/>
      {/* <h3>AG Grid</h3>
      <AGGrid />
      <br />
      <h3>TanStack Table</h3>
      <TanStackTable /> */}
    </div>
    
  );
}

export default App;
