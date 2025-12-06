import Head from 'next/head';
import Link from 'next/link';

export default function Immersions() {
  // Mock data for immersion categories
  const immersionCategories = [
    {
      id: "audio-dramas",
      title: "Audio Dramas",
      description: "Binaural audio stories and ASMR + storytelling experiences",
      icon: "🎧",
      count: 12,
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "visual-novels",
      title: "Visual Novels",
      description: "Branching narrative stories with beautiful artwork",
      icon: "🎨",
      count: 8,
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "ar-experiences",
      title: "AR Experiences",
      description: "Augmented reality storytelling in your physical space",
      icon: "📱",
      count: 5,
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "ai-narratives",
      title: "AI Narratives",
      description: "Interactive stories co-created with artificial intelligence",
      icon: "🤖",
      count: 7,
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    }
  ];

  // Featured immersions
  const featuredImmersions = [
    {
      id: 1,
      title: "The Mars Transmission",
      category: "audio-dramas",
      description: "A binaural audio drama about the first transmission received from Mars",
      duration: "42 min",
      rating: 4.8
    },
    {
      id: 2,
      title: "Echoes of Europa",
      category: "visual-novels",
      description: "An illustrated interactive mystery set on Jupiter's icy moon",
      duration: "90 min",
      rating: 4.9
    },
    {
      id: 3,
      title: "Your Augmented Life",
      category: "ar-experiences",
      description: "An AR story that unfolds in your own living space",
      duration: "25 min",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Immersions | Nexus - Interactive Story Experiences</title>
        <meta name="description" content="Interactive, multimedia story experiences that go beyond traditional reading" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-purple-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-cyan-500/30 rounded-lg animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Immersions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Interactive, multimedia story experiences
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Go beyond traditional reading with our interactive, multimedia, and game-like storytelling experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Immersions */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Experiences</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredImmersions.map((immersion) => (
              <div 
                key={immersion.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{immersion.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-bold text-purple-300 bg-purple-900/30 rounded">
                      FEATURED
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6">{immersion.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">⭐ {immersion.rating}/5</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">⏱️ {immersion.duration}</span>
                  </div>
                  <Link href={`/immersions/${immersion.category}/${immersion.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
                      Experience Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersion Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our different types of interactive storytelling experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {immersionCategories.map((category) => (
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
                    <span className="text-sm text-gray-500">{category.count} experiences</span>
                    <Link href={`/immersions/${category.id}`}>
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

      {/* Tech Requirements */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cutting-Edge Technology</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our immersive experiences are powered by the latest web technologies for the most engaging storytelling possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-bold mb-2">WebGL</h3>
                <p className="text-sm text-gray-400">3D graphics rendering</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="text-2xl mb-2">🔊</div>
                <h3 className="font-bold mb-2">WebAudio API</h3>
                <p className="text-sm text-gray-400">Spatial audio experiences</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-bold mb-2">AR.js</h3>
                <p className="text-sm text-gray-400">Augmented reality</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-bold mb-2">AI Engines</h3>
                <p className="text-sm text-gray-400">Interactive narratives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Immerse Yourself?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discover storytelling experiences that engage all your senses and put you in control of the narrative.
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
        </div>
      </section>
    </div>
  );
}