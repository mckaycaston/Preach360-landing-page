import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-background/80 backdrop-blur-md border border-border/50 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="https://preach360.edgestack.space/images/preach360-logo.png" 
            alt="Preach360 Logo" 
            className="h-8"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#system" className="hover:text-foreground transition-colors">The System</a>
          <a href="#community" className="hover:text-foreground transition-colors">Community</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
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
