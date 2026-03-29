import { Navbar } from "@/components/navbar";
import { BookOpen, ShieldCheck, Zap } from "lucide-react";
import foundationImage from "@assets/image_1773317291845.png";
import structureImage from "@assets/image_1773317393134.png";
import polishingImage from "@assets/image_1773317517502.png";
import ppgrImage from "@assets/Screenshot_2026-03-28_at_9.08.03_PM_1774746536127.png";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16 md:py-20 relative" id="roadmap">
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
                  <span className="block">By dividing your preparation into three distinct building blocks over four hours, you can step into the pulpit with confidence and enthusiasm, rested and ready to preach the wonder, beauty, and transforming power of God's grace in Jesus.</span>
                  <span className="block mt-4 font-medium text-brand-900">Preach360™ will guide you step by step. No guesswork. Just trust the process.</span>
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
                      <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">To build the structure, we'll create a relevance bridge between the original recipients and our contemporary context, revealing the present need for the text which will be developed through four movements that mirror the complete redemptive story found in the biblical creation, fall, redemption, and restoration framework. We call these movements Principle, Problem, Gospel, and Response (PPGR).</p>
                      <img src={ppgrImage} alt="PPGR Movements: Principle, Problem, Gospel, Response" className="w-full max-w-lg mx-auto h-auto rounded-xl border border-brand-100/50" />
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
      </main>
    </div>
  );
}