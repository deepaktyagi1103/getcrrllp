import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-[#0D0F13] text-white overflow-hidden">

      {/* Soft glowing background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] -top-10 -left-10"></div>
      <div className="absolute w-[350px] h-[350px] bg-green-400/10 blur-[120px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30">
                <span className="font-bold text-xl">G</span>
              </div>
              <div>
                <p className="font-bold text-[18px] tracking-wide">GETCRR LLP</p>
                <p className="text-[10px] text-slate-400 -mt-1">Global Expansion & Training</p>
              </div>
            </div>

            <p className="text-slate-400 text-[12px] leading-relaxed mb-6">
              Empowering entrepreneurship globally with structured advisory, business setup, and worldwide residency solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" 
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 transition-all shadow hover:shadow-blue-500/50"
                >
                  <Icon size={17}/>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 1 */}
          <div>
            <p className="font-semibold mb-5 text-sm">Company</p>
            <ul className="space-y-2 text-[12px]">
              <li><a href="#about" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Networking Lounge</a></li>
              <li><a href="#careers" className="text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Terms Of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <p className="font-semibold mb-5 text-sm">Quick Links</p>
            <ul className="space-y-2 text-[12px]">
              <li><a href="#" className="text-slate-400 hover:text-white">Soft Skill</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Entrepreneurship & Employability</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Chicago Open University</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">International Market Entry</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Residency & Citizenship</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <p className="font-semibold mb-5 text-sm">Get In Touch</p>
            <ul className="space-y-4 text-[12px]">
              <li>
                <p className="font-semibold text-white">Address</p>
                <p className="text-slate-400">C-56/22, Second Floor, Sector 62 Noida</p>
              </li>
              <li>
                <p className="font-semibold text-white">Call</p>
                <a href="tel:+919650044866" className="text-slate-300 hover:text-white">
                  +91 9650044866
                </a>
              </li>
              <li>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:info@getcrrllp.com" className="text-slate-300 hover:text-white">
                  info@getcrrllp.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 text-center">
          <p className="text-slate-400 text-[11px] tracking-wide">
            © 2025 GETCRR LLP • All Rights Reserved | Designed By Navix Consultancy Services
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
