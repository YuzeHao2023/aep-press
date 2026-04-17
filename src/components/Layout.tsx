import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Menu, X, ChevronRight, Mail, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Journals', href: '/journals' },
    { name: 'Conferences', href: '/conferences' },
    { name: 'Books', href: '/books' },
    { name: 'Submission', href: '/submission' },
    { name: 'Review', href: '/review' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">AEP Press</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                location.pathname === link.href ? "text-blue-600" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/submission"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
          >
            Submit Paper
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white px-4 py-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-medium py-2",
                    location.pathname === link.href ? "text-blue-600" : "text-slate-600"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              <Link
                to="/submission"
                className="flex items-center justify-center rounded-lg bg-blue-600 py-3 text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Paper
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold text-white">AEP Press</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            A leading global academic publisher dedicated to advancing research and innovation across all scientific disciplines.
          </p>
          <div className="flex gap-4">
            <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <Github className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Publishing</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/journals" className="hover:text-white transition-colors">Journals</Link></li>
            <li><Link to="/conferences" className="hover:text-white transition-colors">Conferences</Link></li>
            <li><Link to="/books" className="hover:text-white transition-colors">Books</Link></li>
            <li><Link to="/open-access" className="hover:text-white transition-colors">Open Access</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/submission" className="hover:text-white transition-colors">Author Guidelines</Link></li>
            <li><Link to="/review" className="hover:text-white transition-colors">Reviewer Guidelines</Link></li>
            <li><Link to="/ethics" className="hover:text-white transition-colors">Publishing Ethics</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">Stay updated with the latest research and news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-slate-800 border-none rounded px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 AEP Press. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-slate-300">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
