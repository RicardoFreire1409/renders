import React from 'react';
import { MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;