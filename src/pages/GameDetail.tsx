import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Download, Star, Users, Calendar, HardDrive, Building2, Tag } from 'lucide-react';
import Header from '@/components/Header';
import { mockGames } from '@/data/games';

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id || '0', 10);
  const game = mockGames.find(g => g.id === gameId);

  if (!game) {
    return <Navigate to="/games" replace />;
  }

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/games">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Juegos
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              Inicio
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Game Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-gaming text-4xl font-bold mb-2">{game.title}</h1>
                  <p className="text-muted-foreground text-lg">por {game.developer}</p>
                </div>
                {game.featured && (
                  <Badge className="bg-gradient-primary text-primary-foreground pulse-neon">
                    Destacado
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{game.rating}/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{formatDownloads(game.downloads)} descargas</span>
                </div>
                <Badge variant="secondary">{game.category}</Badge>
              </div>

              <p className="text-foreground text-lg leading-relaxed">{game.description}</p>
            </div>

            {/* Screenshots */}
            <div className="mb-8">
              <h2 className="font-gaming text-2xl font-bold mb-4">Capturas de Pantalla</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="game-card overflow-hidden group">
                    <img
                      src={screenshot}
                      alt={`${game.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h2 className="font-gaming text-2xl font-bold mb-4">Etiquetas</h2>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Main Game Image */}
            <Card className="game-card overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-64 object-cover"
              />
            </Card>

            {/* Download Card */}
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="font-gaming flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Descargar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full btn-gaming text-lg py-6">
                  <Download className="h-5 w-5 mr-2" />
                  Descargar Gratis
                </Button>
                
                <Separator />
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <HardDrive className="h-4 w-4" />
                      Tamaño
                    </div>
                    <span className="font-medium">{game.size}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      Desarrollador
                    </div>
                    <span className="font-medium">{game.developer}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      Descargas
                    </div>
                    <span className="font-medium">{formatDownloads(game.downloads)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="font-gaming">Requisitos del Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">OS:</span>
                  <span>Windows 10/11</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span>8 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPU:</span>
                  <span>DirectX 11</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Espacio:</span>
                  <span>{game.size}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;