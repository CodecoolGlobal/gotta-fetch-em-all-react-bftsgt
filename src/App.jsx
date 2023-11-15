import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoosePlayer from './ChoosePlayer';
import LocationsList from './LocationsList';
import Encounter from './Encounter';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ChoosePlayer />} />
          <Route exact path="/locations" element={<LocationsList />} />
          <Route exact path="/encounter/:locationId" element={<Encounter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
