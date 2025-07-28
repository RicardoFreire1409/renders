import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, CreditCard, Check } from 'lucide-react';
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
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
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
    { id: 'productor', name: 'Con productor', price: 15, specialty: 'Rock/Pop' },
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      toast({
        title: "Faltan datos",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Algun día la implementaremos!😈🚀"
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedProducerData = producers.find(p => p.id === selectedProducer);
  const totalPrice = (selectedServiceData?.price || 0) + (selectedProducerData?.price || 0);

  return (
    <>
      <Helmet>
        <title>Reservar Sesión - Estudio Altamar</title>
        <meta name="description" content="Reserva tu sesión de grabación en Estudio Altamar. Calendario en tiempo real, múltiples servicios disponibles desde $15/hora." />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4379704162931477"
     crossorigin="anonymous"></script>
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Reserva tu <span className="text-teal-400">Sesión</span>
              </h1>
              <p className="text-xl text-gray-300">
                Completa tu reserva en 3 simples pasos
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNumber 
                      ? 'bg-teal-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step > stepNumber ? <Check className="h-5 w-5" /> : stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-teal-500' : 'bg-gray-700'
                    }`}></div>
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
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-teal-500/20"
            >
              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Calendar className="h-6 w-6 text-teal-400 mr-3" />
                    Selecciona Fecha y Hora
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Date Selection */}
                    <div>
                      <label className="block text-white font-medium mb-4">Fecha</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-white font-medium mb-4">Hora</label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-teal-500 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
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
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Service & Producer */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Users className="h-6 w-6 text-teal-400 mr-3" />
                    Selecciona Servicio y Productor
                  </h2>

                  {/* Service Selection */}
                  <div className="mb-8">
                    <label className="block text-white font-medium mb-4">Servicio</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            selectedService === service.id
                              ? 'border-teal-500 bg-teal-500/10'
                              : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-white font-medium">{service.name}</h3>
                              <p className="text-gray-400 text-sm">{service.duration}</p>
                            </div>
                            <span className="text-teal-400 font-bold">${service.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Producer Selection */}
                  <div className="mb-8">
                    <label className="block text-white font-medium mb-4">Productor (Opcional)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {producers.map((producer) => (
                        <button
                          key={producer.id}
                          onClick={() => setSelectedProducer(producer.id)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            selectedProducer === producer.id
                              ? 'border-coral-500 bg-coral-500/10'
                              : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-white font-medium">{producer.name}</h3>
                              {producer.specialty && (
                                <p className="text-gray-400 text-sm">{producer.specialty}</p>
                              )}
                            </div>
                            <span className="text-coral-400 font-bold">
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
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Anterior
                    </Button>
                    <Button 
                      onClick={nextStep}
                      disabled={!selectedService}
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Siguiente
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation & Payment */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CreditCard className="h-6 w-6 text-teal-400 mr-3" />
                    Confirmación y Pago
                  </h2>

                  {/* Booking Summary */}
                  <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Resumen de tu Reserva</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Fecha:</span>
                        <span className="text-white">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Hora:</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Servicio:</span>
                        <span className="text-white">{selectedServiceData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Duración:</span>
                        <span className="text-white">{selectedServiceData?.duration}</span>
                      </div>
                      {selectedProducerData && selectedProducerData.id !== 'none' && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Productor:</span>
                          <span className="text-white">{selectedProducerData.name}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-600 pt-3 mt-3">
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-white">Total:</span>
                          <span className="text-teal-400">${totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Información de Pago</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Número de tarjeta"
                        className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      onClick={prevStep}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Anterior
                    </Button>
                    <Button 
                      onClick={handleBooking}
                      className="bg-gradient-to-r from-teal-500 to-coral-500 hover:from-teal-600 hover:to-coral-600 text-white px-8"
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
