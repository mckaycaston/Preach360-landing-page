import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Layers, ShieldCheck, Zap, Lock } from "lucide-react";
import { Link } from "wouter";
import roadmapProgress from "@assets/image_1772636322550.png";
import aboutCreatorImage from "@assets/image_1772656745459.png";

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
                Is sermon prep taking all week?
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Prep in less than half the time.
              </h1>
              
              <div className="mb-8 max-w-xl">
                 <h2 className="text-2xl md:text-3xl font-drama text-brand-100 mb-3">
                   Preach with twice the impact.
                 </h2>
                 <p className="text-lg text-brand-200/80">
                   Helping solo pastors craft gospel-rich sermons in an afternoon.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" className="rounded-full bg-brand-500 hover:bg-brand-600 text-white h-14 px-8 text-base shadow-lg shadow-brand-500/25">
                  Start 4-Hour Prep <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-brand-200/30 hover:bg-brand-500/10 text-white backdrop-blur-sm">
                  Join the Free Community
                </Button>
              </div>
              
              <p className="text-sm text-brand-200/60 max-w-md">
                Join a community of pastors from over 20 countries across 6 continents who are discovering the relief and freedom of Preach360.
              </p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground font-drama">4 hours of deep work beats 12 hours of distracted prep every time.</h2>
            
            <div className="mt-8 border-l-2 border-brand-500/50 pl-6 py-2 mx-auto text-left">
              <p className="text-muted-foreground italic text-lg leading-relaxed mb-2">
                "I have received more comments about the sermons being helpful than in all my previous years of preaching combined."
              </p>
              <p className="text-brand-600 font-bold">— Rodney B.</p>
            </div>
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
                    <strong className="block text-foreground mb-1">STRESS</strong>
                    <p className="text-sm text-muted-foreground">Constantly feeling behind, struggling to finish, and rewriting your sermon on Saturdays.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-destructive">✕</div>
                  <div>
                    <strong className="block text-foreground mb-1">UNCERTAINTY</strong>
                    <p className="text-sm text-muted-foreground">Struggling with structure and forcing artificial outlines onto the text, never sure if the outline is right.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-destructive">✕</div>
                  <div>
                    <strong className="block text-foreground mb-1">SILENCE</strong>
                    <p className="text-sm text-muted-foreground">Wishing for a spiritual response to your sermons, but usually just getting the familiar "See you next week, Pastor."</p>
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
                    <strong className="block text-brand-950 mb-1">MARGIN</strong>
                    <p className="text-brand-800/70 text-sm">You'll finish your message by noon on Wednesday—in hours, not days—with margin for ministry and and a real day off.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-1">CONFIDENCE</strong>
                    <p className="text-brand-800/70 text-sm">Rather than invent an artificial outline, you'll simply unfold the gospel organically from the text using the PPGR framework.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-1">IMPACT</strong>
                    <p className="text-brand-800/70 text-sm">You'll preach grace as fuel for new life, not just as a fallback for failure—and start to see people change from the inside out.</p>
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
            <p className="text-xl text-brand-600 font-medium">
              Preach360 provides the path. You trust the process.
            </p>
          </div>

          <div className="mb-12 flex justify-center w-full">
            <img src={roadmapProgress} alt="Roadmap Progress Tracker" className="max-w-full h-auto w-full md:w-3/4 shadow-sm rounded-xl border border-border/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <BookOpen size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 1</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Exegesis Guide</h3>
              <p className="text-muted-foreground flex-1">
                A tool that helps you produce an in-depth exegetical analysis of the text from a redemptive framework.
              </p>
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <Layers size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 2</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">The Relevance Bridge</h3>
              <p className="text-muted-foreground flex-1">
                The contexual connection between the original recipients and modern listeners that reveals the present day need for the text.
              </p>
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                <Zap size={32} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOURS 3 & 4</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">PPGR Movements</h3>
              <p className="text-muted-foreground flex-1">
                A repeatable framework that structurally anchors every message in the clear redemptive progression of Principle, Problem, Gospel, and Response.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center border-t border-brand-200/50 pt-12">
            <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
              "Sermon prep was occupying most if not all of my agenda. I now have a healthy rhythm for my family and the church. Thank you so much!"
            </p>
            <p className="text-brand-600 font-bold">— John G.</p>
          </div>
        </div>
      </section>

      {/* THE KILL SHEET (Differentiation Grid) */}
      <section className="py-24 mt-16 bg-background relative" id="features">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Why Preach360?</h2>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
               Preach360 guides you down a redemptive path from exegesis to a complete draft in 4 hours or less without using complicated Bible software or generic AI.
             </p>
          </div>
          
          <div className="w-full flex justify-center mb-16">
            <img src="/images/appInterface.png" alt="Preach360 App Interface" className="max-w-full h-auto w-full md:w-5/6 shadow-2xl rounded-2xl border border-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
             {/* vs Complexity */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">No Bloated Bible Software</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Logos and Accordance are powerful, but they require a steep learning curve and drown you in too much data.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360 removes the need to wrestle with complicated software, giving you a streamlined path from exegesis to manuscript.
               </div>
             </div>
             
             {/* vs Soulless AI */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">No Soulless, Generic AI</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Generic AI tools bypass the Holy Spirit and outsource your study, your heart, and your voice.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360 acts as a true assistant that helps you dig into the text, and retain your unique pastoral voice and heart.
               </div>
             </div>

             {/* vs Empty Editors */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">A Redemptive Framework</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Tools like Sermonary provide a drag-and-drop editor but lack a distinctively theological foundation.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360 is built on the proven PPGR framework, ensuring every sermon preaches to and through the cross.
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE CREATOR */}
      <section className="py-24 md:py-32 bg-brand-50/50" id="about">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-drama text-brand-950">About the Creator—McKay Caston, PhD</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://preach360.edgestack.space/images/mckay-family.jpeg" 
                  alt="McKay Caston and Family" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                <p>
                  McKay Caston is a pastor with over 30 years of preaching experience.
                </p>
                <p>
                  Having taught homiletics in seminary for ten years, he poured his doctoral research into Preach360 to help solo pastors preach the gospel clearly and experience relief from the weekly weekly pressure of sermon prep.
                </p>
                <p className="text-brand-900 font-medium text-2xl font-drama mt-8">
                  His ultimate goal? To help you live a sustainable life for a long-term, gospel preaching ministry.
                </p>
                <div className="mt-8 pt-8 border-t border-border/50 text-sm text-muted-foreground/70">
                  <p>Created along with</p>
                  <p>Michael Byrd, professional developer</p>
                  <p>Rich Cannon, tech specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES & PILLARS - REMOVED */}


      {/* PRICING */}
      <section className="py-24 bg-background" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Your All-in-One Sermon OS</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               A comprehensive toolkit. No other prep tools needed.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Basic Sermon Studio</h3>
                <div className="text-3xl font-bold mb-2 font-mono">$35<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm font-medium text-brand-600 mb-4">per user, or $350/yr (2 mos free)</p>
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
                <div className="text-3xl font-bold mb-2 font-mono">$70<span className="text-base font-normal text-brand-200">/mo</span></div>
                <p className="text-sm font-medium text-brand-100 mb-4">per user, or $700/yr (2 mos free)</p>
                <p className="text-sm text-brand-100 mb-6">Includes the complete video training library, the comprehensive Preach360 Video Course, the full suite of specialized sermon prep apps, and weekly live group coaching via Zoom with Preach360 creator, McKay Caston, PhD.</p>
                <div className="mt-auto pt-6 border-t border-brand-400">
                  <Button className="w-full bg-white text-brand-600 hover:bg-brand-50">Choose Premium</Button>
                </div>
              </div>
              
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Volume Pricing <span className="text-sm font-normal text-muted-foreground block mt-1">(Staffs/Networks/Organizations)</span></h3>
                <div className="text-2xl font-bold mb-4 font-mono">$15-$25<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm text-muted-foreground mb-6">Those who purchase a basic or premium subscription may purchase additional seats at the volume price for staffs, church planting networks, mission organizations, seminaries, etc. Volume pricing is $15/mo (billed annually) for the basic studio and $25/mo for premium.</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* THE PRIVACY WALL (Moved to below pricing) */}
      <section className="py-24 md:py-32 bg-brand-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.03] w-1/2 h-full bg-[url('https://preach360.edgestack.space/images/ppgr-blueprint.png')] bg-contain bg-no-repeat bg-right" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-900/5 border border-brand-100 relative mt-12">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-sm border border-brand-50">
              <Lock className="w-10 h-10 text-brand-500" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
              Sermon prep requires deep vulnerability. Preach360 operates behind a strict Privacy Wall, assuring that your drafts, notes, and thoughts are protected.
            </p>
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
            Join a global community of pastors discovering the relief and freedom of Preach360.
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
            src="https://preach360.edgestack.space/images/preach360-logo-transparent-for-light-background.png" 
            alt="Preach360 Logo" 
            className="h-16 mb-6 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <p>© {new Date().getFullYear()} Preach360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
