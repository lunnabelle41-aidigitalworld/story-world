import Head from 'next/head';
import Link from 'next/link';

export default function Laboratory() {
  // Lab sections
  const labSections = [
    {
      id: "experiments",
      title: "Experiments",
      description: "Ongoing experimental storytelling projects and prototypes",
      icon: "🔬",
      count: 15,
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "tools",
      title: "Tools",
      description: "Creative tools for authors in beta testing",
      icon: "🛠️",
      count: 8,
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "research",
      title: "Research",
      description: "Academic papers and insights on storytelling & neuroscience",
      icon: "📚",
      count: 12,
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "playground",
      title: "Playground",
      description: "Sandbox for testing new formats and user-submitted experiments",
      icon: "🎪",
      count: 22,
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    }
  ];

  // Featured experiments
  const featuredExperiments = [
    {
      id: 1,
      title: "Dynamic Story Engine",
      section: "experiments",
      description: "AI that adapts narrative based on your mood and reading patterns",
      status: "Active",
      participants: 1240
    },
    {
      id: 2,
      title: "Neuro-Responsive Narratives",
      section: "experiments",
      description: "Stories that change based on biometric input from wearable devices",
      status: "Beta",
      participants: 387
    },
    {
      id: 3,
      title: "Worldbuilding Generator",
      section: "tools",
      description: "AI-powered tool for creating consistent fictional worlds",
      status: "Public Beta",
      participants: 2156
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Laboratory | Nexus - Experimental Storytelling</title>
        <meta name="description" content="Experimental storytelling formats, tools, and research" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated circuit board background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-cyan-500/20"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Laboratory
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Experimental storytelling formats & tools
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Where we invent new storytelling methods, experiment with community-driven innovations, and develop cutting-edge author tools.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Experiments */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Experiments</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredExperiments.map((experiment) => (
              <div 
                key={experiment.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{experiment.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-bold text-cyan-300 bg-cyan-900/30 rounded">
                      {experiment.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6">{experiment.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">👥 {experiment.participants} participants</span>
                  </div>
                  <Link href={`/lab/${experiment.section}/${experiment.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                      Join Experiment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lab Divisions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our different experimental areas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labSections.map((section) => (
              <div 
                key={section.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{section.count} projects</span>
                    <Link href={`/lab/${section.id}`}>
                      <button className={`px-4 py-2 bg-gradient-to-r ${section.color} rounded-lg font-medium text-sm hover:opacity-90 transition-opacity`}>
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

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lab Features</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Cutting-edge capabilities that power our experimental storytelling
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
                <p className="text-gray-400">
                  Work together with other authors and readers in real-time on storytelling projects
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
                <p className="text-gray-400">
                  Analyze reader engagement and story effectiveness with advanced visualization tools
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-2">Experimental Interfaces</h3>
                <p className="text-gray-400">
                  Test new user interface paradigms for next-generation storytelling experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Innovation</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Become part of our experimental community and help shape the future of storytelling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                  Become a Member
                </button>
              </Link>
              <Link href="/community">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Join Community
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}