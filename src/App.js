import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GameCard from './components/GameСard';
import FamilyTree from './components/FamilyTree';
import './style.css'

class App extends React.Component {
  render() {
    return (
      <Router>
          <nav style={{ padding: '20px' }}>
            <Link className = "link" to="/game" style={{ marginRight: '15px' }}>Factorio</Link>
            <Link className = "link" to="/family-tree">Семья</Link>
          </nav>

          <Routes>
            <Route path="/game" element={<GameCard />} />
            <Route path="/family-tree" element={<FamilyTree />} />
          </Routes>
      </Router>
    );
  }
}

export default App;
