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
// import Blog from '@/pages/Blog'; // si luego lo habilitas, quita el comentario
import Contact from '@/pages/Contact';
// import Profile from '@/pages/Profile'; // si luego lo habilitas, quita el comentario

// Si tu ThemeToggle usa next-themes, descomenta esto y envuelve la app con ThemeProvider.
// import { ThemeProvider } from 'next-themes';

function App() {
  return (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Router>
      {/* Heredamos colores desde <body> (ya controlado por dark mode). */}
      <div className="min-h-screen bg-inherit text-inherit">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/reservar" element={<Booking />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/sobre-nosotros" element={<About />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
           {/* <Route path="/contacto" element={<Contact />} />*/}
             <Route path="/perfil" element={<Profile />} /> 
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
