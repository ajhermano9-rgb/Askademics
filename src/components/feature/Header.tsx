import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/membership', label: 'Membership' },
    { path: '/about', label: 'About & Contact' }
  ];
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400" style={{ fontFamily: '"Pacifico", serif' }}>
              Askademics
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://discord.gg/kDYFKkRszp" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Join Now</Button>
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-center pt-4 border-t border-slate-200 dark:border-slate-700">
                <a href="https://discord.gg/kDYFKkRszp" target="_blank" rel="noopener noreferrer">
                  <Button size="sm">Join Now</Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
            }
