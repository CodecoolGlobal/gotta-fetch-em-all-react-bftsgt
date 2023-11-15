import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoosePlayer from './ChoosePlayer';
import LocationsList from './LocationsList';
import Encounter from './Encounter';
import Battlefield from './Battlefield';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ChoosePlayer />} />
          <Route path="/locations" element={<LocationsList />} />
          <Route path="/encounter/:locationId" element={<Encounter />} />
          <Route path='/battlefield' element={<Battlefield />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
