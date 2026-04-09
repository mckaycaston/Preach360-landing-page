import { Navbar } from "@/components/navbar";
import { Star } from "lucide-react";

const testimonials = [
  {
    author: "Rodney B.",
    quote:
      "I've had more positive comments on my sermons this year than all my years of preaching combined.",
  },
  {
    author: "David K.",
    quote:
      "My prep time has been drastically reduced. Most weeks, I have a first draft done by Tuesday. This has freed me up for other ministry tasks and allowed me to take a true day off. So grateful!",
  },
  {
    author: "David H.",
    quote:
      "I was chronically finishing my sermon early Sunday mornings, but now have it completed  by Wednesday every week.",
  },
  {
    author: "Erik O.",
    quote:
      "Just wanted to say how helpful this new way of sermon prep has been for me. Can't imagine my life now without it.",
  },
  {
    author: "Nate B.",
    quote: "Simply put, Preach360 has revolutionized by life and ministry!",
  },
  {
    author: "Mark A.",
    quote: "This will revolutionize the mission work in 10-40 window!",
  },
  {
    author: "Matt D.",
    quote: "This resource is invaluable.",
  },
  {
    author: "James P.",
    quote:
      "The exegesis tool sets up the passage better than any commentary work I've ever done!",
  },
  {
    author: "Andrew G.",
    quote:
      "I only preach a handful of Sundays each year, but the impact of the PPGR framework on my lesson plans, and maybe just as importantly, for my devotional life, are immeasurable.",
  },
  {
    author: "Billy M.",
    quote:
      "The Preach360 method of seeing this gospel DNA in the text has made me feel like Edmond Dantes felt when he finally escaped the Chateau D'if!",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand-200 selection:text-brand-900">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
              <h1 className="text-4xl md:text-6xl font-bold font-drama text-brand-950" data-testid="text-page-title">
                What Pastors Say
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-page-description">
                Real feedback from pastors reclaiming their weeks, renewing their lives, and preaching grace with greater clarity with Preach360™.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-testid="section-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  className="group h-full rounded-[2rem] border border-brand-200/70 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(120,53,15,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_-34px_rgba(120,53,15,0.36)]"
                  data-testid={`card-testimonial-${index}`}
                >
                  <div className="mb-6 flex items-center gap-1 text-brand-500" data-testid={`rating-stars-${index}`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <div className="border-l-2 border-r-2 border-brand-500/30 px-5 py-3">
                    <p
                      className="text-xl leading-relaxed text-brand-900 font-drama italic"
                      data-testid={`text-testimonial-quote-${index}`}
                    >
                      “{testimonial.quote}”
                    </p>
                  </div>

                  <p
                    className="mt-6 text-brand-600 font-bold text-base"
                    data-testid={`text-testimonial-author-${index}`}
                  >
                    — {testimonial.author}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
