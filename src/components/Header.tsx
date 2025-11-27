import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span>info@getcrrllp.com</span>
            <span>+91 9650044866</span>
            <span>Sun - Fri (08AM - 10PM)</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <div className="font-bold text-xl text-slate-900">GETCRR</div>
              <div className="text-xs text-slate-600">Global Expansion & Training</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
            <div className="relative group">
              <button className="text-slate-700 hover:text-blue-600 transition-colors">Services</button>
            </div>
            <a href="#careers" className="text-slate-700 hover:text-blue-600 transition-colors">Careers</a>
            <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors">Courses</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
            <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
              <Search size={20} />
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Let's Talk
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-slate-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600">Services</a>
              <a href="#careers" className="text-slate-700 hover:text-blue-600">Careers</a>
              <a href="#courses" className="text-slate-700 hover:text-blue-600">Courses</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
