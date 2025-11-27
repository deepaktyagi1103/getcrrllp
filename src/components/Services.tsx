import { GraduationCap, Briefcase, Building2, Globe, Users, TrendingUp } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Soft Skill Training",
      description: "Certified online classes, vocational training, and development under the Soft Skill initiative.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurship & Employability",
      description: "Learn essential entrepreneurial and job-ready skills to excel in the global economy.",
      color: "green",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80"
    },
    {
      icon: Building2,
      title: "Chicago Open University",
      description: "Flexible and recognized international education programs through Chicago Open University.",
      color: "purple",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80"
    },
    {
      icon: Globe,
      title: "International Market Entry",
      description: "Strategic support and consulting for entering and growing in international markets.",
      color: "orange",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80"
    },
    {
      icon: Users,
      title: "Residency & Citizenship",
      description: "Unlock global mobility with investment-based residency and citizenship programs.",
      color: "red",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
    },
    {
      icon: Briefcase,
      title: "Business Setup Services",
      description: "Complete business setup solutions across USA, Canada, UK, UAE, Europe, and India.",
      color: "teal",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    }
  ];

  const colorMap = {
    blue: { bg: 'from-blue-500/80 to-blue-600/90', icon: 'bg-blue-100 text-blue-600' },
    green: { bg: 'from-green-500/80 to-green-600/90', icon: 'bg-green-100 text-green-600' },
    purple: { bg: 'from-violet-500/80 to-violet-600/90', icon: 'bg-violet-100 text-violet-600' },
    orange: { bg: 'from-orange-500/80 to-orange-600/90', icon: 'bg-orange-100 text-orange-600' },
    red: { bg: 'from-rose-500/80 to-rose-600/90', icon: 'bg-rose-100 text-rose-600' },
    teal: { bg: 'from-teal-500/80 to-teal-600/90', icon: 'bg-teal-100 text-teal-600' }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white via-[#E9F7FF] to-[#EBFFF4] relative overflow-hidden"
    >

      {/* Soft background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-200/20 blur-[120px] -top-14 -left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-200/20 blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900">
            We Deliver Excellence With Global Standards
          </h2>

          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Comprehensive solutions in International Expansion, Education, Business Growth & Residency
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];

            return (
              <div
                key={index}
                className="group rounded-2xl bg-white/80 border border-slate-200 backdrop-blur-lg shadow-lg
                hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-500 overflow-hidden"
              >
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center
                    shadow-lg group-hover:scale-110 transition-all`}>
                      <Icon size={30}/>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                  <button className="text-blue-600 text-xs font-semibold flex items-center gap-2
                  group-hover:gap-3 transition-all">
                    Learn More → 
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
