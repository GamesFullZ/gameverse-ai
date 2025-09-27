import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Shield, Download, Users, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      category: 'General',
      icon: HelpCircle,
      questions: [
        {
          question: '¿Qué es GameFullZ V2?',
          answer: 'GameFullZ V2 es un marketplace de juegos gratuitos y legales donde puedes descubrir, descargar y disfrutar miles de títulos verificados. Contamos con IA personalizada para recomendaciones y una comunidad activa de gamers.'
        },
        {
          question: '¿Es realmente gratis usar GameFullZ?',
          answer: 'Sí, GameFullZ es completamente gratuito. No cobramos por descargas, no hay suscripciones ocultas ni microtransacciones. Todos los juegos en nuestra plataforma son gratuitos y legales.'
        },
        {
          question: '¿Cómo funciona la IA de recomendaciones?',
          answer: 'Nuestra IA analiza tus descargas, ratings y tiempo de juego para sugerirte títulos similares que podrían gustarte. También considera las tendencias de la comunidad y géneros populares.'
        }
      ]
    },
    {
      category: 'Seguridad',
      icon: Shield,
      questions: [
        {
          question: '¿Los juegos son seguros?',
          answer: 'Absolutamente. Todos los juegos pasan por un proceso de verificación exhaustivo. Escaneamos malware, verificamos la legalidad y confirmamos que son versiones oficiales gratuitas o freeware autorizado.'
        },
        {
          question: '¿Cómo garantizan que los juegos son legales?',
          answer: 'Trabajamos directamente con desarrolladores, distribuidores oficiales y verificamos licencias. Solo incluimos freeware oficial, demos autorizadas y juegos con licencias de distribución gratuita válidas.'
        },
        {
          question: '¿Recopilan mis datos personales?',
          answer: 'Solo recopilamos datos mínimos necesarios para mejorar tu experiencia (historial de descargas para recomendaciones). No vendemos datos a terceros y cumplimos con todas las regulaciones de privacidad.'
        }
      ]
    },
    {
      category: 'Descargas',
      icon: Download,
      questions: [
        {
          question: '¿Hay límites de descarga?',
          answer: 'No hay límites en el número de juegos que puedes descargar. Sin embargo, implementamos algunas medidas anti-spam para evitar descargas masivas automatizadas.'
        },
        {
          question: '¿Qué hago si una descarga falla?',
          answer: 'Si experimentas problemas con descargas, verifica tu conexión a internet y espacio disponible. Si el problema persiste, reporta el juego específico a través de nuestro formulario de contacto.'
        },
        {
          question: '¿Los juegos vienen con instalador?',
          answer: 'La mayoría de juegos incluyen instaladores automáticos. Algunos títulos portable vienen en formato ZIP. Siempre incluimos instrucciones de instalación detalladas.'
        }
      ]
    },
    {
      category: 'Comunidad',
      icon: Users,
      questions: [
        {
          question: '¿Puedo dejar reseñas y calificaciones?',
          answer: 'Por supuesto. Fomentamos que la comunidad comparta opiniones honestas. Las reseñas ayudan a otros gamers a descubrir grandes títulos y evitar experiencias decepcionantes.'
        },
        {
          question: '¿Hay moderación en los comentarios?',
          answer: 'Sí, moderamos activamente para mantener un ambiente respetuoso. No toleramos spam, contenido ofensivo o comentarios inapropiados. Nuestra IA también ayuda con la moderación automática.'
        },
        {
          question: '¿Puedo sugerir juegos para la plataforma?',
          answer: 'Definitivamente. Tenemos un proceso para que la comunidad sugiera nuevos títulos. Evalúamos cada sugerencia para verificar legalidad y calidad antes de añadirlos.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-gaming text-5xl font-bold mb-4">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre GameFullZ V2. 
              Si no encuentras tu respuesta aquí, no dudes en contactarnos.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <Card key={category.category} className="game-card">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-primary p-3 rounded-full mr-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-gaming text-2xl font-bold">{category.category}</h2>
                      <Badge variant="outline" className="mt-1">
                        {category.questions.length} preguntas
                      </Badge>
                    </div>
                  </div>

                  {/* Questions */}
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="game-card mt-12 text-center">
            <CardContent className="p-8">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-gaming text-2xl font-bold mb-4">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está aquí para ayudarte. Envíanos tu pregunta y 
                te responderemos lo antes posible.
              </p>
              <Link to="/contact">
                <Button className="btn-gaming">
                  Contactar Soporte
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;