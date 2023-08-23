
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

import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color='#000'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<General setProgress={setProgress} />} />
        <Route path='/entertainment' element={<Entertainment setProgress={setProgress} />} />
        <Route path='/sports' element={<Sports setProgress={setProgress} />} />
        <Route path='/science' element={<Science setProgress={setProgress} />} />
        <Route path='/health' element={<Health setProgress={setProgress} />} />
        <Route path='/business' element={<Business setProgress={setProgress} />} />
        <Route path='/technology' element={<Technology setProgress={setProgress} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
