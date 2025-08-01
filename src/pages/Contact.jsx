import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Proximamente estará disponible"
    });
  };

  const handleWhatsApp = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: ["+593 98 796 4247", "+593 98 796 4247"],
      description: "Llámanos para consultas inmediatas"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["jorftama@espol.edu.ec"],
      description: "Escríbenos para información detallada"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      details: [""],
      description: "Guayaquil, Ecuador"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horarios",
      details: ["Lunes - Viernes: 9:00 AM - 10:00 PM", "Sábados: 10:00 AM - 8:00 PM"],
      description: "Domingos: Solo con cita previa"
    }
  ];

  const faqs = [
    {
      question: "¿Necesito experiencia previa para grabar?",
      answer: "No, trabajamos con artistas de todos los niveles. Nuestro equipo te guiará durante todo el proceso."
    },
    {
      question: "¿Puedo traer mis propios instrumentos?",
      answer: "¡Por supuesto! También tenemos instrumentos disponibles si los necesitas."
    },
    {
      question: "¿Cuánto tiempo dura una sesión típica?",
      answer: "Las sesiones pueden durar desde 1 hora hasta días completos, dependiendo de tu proyecto."
    },
    {
      question: "¿Ofrecen servicios de masterización?",
      answer: "Sí, ofrecemos servicios completos de mezcla y masterización profesional."
    },
    {
      question: "¿Puedo cancelar o reprogramar mi reserva?",
      answer: "Sí, puedes cancelar hasta 24 horas antes sin costo adicional."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Estudio Altamar</title>
        <meta name="description" content="Contacta con Estudio Altamar. Teléfono, email, ubicación y horarios. Resuelve tus dudas sobre servicios de grabación en Guayaquil." />
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
                <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Contacto</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ¿Tienes preguntas? ¿Listo para reservar tu sesión? 
                Estamos aquí para ayudarte a hacer realidad tu proyecto musical.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20 text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="booking">Reserva de sesión</option>
                      <option value="pricing">Consulta de precios</option>
                      <option value="services">Información de servicios</option>
                      <option value="technical">Consulta técnica</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none resize-none"
                  ></textarea>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                    <Button 
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="border-coral-500 text-coral-400 hover:bg-coral-500 hover:text-black"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </motion.div>

              {/* Map & Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Nuestra Ubicación</h2>
                
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-teal-500/20 mb-6">
                  <img  
                    className="w-full h-64 object-cover rounded-lg mb-6" 
                    alt="Mapa de ubicación del Estudio Altamar en Guayaquil"
                   src="https://images.unsplash.com/photo-1636373466162-330695a2af88" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-teal-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Estudio Altamar</p>
                        <p className="text-gray-400">Av. 9 de Octubre y García Moreno</p>
                        <p className="text-gray-400">Edificio Altamar, Piso 3</p>
                        <p className="text-gray-400">Guayaquil, Ecuador</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-teal-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Horarios de Atención</p>
                        <p className="text-gray-400">Lunes - Viernes: 9:00 AM - 10:00 PM</p>
                        <p className="text-gray-400">Sábados: 10:00 AM - 8:00 PM</p>
                        <p className="text-gray-400">Domingos: Solo con cita previa</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transportation Info */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-teal-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Cómo Llegar</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Metro: Estación Universidad Católica (5 min caminando)</li>
                    <li>• Bus: Líneas 1, 15, 40 (parada García Moreno)</li>
                    <li>• Taxi/Uber: Disponible 24/7</li>
                    <li>• Estacionamiento: Disponible para clientes</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Preguntas <span className="text-teal-400">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-300">
                Resolvemos las dudas más comunes sobre nuestros servicios
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-teal-500/20"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Necesitas ayuda inmediata?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Para consultas urgentes o reservas de último momento, contáctanos directamente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: +593 99 123 4567
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
