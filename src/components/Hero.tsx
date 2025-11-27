import { ArrowRight, Globe, GraduationCap, Building2 } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 relative overflow-hidden 
      bg-gradient-to-br from-white via-[#E9F7FF] to-[#EBFFF4]"
    >

      {/* Soft glowing background auras */}
      <div className="absolute w-[550px] h-[550px] bg-blue-300/15 blur-3xl rounded-full top-[-80px] left-[-80px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-200/15 blur-3xl rounded-full bottom-[-50px] right-[-40px]"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            {/* Tag */}
            <span className="px-5 py-2 inline-block bg-blue-100 text-blue-700 rounded-full 
            text-xs tracking-wide font-semibold mb-6 shadow-sm">
              Global Expansion • Training • Residency • Education
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering Growth  
              <span className="text-blue-600"> Beyond Borders</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 mb-10 leading-relaxed max-w-xl">
              GETCRR LLP powers global business expansion, international education pathways, 
              and strategic consulting across India, UAE, USA, UK, Canada & Europe.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
              text-sm font-medium shadow-md hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                Get Started <ArrowRight size={18}/>
              </button>
              <button className="bg-white border border-slate-300 text-slate-900 px-8 py-3 rounded-lg 
              hover:bg-slate-100 transition-all text-sm font-medium">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-sm">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="text-blue-600" size={22}/>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-base">5+ Countries</p>
                  <span className="text-[11px] text-slate-500">Global Presence</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-green-600" size={22}/>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-base">30+ Years</p>
                  <span className="text-[11px] text-slate-500">Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Building2 className="text-amber-600" size={22}/>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-base">5000+</p>
                  <span className="text-[11px] text-slate-500">Setups Done</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image + floating badge */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl 
            hover:scale-[1.01] transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Client Counter */}
            <div className="absolute -bottom-7 -left-6 bg-white/90 backdrop-blur-xl 
            border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-2xl 
            transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 
                flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-slate-900">2530+</p>
                  <span className="text-xs text-slate-600">Happy Clients Worldwide</span>
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
