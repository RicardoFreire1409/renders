import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Calendar, CreditCard, Music, Settings, LogOut, Edit, Star, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const handleAction = (action) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  // Mock user data
  const userData = {
    name: "Ricardo Freire",
    email: "rfreire@email.com",
    phone: "+593 99 123 4567",
    memberSince: "2024-03-15",
    plan: "Premium",
    avatar: "Professional musician with guitar in studio setting"
  };

  const bookingHistory = [
    {
      id: 1,
      date: "2025-01-20",
      time: "14:00",
      service: "Grabación + Productor",
      duration: "2 horas",
      status: "Completada",
      total: 50
    },
    {
      id: 2,
      date: "2025-01-15",
      time: "16:00",
      service: "Mezcla",
      duration: "3 horas",
      status: "Completada",
      total: 90
    },
    {
      id: 3,
      date: "2025-01-25",
      time: "10:00",
      service: "Grabación Básica",
      duration: "1 hora",
      status: "Programada",
      total: 15
    }
  ];

  const subscriptionInfo = {
    plan: "Premium",
    price: 30,
    nextBilling: "2025-02-15",
    hoursUsed: 12,
    hoursRemaining: "Ilimitadas",
    benefits: [
      "Horas ilimitadas",
      "Prioridad en reservas",
      "Galería de artista",
      "Descuentos especiales",
      "Soporte prioritario"
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Resumen', icon: <User className="h-4 w-4" /> },
    { id: 'bookings', name: 'Reservas', icon: <Calendar className="h-4 w-4" /> },
    { id: 'subscription', name: 'Suscripción', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'gallery', name: 'Mi Galería', icon: <Music className="h-4 w-4" /> },
    { id: 'settings', name: 'Configuración', icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Mi Perfil - Estudio Altamar</title>
        <meta name="description" content="Gestiona tu cuenta, revisa tu historial de reservas, administra tu suscripción y configura tu galería de artista en Estudio Altamar." />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Header */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-teal-500/20"
            >
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <img  
                    className="w-24 h-24 rounded-full object-cover border-4 border-teal-500" 
                    alt="Foto de perfil del usuario"
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <button 
                    onClick={() => handleAction('edit-avatar')}
                    className="absolute bottom-0 right-0 bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 transition-colors"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white mb-2">{userData.name}</h1>
                  <p className="text-gray-400 mb-2">{userData.email}</p>
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="bg-coral-500/20 text-coral-400 px-3 py-1 rounded-full text-sm">
                      Plan {subscriptionInfo.plan}
                    </span>
                    <span className="text-gray-400 text-sm">
                      Miembro desde {new Date(userData.memberSince).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={() => handleAction('logout')}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar Sesión
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Estadísticas</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sesiones totales:</span>
                      <span className="text-white font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Horas grabadas:</span>
                      <span className="text-white font-medium">32h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Próxima sesión:</span>
                      <span className="text-teal-400 font-medium">25 Ene</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Actividad Reciente</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Sesión completada - 20 Ene</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Reserva confirmada - 18 Ene</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Pago procesado - 15 Ene</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h3>
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleAction('new-booking')}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Nueva Reserva
                    </Button>
                    <Button 
                      onClick={() => handleAction('view-gallery')}
                      variant="outline"
                      className="w-full border-coral-500 text-coral-400 hover:bg-coral-500 hover:text-black"
                    >
                      Ver Mi Galería
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-teal-500/20 overflow-hidden">
                  <div className="p-6 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-white">Historial de Reservas</h3>
                      <Button 
                        onClick={() => handleAction('new-booking')}
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        Nueva Reserva
                      </Button>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Fecha & Hora
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Servicio
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Duración
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Estado
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {bookingHistory.map((booking) => (
                          <tr key={booking.id} className="hover:bg-gray-700/30">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-white font-medium">
                                {new Date(booking.date).toLocaleDateString('es-ES')}
                              </div>
                              <div className="text-gray-400 text-sm">{booking.time}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                              {booking.service}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                              {booking.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                booking.status === 'Completada' 
                                  ? 'bg-green-500/20 text-green-400'
                                  : booking.status === 'Programada'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-white font-medium">
                              ${booking.total}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Button 
                                size="sm"
                                variant="outline"
                                onClick={() => handleAction('view-booking')}
                                className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black"
                              >
                                Ver Detalles
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Subscription Tab */}
            {activeTab === 'subscription' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Current Plan */}
                <div className="bg-gradient-to-br from-coral-600/20 to-coral-800/20 p-8 rounded-2xl border border-coral-500/50">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Plan {subscriptionInfo.plan}</h3>
                      <p className="text-coral-400 text-3xl font-bold">${subscriptionInfo.price}/mes</p>
                    </div>
                    <span className="bg-coral-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      ACTIVO
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Próximo cobro:</span>
                      <span className="text-white">{new Date(subscriptionInfo.nextBilling).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Horas usadas este mes:</span>
                      <span className="text-white">{subscriptionInfo.hoursUsed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Horas restantes:</span>
                      <span className="text-coral-400 font-medium">{subscriptionInfo.hoursRemaining}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      onClick={() => handleAction('manage-subscription')}
                      className="w-full bg-coral-500 hover:bg-coral-600 text-black"
                    >
                      Gestionar Suscripción
                    </Button>
                    <Button 
                      onClick={() => handleAction('change-plan')}
                      variant="outline"
                      className="w-full border-coral-500 text-coral-400 hover:bg-coral-500 hover:text-black"
                    >
                      Cambiar Plan
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-teal-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Beneficios Incluidos</h3>
                  
                  <ul className="space-y-3">
                    {subscriptionInfo.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-teal-400" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-4 bg-teal-500/10 rounded-lg border border-teal-500/30">
                    <h4 className="text-white font-medium mb-2">💡 Consejo</h4>
                    <p className="text-gray-300 text-sm">
                      Con tu plan Premium, puedes reservar sesiones con hasta 48 horas de anticipación 
                      y tienes acceso prioritario a nuestros productores.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-teal-500/20">
                  <div className="text-center">
                    <Music className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Tu Galería de Artista</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                      Como miembro Premium, puedes crear tu propia galería para mostrar tu música, 
                      videos y conectar con otros artistas y fans.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      <Button 
                        onClick={() => handleAction('create-gallery')}
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        Crear Mi Galería
                      </Button>
                      <Button 
                        onClick={() => handleAction('upload-music')}
                        variant="outline"
                        className="border-coral-500 text-coral-400 hover:bg-coral-500 hover:text-black"
                      >
                        Subir Música
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Personal Info */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-teal-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Información Personal</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-400 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        defaultValue={userData.name}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={userData.email}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-400 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        defaultValue={userData.phone}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <Button 
                      onClick={() => handleAction('save-profile')}
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Guardar Cambios
                    </Button>
                  </form>
                </div>

                {/* Account Settings */}
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20">
                    <h4 className="text-xl font-bold text-white mb-4">Notificaciones</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-gray-300">Recordatorios de sesiones</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-gray-300">Ofertas especiales</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Newsletter semanal</span>
                      </label>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-teal-500/20">
                    <h4 className="text-xl font-bold text-white mb-4">Seguridad</h4>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => handleAction('change-password')}
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Cambiar Contraseña
                      </Button>
                      <Button 
                        onClick={() => handleAction('download-data')}
                        variant="outline"
                        className="w-full border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Descargar Mis Datos
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}