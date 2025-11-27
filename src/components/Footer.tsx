import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <div className="font-bold text-xl">GETCRR LLP</div>
                <div className="text-xs text-slate-400">Global Expansion & Training</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              At GETCRR LLP, our vision is to foster a culture of entrepreneurship and build strong synergies with entrepreneurs to co-create wealth and success.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Networking Lounge</a></li>
              <li><a href="#careers" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms Of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Soft Skill</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Entrepreneurship & Employability</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Chicago Open University</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">International Market Entry</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Residency & Citizenship</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold mb-1">Our Address</div>
                <div className="text-slate-400">C-56/22, Second Floor, Sector 62 Noida</div>
              </li>
              <li>
                <div className="font-semibold mb-1">Call Us</div>
                <a href="tel:+919650044866" className="text-slate-400 hover:text-white transition-colors">+91 9650044866</a>
              </li>
              <li>
                <div className="font-semibold mb-1">Mail Us</div>
                <a href="mailto:info@getcrrllp.com" className="text-slate-400 hover:text-white transition-colors">info@getcrrllp.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © Copyright 2025 GETCRR LLP All Rights Reserved | Designed By : Navix Consultancy Services
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
