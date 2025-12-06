import Head from 'next/head';
import Link from 'next/link';

export default function Bridge() {
  // Bridge categories
  const bridgeCategories = [
    {
      id: "impact-projects",
      title: "Impact Projects",
      description: "From story to startup and fiction-inspired inventions",
      icon: "🚀",
      color: "from-green-900 to-gray-900",
      accent_color: "green"
    },
    {
      id: "author-causes",
      title: "Author Causes",
      description: "Author-supported charities and social impact campaigns",
      icon: "❤️",
      color: "from-rose-900 to-gray-900",
      accent_color: "rose"
    },
    {
      id: "real-world-tech",
      title: "Real World Tech",
      description: "Tech inspired by stories and future predictions track record",
      icon: "🔬",
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "education",
      title: "Education",
      description: "Classroom resources and university partnerships",
      icon: "🎓",
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "global-challenges",
      title: "Global Challenges",
      description: "Collaborative world-building for real issues",
      icon: "🌍",
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    }
  ];

  // Featured bridge initiatives
  const featuredInitiatives = [
    {
      id: 1,
      title: "Climate Solutions Challenge",
      category: "global-challenges",
      description: "Community-driven projects addressing climate change inspired by stories",
      impact: "50+ projects funded",
      supporters: 1200
    },
    {
      id: 2,
      title: "Sci-Fi to Startup Incubator",
      category: "impact-projects",
      description: "Transforming fictional concepts into real-world businesses",
      impact: "12 startups launched",
      supporters: 850
    },
    {
      id: 3,
      title: "Future Education Initiative",
      category: "education",
      description: "STEM learning programs based on speculative fiction narratives",
      impact: "25 schools partnered",
      supporters: 2100
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Bridge | Nexus - Stories to Real-World Impact</title>
        <meta name="description" content="Connect stories to real-world impact, fiction to reality, and community projects" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-green-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-cyan-500/30 rounded-lg animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Bridge
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Connect stories to real-world impact
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stories inspire real action. Fiction meets reality. Community projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Initiatives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredInitiatives.map((initiative) => (
              <div 
                key={initiative.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{initiative.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{initiative.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">🌍 {initiative.impact}</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">👥 {initiative.supporters} supporters</span>
                  </div>
                  <Link href={`/bridge/${initiative.category}/${initiative.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg font-bold hover:from-green-500 hover:to-cyan-500 transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Areas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore how stories connect to real-world action
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {bridgeCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <Link href={`/bridge/${category.id}`}>
                    <button className={`w-full py-2 bg-gradient-to-r ${category.color} rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      Connect
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridge Features</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Tools and platforms that connect fiction to real-world impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Project Funding Integration</h3>
                <p className="text-gray-400">
                  Direct funding mechanisms for community-driven projects inspired by stories
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Partnership Portals</h3>
                <p className="text-gray-400">
                  Connection points between authors, organizations, and community leaders
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Impact Tracking</h3>
                <p className="text-gray-400">
                  Measurement tools to track real-world outcomes of fiction-inspired initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Impact Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Examples of how fiction has inspired real-world action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🌱</div>
                <h3 className="text-xl font-bold">From Story to Sustainability Startup</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Inspired by "The Green Cities Protocol" story, entrepreneur Maya Chen founded EcoUrban Solutions, 
                which has since reduced carbon emissions in 15 cities worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">Climate Fiction</span>
                <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-xs">Startup</span>
                <span className="px-2 py-1 bg-amber-900/30 text-amber-300 rounded-full text-xs">Impact</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏥</div>
                <h3 className="text-xl font-bold">Medical Innovation from Sci-Fi</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Researchers at MIT developed a neural interface prototype after reading "The Consciousness Bridge," 
                leading to breakthrough treatments for paralysis patients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded-full text-xs">Hard Sci-Fi</span>
                <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-xs">Medical Tech</span>
                <span className="px-2 py-1 bg-amber-900/30 text-amber-300 rounded-full text-xs">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of the Bridge</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect your favorite stories to real-world action and help build a better future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg font-bold hover:from-green-500 hover:to-cyan-500 transition-all duration-300">
                  Join the Movement
                </button>
              </Link>
              <Link href="/community">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Explore Community
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}