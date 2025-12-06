import Head from 'next/head';
import Link from 'next/link';

export default function Collections() {
  // Collection categories
  const collectionCategories = [
    {
      id: "award-winners",
      title: "Award Winners",
      description: "Annual award compilations and nominated works",
      icon: "🏆",
      count: 24,
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "author-spotlights",
      title: "Author Spotlights",
      description: "Career retrospectives and complete works collections",
      icon: "👤",
      count: 18,
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "thematic-series",
      title: "Thematic Series",
      description: "Curated collections around specific themes",
      icon: "📚",
      count: 32,
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "multimedia-editions",
      title: "Multimedia Editions",
      description: "Enhanced story packages with audio, visuals, and more",
      icon: "🎥",
      count: 15,
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    },
    {
      id: "learning-paths",
      title: "Learning Paths",
      description: "Educational collections for writers and readers",
      icon: "🎓",
      count: 12,
      color: "from-rose-900 to-gray-900",
      accent_color: "rose"
    }
  ];

  // Featured collections
  const featuredCollections = [
    {
      id: 1,
      title: "Nexus Awards 2024",
      category: "award-winners",
      description: "All winning stories from this year's Nexus Awards",
      stories: 15,
      rating: 4.9
    },
    {
      id: 2,
      title: "The Complete Ada Kuro Collection",
      category: "author-spotlights",
      description: "Every story by the acclaimed author Ada Kuro in one collection",
      stories: 22,
      rating: 4.8
    },
    {
      id: 3,
      title: "Climate Futures Anthology",
      category: "thematic-series",
      description: "20 stories exploring different climate change scenarios",
      stories: 20,
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Collections | Nexus - Curated Story Packages</title>
        <meta name="description" content="Curated, thematic story packages with mixed media" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-amber-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-purple-500/30 rounded-lg animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Collections
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Curated, thematic story packages
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specific, curated themes with mixed media, going beyond broad genre categories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCollections.map((collection) => (
              <div 
                key={collection.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{collection.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-bold text-amber-300 bg-amber-900/30 rounded">
                      FEATURED
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6">{collection.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">📚 {collection.stories} stories</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">⭐ {collection.rating}/5</span>
                  </div>
                  <Link href={`/collections/${collection.category}/${collection.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-purple-600 rounded-lg font-bold hover:from-amber-500 hover:to-purple-500 transition-all duration-300">
                      View Collection
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Collection Types</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our different curated collection categories
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {collectionCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{category.count} collections</span>
                    <Link href={`/collections/${category.id}`}>
                      <button className={`px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg font-medium text-sm hover:opacity-90 transition-opacity`}>
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization */}
      <section className="py-20 bg-gradient-to-r from-amber-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Collections</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Exclusive content and special editions available for purchase or subscription
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">💰</span> Individual Purchases
                </h3>
                <p className="text-gray-400 mb-4">
                  Buy premium collections individually with exclusive content, special artwork, and enhanced editions.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    One-time purchase pricing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Digital collectibles included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Author commentary and notes
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🔄</span> Subscription Access
                </h3>
                <p className="text-gray-400 mb-4">
                  Get unlimited access to all collections with our premium subscription service.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    New collections added monthly
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Exclusive early access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Member-only collections
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Discover Curated Excellence</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our carefully curated collections that bring together the best of speculative fiction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-purple-600 rounded-lg font-bold hover:from-amber-500 hover:to-purple-500 transition-all duration-300">
                  Become a Member
                </button>
              </Link>
              <Link href="/stories">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Browse All Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}