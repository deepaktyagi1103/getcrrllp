import { CheckCircle, Target, Eye, Award } from 'lucide-react';

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-[#E8F5FF] to-[#E9FFF3] relative overflow-hidden"
    >

      {/* Soft Glow Background Elements (3D aesthetic) */}
      <div className="absolute w-96 h-96 bg-blue-200 opacity-25 blur-3xl -top-10 -left-10 rounded-full"></div>
      <div className="absolute w-80 h-80 bg-green-200 opacity-20 blur-3xl bottom-0 right-0 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          {/* IMAGE SECTION */}
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team Collaboration"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Floating Experience Card - 3D style */}
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white px-10 py-6 rounded-2xl shadow-xl
                            transform hover:scale-[1.05] transition-all duration-500">
              <h1 className="text-4xl font-bold leading-tight drop-shadow-lg">30+</h1>
              <p className="text-xs tracking-wide opacity-80">Years Expertise</p>
            </div>
          </div>

          {/* ABOUT TEXT */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs tracking-wide font-semibold">
              ABOUT US
            </span>

            <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-4 leading-tight">
              Welcome to <span className="text-[#1B86E6]">GETCRR</span>
            </h2>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              GETCRR LLP is a global education & business development company, operating across India,
              UAE, USA, UK & more. Founded in 2021, empowered through experience since 2003.
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              With over 30 years of combined leadership, we support entrepreneurs, professionals
              & global investors to scale across international markets with strategic business solutions.
            </p>

            {/* FEATURES */}
            <div className="space-y-3">

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" size={20}/>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Online Education</h4>
                  <p className="text-xs text-slate-600">Upskilling for global innovation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" size={20}/>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Training & Employability</h4>
                  <p className="text-xs text-slate-600">Career-ready practical skill programs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" size={20}/>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Residency & Citizenship</h4>
                  <p className="text-xs text-slate-600">Global mobility with credible programs.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* VISION • MISSION • GOALS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-xl p-8 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl 
                          transition-all duration-500 hover:-translate-y-1 border border-blue-100">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-5 shadow-xl">
              <Eye className="text-white" size={26}/>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              To be the most trusted global consulting partner, enabling borderless expansion.
            </p>
          </div>

          <div className="rounded-xl p-8 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl
                          transition-all duration-500 hover:-translate-y-1 border border-green-100">
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-5 shadow-xl">
              <Target className="text-white" size={26}/>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              To empower individuals & enterprises through world-class advisory & growth solutions.
            </p>
          </div>

          <div className="rounded-xl p-8 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl
                          transition-all duration-500 hover:-translate-y-1 border border-amber-100">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-5 shadow-xl">
              <Award className="text-white" size={26}/>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Our Goals</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Deliver high-impact global solutions that grow businesses consistently worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
