import { Card, CardContent } from '@/components/ui/card';
import { User, History, Shield, ChevronRight } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      id: 'about',
      title: 'Sobre Mí',
      icon: User,
      content: 'Soy un apasionado gamer y desarrollador que cree en el acceso libre y legal a los videojuegos. GameFullZ V2 nace de mi experiencia en la comunidad gaming y mi visión de democratizar el entretenimiento digital.',
      gradient: 'bg-gradient-primary',
      glowClass: 'hover-glow-primary'
    },
    {
      id: 'origin',
      title: 'Origen de la Web',
      icon: History,
      content: 'Todo comenzó como un pequeño proyecto personal para compartir juegos gratuitos con amigos. Ahora, GameFullZ V2 es una plataforma completa con IA, comunidad activa y miles de títulos verificados.',
      gradient: 'bg-gradient-secondary',
      glowClass: 'hover-glow-secondary'
    },
    {
      id: 'legal',
      title: 'Compromiso Legal',
      icon: Shield,
      content: 'Todos nuestros juegos son 100% legales. Trabajamos directamente con desarrolladores, promovemos freeware oficial y respetamos estrictamente los derechos de autor. Tu seguridad es nuestra prioridad.',
      gradient: 'bg-gradient-accent',
      glowClass: 'hover-glow-accent'
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-4xl font-bold mb-4">
            Conoce GameFullZ <span className="text-primary">V2</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una plataforma construida con pasión, transparencia y compromiso con la comunidad gaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card 
              key={section.id} 
              className={`game-card group cursor-pointer ${section.glowClass} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${section.gradient} mb-4`}>
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md group-hover:blur-lg transition-all duration-300" />
                </div>
                
                <h3 className="font-gaming text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
                
                <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-2">Saber más</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;