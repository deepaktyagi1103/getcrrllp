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
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Awesome Clients Say About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                  <div className="text-slate-600">{testimonial.role}</div>
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
