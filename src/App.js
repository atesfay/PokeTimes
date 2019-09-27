import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Router} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>

  );
}

export default App;
