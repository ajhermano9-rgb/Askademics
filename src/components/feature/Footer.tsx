import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Askademics
            </h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering engineering students through interactive, community-based, and collaborative learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-blue-400 cursor-pointer">Home</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-blue-400 cursor-pointer">Services</Link></li>
              <li><Link to="/membership" className="text-slate-300 hover:text-blue-400 cursor-pointer">Membership</Link></li>
