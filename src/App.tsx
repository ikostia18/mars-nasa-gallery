import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Weather from './pages/Weather';

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="weather" element={<Weather />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    // <div className="App"></div>
  );
}

export default App;
