import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/preach360_logo_(1400_x_790_px)_-_transparent_for_light_backgro_1773332156529.png";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-0">
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm px-6 py-4 flex items-center justify-between w-full transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={logoImage} 
            alt="Preach360 Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/roadmap" className="hover:text-foreground transition-colors">The 4-Hour Sermon Roadmap</Link>
          <a href="/#system" className="hover:text-foreground transition-colors">The Preach360™ Difference</a>
          <Link href="/about" className="hover:text-foreground transition-colors">Meet McKay Caston</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="/#pricing" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors hidden sm:block">Pricing</a>
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium hidden sm:flex">Log In</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
