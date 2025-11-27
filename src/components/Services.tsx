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
    blue: { bg: 'from-blue-500 to-blue-600', icon: 'bg-blue-100 text-blue-600' },
    green: { bg: 'from-green-500 to-green-600', icon: 'bg-green-100 text-green-600' },
    purple: { bg: 'from-violet-500 to-violet-600', icon: 'bg-violet-100 text-violet-600' },
    orange: { bg: 'from-orange-500 to-orange-600', icon: 'bg-orange-100 text-orange-600' },
    red: { bg: 'from-rose-500 to-rose-600', icon: 'bg-rose-100 text-rose-600' },
    teal: { bg: 'from-teal-500 to-teal-600', icon: 'bg-teal-100 text-teal-600' }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            We Believe Everyone Deserves Our Quality Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions for global expansion, education, and business development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color as keyof typeof colorMap];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <span>→</span>
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
