import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Inicio',
    path: '/'
  }, {
    name: 'Servicios',
    path: '/servicios'
  }, {
    name: 'Reservar',
    path: '/reservar'
  }, {
    name: 'Galería',
    path: '/galeria'
  }, {
    name: 'Sobre Nosotros',
    path: '/sobre-nosotros'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contacto',
    path: '/contacto'
  }];
  return <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Renders Logo" className="h-20" style={{ width: '120px' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-teal-400 ${location.pathname === item.path ? 'text-teal-400' : 'text-gray-300'}`}>
                {item.name}
              </Link>)}
            <ThemeToggle />
            <Link to="/perfil">
              <Button variant="outline" size="sm" className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black">
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-teal-400 ${location.pathname === item.path ? 'text-teal-400' : 'text-gray-300'}`}>
                  {item.name}
                </Link>)}
              <ThemeToggle />
              <Link to="/perfil" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full mt-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black">
                  <User className="h-4 w-4 mr-2" />
                  Mi Cuenta
                </Button>
              </Link>
            </div>
          </motion.div>}
      </div>
    </nav>;
}
