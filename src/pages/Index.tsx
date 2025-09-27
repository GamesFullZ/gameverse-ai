import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSections from '@/components/InfoSections';
import Testimonials from '@/components/Testimonials';
import SocialFollow from '@/components/SocialFollow';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Info Sections */}
      <InfoSections />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Social Follow */}
      <SocialFollow />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-gaming text-4xl font-bold mb-6">
              ¿Listo para <span className="text-primary">Jugar</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Únete a miles de gamers que ya disfrutan de la mejor colección 
              de juegos gratuitos y legales de internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/games">
                <Button size="lg" className="btn-gaming px-8 py-4 text-lg">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Explorar Juegos
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-glow-secondary">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
