import { Navbar } from "@/components/navbar";

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
                    Having taught homiletics in seminary for ten years, he poured his PhD research into Preach360™ to help solo pastors and church planters preach the fullness of God's grace in Jesus with clarity, confidence, and enthusiasm.
                  </p>
                  <p className="text-brand-900 font-medium text-2xl font-drama mt-8">
                    His ultimate goal? To help you live a sustainable life for a long-term, gospel preaching ministry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}