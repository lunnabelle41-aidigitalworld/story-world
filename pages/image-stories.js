import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import storiesData from '../models/stories';
import authorsData from '../models/authors';

export default function ImageStories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('resonant');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  
  const storiesPerPage = 12;

  // Get all stories that have image-related content
  // For now, we'll simulate this by selecting stories with "visual" or "image" in their content
  // In a real implementation, you would have actual image data in your stories
  const allStories = Object.values(storiesData).flat();
  
  // Filter stories that mention visuals, images, or scenes (simulating image stories)
  // Also mark them as visual stories
  const imageStories = allStories.filter(story => {
    const contentText = story.content.toLowerCase();
    return contentText.includes('visual') || 
           contentText.includes('scene') || 
           contentText.includes('image') || 
           contentText.includes('picture') || 
           contentText.includes('cover') ||
           story.title.toLowerCase().includes('visual') ||
           story.excerpt.toLowerCase().includes('visual');
  }).map(story => ({
    ...story,
    isVisualStory: true
  }));

  // Add a special Urdu visual story with 4 high-quality images
  const urduVisualStory = {
    id: 99999,
    title: "آئینہ شہر",
    author: "علی احمد",
    authorId: 132,
    excerpt: "مستقبل کے شہر میں ہولوگرامک آئینے انسانیت کی آخری امید بن جاتے ہیں۔ جب تمام ذخائر ختم ہو جاتے ہیں تو صرف ان آئینوں کی مدد سے نئی دنیا کی تعمیر ممکن ہوتی ہے۔",
    genre: "ہولوگرامک فکشن",
    mood: "رازیہ",
    futurismType: "ہولوگرامک تکنالوجی",
    length: "قصہ",
    resonance: 97,
    publishDate: "2025-12-05",
    readTime: "35 منٹ",
    language: "urdu",
    categories: ["holographic", "future-city", "survival"],
    isVisualStory: true,
    content: `
      <p>2089ء کے ستمبر کی سرد صبح، جب آسمان سرخ ہو چکا تھا، فاروق نے آئینہ شہر کے مرکزی ہال میں داخل ہونا تھا۔ اس نے اپنے ہاتھوں میں ہولوگرامک پروجیکٹر کو مضبوطی سے تھامے ہوئے دروازہ کھولا۔</p>
      
      <div class="my-8 text-center">
        <div class="inline-block p-4 bg-gray-800 rounded-xl border border-cyan-500/30">
          <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="آئینہ شہر کا اندرونی ہال" class="rounded-lg h-80 w-full max-w-2xl object-cover">
          <p class="mt-4 text-sm text-gray-400">تصویر 1: آئینہ شہر کا مرکزی ہال جہاں تمام ہولوگرامک تصاویر کا انتظام ہوتا ہے</p>
        </div>
      </div>
      
      <p>"یہ آخری بیچ ہے،" فاروق نے خود کو آہستہ آہستہ کمرے میں دھکیلا۔ "اگر ہم نے آج یہ ہولوگرامک ماحول بنایا تو صرف پھر ہی انسانیت کو نئی دنیا میں نئی زندگی کا موقع مل سکے گا۔"</p>
      
      <div class="my-8 text-center">
        <div class="inline-block p-4 bg-gray-800 rounded-xl border border-purple-500/30">
          <img src="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ہولوگرامک پروجیکٹر" class="rounded-lg h-80 w-full max-w-2xl object-cover">
          <p class="mt-4 text-sm text-gray-400">تصویر 2: فاروق کے ہاتھ میں موجود ہولوگرامک پروجیکٹر جو پوری دنیا کو تبدیل کرنے والا ہے</p>
        </div>
      </div>
      
      <p>ہولوگرامک تصاویر نے کمرے کو ایک جادوئی مقام میں تبدیل کر دیا تھا۔ ہر دیوار پر مختلف مناظر نظر آ رہے تھے - ایک سبز ہر چھاؤں والی دنیا، ایک پانی کے جھیل، اور ایک بلند پہاڑوں والی سرزمین۔</p>
      
      <div class="my-8 text-center">
        <div class="inline-block p-4 bg-gray-800 rounded-xl border border-green-500/30">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ہولوگرامک مناظر" class="rounded-lg h-80 w-full max-w-2xl object-cover">
          <p class="mt-4 text-sm text-gray-400">تصویر 3: ہولوگرامک تصاویر کے ذریعے تخلیق کردہ مختلف قدرتی مناظر</p>
        </div>
      </div>
      
      <p>"اب ہمیں صرف ایک چیز درکار ہے،" فاروق نے کہا، "ایک ایسا مقام جہاں ہم ان ہولوگرامک تصاویر کو حقیقت میں تبدیل کر سکیں۔"</p>
      
      <div class="my-8 text-center">
        <div class="inline-block p-4 bg-gray-800 rounded-xl border border-amber-500/30">
          <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="نیا آغاز" class="rounded-lg h-80 w-full max-w-2xl object-cover">
          <p class="mt-4 text-sm text-gray-400">تصویر 4: آئینہ شہر سے باہر نیا آغاز کرنے کے لیے تیاری</p>
        </div>
      </div>
      
      <p>جب فاروق نے ہولوگرامک پروجیکٹر کو آن کیا تو پورا کمرہ چمک اٹھا۔ ایک نئی دنیا تخلیق ہو رہی تھی - ایک ایسی دنیا جہاں انسانیت کو نئی زندگی کا موقع مل سکے گا۔</p>
    `
  };

  // Add the Urdu story to the beginning of the image stories array
  const allImageStories = [urduVisualStory, ...imageStories];

  // Apply search
  const filteredStories = allImageStories.filter(story => {
    if (searchTerm && 
        !story.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !(authorsData.find(a => a.id === story.authorId)?.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        !story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !story.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Sort stories
  const sortedStories = [...filteredStories].sort((a, b) => {
    // Featured story always comes first
    if (a.id === 99999) return -1;
    if (b.id === 99999) return 1;
    
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
        <title>Image Stories - Nexus | Visual Storytelling Platform</title>
        <meta name="description" content="Explore our collection of visually-enhanced science fiction stories with rich imagery and descriptive scenes." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexus.com/image-stories" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexus.com/image-stories" />
        <meta property="og:title" content="Image Stories - Nexus | Visual Storytelling Platform" />
        <meta property="og:description" content="Explore our collection of visually-enhanced science fiction stories with rich imagery and descriptive scenes." />
        <meta property="og:image" content="https://nexus.com/images/og-image-stories.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/image-stories" />
        <meta property="twitter:title" content="Image Stories - Nexus | Visual Storytelling Platform" />
        <meta property="twitter:description" content="Explore our collection of visually-enhanced science fiction stories with rich imagery and descriptive scenes." />
        <meta property="twitter:image" content="https://nexus.com/images/og-image-stories.jpg" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Image Stories",
              "description": "Visually-enhanced science fiction stories with rich imagery",
              "url": "https://nexus.com/image-stories",
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
                    "name": "Image Stories",
                    "item": "https://nexus.com/image-stories"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="mb-12 rounded-2xl overflow-hidden relative bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Visual Stories
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Explore our collection of stories enhanced with rich imagery and visual descriptions
              </p>
              <div className="mt-6 text-gray-300">
                <span className="bg-black/30 px-4 py-2 rounded-full">
                  {filteredStories.length} Visual Stories
                </span>
              </div>
              <div className="mt-8">
                <Link href="/stories">
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                    Experience Premium Visual Storytelling
                  </button>
                </Link>
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
            <span className="text-gray-200">Image Stories</span>
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
                  placeholder="Search titles, authors, genres..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-purple-600' : 'hover:bg-gray-600'}`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-purple-600' : 'hover:bg-gray-600'}`}
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
                className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              <div className="text-5xl mb-4">🖼️</div>
              <h2 className="text-2xl font-bold mb-4">No Visual Stories Available</h2>
              <p className="text-gray-400 mb-6">
                We don't have any visual stories matching your search yet. Check back soon as we're constantly adding new content!
              </p>
              <Link href="/stories">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-medium transition-all duration-300">
                  Browse All Stories
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
                      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative p-5">
                        <div className="h-48 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iMjAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI4MCUiIGN5PSI3MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjxjaXJjbGUgY3g9IjMwJSIgY3k9IjcwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA3Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDkiLz48L3N2Zz4=')] opacity-20"></div>
                          <div className="text-center relative z-10">
                            <div className="text-4xl mb-2 filter drop-shadow-lg">🖼️</div>
                            <span className="text-xs text-gray-400">Visual Story</span>
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
                          <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.length}</span>
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-500 mb-4">
                          <span>{story.readTime}</span>
                          <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                        </div>
                        
                        <Link href={`/story/${story.id}`}>
                          <button className="w-full py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                            View Story
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
                      className="group flex flex-col md:flex-row bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
                    >
                      <div className="md:w-1/4 p-5">
                        <div className="h-40 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iMjAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI4MCUiIGN5PSI3MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjxjaXJjbGUgY3g9IjMwJSIgY3k9IjcwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA3Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDkiLz48L3N2Zz4=')] opacity-20"></div>
                          <div className="text-center relative z-10">
                            <div className="text-3xl mb-1 filter drop-shadow-lg">🖼️</div>
                            <span className="text-xs text-gray-400">Visual</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 p-5">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors">{story.title}</h3>
                            <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-sm whitespace-nowrap ml-2">
                              {story.resonance}% Resonance
                            </span>
                          </div>
                          
                          <p className="text-purple-400 mb-3">by {author?.name || story.author}</p>
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
                              <button className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                                View Story
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
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
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
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-purple-500/50">
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