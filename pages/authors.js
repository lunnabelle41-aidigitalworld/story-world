import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import authorsData from '../models/authors';

export default function Authors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [genreFilter, setGenreFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');

  // Available genres for filtering
  const allGenres = [...new Set(authorsData.flatMap(author => author.genres))];
  const genres = ['all', ...allGenres];

  // Available languages
  const allLanguages = [...new Set(authorsData.flatMap(author => author.languages))];
  const languages = ['all', ...allLanguages];

  // Filter and sort authors
  const filteredAuthors = authorsData.filter(author => {
    // Apply search term filter
    if (searchTerm && 
        !author.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !author.specialty.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !author.bio.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Apply genre filter
    if (genreFilter !== 'all' && !author.genres.includes(genreFilter)) {
      return false;
    }

    // Apply language filter
    if (languageFilter !== 'all' && !author.languages.includes(languageFilter)) {
      return false;
    }

    return true;
  });

  // Sort authors
  const sortedAuthors = [...filteredAuthors].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.followers - a.followers;
      case 'stories':
        return b.stories - a.stories;
      case 'newest':
        return new Date(b.joinDate) - new Date(a.joinDate);
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      default:
        return b.followers - a.followers;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Authors - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Discover visionary authors shaping the future of storytelling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Visionary Authors
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the storytellers crafting the narratives that define our collective future
          </p>
        </section>

        {/* Controls Bar */}
        <section className="mb-12 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search authors, specialties, bios..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Genre Filter */}
            <div>
              <select
                className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'All Genres' : genre}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Language Filter */}
            <div>
              <select
                className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort Options */}
            <div>
              <select
                className="bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="stories">Most Stories</option>
                <option value="newest">Newest</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <section className="mb-8 flex justify-between items-center">
          <div className="text-gray-400">
            {sortedAuthors.length} author{sortedAuthors.length !== 1 ? 's' : ''} found
          </div>
        </section>

        {/* Authors Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAuthors.map((author) => (
            <div 
              key={author.id} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative p-6">
                <div className="flex items-start mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex-shrink-0 mr-4 flex items-center justify-center">
                    <div className="text-2xl">👤</div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors">{author.name}</h3>
                      {author.verified && (
                        <span className="ml-2 text-blue-400" title="Verified Author">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-purple-400 text-sm mb-2">{author.specialty}</p>
                    <div className="flex text-xs text-gray-500">
                      <span className="mr-3">{author.stories} stories</span>
                      <span>{author.followers.toLocaleString()} followers</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">{author.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {author.genres.slice(0, 3).map((genre, index) => (
                    <span key={index} className="bg-gray-700/50 px-2 py-1 rounded text-xs">
                      {genre}
                    </span>
                  ))}
                  {author.genres.length > 3 && (
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">
                      +{author.genres.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-6">
                  {author.languages.map((lang, index) => (
                    <span key={index} className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-xs capitalize">
                      {lang}
                    </span>
                  ))}
                </div>
                
                <Link href={`/author/${author.id}`}>
                  <button className="w-full py-2.5 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Empty State */}
        {sortedAuthors.length === 0 && (
          <section className="text-center py-16">
            <div className="text-5xl mb-4">👤</div>
            <h3 className="text-2xl font-bold mb-2">No authors found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setGenreFilter('all');
                setLanguageFilter('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
            >
              Clear All Filters
            </button>
          </section>
        )}
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