
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { General } from './components/General';
import { Entertainment } from './components/Entertainment';
import { Health } from './components/Health';
import { Technology } from './components/Technology';
import { Business } from './components/Business';
import { Science } from './components/Science';
import { Sports } from './components/Sports';


function App() {
  // const country = 'in'

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<General />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/science' element={<Science />} />
        <Route path='/health' element={<Health />} />
        <Route path='/business' element={<Business />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
