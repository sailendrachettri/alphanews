
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { News } from './components/News';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<News key="general" category="general" />} />
          <Route path='/entertainment' element={<News key="entertainment" category="entertainment" />} />
          <Route path='/sports' element={<News key="sports" category="sports" />} />
          <Route path='/science' element={<News key="science" category="science" />} />
          <Route path='/health' element={<News key="health" category="health" />} />
          <Route path='/business' element={<News key="business" category="business" />} />
          <Route path='/technology' element={<News key="technology" category="technology" />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
