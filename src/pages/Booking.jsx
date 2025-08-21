import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedProducer, setSelectedProducer] = useState('');
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const timeSlots = [
    '09:00','10:00','11:00','12:00','13:00','14:00',
    '15:00','16:00','17:00','18:00','19:00','20:00'
  ];

  const services = [
    { id: 'basic', name: 'Grabación Básica', price: 15, duration: '1 hora' },
    { id: 'premium', name: 'Grabación + Productor', price: 25, duration: '1 hora' },
    { id: 'mixing', name: 'Mezcla', price: 30, duration: '2 horas' },
    { id: 'mastering', name: 'Masterización', price: 20, duration: '1 hora' },
    { id: 'full', name: 'Producción Completa', price: 50, duration: '3 horas' }
  ];

  const producers = [
    { id: 'none', name: 'Sin productor', price: 0 },
    { id: 'productor', name: 'Con productor', price: 15, specialty: 'Rock/Pop' }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      toast({
        title: 'Faltan datos',
        description: 'Por favor completa todos los campos requeridos',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: '🚧 Esta función no está implementada aún',
      description: '¡Pero no te preocupes! Algún día la implementaremos! 😈🚀'
    });
  };

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedProducerData = producers.find(p => p.id === selectedProducer);
  const totalPrice = (selectedServiceData?.price || 0) + (selectedProducerData?.price || 0);

  return (
    <>
      <Helmet>
        <title>Reservar Sesión - Estudio Altamar</title>
        <meta
          name="description"
          content="Reserva tu sesión de grabación en Estudio Altamar. Calendario en tiempo real, múltiples servicios disponibles desde $15/hora."
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379704162931477"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      {/* Fondo global claro/oscuro */}
      <div className="pt-16 min-h-screen transition-colors duration-300 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
        {/* Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
                Reserva tu <span className="text-teal-600 dark:text-teal-400">Sesión</span>
              </h1>
              <p className="text-xl text-slate-700 dark:text-gray-300 transition-colors">
                Completa tu reserva en 3 simples pasos
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                    ${step >= stepNumber
                      ? 'bg-teal-600 text-white dark:bg-teal-500'
                      : 'bg-slate-200 text-slate-500 dark:bg-gray-700 dark:text-gray-400'}`}
                  >
                    {step > stepNumber ? <Check className="h-5 w-5" /> : stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-colors
                      ${step > stepNumber ? 'bg-teal-600 dark:bg-teal-500' : 'bg-slate-200 dark:bg-gray-700'}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl p-8 border transition-colors bg-white/80 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-slate-200 dark:border-teal-500/20 shadow-sm"
            >
              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white transition-colors">
                    <Calendar className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
                    Selecciona Fecha y Hora
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div>
                      <label className="block font-medium mb-4 text-slate-900 dark:text-white transition-colors">Fecha</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 rounded-lg transition-colors
                          bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                          focus:border-teal-600 focus:ring-0
                          dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500"
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block font-medium mb-4 text-slate-900 dark:text-white transition-colors">Hora</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all border
                              ${selectedTime === time
                                ? 'bg-teal-600 text-white border-teal-600 dark:bg-teal-500 dark:border-teal-500'
                                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button
                      onClick={nextStep}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Service & Producer */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white transition-colors">
                    <Users className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
                    Selecciona Servicio y Productor
                  </h2>

                  {/* Service Selection */}
                  <div className="mb-8">
                    <label className="block font-medium mb-4 text-slate-900 dark:text-white transition-colors">Servicio</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-lg text-left transition-all border
                            ${selectedService === service.id
                              ? 'border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-500/10'
                              : 'border-slate-300 bg-white hover:border-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'}`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-slate-900 dark:text-white transition-colors">{service.name}</h3>
                              <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors">{service.duration}</p>
                            </div>
                            <span className="font-bold text-teal-700 dark:text-teal-400 transition-colors">${service.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Producer Selection */}
                  <div className="mb-8">
                    <label className="block font-medium mb-4 text-slate-900 dark:text-white transition-colors">Productor (Opcional)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {producers.map((producer) => (
                        <button
                          key={producer.id}
                          onClick={() => setSelectedProducer(producer.id)}
                          className={`p-4 rounded-lg text-left transition-all border
                            ${selectedProducer === producer.id
                              ? 'border-coral-600 bg-coral-50 dark:border-coral-500 dark:bg-coral-500/10'
                              : 'border-slate-300 bg-white hover:border-slate-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'}`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-slate-900 dark:text-white transition-colors">{producer.name}</h3>
                              {producer.specialty && (
                                <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors">{producer.specialty}</p>
                              )}
                            </div>
                            <span className="font-bold text-coral-700 dark:text-coral-400 transition-colors">
                              {producer.price === 0 ? 'Gratis' : `+$${producer.price}`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      Anterior
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={!selectedService}
                      className="bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation & Payment */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center text-slate-900 dark:text-white transition-colors">
                    <CreditCard className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
                    Confirmación y Pago
                  </h2>

                  {/* Booking Summary */}
                  <div className="rounded-lg p-6 mb-8 transition-colors bg-slate-50 border border-slate-200 dark:bg-gray-700/50 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Resumen de tu Reserva</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-700 dark:text-gray-300">Fecha:</span>
                        <span className="text-slate-900 dark:text-white">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700 dark:text-gray-300">Hora:</span>
                        <span className="text-slate-900 dark:text-white">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700 dark:text-gray-300">Servicio:</span>
                        <span className="text-slate-900 dark:text-white">{selectedServiceData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-700 dark:text-gray-300">Duración:</span>
                        <span className="text-slate-900 dark:text-white">{selectedServiceData?.duration}</span>
                      </div>
                      {selectedProducerData && selectedProducerData.id !== 'none' && (
                        <div className="flex justify-between">
                          <span className="text-slate-700 dark:text-gray-300">Productor:</span>
                          <span className="text-slate-900 dark:text-white">{selectedProducerData.name}</span>
                        </div>
                      )}
                      <div className="border-t border-slate-200 dark:border-gray-600 pt-3 mt-3">
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-slate-900 dark:text-white">Total:</span>
                          <span className="text-teal-700 dark:text-teal-400">${totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Información de Pago</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        className="p-3 rounded-lg transition-colors
                          bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                          focus:border-teal-600 focus:ring-0
                          dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded-lg transition-colors
                          bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                          focus:border-teal-600 focus:ring-0
                          dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500"
                      />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        className="p-3 rounded-lg transition-colors
                          bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                          focus:border-teal-600 focus:ring-0
                          dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500"
                      />
                      <input
                        type="text"
                        placeholder="Número de tarjeta"
                        className="p-3 rounded-lg transition-colors
                          bg-white border border-slate-300 text-slate-900 placeholder-slate-400
                          focus:border-teal-600 focus:ring-0
                          dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      Anterior
                    </Button>
                    <Button
                      onClick={handleBooking}
                      className="bg-gradient-to-r from-teal-600 to-coral-600 hover:from-teal-700 hover:to-coral-700 text-white px-8"
                    >
                      Confirmar Reserva - ${totalPrice}
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
