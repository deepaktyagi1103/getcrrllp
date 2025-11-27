import { Building2, Users, Globe, Award } from 'lucide-react';

function Stats() {
  const stats = [
    { icon: Building2, number: "5000+", label: "Business Setup Worldwide", color: "blue" },
    { icon: Users, number: "2530+", label: "Happy Clients", color: "green" },
    { icon: Globe, number: "5+", label: "Total Countries", color: "orange" },
    { icon: Award, number: "50+", label: "Win Awards", color: "purple" }
  ];

  const colorMap = {
    blue:   { bg: 'from-blue-50 to-blue-100', icon: 'bg-blue-600', text: 'text-blue-600' },
    green:  { bg: 'from-green-50 to-green-100', icon: 'bg-green-600', text: 'text-green-600' },
    orange: { bg: 'from-orange-50 to-orange-100', icon: 'bg-orange-600', text: 'text-orange-600' },
    purple: { bg: 'from-violet-50 to-violet-100', icon: 'bg-violet-600', text: 'text-violet-600' }
  };

  return (
    <section
      id="stats"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0A101F] via-[#0F1A2E] to-[#16243A]"
    >

      {/* Soft floating glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/15 blur-[120px] -top-10 -left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/15 blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const clr = colorMap[stat.color];

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-white/20
                rounded-2xl p-10 text-center shadow-xl
                hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-500"
              >
                <div className={`w-20 h-20 ${clr.icon} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon size={34} className="text-white" />
                </div>

                <div className={`text-4xl font-extrabold tracking-tight ${clr.text} mb-2`}>
                  {stat.number}
                </div>

                <p className="text-[12px] text-slate-600 font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Stats;
