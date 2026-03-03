import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Layers, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-200 selection:text-brand-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0">
          {/* Heavy #f97316 (brand-500) gradient as requested in guidelines */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-500/40 mix-blend-overlay z-10" />
          <div className="absolute inset-0 opacity-30 bg-[url('https://preach360.edgestack.space/images/solo-pastor.png')] bg-cover bg-center mix-blend-luminosity" />
          <div className="absolute top-0 right-0 w-full h-[600px] bg-brand-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-3/4 h-[400px] bg-brand-500/10 blur-[100px] rounded-full" />
          
          {/* Transition gradient to the next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
        </div>

        <div className="container relative z-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-200 mb-6 font-medium backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                The 4-Hour Workflow
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Sermon prep is the <br />
                <span className="font-drama text-brand-500">Grind no more.</span>
              </h1>
              
              <div className="mb-8 max-w-xl">
                 <h2 className="text-2xl md:text-3xl font-drama text-brand-100 mb-3">
                   Prep in less than half the time. Preach with twice the impact.
                 </h2>
                 <p className="text-lg text-brand-200/80">
                   Craft gospel-rich sermons in an afternoon. Join the free community of pastors discovering a repeatable system.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full bg-brand-500 hover:bg-brand-600 text-white h-14 px-8 text-base shadow-lg shadow-brand-500/25">
                  Start 4-Hour Prep <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-brand-200/30 hover:bg-brand-500/10 text-white backdrop-blur-sm">
                  Join the Free Community
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto hidden md:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/50 border border-brand-500/20 bg-card p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://preach360.edgestack.space/images/preach360-screenshot-darkmode.png" 
                  alt="Preach360 Interface" 
                  className="rounded-xl w-full h-auto object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute -left-6 -bottom-6 bg-card border border-border shadow-xl rounded-xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Time Saved</p>
                    <p className="text-lg font-bold font-data text-foreground">10+ Hours/wk</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ENEMY (Agitation Block) */}
      <section className="py-24 bg-background relative overflow-hidden" id="system">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-drama">4 hours of deep work beats 12 hours of fragmented prep every time.</h2>
            <p className="text-lg text-muted-foreground">
              The "Sermon Grind" is destroying pastors. It's time to escape the 18-hour weeks and avoid pastoral burnout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Old Way */}
            <div className="bg-muted/50 border border-border/50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-muted-foreground">
                <span className="w-8 h-8 rounded-full bg-muted-foreground/10 flex items-center justify-center text-sm font-mono">01</span>
                The Old Way
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-destructive">✕</div>
                  <div>
                    <strong className="block text-foreground mb-1">The Sermon Grind</strong>
                    <p className="text-sm text-muted-foreground">10-18 hours spent drowning in commentaries and bloated Bible software.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-destructive">✕</div>
                  <div>
                    <strong className="block text-foreground mb-1">Steep Learning Curves</strong>
                    <p className="text-sm text-muted-foreground">Complicated tools that require a seminary degree just to operate.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-destructive">✕</div>
                  <div>
                    <strong className="block text-foreground mb-1">Generic AI</strong>
                    <p className="text-sm text-muted-foreground">Soulless ChatGPT outputs that bypass the Holy Spirit and your authentic voice.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Preach360 Way */}
            <div className="bg-brand-50 border border-brand-200 rounded-3xl p-8 lg:p-10 relative shadow-2xl shadow-brand-500/5">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                The Solution
              </div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-brand-600">
                <span className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-sm font-mono text-brand-600">02</span>
                The Preach360 Way
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-1">The 4-Hour Workflow</strong>
                    <p className="text-brand-800/70 text-sm">A sustainable, step-by-step process taking you from blank page to finished sermon.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-1">Systematized Focus</strong>
                    <p className="text-brand-800/70 text-sm">A repeatable framework (PPGR) that gives you confidence in your process.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-1">AI as an Assistant</strong>
                    <p className="text-brand-800/70 text-sm">A brainstorming partner that doesn't do the work for you, it does it <em>with</em> you.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP & PROTOCOL */}
      <section className="py-24 bg-brand-50/50 relative" id="roadmap">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-brand-950">The Preach360 Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, step-by-step visual indicator that keeps your sermon prep moving forward, eliminating guesswork.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <BookOpen size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 1</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Exegesis Guide</h3>
              <p className="text-muted-foreground mb-6">
                Accurately unpack the biblical text to uncover its original meaning and point directly to the cross.
              </p>
              <img src="https://preach360.edgestack.space/images/preach360-screenshot-exegesis-guide.png" alt="Exegesis Guide" className="rounded-xl border border-border/50 group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 lg:translate-y-8">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <Layers size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 2</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Relevance Bridge</h3>
              <p className="text-muted-foreground mb-6">
                Connect the specific details of your passage to the grand, redemptive storyline of Scripture.
              </p>
              <img src="https://preach360.edgestack.space/images/preach360-screenshot-expository-mapping.png" alt="Expository Mapping" className="rounded-xl border border-border/50 group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 lg:translate-y-16">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <Zap size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOURS 3 & 4</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">PPGR Movements</h3>
              <p className="text-muted-foreground mb-6">
                Anchor every message in the clear progression of Principle, Problem, Gospel, and Response.
              </p>
              <img src="https://preach360.edgestack.space/images/ppgr-blueprint.png" alt="PPGR Blueprint" className="rounded-xl border border-border/50 bg-white group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* THE KILL SHEET (Differentiation Grid) */}
      <section className="py-24 mt-16 bg-background relative" id="features">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Why Preach360?</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Built specifically for the needs of solo pastors. We stripped away the bloat and focused on what actually helps you preach the Gospel.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             {/* vs Complexity */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
               <h3 className="text-xl font-bold mb-4">No Bloated Bible Software</h3>
               <p className="text-muted-foreground mb-4">
                 Logos and Accordance are powerful, but they require a steep learning curve and significant investment, drowning you in too much data.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360 removes the need to wrestle with complicated software, giving you a streamlined path to your manuscript.
               </div>
             </div>
             
             {/* vs Soulless AI */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
               <h3 className="text-xl font-bold mb-4">No Soulless ChatGPT</h3>
               <p className="text-muted-foreground mb-4">
                 Generic AI tools outsource the message to algorithms, bypassing the Holy Spirit and producing generic, flavorless content.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360 acts as a brainstorming partner that helps you retain your unique, authentic voice and pastoral heart.
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* THE MANIFESTO (Philosophy) */}
      <section className="py-32 bg-brand-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.03] w-1/2 h-full bg-[url('https://preach360.edgestack.space/images/ppgr-blueprint.png')] bg-contain bg-no-repeat bg-right" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 text-brand-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-brand-950 font-drama">The Modern Cloister</h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-900/5 border border-brand-100">
            <div className="space-y-8 text-xl md:text-2xl font-medium text-brand-900">
              <p className="text-muted-foreground line-through decoration-brand-500/30 decoration-2">
                Most AI focuses on replacing the speaker.
              </p>
              <p className="text-brand-600 font-bold scale-105 transform">
                Preach360 focuses on retaining your authentic voice.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-brand-100">
              <h4 className="text-lg font-bold text-brand-900 mb-2">The Privacy Wall</h4>
              <p className="text-muted-foreground">
                Sermon prep requires deep vulnerability. Preach360 operates behind a strict Privacy Wall, 
                assuring that your unpolished drafts, prayers, and brainstorming are protected from employer or elder board oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-background" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Pricing</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Sustainable plans for sustainable ministry.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Basic Sermon Studio</h3>
                <div className="text-3xl font-bold mb-4 font-mono">$35<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm text-muted-foreground mb-6">The core sermon preparation operating system designed to fit standard pastoral continuing education budgets.</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button className="w-full" variant="outline">Choose Basic</Button>
                </div>
              </div>
              
              <div className="bg-brand-500 text-white p-8 rounded-3xl flex flex-col relative shadow-xl shadow-brand-500/20 transform scale-105">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-brand-950 text-brand-100 text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-50">Premium Upgrade</h3>
                <div className="text-3xl font-bold mb-4 font-mono">$70<span className="text-base font-normal text-brand-200">/mo</span></div>
                <p className="text-sm text-brand-100 mb-6">Includes video training library, PPGR360 Video Course, full suite of apps, and weekly live group coaching.</p>
                <div className="mt-auto pt-6 border-t border-brand-400">
                  <Button className="w-full bg-white text-brand-600 hover:bg-brand-50">Choose Premium</Button>
                </div>
              </div>
              
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Volume Pricing</h3>
                <div className="text-3xl font-bold mb-4 font-mono">$15<span className="text-base font-normal text-muted-foreground">/mo per user</span></div>
                <p className="text-sm text-muted-foreground mb-6">Equip your entire network. Annual only at $180/user for bulk licensing of the basic studio.</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-brand-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-950 to-brand-800" />
        <div className="absolute right-0 bottom-0 opacity-10 bg-[url('https://preach360.edgestack.space/images/solo_pastor.jpeg')] bg-cover w-full h-full mix-blend-luminosity pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-drama mb-6">Reclaim your weekend.</h2>
          <p className="text-xl md:text-2xl text-brand-200 mb-10 max-w-2xl mx-auto opacity-90">
            Join the community of pastors discovering a repeatable system for preaching preparation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/login">
                <Button size="lg" className="rounded-full bg-brand-500 text-white hover:bg-brand-600 h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-brand-500/20">
                  Get Started
                </Button>
             </Link>
             <Button size="lg" variant="outline" className="rounded-full border-brand-500/50 hover:bg-brand-900/50 hover:border-brand-500 text-white h-14 px-8 text-lg w-full sm:w-auto backdrop-blur-sm">
               Join Free Community
             </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border text-muted-foreground py-12 text-sm text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img 
            src="https://preach360.edgestack.space/images/preach360-logo.png" 
            alt="Preach360 Logo" 
            className="h-8 mb-6 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <p>© {new Date().getFullYear()} Preach360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
