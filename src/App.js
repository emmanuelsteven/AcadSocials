import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetUpspage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUps';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
   <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUpspage />} />
        <Route path='/new-meetup' element={<NewMeetUpPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
      </Layout> 
    </div>
  );
}

export default App;

