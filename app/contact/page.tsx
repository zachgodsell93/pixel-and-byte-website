"use client";

import { SplitFlapText, SplitFlapAudioProvider } from "../components/SplitFlapText"

export default function Contact() {
  return (
    <SplitFlapAudioProvider>
      <div className="pt-16">
        <section className="relative bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
          <div className="relative pl-8 md:pl-10 pr-6 md:pr-10 py-32">
            <SplitFlapText text="GET IN TOUCH" speed={50} size="clamp(2rem, 6vw, 5rem)" />
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mt-6">
              Ready to explore what AI can do for your business? Let&apos;s talk.
            </p>
          </div>
        </section>

        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                    <input type="text" required className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                    <input type="email" required className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Company</label>
                  <input type="text" className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea required rows={6} className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="bg-foreground text-background font-semibold px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border p-8">
                <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Email</h3>
                <a href="mailto:zach@pixelandbyte.com.au" className="text-foreground hover:text-accent transition-colors">zach@pixelandbyte.com.au</a>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Location</h3>
                <p className="text-foreground">Gold Coast, QLD<br />Australia</p>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Availability</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">We typically respond within 24 hours. For urgent enquiries, mention it in your message.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SplitFlapAudioProvider>
  );
}
