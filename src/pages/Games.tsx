import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, SortAsc } from 'lucide-react';
import GameCard from '@/components/GameCard';
import { mockGames, gameCategories } from '@/data/games';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('popularity'); // popularity, rating, newest

  const filteredAndSortedGames = useMemo(() => {
    let filtered = mockGames.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Todos' || game.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort games
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredGames = mockGames.filter(game => game.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-dark border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="font-gaming text-5xl font-bold mb-4">
              Biblioteca de <span className="text-primary">Juegos</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre miles de juegos gratuitos, legales y verificados. 
              Todos listos para descargar y disfrutar.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar juegos, géneros, desarrolladores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-card border-border hover-glow-primary"
                />
              </div>
              <Button variant="outline" size="lg" className="hover-glow-secondary">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="lg" className="hover-glow-accent">
                <SortAsc className="h-4 w-4 mr-2" />
                Ordenar
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {gameCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedCategory === category 
                      ? 'bg-gradient-primary text-primary-foreground glow-primary' 
                      : 'hover-glow-primary'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Games Section */}
        {selectedCategory === 'Todos' && !searchTerm && (
          <section className="mb-16">
            <h2 className="font-gaming text-3xl font-bold mb-8 text-center">
              Juegos <span className="text-primary">Destacados</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        )}

        {/* All Games Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-gaming text-2xl font-bold">
              {selectedCategory === 'Todos' ? 'Todos los Juegos' : `Juegos de ${selectedCategory}`}
              <span className="text-muted-foreground text-base ml-2">
                ({filteredAndSortedGames.length} encontrados)
              </span>
            </h2>
          </div>

          {filteredAndSortedGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedGames.map((game) => (
                <GameCard key={game.id} game={game} />
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
        </section>

        {/* Load More Button (Placeholder for pagination) */}
        {filteredAndSortedGames.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover-glow-primary">
              Cargar Más Juegos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;