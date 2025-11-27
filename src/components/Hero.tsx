import { ArrowRight, Globe, GraduationCap, Building2 } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Global Expansion | Education | Training | Residency
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering Growth <span className="text-blue-600">Beyond Borders</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              GETCRR LLP is your trusted partner for global business expansion, international education, and strategic consulting across India, UAE, USA, UK, Canada, and Europe.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center gap-2 font-medium">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all border-2 border-slate-200 font-medium">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">5+ Countries</div>
                  <div className="text-sm text-slate-600">Global Presence</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">30+ Years</div>
                  <div className="text-sm text-slate-600">Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Building2 className="text-amber-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">5000+</div>
                  <div className="text-sm text-slate-600">Setups Done</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Global Business Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <div>
                  <div className="font-bold text-2xl text-slate-900">2530+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
