import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Download, Eye } from 'lucide-react';
import { Game } from '@/data/games';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`;
    }
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
  };

  return (
    <Card className="game-card group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {game.featured && (
          <Badge className="absolute top-2 left-2 bg-gradient-primary text-primary-foreground pulse-neon">
            Destacado
          </Badge>
        )}
        
        <div className="absolute top-2 right-2 flex items-center space-x-1 text-yellow-400">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium">{game.rating}</span>
        </div>

        <Link 
          to={`/games/${game.id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground glow-primary">
            <Eye className="h-4 w-4 mr-2" />
            Ver Detalles
          </Button>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <Badge variant="secondary" className="text-xs">
            {game.category}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {game.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {game.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center">
            <Download className="h-3 w-3 mr-1" />
            {formatDownloads(game.downloads)}
          </span>
          <span>{game.size}</span>
          <span>by {game.developer}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full btn-gaming">
          <Download className="h-4 w-4 mr-2" />
          Descargar Gratis
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;