import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-gaming.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gaming Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary-glow rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* V2 Announcement Badge */}
        <div className="animate-fade-in mb-8">
          <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 text-lg font-gaming pulse-neon">
            <Sparkles className="h-5 w-5 mr-2" />
            ¡NUEVA VERSIÓN 2.0 DISPONIBLE!
            <Zap className="h-5 w-5 ml-2" />
          </Badge>
        </div>

        {/* Main Title */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-gaming text-6xl md:text-8xl font-black mb-6">
            <span className="text-primary">Game</span>
            <span className="text-secondary">Full</span>
            <span className="text-accent">Z</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            El marketplace definitivo para 
            <span className="text-primary font-semibold"> juegos gratuitos legales</span>. 
            Descubre, descarga y disfruta con nuestra IA personalizada.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="btn-gaming px-8 py-4 text-lg font-semibold">
            Explorar Juegos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-glow-secondary">
            Ver Novedades
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Juegos Disponibles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-gaming font-bold text-secondary mb-2">50K+</div>
            <p className="text-muted-foreground">Usuarios Activos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-gaming font-bold text-accent mb-2">100%</div>
            <p className="text-muted-foreground">Legal y Seguro</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;