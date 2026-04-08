import { data } from '@/lib/utils'

export function CTASection() {
  return (
    <section id="contact" className="bg-surface py-16 sm:py-24 border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Info & Form */}
          <div className="space-y-12">
            <div>
              <span className="section-label">Contact Us</span>
              <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 sm:mb-6">
                Ready to scale <br />your production?
              </h2>
              <p className="text-on-surface-variant text-base sm:text-lg">
                Join 500+ production houses across the GCC relying on Blue Rhine for engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Location</span>
                <p className="text-sm font-bold text-primary leading-snug">
                  {data.brand.headquarters}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Direct Line</span>
                <p className="text-sm font-bold text-primary">
                  {data.brand.phone}
                </p>
                <p className="text-xs text-on-surface-variant">Available Sat—Thu, 8am—6pm</p>
              </div>
            </div>

            <form className="space-y-6 pt-8 border-t border-surface-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Official Email"
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <textarea
                placeholder="How can our engineers help you?"
                rows={4}
                className="w-full bg-surface-container-low border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary-container transition-all shadow-lg"
              >
                Send Technical Request
              </button>
            </form>
          </div>

          {/* Right: Map / Visual */}
          <div className="relative group hidden sm:block">
            <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl relative">
              {/* Map Placeholder with Gradient and Pin */}
              <div className="absolute inset-0 bg-[#E9E8E7] flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                 {/* Visual Pin */}
                 <div className="relative flex flex-col items-center">
                    <div className="w-4 h-4 bg-secondary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-secondary rounded-full shadow-lg relative z-10"></div>
                    <div className="h-8 w-1 bg-secondary/50 -mt-1 blur-[1px]"></div>
                 </div>
                 
                 {/* Floating Location Card */}
                 <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/50">
                    <h4 className="text-primary font-bold text-lg mb-1">Dubai HQ & Showroom</h4>
                    <p className="text-on-surface-variant text-xs leading-relaxed">
                      Visit us to see live demonstrations of JHF and Dlican systems in action.
                    </p>
                 </div>
              </div>
            </div>
            {/* Corner Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/30 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
