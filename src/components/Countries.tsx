import { ArrowRight } from 'lucide-react';

function Countries() {
  const countries = [
    {
      name: "India",
      description: "Set up in one of the world's fastest-growing economies with booming MSME potential.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
      flag: "🇮🇳"
    },
    {
      name: "United States",
      description: "Launch your business in the world's largest economy with investor visa options.",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80",
      flag: "🇺🇸"
    },
    {
      name: "Canada",
      description: "Start your business in a stable, welcoming environment with strong global ties.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
      flag: "🇨🇦"
    },
    {
      name: "United Kingdom",
      description: "Expand your enterprise in a global financial hub with favorable policies.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
      flag: "🇬🇧"
    },
    {
      name: "Europe",
      description: "Access the EU single market with attractive tax regimes and business-friendly environments.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
      flag: "🇪🇺"
    },
    {
      name: "Dubai",
      description: "Enjoy 100% foreign ownership and zero tax benefits in the UAE's business hub.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
      flag: "🇦🇪"
    }
  ];

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Business Setups We Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Explore the Countries We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Global presence across 5+ countries with expert local knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                <div className="absolute top-4 right-4 text-5xl">
                  {country.flag}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                  <p className="text-slate-200 mb-4 leading-relaxed">
                    {country.description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                    Contact Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">We Are Experts in Residency & Global Business Setup</h3>
          <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
            With over 25 years of experience, GETCRR specializes in international visa consultancy, global residency and citizenship programs, and complete business setup services. Our personalized advisory ensures your success with accurate legal guidance, end-to-end documentation support, and strategic planning tailored to your goals.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Countries;
