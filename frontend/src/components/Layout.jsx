import { Link, Outlet } from 'react-router-dom';
import { Sparkles, LayoutDashboard, Home } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Sparkles className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">ResumeBoost AI</span>
              </Link>
              <div className="ml-10 flex space-x-8">
                <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <Link to="/improve" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Improve Resume
                </Link>
                <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  <LayoutDashboard className="w-4 h-4 mr-1" />
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ResumeBoost AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
