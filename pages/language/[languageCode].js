import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import storiesData from '../../models/stories';
import authorsData from '../../models/authors';

// This function gets called at build time to pre-render dynamic routes
export async function getStaticPaths() {
  // Get all language codes from stories data that have stories
  const languageCodes = Object.keys(storiesData).filter(code => storiesData[code].length > 0);
  
  // Get the paths we want to pre-render based on languages
  const paths = languageCodes.map((languageCode) => ({
    params: { languageCode },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time to pre-render dynamic routes
export async function getStaticProps({ params }) {
  const { languageCode } = params;
  
  // Check if language exists and has stories
  if (!storiesData[languageCode] || storiesData[languageCode].length === 0) {
    return {
      notFound: true,
    };
  }
  
  // Get stories for this language only
  const languageStories = storiesData[languageCode] || [];
  
  // Get language name for display
  const languageNames = {
    english: { name: 'English', nativeName: 'English' },
    spanish: { name: 'Spanish', nativeName: 'Español' },
    urdu: { name: 'Urdu', nativeName: 'اُردُو‎' },
    french: { name: 'French', nativeName: 'Français' },
    german: { name: 'German', nativeName: 'Deutsch' },
    italian: { name: 'Italian', nativeName: 'Italiano' },
    portuguese: { name: 'Portuguese', nativeName: 'Português' },
    russian: { name: 'Russian', nativeName: 'Русский' },
    arabic: { name: 'Arabic', nativeName: 'العَرَبِيَّة‎' },
    chinese: { name: 'Chinese', nativeName: '中文' },
    japanese: { name: 'Japanese', nativeName: '日本語' },
    korean: { name: 'Korean', nativeName: '한국어' },
    hindi: { name: 'Hindi', nativeName: 'हिन्दी' },
    finnish: { name: 'Finnish', nativeName: 'Suomi' },
    norwegian: { name: 'Norwegian', nativeName: 'Norsk' },
    czech: { name: 'Czech', nativeName: 'Čeština' },
    hungarian: { name: 'Hungarian', nativeName: 'Magyar' },
    bulgarian: { name: 'Bulgarian', nativeName: 'Български' },
    greek: { name: 'Greek', nativeName: 'Ελληνικά' },
    polish: { name: 'Polish', nativeName: 'Polski' },
    dutch: { name: 'Dutch', nativeName: 'Nederlands' },
    swedish: { name: 'Swedish', nativeName: 'Svenska' },
    danish: { name: 'Danish', nativeName: 'Dansk' },
    turkish: { name: 'Turkish', nativeName: 'Türkçe' },
    vietnamese: { name: 'Vietnamese', nativeName: 'Tiếng Việt' }
  };
  
  const languageInfo = languageNames[languageCode] || { name: languageCode, nativeName: languageCode };

  return {
    props: {
      languageCode,
      languageInfo,
      stories: languageStories,
    },
  };
}

export default function LanguagePage({ languageCode, languageInfo, stories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('resonant');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  
  const storiesPerPage = 12;

  // Apply search
  const filteredStories = stories.filter(story => {
    // Ensure we only show stories in the correct language
    if (story.language !== languageCode) {
      return false;
    }
    
    if (searchTerm && 
        !story.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !(authorsData.find(a => a.id === story.authorId)?.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        !story.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
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
        const authorB = authorsData.find(a => a.id === b.authorId)?.name || '';
        return authorA.localeCompare(authorB);
      default:
        return b.resonance - a.resonance;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const paginatedStories = sortedStories.slice(startIndex, startIndex + storiesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{languageInfo.name} Stories - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content={`Browse ${languageInfo.name} science fiction stories in our comprehensive library. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives in ${languageInfo.nativeName}.`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://nexus.com/language/${languageCode}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nexus.com/language/${languageCode}`} />
        <meta property="og:title" content={`${languageInfo.name} Stories - Nexus | Futuristic Storytelling Platform`} />
        <meta property="og:description" content={`Browse ${languageInfo.name} science fiction stories in our comprehensive library. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives in ${languageInfo.nativeName}.`} />
        <meta property="og:image" content={`https://nexus.com/images/og-${languageCode}.jpg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://nexus.com/language/${languageCode}`} />
        <meta property="twitter:title" content={`${languageInfo.name} Stories - Nexus | Futuristic Storytelling Platform`} />
        <meta property="twitter:description" content={`Browse ${languageInfo.name} science fiction stories in our comprehensive library. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives in ${languageInfo.nativeName}.`} />
        <meta property="twitter:image" content={`https://nexus.com/images/og-${languageCode}.jpg`} />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": `${languageInfo.name} Stories`,
              "description": `Science fiction stories in ${languageInfo.name}`,
              "url": `https://nexus.com/language/${languageCode}`,
              "inLanguage": languageCode,
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://nexus.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Library",
                    "item": "https://nexus.com/library"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": languageInfo.name,
                    "item": `https://nexus.com/language/${languageCode}`
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Language Banner */}
        <section className="mb-12 rounded-2xl overflow-hidden relative bg-gradient-to-r from-blue-900 to-cyan-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {languageInfo.name} Stories
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Explore our collection of stories available in {languageInfo.nativeName}
              </p>
              <div className="mt-6 text-gray-300">
                <span className="bg-black/30 px-4 py-2 rounded-full">
                  {filteredStories.length} Stories
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
            <Link href="/library" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Library
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-200">{languageInfo.name}</span>
          </nav>
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

          {/* Sorting */}
          <div className="flex justify-end">
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

        {/* Results Info */}
        <section className="mb-6 flex justify-between items-center">
          <div className="text-gray-400">
            Showing {startIndex + 1}-{Math.min(startIndex + storiesPerPage, sortedStories.length)} of {sortedStories.length} stories
          </div>
          <div className="text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
        </section>

        {/* Message when no stories are found */}
        {sortedStories.length === 0 ? (
          <section className="text-center py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 max-w-2xl mx-auto">
              <div className="text-5xl mb-4">📚</div>
              <h2 className="text-2xl font-bold mb-4">No Stories Available</h2>
              <p className="text-gray-400 mb-6">
                We don't have any stories in {languageInfo.name} yet. Check back soon as we're constantly adding new content!
              </p>
              <Link href="/library">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-medium transition-all duration-300">
                  Browse Other Languages
                </button>
              </Link>
            </div>
          </section>
        ) : (
          <>
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
                        <div className="h-48 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl mb-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📚</div>
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
                          <button className="w-full py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-blue-500">
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
                        <div className="h-40 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl mb-1">📚</div>
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
                              <button className="px-4 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-blue-500">
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
          </>
        )}

        {/* Back to Library Button */}
        <section className="text-center mb-12">
          <Link href="/library">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">
              ← Back to Library
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