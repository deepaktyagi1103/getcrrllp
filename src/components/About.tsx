import { CheckCircle, Target, Eye, Award } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">30+</div>
                <div className="text-sm">Years of Combined Expertise</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Welcome to GETCRR</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              GETCRR LLP is a global education and development platform, as well as a leading international business and management consulting firm. Founded in 2021 and headquartered in Delhi NCR, the firm builds upon the entrepreneurial expertise and global experience established since 2003.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 30 years of combined professional excellence, GETCRR LLP empowers entrepreneurs, investors, professionals, and institutions to thrive in a fast-changing, globalized world. Our services extend across India, the UAE, the USA, the UK, Canada, Europe, and other key international markets.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Online Education</h4>
                  <p className="text-slate-600">Globally accessible education to upskill learners and drive innovation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Training & Employability</h4>
                  <p className="text-slate-600">Practical training for career readiness, entrepreneurship, and adaptability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Residency & Citizenship</h4>
                  <p className="text-slate-600">Guidance in global mobility via credible second passport programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be the most trusted strategic partner for global business expansion, offering bespoke consulting solutions that bridge borders and build sustainable success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To empower individuals and organizations by providing world-class business advisory, international relocation services, and tailored strategies that drive growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Goals</h3>
            <p className="text-slate-700 leading-relaxed">
              To consistently deliver tailored solutions that enable global business success, expand client opportunities, and foster sustainable growth worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
