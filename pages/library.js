import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import storiesData from '../models/stories';
import authorsData from '../models/authors';

export default function Library() {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  // Get languages that actually have stories
  const availableLanguages = Object.keys(storiesData).filter(lang => storiesData[lang].length > 0);

  // Language data with story counts for available languages
  const languages = [
    { code: 'english', name: 'English', nativeName: 'English', stories: storiesData.english ? storiesData.english.length : 0 },
    { code: 'italian', name: 'Italian', nativeName: 'Italiano', stories: storiesData.italian ? storiesData.italian.length : 0 },
    { code: 'spanish', name: 'Spanish', nativeName: 'Español', stories: storiesData.spanish ? storiesData.spanish.length : 0 },
    { code: 'french', name: 'French', nativeName: 'Français', stories: storiesData.french ? storiesData.french.length : 0 },
    { code: 'german', name: 'German', nativeName: 'Deutsch', stories: storiesData.german ? storiesData.german.length : 0 },
    { code: 'urdu', name: 'Urdu', nativeName: 'اردو', stories: storiesData.urdu ? storiesData.urdu.length : 0 },
    { code: 'hindi', name: 'Hindi', nativeName: 'हिंदी', stories: storiesData.hindi ? storiesData.hindi.length : 0 },
    { code: 'portuguese', name: 'Portuguese', nativeName: 'Português', stories: storiesData.portuguese ? storiesData.portuguese.length : 0 },
    { code: 'russian', name: 'Russian', nativeName: 'Русский', stories: storiesData.russian ? storiesData.russian.length : 0 },
    { code: 'japanese', name: 'Japanese', nativeName: '日本語', stories: storiesData.japanese ? storiesData.japanese.length : 0 },
    { code: 'korean', name: 'Korean', nativeName: '한국어', stories: storiesData.korean ? storiesData.korean.length : 0 },
    { code: 'arabic', name: 'Arabic', nativeName: 'العربية', stories: storiesData.arabic ? storiesData.arabic.length : 0 },
    { code: 'chinese', name: 'Chinese', nativeName: '中文', stories: storiesData.chinese ? storiesData.chinese.length : 0 },
    { code: 'turkish', name: 'Turkish', nativeName: 'Türkçe', stories: storiesData.turkish ? storiesData.turkish.length : 0 },
    { code: 'polish', name: 'Polish', nativeName: 'Polski', stories: storiesData.polish ? storiesData.polish.length : 0 },
    { code: 'dutch', name: 'Dutch', nativeName: 'Nederlands', stories: storiesData.dutch ? storiesData.dutch.length : 0 },
    { code: 'swedish', name: 'Swedish', nativeName: 'Svenska', stories: storiesData.swedish ? storiesData.swedish.length : 0 },
    { code: 'danish', name: 'Danish', nativeName: 'Dansk', stories: storiesData.danish ? storiesData.danish.length : 0 },
    { code: 'finnish', name: 'Finnish', nativeName: 'Suomi', stories: storiesData.finnish ? storiesData.finnish.length : 0 },
    { code: 'norwegian', name: 'Norwegian', nativeName: 'Norsk', stories: storiesData.norwegian ? storiesData.norwegian.length : 0 },
    { code: 'czech', name: 'Czech', nativeName: 'Čeština', stories: storiesData.czech ? storiesData.czech.length : 0 },
    { code: 'hungarian', name: 'Hungarian', nativeName: 'Magyar', stories: storiesData.hungarian ? storiesData.hungarian.length : 0 },
    { code: 'bulgarian', name: 'Bulgarian', nativeName: 'Български', stories: storiesData.bulgarian ? storiesData.bulgarian.length : 0 },
    { code: 'greek', name: 'Greek', nativeName: 'Ελληνικά', stories: storiesData.greek ? storiesData.greek.length : 0 },
    { code: 'vietnamese', name: 'Vietnamese', nativeName: 'Tiếng Việt', stories: storiesData.vietnamese ? storiesData.vietnamese.length : 0 }
  ].filter(lang => availableLanguages.includes(lang.code));

  // Filter languages based on search
  const [searchTerm, setSearchTerm] = useState('');
  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Head>
        <title>Library - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Browse our comprehensive library of science fiction stories in 50+ languages. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexus.com/library" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexus.com/library" />
        <meta property="og:title" content="Library - Nexus | Futuristic Storytelling Platform" />
        <meta property="og:description" content="Browse our comprehensive library of science fiction stories in 50+ languages. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <meta property="og:image" content="https://nexus.com/images/og-library.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/library" />
        <meta property="twitter:title" content="Library - Nexus | Futuristic Storytelling Platform" />
        <meta property="twitter:description" content="Browse our comprehensive library of science fiction stories in 50+ languages. Discover quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <meta property="twitter:image" content="https://nexus.com/images/og-library.jpg" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Global Story Library",
              "description": "Comprehensive library of science fiction stories in multiple languages",
              "url": "https://nexus.com/library",
              "collectionSize": availableLanguages.length,
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
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Futuristic grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 15px 15px, rgba(100, 200, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Global Story Library
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Explore our collection of stories available in multiple languages from around the world
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search languages..."
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg shadow-lg shadow-cyan-500/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-6 top-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">{availableLanguages.length}</div>
                <div className="text-gray-400">Languages</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">{Object.values(storiesData).reduce((total, langStories) => total + langStories.length, 0)}</div>
                <div className="text-gray-400">Total Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">500+</div>
                <div className="text-gray-400">Authors</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">120+</div>
                <div className="text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Language Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredLanguages.map((language) => (
              <Link key={language.code} href={`/language/${language.code}`}>
                <div 
                  className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:-translate-y-1 relative overflow-hidden ${
                    selectedLanguage === language.code 
                      ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-cyan-500 shadow-lg shadow-cyan-500/20' 
                      : 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-cyan-500'
                  }`}
                  onClick={() => setSelectedLanguage(language.code)}
                >
                  {/* Animated background for selected item */}
                  {selectedLanguage === language.code && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                      {language.name}
                    </h3>
                    {selectedLanguage === language.code && (
                      <span className="text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4 text-sm relative z-10">
                    {language.nativeName}
                  </p>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-cyan-400 font-medium">
                      {language.stories} {language.stories === 1 ? 'story' : 'stories'}
                    </span>
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-medium transition-all duration-300 group-hover:bg-cyan-600">
                      Browse
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Selected Language Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {languages.find(lang => lang.code === selectedLanguage)?.name} Stories
              </h2>
              <p className="text-gray-400">
                {languages.find(lang => lang.code === selectedLanguage)?.nativeName}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 text-cyan-300 px-4 py-2 rounded-full">
                {storiesData[selectedLanguage]?.length || 0} Stories
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Actual stories for the selected language */}
            {(storiesData[selectedLanguage] || []).slice(0, 6).map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="h-40 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSIxMCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iOTAlIiBjeT0iMTAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjkwJSIgY3k9IjkwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSI5MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                    <div className="text-4xl relative z-10">📚</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {story.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 text-sm">{author?.name || story.author}</span>
                    <Link href={`/story/${story.id}`}>
                      <button className="px-3 py-1 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-xs font-medium transition-all duration-300 hover:from-cyan-500 hover:to-blue-500">
                        Read
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link href={`/language/${selectedLanguage}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                View All {languages.find(lang => lang.code === selectedLanguage)?.name} Stories
              </button>
            </Link>
          </div>
        </section>

        {/* Language Learning Section */}
        <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Language Learning Resources
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enhance your reading experience with our language learning tools and cultural context guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300">📖</div>
              <h3 className="text-xl font-bold mb-2">Vocabulary Builder</h3>
              <p className="text-gray-400 mb-4">
                Interactive glossaries and pronunciation guides for challenging terms
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-green-600">
                Explore
              </button>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-teal-400 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-xl font-bold mb-2">Cultural Context</h3>
              <p className="text-gray-400 mb-4">
                Background information on cultural references and idioms
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-teal-600">
                Learn More
              </button>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">🗣️</div>
              <h3 className="text-xl font-bold mb-2">Pronunciation Guide</h3>
              <p className="text-gray-400 mb-4">
                Audio resources to help with proper pronunciation of names and terms
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-cyan-600">
                Listen
              </button>
            </div>
          </div>
        </section>

        {/* Visual Stories Section */}
        <section className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Visual Storytelling
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of stories enhanced with rich imagery and visual descriptions
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/image-stories">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                View Image Stories
              </button>
            </Link>
          </div>
        </section>

        {/* Premium Membership CTA */}
        <section className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Unlock Premium Language Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get access to exclusive translations, audio narrations, and cultural insights with our premium membership
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/membership">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                Upgrade to Premium
              </button>
            </Link>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}