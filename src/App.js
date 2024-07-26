// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio/inicio';
import Cardapio from './pages/cardapio/cardapio';
import Espaco from './pages/espaco/espaco';
import PratosEstacao from './pages/pratosestacao/pratosestacao';
import FAQ from './pages/faq/faq';
import SobreNos from './pages/sobrenos/sobrenos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/espaco" element={<Espaco />} />
        <Route path="/pratosestacao" element={<PratosEstacao />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}

export default App;
