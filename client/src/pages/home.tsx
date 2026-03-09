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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                Prep in half the time.
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

      {/* 1. THE PROBLEM */}
      <section className="py-16 md:py-20 bg-background relative" id="problem">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-drama text-foreground">Is Sermon Prep Taking You All Week?</h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="mb-6 font-medium text-foreground">
              Sermon prep that feels like cutting a new trail through a dense forest inevitably leads to mental pressure, emotional stress, and pastoral burnout.
            </p>
            <p className="mb-6">
              Without a clear path, it is easy to default to bloated, complicated Bible software, drown in stacks of physical commentaries, or fall back on soulless, generic AI.
            </p>
            <p className="mb-6 font-drama text-2xl text-brand-800">
              What if there were a pre-cleared path to follow?
            </p>
            <p className="mb-8 font-bold text-foreground text-xl">
              Now, there is.
            </p>
            <p className="text-base md:text-lg">
              Preach360 guides you down a redemptive path from raw exegesis to a complete draft in 4 hours or less, serving as a Socratic preaching coach. It doesn't do the work for you. It does the work with you, allowing you to retain your unique, authentic voice and pastoral heart.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP & PROTOCOL */}
      <section className="py-16 md:py-20 bg-brand-50/50 relative" id="roadmap">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-brand-950">Discover the Preach360 4-Hour Roadmap</h2>
          </div>

          <div className="mb-8 flex justify-center w-full">
            <img src={roadmapProgress} alt="Roadmap Progress Tracker" className="max-w-full h-auto w-full md:w-3/4 shadow-sm rounded-xl border border-border/50" />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground font-sans">4 hours of deep work beats 12 hours of distracted prep every time.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <BookOpen size={28} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 1</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Exegesis Guide</h3>
              <p className="text-muted-foreground flex-1 text-sm">
                Generate the Exegesis Guide. A tool that helps you produce an in-depth exegetical analysis of the text from a redemptive framework.
              </p>
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <Layers size={28} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 2</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Relevance Bridge</h3>
              <p className="text-muted-foreground flex-1 text-sm">
                Build the Relevance Bridge. The contexual connection between the original recipients and modern listeners that reveals the present day need for the text.
              </p>
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <Zap size={28} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 3</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">PPGR Movements</h3>
              <p className="text-muted-foreground flex-1 text-sm">
                Develop the Four Movements (PPGR). A repeatable framework that structurally anchors every message in the clear redemptive progression.
              </p>
            </div>

            <div className="group relative bg-card border border-border hover:border-brand-300 transition-colors duration-300 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 flex flex-col h-full">
              <div className="text-brand-500 mb-6 bg-brand-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                <ShieldCheck size={28} />
              </div>
              <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 4</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Refine & Review</h3>
              <p className="text-muted-foreground flex-1 text-sm">
                Refine and review. Polish the manuscript, add finishing touches, and prepare for delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PREACH360 DIFFERENCE */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden" id="system">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-bold font-drama text-foreground">Experience the Preach360 Difference</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-brand-50/30 p-8 md:p-12 rounded-[2.5rem] border border-brand-100/50">
            {/* The Old Way */}
            <div className="bg-transparent rounded-3xl p-4 lg:p-6">
              <h3 className="text-3xl font-bold mb-8 font-drama text-brand-800">
                The Old Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-lg">STRESS</strong>
                    <p className="text-base text-muted-foreground">Constantly feeling behind, struggling to finish, and rewriting your sermon on Saturdays.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-lg">UNCERTAINTY</strong>
                    <p className="text-base text-muted-foreground">Struggling with structure and forcing artificial outlines onto the text, never sure if the outline is right.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-lg">SILENCE</strong>
                    <p className="text-base text-muted-foreground">Wishing for a spiritual response to your sermons, but usually just getting the familiar "See you next week, Pastor."</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Preach360 Way */}
            <div className="bg-white border border-brand-100 rounded-3xl p-8 lg:p-10 relative shadow-xl shadow-brand-500/5">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                The Solution
              </div>
              <h3 className="text-3xl font-bold mb-8 font-drama text-brand-600">
                The Preach360 Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-lg">MARGIN</strong>
                    <p className="text-muted-foreground text-base">Finish your message by noon on Wednesday—in hours, not days. Preach360 returns over 10 hours of margin to your week for a real day off and long-term ministry sustainability.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-lg">CONFIDENCE</strong>
                    <p className="text-muted-foreground text-base">Rather than invent an artificial outline, you'll simply unfold the gospel organically from the text using the PPGR framework.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-lg">IMPACT</strong>
                    <p className="text-muted-foreground text-base">You'll preach grace as fuel for new life, not just as a fallback for failure—and start to see people change from the inside out.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE CREATOR */}
      <section className="py-16 md:py-20 bg-brand-50/50" id="about">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-5xl font-bold font-drama text-brand-950">Meet McKay Caston</h2>
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
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  McKay Caston is a pastor with over 30 years of preaching experience.
                </p>
                <p>
                  Having taught homiletics in seminary for ten years, he poured his doctoral research into Preach360 to help solo pastors preach the gospel clearly and experience relief from the weekly weekly pressure of sermon prep.
                </p>
                <p className="text-brand-900 font-medium text-2xl font-drama mt-8">
                  His ultimate goal? To help you live a sustainable life for a long-term, gospel preaching ministry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 md:py-20 bg-brand-950 text-white text-center relative overflow-hidden" id="pricing">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-950 to-brand-800" />
        <div className="absolute right-0 bottom-0 opacity-10 bg-[url('https://preach360.edgestack.space/images/solo_pastor.jpeg')] bg-cover w-full h-full mix-blend-luminosity pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-drama mb-6">Get Started Today</h2>
          <p className="text-xl md:text-2xl text-brand-200 mb-10 max-w-2xl mx-auto opacity-90">
            Your all-in-one sermon OS. No other prep tools needed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/login">
                <Button size="lg" className="rounded-full bg-brand-500 text-white hover:bg-brand-600 h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-brand-500/20">
                  Get Started
                </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="bg-background pt-12 pb-4">
        <div className="max-w-3xl mx-auto text-center border-t border-brand-200/50 pt-12 px-4">
          <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
            "Sermon prep was occupying most if not all of my agenda. I now have a healthy rhythm for my family and the church. Thank you so much!"
          </p>
          <p className="text-brand-600 font-bold">— John G.</p>
        </div>
      </div>
      
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
