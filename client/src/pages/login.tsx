import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-brand-200 selection:text-brand-900 relative">
      {/* Top Bar with Prominent Logo in Upper Left */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <Link href="/" className="inline-block">
          <img 
            src="https://preach360.edgestack.space/images/preach360-logo-transparent-dark-background.png" 
            alt="Preach360 Logo" 
            className="h-16 md:h-20 w-auto drop-shadow-md"
          />
        </Link>
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side: Visual / Branding */}
        <div className="hidden lg:flex w-1/2 bg-brand-950 relative overflow-hidden flex-col justify-center p-16">
          <div className="absolute inset-0 opacity-20 bg-[url('https://preach360.edgestack.space/images/solo-pastor.png')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-transparent" />
          
          <div className="relative z-10 max-w-lg mt-auto">
            <h2 className="text-4xl font-bold text-brand-50 font-drama mb-4">Prep in less than half the time.</h2>
            <p className="text-xl text-brand-200/80">
              Your sermon studio awaits. Step out of the grind and back into your calling.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 pt-32 lg:pt-12">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:text-left text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground font-drama">Welcome to your Study.</h1>
              <p className="text-base text-muted-foreground mt-2">Log in to your Sermon Studio</p>
            </div>

            <div className="bg-card border border-border shadow-2xl shadow-brand-500/5 rounded-3xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="pastor@church.com" 
                    required 
                    className="h-12 px-4 rounded-xl border-border/80 focus:border-brand-500 focus:ring-brand-500/20 bg-background/50 transition-all"
                    data-testid="input-email"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</Label>
                    <a href="#" className="text-xs font-medium text-brand-600 hover:text-brand-700 transition-colors">Forgot password?</a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="h-12 px-4 rounded-xl border-border/80 focus:border-brand-500 focus:ring-brand-500/20 bg-background/50 transition-all"
                    data-testid="input-password"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium shadow-md shadow-brand-500/20 transition-all"
                  disabled={isLoading}
                  data-testid="button-login-submit"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Entering Studio...
                    </>
                  ) : (
                    "Log In"
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center text-sm">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">Get Started</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
