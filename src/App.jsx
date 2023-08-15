import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa Routes
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <nav className=''>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Acerca de</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>

          <Routes> {/* Envuelve tus Route dentro de Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
