import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Download, Eye, Users, Calendar, HardDrive, Building2, Globe, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getJuegoPorId, formatearDescargas } from '@/data/recursos';

const GameDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const juego = getJuegoPorId(id || '0');

  if (!juego) {
    return <Navigate to="/" replace />;
  }

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${juego.imagen})`,
            filter: 'blur(8px) brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Navigation */}
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={scrollToHome}
              className="glass-card hover-glow-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </div>
        </div>

        {/* Game Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto">
            <div className="flex items-end gap-6">
              <div className="game-card overflow-hidden w-48 h-64 flex-shrink-0">
                <img 
                  src={juego.imagen} 
                  alt={juego.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-gaming text-4xl md:text-5xl font-bold text-white mb-2">
                  {juego.nombre}
                </h1>
                <p className="text-muted-foreground text-lg mb-4">
                  por {juego.developer}
                </p>
                <div className="flex items-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{juego.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{formatearDescargas(juego.downloads)} descargas</span>
                  </div>
                  <Badge className="bg-primary/20 text-primary border border-primary/30">
                    {juego.genre}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Descripción del Juego
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{juego.descripcion}</p>
              </CardContent>
            </Card>

            {/* Screenshots */}
            {juego.screenshots && juego.screenshots.length > 0 && (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="font-gaming">Capturas de Pantalla</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {juego.screenshots.map((screenshot, index) => (
                      <div key={index} className="game-card overflow-hidden group">
                        <img
                          src={screenshot}
                          alt={`${juego.nombre} screenshot ${index + 1}`}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* System Requirements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming">Requisitos del Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="space-y-3 text-sm">
                    <div 
                      dangerouslySetInnerHTML={{ __html: juego.requisitos }}
                      className="prose prose-invert max-w-none"
                    />
                  </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comentarios de la Comunidad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {juego.comments.map((comment, index) => (
                  <div key={index} className="p-4 rounded-lg bg-card/50 border border-border/50">
                    <p className="text-foreground">{comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming flex items-center gap-2 text-primary">
                  <Download className="h-5 w-5" />
                  Descarga Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                    {Object.entries(juego.links).map(([platform, url]) => (
                    <Button 
                      key={platform}
                      asChild
                      className="w-full btn-gaming"
                      size="lg"
                    >
                      <a href={url as string} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar vía {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    </Button>
                  ))}
                </div>

                <Separator />

                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                  <p className="text-sm text-yellow-300">
                    <strong>Contraseña:</strong> {juego.password}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Game Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming">Información del Juego</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Lanzamiento
                  </div>
                  <span className="font-medium">{new Date(juego.releaseDate).toLocaleDateString('es-ES')}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <HardDrive className="h-4 w-4" />
                    Tamaño
                  </div>
                  <span className="font-medium">{juego.fileSize}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    Desarrollador
                  </div>
                  <span className="font-medium">{juego.developer}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Descargas
                  </div>
                  <span className="font-medium">{formatearDescargas(juego.downloads)}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    Idiomas
                  </div>
                  <div className="text-right">
                    <div className="flex flex-wrap gap-1 justify-end">
                      {juego.language.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Version Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-gaming">Versión y Release</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Versión:</span>
                  <span className="font-medium">{juego.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Publisher:</span>
                  <span className="font-medium">{juego.publisher}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;