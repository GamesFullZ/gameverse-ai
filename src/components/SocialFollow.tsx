import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Users } from 'lucide-react';
const SocialFollow = () => {
  return <section className="py-16 bg-gradient-glow">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge className="bg-gradient-accent text-accent-foreground mb-6 px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" />
            ¡Únete a la Comunidad!
          </Badge>
          
          <h2 className="font-gaming text-3xl font-bold mb-4">
            Síguenos en <span className="text-accent">TikTok</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">Descubre  los últimos cambios en la web ¡Más de 1K seguidores ya lo hacen!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="btn-gaming px-8 py-4 text-lg group" onClick={() => window.open('https://tiktok.com/@gamefullz', '_blank')}>
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.382-2.025-1.382-3.338h-3.357v13.166c0 2.278-1.845 4.123-4.123 4.123s-4.123-1.845-4.123-4.123 1.845-4.123 4.123-4.123c.228 0 .453.019.673.056V6.742c-.225-.016-.45-.024-.673-.024C4.145 6.718 0 10.863 0 16.598s4.145 9.88 9.88 9.88 9.88-4.145 9.88-9.88V9.804a9.888 9.888 0 005.671 1.762v-3.357a6.196 6.196 0 01-2.11-.647z" />
              </svg>
              Seguir en TikTok
              <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">+1K seguidores</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-gaming text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div>
              <div className="font-gaming text-2xl font-bold text-secondary">20k+</div>
              <div className="text-sm text-muted-foreground">Likes</div>
            </div>
            <div>
              <div className="font-gaming text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Comentarios</div>
            </div>
            <div>
              <div className="font-gaming text-2xl font-bold text-primary-glow">Daily</div>
              <div className="text-sm text-muted-foreground">Contenido</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialFollow;