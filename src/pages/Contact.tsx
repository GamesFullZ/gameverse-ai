import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Mail, MessageSquare, AlertTriangle, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'business',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactTypes = [
    {
      id: 'business',
      title: 'Negocios',
      description: 'Propuestas comerciales, colaboraciones, partnerships',
      icon: Mail,
      color: 'text-primary'
    },
    {
      id: 'report',
      title: 'Reportar Problemas',
      description: 'Errores, bugs, contenido inapropiado, problemas técnicos',
      icon: AlertTriangle,
      color: 'text-destructive'
    },
    {
      id: 'other',
      title: 'Otras Consultas',
      description: 'Preguntas generales, sugerencias, feedback',
      icon: MessageSquare,
      color: 'text-secondary'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Hemos recibido tu mensaje. Te responderemos pronto.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        type: 'business',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-gaming text-5xl font-bold mb-4">
              <span className="text-primary">Contacto</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ¿Tienes alguna pregunta, sugerencia o propuesta? 
              Estamos aquí para ayudarte. Elige el tipo de consulta y envíanos tu mensaje.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="font-gaming text-2xl">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      Tipo de Consulta
                    </Label>
                    <RadioGroup 
                      value={formData.type} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                      className="space-y-3"
                    >
                      {contactTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-3">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                            <div className="flex items-start space-x-3">
                              <type.icon className={`h-5 w-5 mt-0.5 ${type.color}`} />
                              <div>
                                <div className="font-medium">{type.title}</div>
                                <div className="text-sm text-muted-foreground">
                                  {type.description}
                                </div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿De qué se trata tu mensaje?"
                      required
                      className="mt-1"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí. Sé lo más específico posible para que podamos ayudarte mejor."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-gaming"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Response Times */}
              <Card className="game-card">
                <CardContent className="p-6">
                  <h3 className="font-gaming text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Tiempos de Respuesta
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Negocios</span>
                      <Badge className="bg-gradient-primary">2-3 días</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Reportes</span>
                      <Badge className="bg-gradient-secondary">24 horas</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Consultas generales</span>
                      <Badge className="bg-gradient-accent">1-2 días</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact */}
              <Card className="game-card">
                <CardContent className="p-6">
                  <h3 className="font-gaming text-xl font-bold mb-4">
                    Otras Formas de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Redes Sociales</h4>
                      <p className="text-muted-foreground text-sm">
                        Síguenos en TikTok @gamefullz para contenido diario y updates rápidos.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">FAQ</h4>
                      <p className="text-muted-foreground text-sm">
                        Antes de escribir, revisa nuestra sección de preguntas frecuentes. 
                        Probablemente tu duda ya está resuelta allí.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;