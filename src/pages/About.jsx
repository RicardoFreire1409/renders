import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Music, Heart, MapPin, Clock, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "500+", label: "Artistas Grabados", icon: <Users className="h-6 w-6" /> },
    { number: "1000+", label: "Sesiones Completadas", icon: <Music className="h-6 w-6" /> },
    { number: "5", label: "Años de Experiencia", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Satisfacción del Cliente", icon: <Star className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Carlos Mendoza",
      role: "Fundador & Ingeniero de Audio",
      image: "Professional audio engineer in recording studio",
      description: "15 años de experiencia en producción musical. Especialista en rock y pop."
    },
    {
      name: "María González",
      role: "Productora Musical",
      image: "Female music producer working with mixing console",
      description: "Experta en música electrónica y urbana. Certificada en Pro Tools y Logic Pro."
    },
    {
      name: "Luis Ramírez",
      role: "Técnico de Sonido",
      image: "Sound technician adjusting studio equipment",
      description: "Especialista en acústica y mantenimiento de equipos. Ingeniero en sonido."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión por la Música",
      description: "Creemos que cada artista tiene una historia única que contar a través de su música."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidad",
      description: "Fomentamos la colaboración y el crecimiento de la escena musical independiente."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Calidad Profesional",
      description: "Utilizamos equipos de primera línea para garantizar resultados excepcionales."
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Creatividad Sin Límites",
      description: "Apoyamos la experimentación y la innovación en todos los géneros musicales."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Estudio Altamar</title>
        <meta name="description" content="Conoce la historia de Estudio Altamar, nuestro equipo y nuestra misión de apoyar a músicos independientes en Guayaquil con servicios profesionales de grabación." />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379704162931477"
     crossorigin="anonymous"></script>
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sobre <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Nosotros</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Somos más que un estudio de grabación. Somos el puente entre tu creatividad 
                y el sonido profesional que tu música merece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30">
                <img  
                  className="w-full h-64 md:h-96 object-cover" 
                  alt="Interior del Estudio Altamar con equipos profesionales"
                 src="https://images.unsplash.com/photo-1559732277-7453b141e3a1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Estudio Altamar</h3>
                  <p className="text-gray-200">Donde la música cobra vida</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nuestra <span className="text-teal-400">Historia</span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Estudio Altamar nació en 2019 con una visión clara: democratizar el acceso 
                    a servicios de grabación profesional para músicos independientes en Guayaquil.
                  </p>
                  <p>
                    Fundado por Carlos Mendoza, un ingeniero de audio con más de 15 años de experiencia, 
                    el estudio se estableció como un espacio donde la calidad profesional se encuentra 
                    con precios accesibles.
                  </p>
                  <p>
                    Desde entonces, hemos tenido el privilegio de trabajar con más de 500 artistas, 
                    desde músicos que graban su primera demo hasta bandas establecidas que buscan 
                    ese sonido perfecto para su próximo álbum.
                  </p>
                  <p>
                    Nuestro compromiso va más allá de la grabación: somos parte de la comunidad 
                    musical de Guayaquil, apoyando el crecimiento y la visibilidad de los artistas locales.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img  
                    className="rounded-lg h-48 object-cover" 
                    alt="Estudio de grabación en construcción"
                   src="https://images.unsplash.com/photo-1566581478686-a797f6dc37e2" />
                  <img  
                    className="rounded-lg h-48 object-cover mt-8" 
                    alt="Primera sesión de grabación en el estudio"
                   src="https://images.unsplash.com/photo-1568246605205-f8df0dde3c35" />
                  <img  
                    className="rounded-lg h-48 object-cover -mt-8" 
                    alt="Equipo del estudio trabajando"
                   src="https://images.unsplash.com/photo-1568246605205-f8df0dde3c35" />
                  <img  
                    className="rounded-lg h-48 object-cover" 
                    alt="Estudio completamente equipado"
                   src="https://images.unsplash.com/photo-1559732277-7453b141e3a1" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestro <span className="text-coral-400">Equipo</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Profesionales apasionados por la música, dedicados a hacer realidad tu visión artística
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20"
                >
                  <img  
                    className="w-full h-64 object-cover" 
                    alt={`${member.name} - ${member.role}`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-teal-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestros <span className="text-teal-400">Valores</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Los principios que guían cada decisión y cada proyecto en Estudio Altamar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20 text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="text-coral-400">Ubicación</span> Estratégica
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-teal-400" />
                    <span>Centro de Guayaquil, fácil acceso en transporte público</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-teal-400" />
                    <span>Horarios flexibles: 9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-teal-400" />
                    <span>Estacionamiento disponible para clientes</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-300">
                  Nuestro estudio está ubicado en el corazón de Guayaquil, 
                  en una zona segura y de fácil acceso. Contamos con todas 
                  las comodidades para que tu experiencia de grabación sea 
                  cómoda y productiva.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-teal-500/20">
                  <img  
                    className="w-full h-64 object-cover rounded-lg mb-6" 
                    alt="Ubicación del Estudio Altamar en Guayaquil"
                   src="https://images.unsplash.com/photo-1636373466162-330695a2af88" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Estudio Altamar</h3>
                    <p className="text-gray-400 mb-4">Av. 9 de Octubre y García Moreno</p>
                    <p className="text-gray-400 mb-4">Edificio Altamar, Piso 3</p>
                    <p className="text-teal-400 font-medium">Guayaquil, Ecuador</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
