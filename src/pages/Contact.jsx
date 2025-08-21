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
      description: "¡Pero no te preocupes! Próximamente estará disponible"
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
    { question: "¿Necesito experiencia previa para grabar?", answer: "No, trabajamos con artistas de todos los niveles. Nuestro equipo te guiará durante todo el proceso." },
    { question: "¿Puedo traer mis propios instrumentos?", answer: "¡Por supuesto! También tenemos instrumentos disponibles si los necesitas." },
    { question: "¿Cuánto tiempo dura una sesión típica?", answer: "Las sesiones pueden durar desde 1 hora hasta días completos, dependiendo de tu proyecto." },
    { question: "¿Ofrecen servicios de masterización?", answer: "Sí, ofrecemos servicios completos de mezcla y masterización profesional." },
    { question: "¿Puedo cancelar o reprogramar mi reserva?", answer: "Sí, puedes cancelar hasta 24 horas antes sin costo adicional." }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Estudio Altamar</title>
        <meta name="description" content="Contacta con Estudio Altamar. Teléfono, email, ubicación y horarios. Resuelve tus dudas sobre servicios de grabación en Guayaquil." />
      </Helmet>

      <div className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">Contacto</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ¿Tienes preguntas? ¿Listo para reservar tu sesión? Estamos aquí para ayudarte a hacer realidad tu proyecto musical.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-300 dark:border-teal-500/20 text-center transition-colors"
                >
                  <div className="text-teal-600 dark:text-teal-400 mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 dark:text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black transition-colors">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Nombre completo" className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none" />
                </div>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Cuéntanos sobre tu proyecto..." rows={6} className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"></textarea>
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white">Enviar</Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 transition-colors">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Preguntas <span className="text-teal-600 dark:text-teal-400">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Resolvemos las dudas más comunes sobre nuestros servicios</p>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-300 dark:border-teal-500/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
