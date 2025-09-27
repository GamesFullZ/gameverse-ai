import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="font-gaming text-9xl font-bold text-primary animate-pulse mb-4">
              404
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-4 h-4 bg-primary rounded-full animate-bounce" />
              <div className="w-4 h-4 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-4 h-4 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          <h1 className="font-gaming text-4xl font-bold mb-4">
            ¡Página No <span className="text-primary">Encontrada</span>!
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Parece que esta página se perdió en el ciberespacio. 
            No te preocupes, podemos ayudarte a encontrar lo que buscas.
          </p>

          <div className="text-sm text-muted-foreground mb-8 p-4 bg-card rounded-lg border border-border">
            <strong>Ruta solicitada:</strong> <code className="text-primary">{location.pathname}</code>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              size="lg"
              className="hover-glow-secondary"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver Atrás
            </Button>
            
            <a href="/">
              <Button size="lg" className="btn-gaming">
                <Home className="h-5 w-5 mr-2" />
                Ir al Inicio
              </Button>
            </a>
            
            <a href="/games">
              <Button 
                variant="outline" 
                size="lg"
                className="hover-glow-accent"
              >
                <Search className="h-5 w-5 mr-2" />
                Explorar Juegos
              </Button>
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              ¿Buscabas algo específico? Prueba estos enlaces:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/games" className="text-primary hover:text-primary-glow transition-colors">
                Biblioteca de Juegos
              </a>
              <a href="/contact" className="text-secondary hover:text-secondary-glow transition-colors">
                Contacto
              </a>
              <a href="/faq" className="text-accent hover:text-accent-glow transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
