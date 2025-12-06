import Head from 'next/head';
import Link from 'next/link';
import collections from '../models/collections';

export default function Archive() {
  // Featured collection (first in the array)
  const featuredCollection = collections[0];
  
  // Group collections by featured status
  const regularCollections = collections.slice(1);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>The Nexus Archive | Curated Collections of Tomorrow's Visions</title>
        <meta name="description" content="Explore curated collections of futuristic stories organized by themes and concepts in our premium archive." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated floating archive boxes */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-purple-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-cyan-500/30 rounded-lg animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-amber-500/30 rounded-lg animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 right-1/4 w-14 h-14 border border-pink-500/30 rounded-lg animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              The Nexus Archive
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Curated Collections of Tomorrow's Visions
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our museum of futures where stories are grouped by concept, not just genre. 
              Each collection represents a curated journey through a specific theme in speculative fiction.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection of the Month</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-amber-900/30 to-gray-900/50">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-300 bg-amber-900/30 rounded-full mb-4">
                  PREMIUM COLLECTION
                </span>
                <h3 className="text-3xl font-bold mb-4">{featuredCollection.title}</h3>
                <p className="text-gray-300 mb-6">{featuredCollection.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">⭐ {featuredCollection.rating}/5</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">⏱️ {featuredCollection.estimated_read_time}</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">{featuredCollection.story_count} stories</span>
                </div>
                <Link href={`/archive/${featuredCollection.slug}`}>
                  <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-800 rounded-lg font-bold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                    Explore Collection
                  </button>
                </Link>
              </div>
              <div className="md:w-3/5 bg-gradient-to-br from-amber-900/10 to-gray-900/30 p-8 md:p-12 flex items-center">
                <div className="w-full">
                  <h4 className="text-xl font-bold mb-6 text-amber-300">Collection Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-amber-500/20">
                      <h5 className="font-bold mb-2 flex items-center">
                        <span className="mr-2">⏱️</span> Interactive Timeline
                      </h5>
                      <p className="text-gray-400 text-sm">Follow the evolution of AI consciousness across all stories</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-amber-500/20">
                      <h5 className="font-bold mb-2 flex items-center">
                        <span className="mr-2">🔬</span> Expert Commentary
                      </h5>
                      <p className="text-gray-400 text-sm">Insights from leading AI researchers and ethicists</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-amber-500/20">
                      <h5 className="font-bold mb-2 flex items-center">
                        <span className="mr-2">📊</span> Model Comparison
                      </h5>
                      <p className="text-gray-400 text-sm">Compare different AI architectures across stories</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-amber-500/20">
                      <h5 className="font-bold mb-2 flex items-center">
                        <span className="mr-2">📚</span> Extended Universe
                      </h5>
                      <p className="text-gray-400 text-sm">Bonus materials and world-building documents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Collections</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our curated thematic collections, each offering a unique perspective on the future of humanity
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {regularCollections.map((collection) => (
              <div 
                key={collection.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${collection.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{collection.title}</h3>
                    {collection.is_premium && (
                      <span className="inline-block px-2 py-1 text-xs font-bold text-amber-300 bg-amber-900/30 rounded">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{collection.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">⭐ {collection.rating}/5</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">⏱️ {collection.estimated_read_time}</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">{collection.story_count} stories</span>
                  </div>
                  <Link href={`/archive/${collection.slug}`}>
                    <button className={`w-full py-2 bg-gradient-to-r ${collection.color} rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      View Collection
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/archive">
              <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                View All Collections →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover More Futures</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            The Nexus Archive is constantly expanding with new collections and stories. 
            Subscribe to our newsletter to be notified when new collections are added.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/membership">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
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
      </section>
    </div>
  );
}