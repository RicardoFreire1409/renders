import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Star, Mic, Headphones, Music2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Services() {
  const [billingType, setBillingType] = useState('monthly');
  const { toast } = useToast();

  const handleSubscribe = (plan) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Algun día la implementaremos!😈🚀"
    });
  };

  const services = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Grabación Multipista",
      description: "Grabación profesional con equipos de última generación",
      features: ["Hasta 32 canales simultáneos", "Micrófonos premium", "Monitoreo en tiempo real"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Mezcla y Masterización",
      description: "Dale el toque final profesional a tu música",
      features: ["Mezcla estéreo y surround", "Masterización para streaming", "Revisiones incluidas"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Producción Musical",
      description: "Trabaja con nuestros productores expertos",
      features: ["Arreglos musicales", "Programación MIDI", "Asesoría creativa"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Estudio Altamar</title>
        <meta
          name="description"
          content="Servicios de grabación, mezcla y masterización. Planes desde $15/hora o suscripción mensual por $30. Equipos profesionales en Guayaquil."
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379704162931477"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <div className="pt-16 transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-coral-50 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
                Nuestros <span className="bg-gradient-to-r from-teal-500 to-coral-500 bg-clip-text text-transparent">Servicios</span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
                Desde grabación básica hasta producción completa, tenemos todo lo que necesitas para crear música profesional
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition-colors"
                >
                  <div className="text-teal-600 dark:text-teal-400 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 mb-6 transition-colors">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                        <Check className="h-4 w-4 text-teal-600 dark:text-teal-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
                Planes y <span className="text-coral-600 dark:text-coral-400">Precios</span>
              </h2>
              <p className="text-xl text-slate-700 dark:text-gray-300 mb-8 transition-colors">
                Elige la opción que mejor se adapte a tu proyecto musical
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${billingType === 'hourly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400'}`}>
                  Por Hora
                </span>
                <button
                  onClick={() => setBillingType(billingType === 'hourly' ? 'monthly' : 'hourly')}
                  className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors focus:outline-none"
                >
                  <div
                    className={`absolute top-1 w-6 h-6 rounded-full transition-transform bg-teal-600 dark:bg-teal-400 ${
                      billingType === 'monthly' ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingType === 'monthly' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400'}`}>
                  Mensual
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plan Básico */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-teal-500/30 transition-colors"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Básico</h3>
                  <div className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    ${billingType === 'hourly' ? '15' : '25'}
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 mb-6 transition-colors">
                    {billingType === 'hourly' ? 'por hora' : 'por mes'}
                  </p>

                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3" />
                      Acceso al estudio
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3" />
                      Equipos básicos
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3" />
                      Uso autónomo
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3" />
                      {billingType === 'hourly' ? 'Pago por uso' : '10 horas incluidas'}
                    </li>
                  </ul>

                  <Button
                    onClick={() => handleSubscribe('basic')}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    {billingType === 'hourly' ? 'Reservar Hora' : 'Suscribirse'}
                  </Button>
                </div>
              </motion.div>

              {/* Plan Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-coral-100 to-white dark:from-coral-600/20 dark:to-coral-800/20 p-8 rounded-2xl border border-coral-500/50 relative transform scale-105 transition-colors"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-coral-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Premium</h3>
                  <div className="text-5xl font-bold text-coral-600 dark:text-coral-400 mb-2">
                    ${billingType === 'hourly' ? '25' : '30'}
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 mb-6 transition-colors">
                    {billingType === 'hourly' ? 'por hora' : 'por mes'}
                  </p>

                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-coral-600 dark:text-coral-400 mr-3" />
                      Todo lo del plan básico
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-coral-600 dark:text-coral-400 mr-3" />
                      Equipos premium
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-coral-600 dark:text-coral-400 mr-3" />
                      Productor incluido
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-coral-600 dark:text-coral-400 mr-3" />
                      {billingType === 'hourly' ? 'Asesoría incluida' : 'Horas ilimitadas'}
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-coral-600 dark:text-coral-400 mr-3" />
                      Galería de artista
                    </li>
                  </ul>

                  <Button
                    onClick={() => handleSubscribe('premium')}
                    className="w-full bg-coral-500 hover:bg-coral-600 text-black"
                  >
                    {billingType === 'hourly' ? 'Reservar Hora' : 'Suscribirse Ahora'}
                  </Button>
                </div>
              </motion.div>

              {/* Plan Pro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-yellow-500/30 transition-colors"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Pro</h3>
                <div className="text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    ${billingType === 'hourly' ? '40' : '50'}
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 mb-6 transition-colors">
                    {billingType === 'hourly' ? 'por hora' : 'por mes'}
                  </p>

                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      Todo lo del plan premium
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      Mezcla incluida
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      Masterización básica
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      Prioridad en reservas
                    </li>
                    <li className="flex items-center text-slate-700 dark:text-gray-300 transition-colors">
                      <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                      Soporte 24/7
                    </li>
                  </ul>

                  <Button
                    onClick={() => handleSubscribe('pro')}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    {billingType === 'hourly' ? 'Reservar Hora' : 'Suscribirse'}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
                Equipos <span className="text-teal-600 dark:text-teal-400">Profesionales</span>
              </h2>
              <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
                Trabajamos con la mejor tecnología para garantizar la calidad de tu música
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 transition-colors"
              >
                <img
                  className="w-full h-48 object-cover"
                  alt="Consola de mezcla profesional"
                  src="https://images.unsplash.com/photo-1696872733080-9b6a6411d4c3"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Consola SSL</h3>
                  <p className="text-slate-600 dark:text-gray-400 transition-colors">Consola de mezcla analógica de 32 canales</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 transition-colors"
              >
                <img
                  className="w-full h-48 object-cover"
                  alt="Micrófonos profesionales de estudio"
                  src="https://images.unsplash.com/photo-1692206825727-a2309282572c"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Micrófonos Premium</h3>
                  <p className="text-slate-600 dark:text-gray-400 transition-colors">Neumann, AKG, Shure y más marcas top</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-teal-500/20 transition-colors"
              >
                <img
                  className="w-full h-48 object-cover"
                  alt="Monitores de estudio profesionales"
                  src="https://images.unsplash.com/photo-1616586111706-42355f92a67b"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Monitores Genelec</h3>
                  <p className="text-slate-600 dark:text-gray-400 transition-colors">Monitoreo de referencia para mezcla precisa</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
