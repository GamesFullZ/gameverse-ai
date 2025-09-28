import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatearDescargas } from '@/data/recursos';

interface GameCardNewProps {
  juego: {
    id: number;
    nombre: string;
    descripcion: string;
    downloads: number;
    rating: string;
    imagen: string;
    genre: string;
    fileSize: string;
    developer: string;
    links: {
      direct: string;
      [key: string]: string;
    };
  };
}

const GameCardNew = ({ juego }: GameCardNewProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getStarRating = (rating: string) => {
    const starCount = (rating.match(/⭐/g) || []).length;
    return starCount;
  };

  return (
    <Card className="glass-card group hover-glow-primary overflow-hidden h-full">
      <div className="relative">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/80 to-muted animate-pulse" />
          )}
          {!imageError ? (
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-105`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">🎮</div>
                <p className="text-xs">Imagen no disponible</p>
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link to={`/juego/${juego.id}`}>
              <Button className="btn-gaming">
                <Eye className="h-4 w-4 mr-2" />
                Ver Detalles
              </Button>
            </Link>
          </div>

          {/* Genre Badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 text-primary-foreground">
              {juego.genre}
            </Badge>
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-background/90 rounded-lg px-2 py-1">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium">{getStarRating(juego.rating)}/5</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            {/* Title and Developer */}
            <div>
              <h3 className="font-gaming text-lg font-bold line-clamp-2 mb-1">
                {juego.nombre}
              </h3>
              <p className="text-muted-foreground text-sm">
                por {juego.developer}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {juego.descripcion}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3" />
                <span>{formatearDescargas(juego.downloads)} descargas</span>
              </div>
              <span className="font-medium">{juego.fileSize}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link to={`/juego/${juego.id}`} className="flex-1">
                <Button variant="outline" size="sm" className="w-full hover-glow-secondary">
                  <Eye className="h-3 w-3 mr-1" />
                  Detalles
                </Button>
              </Link>
              <Button 
                asChild
                size="sm" 
                className="btn-gaming px-3"
              >
                <a 
                  href={juego.links.direct} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default GameCardNew;