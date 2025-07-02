import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Booking from '@/pages/Booking';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/reservar" element={<Booking />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;