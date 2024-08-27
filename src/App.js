
import React from 'react';
import PlayersList from './components/PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '2rem' }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
