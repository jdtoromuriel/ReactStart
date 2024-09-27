import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles.scss';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path='/about' element={<About />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
