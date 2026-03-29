import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Layers, ShieldCheck, Zap, Lock, Heart } from "lucide-react";
import { Link } from "wouter";
import roadmapProgress from "@assets/image_1772636322550.png";
import aboutCreatorImage from "@assets/image_1772656745459.png";
import coachImage from "@assets/image_1773084579554.png";
import foundationImage from "@assets/image_1773317291845.png";
import structureImage from "@assets/image_1773317393134.png";
import polishingImage from "@assets/image_1773317517502.png";
import foundationImg from "../assets/images/foundation.png";
import structureImg from "../assets/images/structure.png";
import polishingImg from "../assets/images/polishing.png";

import heroImage from "@assets/image_1773336649735.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-200 selection:text-brand-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-brand-950">
        <div className="absolute inset-0 z-0">
          {/* Heavy #f97316 (brand-500) gradient as requested in guidelines */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-500/40 mix-blend-overlay z-10" />
          <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-luminosity" 
            style={{ backgroundImage: `url(${heroImage})` }}
          />
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Craft biblically faithful sermons in a single afternoon...
              </h1>
              
              <div className="mb-8 max-w-xl">
                 <p className="text-xl md:text-2xl font-medium text-brand-100/90 leading-tight">
                   without getting lost in complicated Bible software or falling back on generic AI.
                 </p>
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
      <section className="pt-16 pb-0 md:pt-20 md:pb-0 bg-background relative" id="problem">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-drama text-foreground">Solo pastors don't have the luxury of doing sermon prep all week.</h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-6">
            <div className="text-lg md:text-xl space-y-6 text-left md:text-center text-muted-foreground">
              <p>Thankfully, with the Preach360 online sermon studio, you can craft a biblically faithful, redemptive, expository sermon in a single afternoon.</p>
              <p><strong className="text-foreground">Guided.</strong> Unlike generic AI tools, it doesn't do the work for you. It does the work with you. You don't prompt it. It prompts you.</p>
              <p><strong className="text-foreground">Intuitive.</strong> Rather than inventing an artificial outline, you simply unfold the organic, redemptive message that's already in the text.</p>
              <p><strong className="text-foreground">Simple.</strong> No guesswork. Just trust the process.</p>
              
              <div className="mt-12 max-w-3xl mx-auto text-center border-l-2 border-r-2 border-brand-500/30 px-6 py-2">
                <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
                  "I can honestly say, this is the first time in 18 years that I look forward to sermon prep!"
                </p>
                <p className="text-brand-600 font-bold">— K.C.</p>
              </div>
              
              <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-2">
                <img 
                  src={coachImage} 
                  alt="Preach360 Coaching Interface" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

            <div className="mt-16 mb-8 md:mb-12 text-center" id="built-for-pastors">
              <h2 className="text-3xl md:text-5xl font-bold font-drama text-foreground">Built for Pastors by a Pastor.</h2>
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-6 mt-8 text-left md:text-center pb-0">
                <p>My name is McKay Caston. As a pastor myself, I know the pressure and ministry stress you face—including the burnout.</p>
                <p>But you don't have to burn out. You can pastor with a weekly rhythm that includes margin for life and a real day off, which is critical for long-term pastoral health.</p>
                <p>I poured my 30 years of preaching experience, ten years of teaching homilietics in seminary, and my PhD research into building Preach360, with the goal of helping you prep more efficiently and preach the gospel more effectively.</p>
              </div>
            </div>
        </div>
      </section>

      {/* 3. THE PREACH360 DIFFERENCE */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-20 bg-background relative overflow-hidden" id="system">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* The Old Way */}
            <div className="bg-white border-2 border-brand-300 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-brand-900/5">
              <h3 className="text-3xl font-bold mb-8 font-drama text-brand-900 opacity-70">
                The Old Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4 opacity-70">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-2xl font-bold">STRESS</strong>
                    <p className="text-base text-muted-foreground">Constantly feeling behind, struggling to finish, and rewriting your sermon on Saturdays.</p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-70">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-2xl font-bold">UNCERTAINTY</strong>
                    <p className="text-base text-muted-foreground">Struggling with structure and forcing artificial outlines onto the text, never sure if the outline is right.</p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-70">
                  <div className="mt-1 min-w-6 text-brand-400 font-light">✕</div>
                  <div>
                    <strong className="block text-foreground mb-2 text-2xl font-bold">SILENCE</strong>
                    <p className="text-base text-muted-foreground">Wishing to hear stories of impact from your sermons, you usually get the familiar "See you next week, Pastor."</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Preach360 Way */}
            <div className="bg-brand-50 border-2 border-brand-300 rounded-[2.5rem] p-8 lg:p-12 relative shadow-2xl shadow-brand-500/10 transform scale-105">
              <h3 className="text-3xl font-bold mb-8 font-drama text-brand-700">
                The Preach360™ Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-2xl font-bold">MARGIN</strong>
                    <p className="text-brand-950/80 text-base">Finish your message in hours, not days. Preach360™ returns over 10 hours of margin to your week, including a real day off.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-2xl font-bold">CONFIDENCE</strong>
                    <p className="text-brand-950/80 text-base">Rather than invent an artificial outline, you'll simply unfold the gospel organically from the text using the PPGR framework.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-2xl font-bold">IMPACT</strong>
                    <p className="text-brand-950/80 text-base">You'll preach grace as fuel for new life, not just as a fallback for failure—and start to see people change from the inside out.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-24 bg-background" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Trust the process and reclaim your week.</h2>
             <div className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-2">
               <p>Get started with your complete, all-in-one sermon studio today.</p>
               <p className="text-sm font-medium">Free Trial. Cancel anytime.</p>
             </div>
           </div>
           
           <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Preach360 Sermon Studio</h3>
                <div className="text-3xl font-bold mb-2 font-mono">$35<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm font-medium text-brand-600 mb-4">per user, or $350/yr (2 mos free)</p>
                <p className="text-sm text-muted-foreground mb-6">The core sermon builder studio designed to fit standard pastoral continuing education budgets. Includes everything you need to craft biblically faithful, redemptive expository sermons in a single afternoon, from raw exegesis to full manuscript.</p>
                <div className="mt-4 pt-6 border-t border-border">
                  <a href="#pricing" className="w-full">
                    <Button className="w-full" variant="outline">Start Your Free 14-Day Trial</Button>
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-bold mb-1">Volume Pricing Option <span className="text-sm font-normal text-muted-foreground block mt-1">(Staffs/Networks/Organizations)</span></h3>
                  <div className="text-2xl font-bold mb-1 font-mono">$15<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                  <p className="text-sm font-medium text-brand-600 mb-3">per user, or $150/yr (2 mos free)</p>
                  <p className="text-sm text-muted-foreground">Any subscriber may purchase additional seats at the volume price for staffs, church planting networks, mission organizations, seminaries, etc.</p>
                </div>
              </div>
           </div>

           <div className="mt-16 max-w-3xl mx-auto text-center border-l-2 border-r-2 border-brand-500/30 px-6 py-2">
            <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
              "As a planter, sermon prep was occupying most if not all of my time. I now have a healthy rhythm for my family and the church. Thank you so much!"
            </p>
            <p className="text-brand-600 font-bold">— John G.</p>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (BOTTOM BANNER) */}
      <section className="py-16 md:py-20 bg-brand-950 text-white text-center relative overflow-hidden" id="get-started">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-950 to-brand-800" />
        <div className="absolute right-0 bottom-0 opacity-10 bg-[url('https://preach360.edgestack.space/images/solo_pastor.jpeg')] bg-cover w-full h-full mix-blend-luminosity pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-2xl md:text-3xl text-brand-50 max-w-4xl mx-auto leading-tight">
            Join a community of pastors from over 20 countries across 6 continents experiencing a sustainable, life-giving ministry with Preach360™.
          </p>
        </div>
      </section>

      <footer className="bg-background border-t border-border text-muted-foreground py-12 text-sm text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <p>© {new Date().getFullYear()} Preach360™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
