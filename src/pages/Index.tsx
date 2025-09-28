import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Users, Download, TrendingUp, Award } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InfoSections from '@/components/InfoSections';
import Testimonials from '@/components/Testimonials';
import SocialFollow from '@/components/SocialFollow';
import GameCardNew from '@/components/GameCardNew';
import { recursos, categorias, formatearDescargas } from '@/data/recursos';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Scroll to games section
  const scrollToGames = () => {
    const gamesSection = document.getElementById('games-section');
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter games based on search and category
  const filteredGames = recursos.filter(juego => {
    const matchesSearch = juego.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         juego.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         juego.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || juego.genre === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Stats calculation
  const totalGames = recursos.length;
  const totalDownloads = recursos.reduce((sum, juego) => sum + juego.downloads, 0);
  const avgRating = recursos.reduce((sum, juego) => sum + (juego.rating.match(/⭐/g) || []).length, 0) / recursos.length;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onExploreClick={scrollToGames} />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-lg bg-primary/20 glow-primary">
                  <Download className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-gaming text-2xl font-bold mb-2">
                {formatearDescargas(totalDownloads)}
              </h3>
              <p className="text-muted-foreground">Descargas Totales</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-lg bg-secondary/20 glow-secondary">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="font-gaming text-2xl font-bold mb-2">
                {totalGames}
              </h3>
              <p className="text-muted-foreground">Juegos Disponibles</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-lg bg-accent/20 glow-accent">
                  <Award className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="font-gaming text-2xl font-bold mb-2">
                {avgRating.toFixed(1)}/5
              </h3>
              <p className="text-muted-foreground">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-4xl font-bold mb-4">
              Biblioteca de <span className="text-primary">Juegos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre los mejores juegos gratuitos, todos verificados y listos para descargar
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar juegos por nombre, género..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 glass-card border-border hover-glow-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((categoria) => (
                <Badge
                  key={categoria}
                  variant={selectedCategory === categoria ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedCategory === categoria 
                      ? 'bg-gradient-primary text-primary-foreground glow-primary' 
                      : 'hover-glow-primary glass-card'
                  }`}
                  onClick={() => setSelectedCategory(categoria)}
                >
                  {categoria}
                </Badge>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-gaming text-2xl font-bold">
                {selectedCategory === 'Todos' ? 'Todos los Juegos' : `Juegos de ${selectedCategory}`}
                <span className="text-muted-foreground text-base ml-2">
                  ({filteredGames.length} encontrados)
                </span>
              </h3>
            </div>

            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map((juego) => (
                  <GameCardNew key={juego.id} juego={juego} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="font-gaming text-xl font-bold mb-2">
                  No se encontraron juegos
                </h3>
                <p className="text-muted-foreground mb-6">
                  Intenta cambiar los filtros o términos de búsqueda
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todos');
                  }}
                  className="btn-gaming"
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <InfoSections />
      <Testimonials />
      <SocialFollow />
    </div>
  );
};

export default Index;
