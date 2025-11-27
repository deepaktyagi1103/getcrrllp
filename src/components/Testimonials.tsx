import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStartup India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      content: "GETCRR helped us expand to the US market seamlessly. Their expertise in business setup and visa consulting is unmatched. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
      content: "The team at GETCRR made my Canadian PR process smooth and stress-free. Their attention to detail and professional guidance was exceptional.",
      rating: 5
    },
    {
      name: "Mohammed Al-Hassan",
      role: "Business Owner, Dubai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      content: "Setting up my business in Dubai was effortless with GETCRR's support. They handled everything from licensing to documentation perfectly.",
      rating: 5
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-white via-[#E9F7FF] to-[#EBFFF4] relative overflow-hidden"
    >

      {/* Glow aura background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300/15 blur-[120px] -top-10 -left-5"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-200/15 blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">

        <div className="text-center mb-16">
          <span className="px-6 py-2 text-xs tracking-wide bg-blue-100 text-blue-700 font-semibold rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 text-slate-900">
            What Our Clients Say About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl transition-all 
              hover:-translate-y-[6px] hover:shadow-2xl duration-500"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400"/>
                ))}
              </div>

              <p className="text-sm text-slate-700 italic leading-relaxed mb-8">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-[11px] text-slate-600 tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
