import { Navbar } from "@/components/navbar";
import { Clock, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="py-16 md:py-20" id="about">
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
                    The author of numerous books, including <em>I Am Not the Christ: Pastoral Identity in View of the Cross</em> and <em>Galatians: Navigating All of Life in View of the Cross</em>, he has taught homiletics in seminary for ten years. 
                  </p>
                  <p>
                    Having poured his experience and PhD research into Preach360™ to help solo pastors and church planters preach the fullness of God's grace in Jesus.
                  </p>
                  <p className="text-brand-900 font-medium text-2xl font-drama mt-8">
                    His ultimate goal? To help you live a sustainable life for a long-term, gospel preaching ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Values Section */}
        <section className="py-16 md:py-20 bg-brand-50/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Gospel Centrality */}
              <div className="bg-white border-2 border-brand-100 rounded-[2rem] p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
                  <div className="text-brand-500 font-bold text-xl">+</div>
                </div>
                <h3 className="font-bold text-xl text-brand-900 mb-4 font-drama">Gospel Centrality</h3>
                <p className="text-brand-700 text-sm">
                  You'll tether every text to the cross, preaching grace as fuel for change, not just as a fallback for failure.
                </p>
              </div>

              {/* Reclaimed Time */}
              <div className="bg-white border-2 border-brand-100 rounded-[2rem] p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-bold text-xl text-brand-900 mb-4 font-drama">Reclaimed Time</h3>
                <p className="text-brand-700 text-sm">
                  You'll finish your prep in hours vs days, reclaiming margin for other pastoral responsibilities and a real day off.
                </p>
              </div>

              {/* Pastoral Longevity */}
              <div className="bg-white border-2 border-brand-100 rounded-[2rem] p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-bold text-xl text-brand-900 mb-4 font-drama">Pastoral Longevity</h3>
                <p className="text-brand-700 text-sm">
                  You'll discover a sustainable rhythm for life and ministry, trading burnout for long-term pastoral health.
                </p>
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
      </main>
    </div>
  );
}