import React from 'react';

import './App.css';

import MiValidador from './MiValidador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Clave uvalpo</p>
        <MiValidador  valor = "123344" />
      </header>
    </div>
  );
}
export default App;