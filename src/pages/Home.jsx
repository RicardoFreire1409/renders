import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Star, Clock, Users, Mic, Headphones, Music2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const { toast } = useToast();

  const handleVideoPlay = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Grabación Profesional",
      description: "Equipos de última generación para capturar tu sonido perfecto"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Mezcla y Masterización",
      description: "Dale el toque final profesional que tu música merece"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Productor Opcional",
      description: "Trabaja con nuestros productores expertos cuando lo necesites"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Horarios Flexibles",
      description: "Reserva desde $15/hora o suscríbete por $30/mes"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendoza",
      band: "Los Navegantes",
      text: "El mejor estudio de Guayaquil. La calidad es increíble y los precios son justos.",
      rating: 5
    },
    {
      name: "María González",
      band: "Solista",
      text: "Mi primer EP grabado aquí superó todas mis expectativas. ¡Totalmente recomendado!",
      rating: 5
    },
    {
      name: "Banda Mareas",
      band: "Rock Alternativo",
      text: "El ambiente es perfecto para crear. Los productores entienden nuestra visión.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>RENDERS - Grabación Profesional en Guayaquil</title>
        <meta name="description" content="Conecta con músicos independientes. Reserva sesiones de grabación, mezcla y masterización desde $15/hora. Calidad profesional, precios independientes." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-coral-900/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-teal-400 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 border border-coral-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">
                  Calidad de estudio,
                </span>
                <br />
                <span className="text-white">precios independientes</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Reserva sesiones de grabación, mezcla y masterización desde <span className="text-teal-400 font-bold">$15/hora</span> 
                o suscríbete por <span className="text-coral-400 font-bold">$30/mes</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link to="/reservar">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 text-lg">
                    Reservar Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleVideoPlay}
                  className="border-coral-400 text-coral-400 hover:bg-coral-400 hover:text-black px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Estudio
                </Button>
              </div>

              {/* Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative max-w-4xl mx-auto"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30">
                  <img  
                    className="w-full h-64 md:h-96 object-cover" 
                    alt="Estudio de grabación profesional con equipos modernos"
                   src="https://images.unsplash.com/photo-1559732277-7453b141e3a1" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button 
                      onClick={handleVideoPlay}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all"
                    >
                      <Play className="h-12 w-12 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sin barreras: <span className="text-teal-400">todos los géneros, todos los niveles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desde amateur hasta semi-pro, te ofrecemos el espacio y las herramientas para crear tu mejor música
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all group"
                >
                  <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Elige tu <span className="text-coral-400">plan perfecto</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Por Hora */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-teal-500/30"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Por Hora</h3>
                  <div className="text-5xl font-bold text-teal-400 mb-2">$15</div>
                  <p className="text-gray-400 mb-6">por hora</p>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-teal-400 mr-3" />
                      Acceso completo al estudio
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-teal-400 mr-3" />
                      Equipos profesionales
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-teal-400 mr-3" />
                      Uso autónomo o con productor
                    </li>
                  </ul>
                  <Link to="/servicios">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Suscripción */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-coral-600/20 to-coral-800/20 p-8 rounded-2xl border border-coral-500/50 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-coral-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Suscripción</h3>
                  <div className="text-5xl font-bold text-coral-400 mb-2">$30</div>
                  <p className="text-gray-400 mb-6">por mes</p>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-coral-400 mr-3" />
                      Horas ilimitadas
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-coral-400 mr-3" />
                      Prioridad en reservas
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-coral-400 mr-3" />
                      Galería de artista
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Music2 className="h-5 w-5 text-coral-400 mr-3" />
                      Descuentos especiales
                    </li>
                  </ul>
                  <Link to="/servicios">
                    <Button className="w-full bg-coral-500 hover:bg-coral-600 text-black">
                      Suscribirse Ahora
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lo que dicen nuestros <span className="text-teal-400">artistas</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-teal-400 text-sm">{testimonial.band}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para grabar tu próximo hit?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Únete a cientos de artistas que ya confían en Estudio Altamar
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/reservar">
                  <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Reservar Sesión
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg">
                    Ver Planes
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}