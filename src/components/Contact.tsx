import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white via-[#E9F7FF] to-[#EBFFF4] relative overflow-hidden"
    >

      {/* Soft Floating Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-blue-200/20 blur-3xl rounded-full top-0 -left-10"></div>
      <div className="absolute w-[380px] h-[380px] bg-green-200/20 blur-3xl rounded-full bottom-5 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs tracking-wider font-semibold">
            Get In Touch
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-slate-900">
            Let's Start a Conversation
          </h2>

          <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Ready to expand globally? Our team is here to empower your next step.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CONTACT DETAILS & CTA */}
          <div>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transition-all duration-500">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-blue-600"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Our Address</p>
                    <p className="text-xs text-slate-600">C-56/22, Second Floor, Sector 62 Noida</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-green-600"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Call Us</p>
                    <p className="text-xs text-slate-600">+91 9650044866</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-purple-600"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email Us</p>
                    <p className="text-xs text-slate-600">info@getcrrllp.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-amber-600"/>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Working Hours</p>
                    <p className="text-xs text-slate-600">Sun - Fri (08AM - 10PM)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* BLUE CTA CARD */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mt-8 p-8 text-white shadow-xl hover:scale-[1.01] hover:shadow-2xl transition-all">
              <h3 className="text-lg font-semibold mb-3">Ready to Go Global?</h3>
              <p className="text-xs opacity-90 leading-relaxed mb-6">
                Entrepreneurs, Investors, Institutions — scale beyond borders with GETCRR.
              </p>
              <button className="bg-white text-blue-700 text-sm px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* RIGHT FORM – GLASS + 3D */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transition-all duration-500">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a Message</h3>

            <form className="space-y-5 text-sm">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-700 font-medium text-xs">First Name</label>
                  <input className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs"/>
                </div>

                <div>
                  <label className="text-slate-700 font-medium text-xs">Last Name</label>
                  <input className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs"/>
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-medium text-xs">Email</label>
                <input type="email" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs"/>
              </div>

              <div>
                <label className="text-slate-700 font-medium text-xs">Phone</label>
                <input type="tel" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs"/>
              </div>

              <div>
                <label className="text-slate-700 font-medium text-xs">Service Interested In</label>
                <select className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs">
                  <option>Select a service</option>
                  <option>Business Setup</option>
                  <option>Residency & Citizenship</option>
                  <option>Education Programs</option>
                  <option>Market Entry Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 font-medium text-xs">Message</label>
                <textarea rows={4} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-xs"/>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
                Send Message <Send size={18}/>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
