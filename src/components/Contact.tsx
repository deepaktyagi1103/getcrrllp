import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to expand globally? Our team is here to help you succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Our Address</div>
                    <div className="text-slate-600">C-56/22, Second Floor, Sector 62 Noida</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Call Us</div>
                    <div className="text-slate-600">+91 9650044866</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Email Us</div>
                    <div className="text-slate-600">info@getcrrllp.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Working Hours</div>
                    <div className="text-slate-600">Sun - Fri (08AM - 10PM)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Go Global?</h3>
              <p className="mb-6 leading-relaxed">
                Whether you're an aspiring entrepreneur, a growing business, or an institution aiming to expand — GETCRR is your bridge to global opportunity.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option>Select a service</option>
                  <option>Business Setup</option>
                  <option>Residency & Citizenship</option>
                  <option>Education Programs</option>
                  <option>Market Entry Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
