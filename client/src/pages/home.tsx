import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Layers, ShieldCheck, Zap, Lock } from "lucide-react";
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Craft biblically faithful, gospel-rich sermons in a single afternoon...
              </h1>
              
              <div className="mb-8 max-w-xl">
                 <p className="text-xl md:text-2xl font-medium text-brand-100/90 leading-tight">
                   without complicated Bible software, a stack of commentaries, or generic AI.
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
      <section className="py-16 md:py-20 bg-background relative" id="problem">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-drama text-foreground">Solo pastors don't have the luxury of doing sermon prep all week.</h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-6">
            <div className="text-lg md:text-xl space-y-6 text-left md:text-center text-muted-foreground">
              <p>Preach360™ is the all-in-one, web-based sermon OS that provides focus to the process and returns bandwidth to your life.</p>
              <p>As a Socratic preaching coach, Preach360™ doesn't do the work for you. It does the work with you—from raw exegesis to a complete draft in 4 hours or less.</p>
              <p><strong>The secret?</strong> Rather than forcing your text into an artificial outline, you simply unfold the organic, redemptive message that's already there.</p>
              
              <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-2">
                <img 
                  src={coachImage} 
                  alt="Preach360 Coaching Interface" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch mt-16 text-left">
             {/* vs Complexity */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">No Complicated Bible Software</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Logos is powerful, but requires a steep learning curve and drowns you in too much data.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360™ removes the need to wrestle with complicated software, giving you a streamlined path from exegesis to manuscript.
               </div>
             </div>
             
             {/* vs Soulless AI */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">No Soulless, Generic AI</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Generic AI tools bypass the Holy Spirit and outsource your study, your heart, and your voice.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360™ acts as a true assistant. Unlike standard AI, you don't prompt it. It prompts you so the message is truly yours for your people.
               </div>
             </div>

             {/* vs Empty Editors */}
             <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full">
               <h3 className="text-xl font-bold mb-4">A Redemptive Framework</h3>
               <p className="text-muted-foreground mb-4 flex-1">
                 Some tools highlight drag-and-drop editors but lack a distinctively theological foundation.
               </p>
               <div className="bg-brand-50/50 text-brand-900 p-4 rounded-xl text-sm font-medium border border-brand-100">
                 Preach360™ is built with the proven PPGR theological framework, ensuring every sermon preaches to and through the cross.
               </div>
             </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center border-l-2 border-r-2 border-brand-500/30 px-6 py-2">
            <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
              "I can honestly say, this is the first time in 18 years that I look forward to sermon prep!"
            </p>
            <p className="text-brand-600 font-bold">— K.C.</p>
          </div>
        </div>
      </section>

      {/* 2. ROADMAP & PROTOCOL */}
      <section className="pt-16 md:pt-20 pb-0 bg-brand-50/50 relative" id="roadmap">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 font-drama text-brand-950">The 4-Hour Sermon Roadmap</h2>
          </div>

          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-medium text-foreground font-sans mb-8">
              <span className="text-brand-600">Pour the foundation, build the structure, and seal the cracks.</span>
            </h2>
            
            <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm text-left">
              <h3 className="text-2xl font-bold mb-4 font-drama text-brand-900 text-center">Here's How It Works</h3>
              <p className="text-muted-foreground text-center text-lg space-y-4">
                <span className="block">You don't need more time to prepare a faithful, gospel-centered sermon. You need a clearly defined process. By dividing your preparation into three distinct building blocks over four hours, you can step into the pulpit with confidence and enthusiasm, rested and ready to preach the wonder, beauty, and transforming power of God's grace in Jesus.</span>
                <span className="block mt-4 font-medium text-brand-900">Preach360™ will guide you step by step. No guesswork. Just lock in and trust the process—because 4 hours of focused prep beats 12 hours of distracted prep every time.</span>
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Block 1 */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-8">
                <div className="text-brand-500 font-bold mb-2 uppercase tracking-wider text-sm">Block 1</div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-950 font-drama mb-4">Pour the Foundation</h3>
                <img src={foundationImage} alt="Pour the Foundation" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-sm border border-brand-100" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-brand-50/50 p-6 md:p-8 rounded-3xl border border-brand-100/50 text-center">
                  <div className="inline-flex text-brand-500 mb-4 shrink-0 bg-white p-3 rounded-2xl shadow-sm"><BookOpen size={28}/></div>
                  <div>
                    <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 1</div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground font-drama">The Exegesis Guide</h4>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">We always begin with the text. Preach360™ guides you through an in-depth exegetical analysis of your passage from a redemptive framework. This will serve as the raw material for building the structure of the message.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-8">
                <div className="text-brand-500 font-bold mb-2 uppercase tracking-wider text-sm">Block 2</div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-950 font-drama mb-4">Build the Structure</h3>
                <img src={structureImage} alt="Build the Structure" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-sm border border-brand-100" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-brand-50/50 p-6 md:p-8 rounded-3xl border border-brand-100/50 text-center">
                  <div className="inline-flex text-brand-500 mb-4 shrink-0 bg-white p-3 rounded-2xl shadow-sm"><Zap size={28}/></div>
                  <div>
                    <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOURS 2 & 3</div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground font-drama">The PPGR Movements</h4>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">To build the structure, we'll create a relevance bridge between the original recipients and our contemporary context, revealing the present need for the text which will be developed through four movements that mirror the complete redemptive story found in the biblical creation, fall, redemption, and restoration framework. We call these movements Principle, Problem, Gospel, and Response (PPGR).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-8">
                <div className="text-brand-500 font-bold mb-2 uppercase tracking-wider text-sm">Block 3</div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-950 font-drama mb-4">Seal the Cracks</h3>
                <img src={polishingImage} alt="Seal the Cracks" className="w-full h-64 object-cover rounded-2xl mb-8 shadow-sm border border-brand-100" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-brand-50/50 p-6 md:p-8 rounded-3xl border border-brand-100/50 text-center">
                  <div className="inline-flex text-brand-500 mb-4 shrink-0 bg-white p-3 rounded-2xl shadow-sm"><ShieldCheck size={28}/></div>
                  <div>
                    <div className="font-mono text-sm text-brand-500 mb-2 font-bold tracking-wider">HOUR 4</div>
                    <h4 className="text-2xl font-bold mb-3 text-foreground font-drama">The Optimization Process</h4>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">Once the structure is complete, you will review and revise the manuscript, submitting it to our proprietary optimization process, which provides suggestions for targeted refinement for a ready to preach, redemptively clear sermon.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-24 max-w-3xl mx-auto text-center border-l-2 border-r-2 border-brand-500/30 px-6 py-2">
            <p className="text-xl md:text-2xl text-brand-900 font-drama italic mb-4">
              "I've had more positive comments on my sermons this year than all my years of preaching combined."
            </p>
            <p className="text-brand-600 font-bold">— Rodney B.</p>
          </div>
        </div>
      </section>

      {/* 3. THE PREACH360 DIFFERENCE */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden" id="system">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-drama text-foreground">The Preach360™ Difference</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* The Old Way */}
            <div className="bg-white border-2 border-brand-100/50 rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-brand-900/5">
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
                    <p className="text-base text-muted-foreground">Wishing for a spiritual response to your sermons, but usually just getting the familiar "See you next week, Pastor."</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Preach360 Way */}
            <div className="bg-brand-50 border-2 border-brand-300 rounded-[2.5rem] p-8 lg:p-12 relative shadow-2xl shadow-brand-500/10 transform scale-105">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                The Solution
              </div>
              <h3 className="text-3xl font-bold mb-8 font-drama text-brand-700">
                The Preach360™ Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 min-w-6 text-brand-500 font-bold">✓</div>
                  <div>
                    <strong className="block text-brand-950 mb-2 text-2xl font-bold">MARGIN</strong>
                    <p className="text-brand-950/80 text-base">Finish your message by noon on Wednesday—in hours, not days. Preach360™ returns over 10 hours of margin to your week for a real day off and long-term ministry sustainability.</p>
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
                  Having taught homiletics in seminary for ten years, he poured his PhD research into Preach360™ to help solo pastors and church planters preach the gospel clearly and experience relief from the weekly pressure of sermon prep.
                </p>
                <p className="text-brand-900 font-medium text-2xl font-drama mt-8">
                  His ultimate goal? To help you live a sustainable life for a long-term, gospel preaching ministry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-24 bg-background" id="pricing">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 font-drama text-foreground">Start Your 4-Hour Prep Today</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               The all-in-one sermon OS. No other prep tools needed.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border p-8 rounded-3xl flex flex-col">
                <h3 className="text-xl font-bold mb-2">Basic Sermon Studio</h3>
                <div className="text-3xl font-bold mb-2 font-mono">$35<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                <p className="text-sm font-medium text-brand-600 mb-4">per user, or $350/yr (2 mos free)</p>
                <p className="text-sm text-muted-foreground mb-6">The core sermon preparation operating system designed to fit standard pastoral continuing education budgets.</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button className="w-full" variant="outline">Start 14-Day Free Trial</Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">No credit card required</p>
                </div>
              </div>
              
              <div className="bg-brand-500 text-white p-8 rounded-3xl flex flex-col relative shadow-xl shadow-brand-500/20 transform scale-105">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-brand-950 text-brand-100 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-50">Premium Upgrade</h3>
                <div className="text-3xl font-bold mb-2 font-mono">$70<span className="text-base font-normal text-brand-200">/mo</span></div>
                <p className="text-sm font-medium text-brand-100 mb-4">per user, or $700/yr (2 mos free)</p>
                <p className="text-sm text-brand-100 mb-6">Includes the complete video training library, the comprehensive Preach360™ Video Course, the full suite of specialized sermon prep apps, and weekly live group coaching via Zoom with Preach360™ creator, McKay Caston.</p>
                <div className="mt-auto pt-6 border-t border-brand-400">
                  <Button className="w-full bg-white text-brand-600 hover:bg-brand-50">Start 14-Day Free Trial</Button>
                  <p className="text-xs text-center text-brand-100 mt-2">No credit card required</p>
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
          <p className="text-2xl md:text-3xl text-brand-50 max-w-4xl mx-auto leading-relaxed">
            Join a community of pastors from over 20 countries across 6 continents who are discovering the relief and freedom of Preach360™.
          </p>
        </div>
      </section>

      <footer className="bg-background border-t border-border text-muted-foreground py-12 text-sm text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <img 
            src="https://preach360.edgestack.space/images/preach360-logo-transparent-for-light-background.png" 
            alt="Preach360 Logo" 
            className="h-16 mb-6 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
          <p>© {new Date().getFullYear()} Preach360™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
