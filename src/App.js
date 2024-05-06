import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetUpspage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUps';
import FavouritesPage from './pages/Favourites';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetUpspage />} />
        <Route path='/new-meetup' element={<NewMeetUpPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
