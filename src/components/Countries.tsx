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
    <section
      id="countries"
      className="py-20 bg-gradient-to-br from-white via-[#E9F7FF] to-[#EBFFF4] relative overflow-hidden"
    >

      {/* Background aura for 3D feel */}
      <div className="absolute w-[450px] h-[450px] bg-blue-200/20 blur-3xl rounded-full top-0 -left-10"></div>
      <div className="absolute w-[380px] h-[380px] bg-green-200/20 blur-3xl rounded-full bottom-5 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
            Business Setups We Offer
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-4">
            Explore Countries We Serve
          </h2>

          <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Global presence across 5+ nations with strong market expertise.
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-blue-100
              shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Flag */}
                <div className="absolute top-4 right-4 text-5xl drop-shadow-lg">
                  {country.flag}
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">{country.name}</h3>
                  <p className="text-xs opacity-90 mb-4 leading-relaxed">
                    {country.description}
                  </p>

                  <button className="inline-flex items-center gap-2 bg-white/90 text-slate-900 px-5 py-2.5 text-xs rounded-lg font-medium
                    hover:bg-blue-600 hover:text-white transition-all">
                    Contact Now <ArrowRight size={16}/>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Global Business & Residency Experts</h3>

          <p className="text-xs opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            25+ years of experience | Residency, Visa, Company Formation, International Setup
            with legal guidance, documentation & end-to-end execution support.
          </p>

          <button className="bg-white text-blue-700 text-sm px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Countries;
