import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8040019263366199"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@700&display=swap"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
      />
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 cursor-pointer">
                Nexus
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/stories" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Stories
              </Link>
              <Link href="/library" className="text-gray-300 hover:text-blue-400 transition-colors">
                Library
              </Link>
              <Link href="/image-stories" className="text-gray-300 hover:text-purple-400 transition-colors">
                Visual Stories
              </Link>
              <Link href="/religious" className="text-gray-300 hover:text-amber-400 transition-colors">
                Religious
              </Link>
              <Link href="/authors" className="text-gray-300 hover:text-purple-400 transition-colors">
                Authors
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-green-400 transition-colors">
                Community
              </Link>
              <Link href="/membership" className="text-gray-300 hover:text-orange-400 transition-colors">
                Membership
              </Link>
            </div>
            
            {/* Mobile Navigation - Always visible links for requested items */}
            <div className="md:hidden flex items-center space-x-4">
              <Link href="/" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link href="/stories" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">
                Stories
              </Link>
              <Link href="/library" className="text-sm text-gray-300 hover:text-blue-400 transition-colors whitespace-nowrap">
                Library
              </Link>
              
              <button 
                className="ml-2 text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full text-sm font-medium transition-all duration-300">
                Sign Up
              </button>
            </div>
            
            {/* Full Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 py-4 z-50">
                <div className="container mx-auto px-4 flex flex-col space-y-4">
                  <Link 
                    href="/image-stories" 
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Visual Stories
                  </Link>
                  <Link 
                    href="/religious" 
                    className="text-gray-300 hover:text-amber-400 transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Religious
                  </Link>
                  <Link 
                    href="/authors" 
                    className="text-gray-300 hover:text-purple-400 transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Authors
                  </Link>
                  <Link 
                    href="/community" 
                    className="text-gray-300 hover:text-green-400 transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Community
                  </Link>
                  <Link 
                    href="/membership" 
                    className="text-gray-300 hover:text-orange-400 transition-colors py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Membership
                  </Link>
                  <button className="text-left text-gray-300 hover:text-white transition-colors py-2 block w-full text-left">
                    Login
                  </button>
                  <button className="text-left px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded w-full text-left">
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      <Component {...pageProps} />
      
      {/* Professional Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 cursor-pointer">
                  Nexus
                </span>
              </Link>
              <p className="text-gray-400 mt-4 mb-6 max-w-xs">
                The world's premier platform for futuristic storytelling, connecting visionary authors with readers who dare to imagine beyond.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/stories" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Browse Stories
                  </Link>
                </li>
                <li>
                  <Link href="/image-stories" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Visual Stories
                  </Link>
                </li>
                <li>
                  <Link href="/religious" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Religious Stories
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Global Library
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Featured Authors
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Community Hub
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Membership Plans
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    About Nexus
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/submit" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Submit Your Story
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Partner Program
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@nexus-stories.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cyan-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h4 className="text-md font-semibold text-white mb-4">Newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-4 py-2 rounded-r-lg font-medium transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                {new Date().getFullYear()} Nexus Storytelling Platform. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </>
  );
}

export default MyApp;