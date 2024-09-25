import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import Home from './pages/Home';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
