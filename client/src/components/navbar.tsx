import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-0">
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm px-6 py-4 flex items-center justify-between w-full transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="https://preach360.edgestack.space/images/preach360-logo-transparent-for-light-background.png" 
            alt="Preach360 Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">The Challenge</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">The Preach360 4-Hour Roadmap</a>
          <a href="#system" className="hover:text-foreground transition-colors">The Preach360 Difference</a>
          <a href="#about" className="hover:text-foreground transition-colors">Meet McKay Caston</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium hidden sm:flex">Log In</Button>
          </Link>
          <Link href="/login">
            <Button className="rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-sm shadow-brand-500/20">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
