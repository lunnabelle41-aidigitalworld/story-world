import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import storiesData from '../models/stories';
import authorsData from '../models/authors';
import categoriesData from '../models/categories';

export default function Stories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get featured stories for the hero section
  const allStories = Object.values(storiesData).flat();
  const featuredStories = allStories.slice(0, 5);

  // Available languages
  const languages = ['all', 'english', 'spanish', 'french', 'german', 'chinese', 'japanese', 'arabic', 'igbo'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Stories - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Discover futuristic stories in our comprehensive library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            The Nexus Library
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your next immersive journey through our curated collection of futuristic tales
          </p>
        </section>

        {/* Hero Section - Animated Visualization */}
        <section className="mb-16 relative">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Story Universes</h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Navigate through interconnected genres and themes, each offering unique perspectives on humanity's future
            </p>
            
            {/* Animated nodes visualization */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {categoriesData.slice(0, 6).map((category, index) => (
                <div 
                  key={category.id}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                    {category.icon}
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Story Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoriesData.map((category) => (
              <Link 
                key={category.id} 
                href={`/stories/${category.slug}`}
                className="group relative"
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  {/* Category icon header */}
                  <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <div className="text-5xl transform transition-transform duration-500 group-hover:scale-110">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                        {category.name}
                      </h3>
                      <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs whitespace-nowrap">
                        {category.story_count}+ Stories
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore Category</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Curator's Choice Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Curator's Choice
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative p-5">
                    <div className="h-40 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📖</div>
                        <span className="text-xs text-gray-400">Featured Story</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors line-clamp-1">{story.title}</h3>
                      <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                        {story.resonance}% Res
                      </span>
                    </div>
                    
                    <p className="text-purple-400 text-sm mb-2">by {author?.name || story.author}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                    </div>
                    
                    <Link href={`/story/${story.id}`}>
                      <button className="w-full py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                        Read Story
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-lg mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>© 2025 Nexus. Crafting the future of storytelling.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}