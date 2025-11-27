import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0D1B2A] to-[#123456] text-white py-2 text-[12px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex flex-wrap gap-6 opacity-90">
            <span>info@getcrrllp.com</span>
            <span>+91 9650044866</span>
            <span>Sun - Fri (08AM - 10PM)</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="backdrop-blur-xl bg-white/80 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <p className="font-extrabold text-[20px] tracking-tight text-slate-900">GETCRR</p>
              <p className="text-[10px] text-slate-600 -mt-1">Global Expansion & Training</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-sm">

            {["Home", "About", "Services", "Careers", "Courses", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-blue-600 transition-all font-medium"
              >
                {item}
              </a>
            ))}

            <button className="hover:text-blue-600 transition-all">
              <Search size={18}/>
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:shadow-blue-500/40 transition-all">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobile Menu Slide */}
        {isMenuOpen && (
          <div className="lg:hidden px-6 pb-5 pt-2 border-t bg-white/95 backdrop-blur-xl text-sm">
            <div className="flex flex-col gap-3">

              {["Home", "About", "Services", "Careers", "Courses", "Contact"].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-700 hover:text-blue-600 font-medium py-1"
                >
                  {item}
                </a>
              ))}

              <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
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
