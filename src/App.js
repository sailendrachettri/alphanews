
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { News } from './components/News';
import Navbar from './components/Navbar';

function App() {
  const country = 'in'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<News key="general" category="general" country={country} />} />
        <Route path='/entertainment' element={<News key="entertainment" category="entertainment" country={country} />} />
        <Route path='/sports' element={<News key="sports" category="sports" country={country} />} />
        <Route path='/science' element={<News key="science" category="science" country={country} />} />
        <Route path='/health' element={<News key="health" category="health" country={country} />} />
        <Route path='/business' element={<News key="business" category="business" country={country} />} />
        <Route path='/technology' element={<News key="technology" category="technology" country={country} />} />

      </Routes>

    </>
  );
}

export default App;
