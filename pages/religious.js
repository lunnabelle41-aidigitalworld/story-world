import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ReligiousStories() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Religious categories data
  const religions = [
    {
      id: "islam",
      slug: "islam",
      name: "Islamic Stories",
      description: "Inspiring tales from Islamic tradition, including stories of prophets, companions, and spiritual wisdom.",
      icon: "☪️",
      storyCount: 24,
      color: "from-green-900 to-gray-900",
      accentColor: "green"
    },
    {
      id: "christianity",
      slug: "christianity",
      name: "Christian Stories",
      description: "Heartwarming narratives from Christian tradition, featuring parables, saints, and faith journeys.",
      icon: "✝️",
      storyCount: 18,
      color: "from-blue-900 to-gray-900",
      accentColor: "blue"
    },
    {
      id: "hinduism",
      slug: "hinduism",
      name: "Hindu Stories",
      description: "Ancient wisdom and divine tales from Hindu mythology, including epics and spiritual teachings.",
      icon: "🕉️",
      storyCount: 22,
      color: "from-orange-900 to-gray-900",
      accentColor: "orange"
    },
    {
      id: "buddhism",
      slug: "buddhism",
      name: "Buddhist Stories",
      description: "Enlightening stories of compassion, mindfulness, and the path to awakening.",
      icon: "☸️",
      storyCount: 15,
      color: "from-yellow-900 to-gray-900",
      accentColor: "yellow"
    },
    {
      id: "judaism",
      slug: "judaism",
      name: "Jewish Stories",
      description: "Rich traditions and timeless tales from Jewish heritage and sacred texts.",
      icon: "✡️",
      storyCount: 17,
      color: "from-indigo-900 to-gray-900",
      accentColor: "indigo"
    },
    {
      id: "sikhism",
      slug: "sikhism",
      name: "Sikh Stories",
      description: "Stories of courage, devotion, and spiritual enlightenment from Sikh tradition.",
      icon: "☬",
      storyCount: 12,
      color: "from-amber-900 to-gray-900",
      accentColor: "amber"
    }
  ];

  // Filter religions based on search term
  const filteredReligions = religions.filter(religion => 
    religion.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    religion.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Religious Stories - Nexus | Spiritual Narratives</title>
        <meta name="description" content="Explore inspiring religious stories from various faith traditions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Sacred Narratives
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover inspiring stories from the world's great religious traditions that illuminate the human spirit and offer timeless wisdom.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search religions or themes..."
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg shadow-lg"
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
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">6</div>
                <div className="text-gray-400">Religions</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">108+</div>
                <div className="text-gray-400">Sacred Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400">42</div>
                <div className="text-gray-400">Authors</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">18</div>
                <div className="text-gray-400">Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Religions Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Explore by Faith Tradition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReligions.map((religion) => (
              <Link key={religion.id} href={`/religious/${religion.slug}`}>
                <div 
                  className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 h-full`}
                >
                  {/* Religion icon header */}
                  <div className={`h-32 bg-gradient-to-br ${religion.color} flex items-center justify-center`}>
                    <div className="text-5xl transform transition-transform duration-500 group-hover:scale-110">
                      {religion.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">
                        {religion.name}
                      </h3>
                      <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs whitespace-nowrap">
                        {religion.storyCount}+ Stories
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6">
                      {religion.description}
                    </p>
                    
                    <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
                      <span className="text-sm font-medium">Explore Collection</span>
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

        {/* Featured Stories Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Featured Sacred Tales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured stories - in a real implementation, this would fetch actual stories */}
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative p-5">
                  <div className="h-40 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📜</div>
                      <span className="text-xs text-gray-400">Sacred Story</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors line-clamp-1">The Light of Divine Wisdom</h3>
                    <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                      96% Resonance
                    </span>
                  </div>
                  
                  <p className="text-purple-400 text-sm mb-2">by Spiritual Author</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">An inspiring tale of faith, perseverance, and the transformative power of divine love that transcends all boundaries.</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">Spiritual</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">Inspirational</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">Short</span>
                  </div>
                  
                  <button className="w-full py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                    Read Sacred Tale
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/stories">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                View All Sacred Stories
              </button>
            </Link>
          </div>
        </section>

        {/* Spiritual Reflection Section */}
        <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
              Reflection & Contemplation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take time to reflect on these sacred narratives and discover how their timeless wisdom can enrich your spiritual journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">🧘</div>
              <h3 className="text-xl font-bold mb-2">Daily Reflections</h3>
              <p className="text-gray-400 mb-4">
                Guided meditations and contemplative exercises to deepen your understanding of sacred stories.
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-cyan-600">
                Begin Reflection
              </button>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-teal-400 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-xl font-bold mb-2">Study Guides</h3>
              <p className="text-gray-400 mb-4">
                Educational resources and discussion questions to explore the deeper meanings of spiritual narratives.
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-teal-600">
                Access Guides
              </button>
            </div>
            
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 group transform hover:-translate-y-1">
              <div className="text-3xl mb-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-xl font-bold mb-2">Community Sharing</h3>
              <p className="text-gray-400 mb-4">
                Share your insights and connect with others on similar spiritual journeys through our community forums.
              </p>
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-amber-600">
                Join Community
              </button>
            </div>
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