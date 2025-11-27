import { Building2, Users, Globe, Award } from 'lucide-react';

function Stats() {
  const stats = [
    {
      icon: Building2,
      number: "5000+",
      label: "Business Setup Worldwide",
      color: "blue"
    },
    {
      icon: Users,
      number: "2530+",
      label: "Happy Clients",
      color: "green"
    },
    {
      icon: Globe,
      number: "5+",
      label: "Total Countries",
      color: "orange"
    },
    {
      icon: Award,
      number: "50+",
      label: "Win Awards",
      color: "purple"
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', icon: 'bg-blue-600', text: 'text-blue-600' },
    green: { bg: 'bg-green-50', icon: 'bg-green-600', text: 'text-green-600' },
    orange: { bg: 'bg-orange-50', icon: 'bg-orange-600', text: 'text-orange-600' },
    purple: { bg: 'bg-violet-50', icon: 'bg-violet-600', text: 'text-violet-600' }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color as keyof typeof colorMap];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className={`w-20 h-20 ${colors.icon} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="text-white" size={36} />
                </div>
                <div className={`text-5xl font-bold ${colors.text} mb-3`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
