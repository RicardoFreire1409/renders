import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleReadMore = (post) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'tips', name: 'Tips de Producción' },
    { id: 'equipment', name: 'Equipos' },
    { id: 'interviews', name: 'Entrevistas' },
    { id: 'tutorials', name: 'Tutoriales' },
    { id: 'industry', name: 'Industria Musical' }
  ];

  const posts = [
    {
      id: 1,
      title: "5 Tips para Grabar Voces Profesionales en Casa",
      excerpt: "Aprende técnicas básicas para mejorar la calidad de tus grabaciones vocales sin necesidad de un estudio profesional.",
      category: "tips",
      author: "Carlos Mendoza",
      date: "2025-01-15",
      readTime: "5 min",
      image: "Professional microphone setup for vocal recording at home",
      featured: true
    },
    {
      id: 2,
      title: "Guía Completa: Micrófonos para Cada Instrumento",
      excerpt: "Descubre qué micrófono usar para cada instrumento y cómo posicionarlos correctamente para obtener el mejor sonido.",
      category: "equipment",
      author: "María González",
      date: "2025-01-12",
      readTime: "8 min",
      image: "Various professional microphones for different instruments"
    },
    {
      id: 3,
      title: "Entrevista: Los Navegantes y su Nuevo Álbum",
      excerpt: "Conversamos con la banda local sobre su proceso creativo y su experiencia grabando en Estudio Altamar.",
      category: "interviews",
      author: "Luis Ramírez",
      date: "2025-01-10",
      readTime: "12 min",
      image: "Rock band Los Navegantes in interview setting"
    },
    {
      id: 4,
      title: "Mezcla 101: Fundamentos para Principiantes",
      excerpt: "Una introducción completa al mundo de la mezcla musical, desde conceptos básicos hasta técnicas avanzadas.",
      category: "tutorials",
      author: "Carlos Mendoza",
      date: "2025-01-08",
      readTime: "15 min",
      image: "Audio mixing console with multiple channels and faders"
    },
    {
      id: 5,
      title: "El Futuro de la Música Independiente en Ecuador",
      excerpt: "Análisis del panorama actual y las oportunidades para artistas independientes en el mercado ecuatoriano.",
      category: "industry",
      author: "María González",
      date: "2025-01-05",
      readTime: "10 min",
      image: "Independent musicians performing in Ecuador"
    },
    {
      id: 6,
      title: "Cómo Prepararte para tu Primera Sesión de Grabación",
      excerpt: "Todo lo que necesitas saber antes de entrar al estudio para aprovechar al máximo tu tiempo y dinero.",
      category: "tips",
      author: "Luis Ramírez",
      date: "2025-01-03",
      readTime: "7 min",
      image: "Musician preparing for recording session with instruments"
    },
    {
      id: 7,
      title: "Masterización: El Toque Final que Marca la Diferencia",
      excerpt: "Entiende por qué la masterización es crucial y cómo puede transformar completamente tu música.",
      category: "tutorials",
      author: "Carlos Mendoza",
      date: "2025-01-01",
      readTime: "9 min",
      image: "Audio mastering equipment and software interface"
    },
    {
      id: 8,
      title: "Equipos Esenciales para tu Home Studio",
      excerpt: "Una lista completa de equipos básicos para montar tu propio estudio casero con presupuesto limitado.",
      category: "equipment",
      author: "María González",
      date: "2024-12-28",
      readTime: "11 min",
      image: "Home studio setup with essential recording equipment"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Estudio Altamar</title>
        <meta name="description" content="Tips de producción musical, tutoriales de grabación, entrevistas con artistas y las últimas tendencias de la industria musical en Ecuador." />
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
                Blog <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Musical</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tips de producción, tutoriales, entrevistas y todo lo que necesitas saber 
                sobre el mundo de la grabación musical.
              </p>
            </motion.div>

            {/* Search and Filters */}
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
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none w-64"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded-lg text-white px-4 py-2 focus:border-teal-500 focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Artículo Destacado</h2>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-teal-500/30 hover:border-teal-500/50 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img  
                        className="w-full h-64 lg:h-full object-cover" 
                        alt={featuredPost.title}
                       src="https://images.unsplash.com/photo-1619199059624-7335464ea7b0" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-coral-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                          DESTACADO
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded">
                          {categories.find(c => c.id === featuredPost.category)?.name}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString('es-ES')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 text-lg">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{featuredPost.readTime} de lectura</span>
                        <Button 
                          onClick={() => handleReadMore(featuredPost)}
                          className="bg-teal-500 hover:bg-teal-600 text-white"
                        >
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white text-center">
                {selectedCategory === 'all' ? 'Últimos Artículos' : `Artículos de ${categories.find(c => c.id === selectedCategory)?.name}`}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 hover:border-teal-500/40 transition-all group"
                >
                  <div className="relative overflow-hidden">
                    <img  
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      alt={post.title}
                     src="https://images.unsplash.com/photo-1577510409458-a70f1efcba3d" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.readTime} de lectura</span>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => handleReadMore(post)}
                        className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black"
                      >
                        Leer Más
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No se encontraron artículos</h3>
                <p className="text-gray-500">Intenta con otros filtros o términos de búsqueda</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿No te quieres perder nada?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Suscríbete a nuestro newsletter y recibe los mejores tips de producción musical
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button 
                  onClick={() => toast({
                    title: "🚧 Esta función no está implementada aún",
                    description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
                  })}
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-teal-600 hover:bg-gray-100 px-6"
                >
                  Suscribirse
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
