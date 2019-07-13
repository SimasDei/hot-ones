import React from 'react';

import ScovilleMeter from './components/ScovilleMeter';

function App() {
  return (
    <div className="App">
      <header className="App-header" scovilles={5000}>
        Hot Ones
      </header>
      <ScovilleMeter />
    </div>
  );
}

export default App;
