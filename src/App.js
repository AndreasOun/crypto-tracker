import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={[]} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
