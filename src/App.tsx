import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';

import StudentLife from './pages/StudentLife';

import Contact from './pages/Contact';
import Infra from './pages/Infra';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
           
            <Route path="/student-life" element={<StudentLife />} />
           <Route path="/info" element={<Infra></Infra>}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;