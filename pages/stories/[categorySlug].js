import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import storiesData from '../../models/stories';
import authorsData from '../../models/authors';
import categoriesData from '../../models/categories';

// This function gets called at build time to pre-render dynamic routes
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on categories
  const paths = categoriesData.map((category) => ({
    params: { categorySlug: category.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time to pre-render dynamic routes
export async function getStaticProps({ params }) {
  // Find the category by slug
  const category = categoriesData.find(cat => cat.slug === params.categorySlug);
  
  if (!category) {
    return {
      notFound: true,
    };
  }

  // Get all stories and filter by category
  const allStories = Object.values(storiesData).flat();
  
  // Filter stories by category - if story has categories array, check if it includes this category
  // Otherwise, include all stories for backward compatibility
  const categoryStories = allStories.filter(story => 
    !story.categories || story.categories.length === 0 || story.categories.includes(category.slug)
  );
  
  return {
    props: {
      category,
      stories: categoryStories,
      allStories: categoryStories.slice(0, 15), // For featured stories carousel
    },
  };
}

export default function CategoryPage({ category, stories, allStories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('resonant');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  
  const storiesPerPage = 12;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Available filters
  const filterOptions = [
    { id: 'length', name: 'Length', options: ['Flash (<1k)', 'Short (1-5k)', 'Novelette (5-15k)', 'Serial (15k+)'] },
    { id: 'timePeriod', name: 'Time Period', options: ['Near Future', 'Far Future', 'Alternate Present'] },
    { id: 'mood', name: 'Mood', options: ['Dark', 'Suspenseful', 'Philosophical', 'Action-Packed'] },
  ];

  // Toggle filter selection
  const toggleFilter = (categoryId, value) => {
    const filterId = `${categoryId}:${value}`;
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(f => f !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  // Check if filter is active
  const isFilterActive = (categoryId, value) => {
    return activeFilters.includes(`${categoryId}:${value}`);
  };

  // Apply filters and search
  const filteredStories = stories.filter(story => {
    // Apply search term filter
    if (searchTerm && 
        !story.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !authorsData.find(a => a.id === story.authorId)?.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !story.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Apply active filters
    for (const filter of activeFilters) {
      const [categoryId, value] = filter.split(':');
      switch (categoryId) {
        case 'length':
          // Simplified length filter logic
          break;
        case 'timePeriod':
          // Simplified time period filter logic
          break;
        case 'mood':
          if (story.mood.toLowerCase() !== value.toLowerCase()) return false;
          break;
      }
    }

    return true;
  });

  // Sort stories
  const sortedStories = [...filteredStories].sort((a, b) => {
    switch (sortBy) {
      case 'resonant':
        return b.resonance - a.resonance;
      case 'newest':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        const authorA = authorsData.find(a => a.id === a.authorId)?.name || '';
        const authorB = authorsData.find(b => b.id === b.authorId)?.name || '';
        return authorA.localeCompare(authorB);
      default:
        return b.resonance - a.resonance;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const paginatedStories = sortedStories.slice(startIndex, startIndex + storiesPerPage);

  // Get featured stories for carousel
  const featuredStories = allStories.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{category.name} - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content={category.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Category Banner */}
        <section className={`mb-12 rounded-2xl overflow-hidden relative ${category.color ? `bg-gradient-to-r ${category.color}` : 'bg-gray-800'}`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {category.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {category.description}
              </p>
              <div className="mt-6 text-gray-300">
                <span className="bg-black/30 px-4 py-2 rounded-full">
                  {category.story_count} Stories
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="mb-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/stories" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Stories
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-200">{category.name}</span>
          </nav>
        </section>

        {/* Featured Stories Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Featured Stories
            </span>
            <span className="ml-3 text-gray-500 text-base">Most Resonant in {category.name}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative p-5">
                    <div className="h-32 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-1">📖</div>
                        <span className="text-xs text-gray-400">Featured Story</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold group-hover:text-cyan-300 transition-colors line-clamp-1">{story.title}</h3>
                      <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                        {story.resonance}% Res
                      </span>
                    </div>
                    
                    <p className="text-cyan-400 text-sm mb-2">by {author?.name || story.author}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                    
                    <Link href={`/story/${story.id}`}>
                      <button className="w-full py-2 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500">
                        Read Story
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Controls Bar */}
        <section className="mb-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search titles, authors, keywords..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex bg-gray-700/50 rounded-xl p-1">
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-600' : 'hover:bg-gray-600'}`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-600' : 'hover:bg-gray-600'}`}
                onClick={() => setViewMode('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {activeFilters.length > 0 && (
                <>
                  <span className="text-gray-400 self-center">Active filters:</span>
                  {activeFilters.map((filter, index) => {
                    const [categoryId, value] = filter.split(':');
                    return (
                      <span 
                        key={index} 
                        className="flex items-center bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm"
                      >
                        {value}
                        <button 
                          onClick={() => toggleFilter(categoryId, value)}
                          className="ml-2 text-cyan-200 hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                  <button 
                    onClick={() => setActiveFilters([])}
                    className="text-gray-400 hover:text-gray-200 text-sm self-center"
                  >
                    Clear all
                  </button>
                </>
              )}
              {activeFilters.length === 0 && (
                <span className="text-gray-500 self-center">No active filters</span>
              )}
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center">
              <span className="mr-3 text-gray-400">Sort by:</span>
              <select
                className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="resonant">Most Resonant</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </div>
          </div>
        </section>

        {/* Category-Specific Filters */}
        <section className="mb-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold mb-4 text-cyan-300">Filter by Category Attributes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterOptions.map((categoryFilter) => (
              <div key={categoryFilter.id}>
                <h4 className="font-bold mb-3 text-gray-300">{categoryFilter.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {categoryFilter.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleFilter(categoryFilter.id, option)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        isFilterActive(categoryFilter.id, option)
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results Info */}
        <section className="mb-6 flex justify-between items-center">
          <div className="text-gray-400">
            Showing {startIndex + 1}-{Math.min(startIndex + storiesPerPage, sortedStories.length)} of {sortedStories.length} stories
          </div>
          <div className="text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
        </section>

        {/* Stories Grid/List */}
        {viewMode === 'grid' ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {paginatedStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative p-5">
                    <div className="h-48 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📖</div>
                        <span className="text-xs text-gray-400">Story Cover</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold group-hover:text-cyan-300 transition-colors line-clamp-1">{story.title}</h3>
                      <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                        {story.resonance}% Res
                      </span>
                    </div>
                    
                    <p className="text-cyan-400 text-sm mb-2">by {author?.name || story.author}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.length}</span>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500 mb-4">
                      <span>{story.readTime}</span>
                      <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                    </div>
                    
                    <Link href={`/story/${story.id}`}>
                      <button className="w-full py-2 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500">
                        Read Story
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          /* List View */
          <section className="space-y-4 mb-12">
            {paginatedStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group flex flex-col md:flex-row bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="md:w-1/4 p-5">
                    <div className="h-40 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-1">📖</div>
                        <span className="text-xs text-gray-400">Cover</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-5">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">{story.title}</h3>
                        <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded text-sm whitespace-nowrap ml-2">
                          {story.resonance}% Resonance
                        </span>
                      </div>
                      
                      <p className="text-cyan-400 mb-3">by {author?.name || story.author}</p>
                      <p className="text-gray-400 mb-4 flex-grow">{story.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.length}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          <span className="mr-4">{story.readTime}</span>
                          <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                        </div>
                        <Link href={`/story/${story.id}`}>
                          <button className="px-4 py-2 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500">
                            Read Story
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="mb-12">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                // Show first, last, current, and nearby pages
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                
                // Show ellipsis for gaps
                if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                  return (
                    <span key={pageNum} className="px-2 py-2 text-gray-500">
                      ...
                    </span>
                  );
                }
                
                return null;
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Back to Categories Button */}
        <section className="text-center mb-12">
          <Link href="/stories">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">
              ← Back to All Categories
            </button>
          </Link>
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