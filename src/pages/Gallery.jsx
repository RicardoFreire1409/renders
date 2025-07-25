import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Music, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Gallery() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handlePlay = (artist) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "Ya deja de tocar todo ññ 🚀"
    });
  };

  const genres = [
    { id: 'all', name: 'Todos' },
    { id: 'rock', name: 'Rock' },
    { id: 'pop', name: 'Pop' },
    { id: 'electronic', name: 'Electrónica' },
    { id: 'hip-hop', name: 'Hip-Hop' },
    { id: 'folk', name: 'Folk' },
    { id: 'reggaeton', name: 'Reggaetón' }
  ];

  const artists = [
    {
      id: 1,
      name: "Los Navegantes",
      genre: "rock",
      image: "Rock band performing on stage with electric guitars",
      description: "Banda de rock alternativo de Guayaquil con 5 años de trayectoria",
      tracks: ["Mareas Altas", "Viento del Sur", "Navegando"],
      social: { instagram: "@losnavegantes", youtube: "Los Navegantes Official" }
    },
    {
      id: 2,
      name: "María González",
      genre: "pop",
      image: "Female singer with microphone in recording studio",
      description: "Cantautora pop con influencias latinas y sonidos modernos",
      tracks: ["Corazón Libre", "Sueños de Cristal", "Amanecer"],
      social: { instagram: "@mariagonzalezmusic", youtube: "María González" }
    },
    {
      id: 3,
      name: "Banda Mareas",
      genre: "rock",
      image: "Alternative rock band with instruments in studio",
      description: "Rock alternativo con toques experimentales y letras profundas",
      tracks: ["Corrientes", "Profundidad", "Resaca"],
      social: { instagram: "@bandamareas", youtube: "Banda Mareas" }
    },
    {
      id: 4,
      name: "DJ Cosmos",
      genre: "electronic",
      image: "DJ with electronic music equipment and synthesizers",
      description: "Productor de música electrónica y ambient experimental",
      tracks: ["Nebula", "Orbital", "Galaxia"],
      social: { instagram: "@djcosmos", youtube: "DJ Cosmos" }
    },
    {
      id: 5,
      name: "MC Flow",
      genre: "hip-hop",
      image: "Hip-hop artist with microphone and urban background",
      description: "Rapero emergente con letras conscientes y flow único",
      tracks: ["Barrio", "Resistencia", "Futuro"],
      social: { instagram: "@mcflow_ec", youtube: "MC Flow" }
    },
    {
      id: 6,
      name: "Acústica Libre",
      genre: "folk",
      image: "Acoustic folk duo with guitars in natural setting",
      description: "Dúo folk acústico con raíces latinoamericanas",
      tracks: ["Caminos", "Tierra", "Raíces"],
      social: { instagram: "@acusticalib", youtube: "Acústica Libre" }
    },
    {
      id: 7,
      name: "Fuego Latino",
      genre: "reggaeton",
      image: "Reggaeton artist in urban studio setting",
      description: "Artista de reggaetón con fusión de ritmos tropicales",
      tracks: ["Calor", "Ritmo", "Fiesta"],
      social: { instagram: "@fuegolatino", youtube: "Fuego Latino" }
    },
    {
      id: 8,
      name: "Synth Dreams",
      genre: "electronic",
      image: "Electronic music producer with vintage synthesizers",
      description: "Proyecto de synthwave y retrowave con estética ochentosa",
      tracks: ["Neon Nights", "Digital Love", "Retro Future"],
      social: { instagram: "@synthdreams", youtube: "Synth Dreams" }
    }
  ];

  const filteredArtists = artists.filter(artist => {
    const matchesGenre = selectedGenre === 'all' || artist.genre === selectedGenre;
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Galería de Artistas - Estudio Altamar</title>
        <meta name="description" content="Descubre artistas independientes que han grabado en Estudio Altamar. Escucha sus trabajos y conecta con la escena musical de Guayaquil." />
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
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Galería de <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Artistas</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre el talento independiente que ha pasado por nuestro estudio. 
                Conecta con artistas y explora la diversa escena musical de Guayaquil.
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artistas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none w-64"
                />
              </div>

              {/* Genre Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded-lg text-white px-4 py-2 focus:border-teal-500 focus:outline-none"
                >
                  {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredArtists.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-500/40 transition-all group"
                >
                  {/* Artist Image */}
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      alt={`${artist.name} - ${artist.genre} artist`}
                     src="https://images.unsplash.com/photo-1577683954096-f2ee04da19f8" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => handlePlay(artist)}
                        className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3 transform scale-90 hover:scale-100 transition-transform"
                      >
                        <Play className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                      <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">
                        {genres.find(g => g.id === artist.genre)?.name}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4">{artist.description}</p>

                    {/* Tracks */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 flex items-center">
                        <Music className="h-4 w-4 mr-2 text-teal-400" />
                        Tracks
                      </h4>
                      <ul className="space-y-1">
                        {artist.tracks.slice(0, 3).map((track, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-center">
                            <span className="w-2 h-2 bg-coral-400 rounded-full mr-2"></span>
                            {track}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handlePlay(artist)}
                        className="flex-1 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black text-xs"
                      >
                        <Play className="h-3 w-3 mr-1" />
                        Escuchar
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handlePlay(artist)}
                        className="border-coral-500 text-coral-400 hover:bg-coral-500 hover:text-black"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArtists.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Music className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No se encontraron artistas</h3>
                <p className="text-gray-500">Intenta con otros filtros o términos de búsqueda</p>
              </motion.div>
            )}
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
                ¿Quieres aparecer aquí?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Suscríbete a nuestro plan premium y obtén tu propia galería de artista
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Ver Planes Premium
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg">
                  Contactar
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
