import Head from 'next/head';
import Link from 'next/link';

export default function Data() {
  // Data categories
  const dataCategories = [
    {
      id: "trends",
      title: "Trends",
      description: "What's rising in sci-fi and genre popularity analysis",
      icon: "📈",
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "author-insights",
      title: "Author Insights",
      description: "Writing habit analytics and performance dashboards",
      icon: "👤",
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "reader-analytics",
      title: "Reader Analytics",
      description: "Personalized insights and reading habit analysis",
      icon: "📖",
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "story-metrics",
      title: "Story Metrics",
      description: "Engagement deep dives and completion rate analysis",
      icon: "📊",
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    },
    {
      id: "future-predictions",
      title: "Future Predictions",
      description: "Story trend forecasting and cultural impact analysis",
      icon: "🔮",
      color: "from-rose-900 to-gray-900",
      accent_color: "rose"
    }
  ];

  // Featured data insights
  const featuredInsights = [
    {
      id: 1,
      title: "What's Rising in Sci-Fi",
      category: "trends",
      description: "This month's fastest-growing subgenres and emerging themes",
      data_points: 12400,
      trend: "↗ 24% increase"
    },
    {
      id: 2,
      title: "Your Reading DNA",
      category: "reader-analytics",
      description: "Personalized analysis of your reading preferences and habits",
      data_points: 87,
      trend: "Updated today"
    },
    {
      id: 3,
      title: "Story Trend Forecasting",
      category: "future-predictions",
      description: "Predictions for the next big trends in speculative fiction",
      data_points: 56,
      trend: "89% accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Data | Nexus - Story Analytics & Insights</title>
        <meta name="description" content="Analytics, insights, and story intelligence for readers and authors" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-cyan-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-purple-500/30 rounded-lg animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Data
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Analytics, insights, and story intelligence
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Not for reading stories, but for understanding stories, trends, and patterns in speculative fiction.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Insights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredInsights.map((insight) => (
              <div 
                key={insight.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{insight.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{insight.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">📊 {insight.data_points} data points</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">{insight.trend}</span>
                  </div>
                  <Link href={`/data/${insight.category}/${insight.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                      View Insights
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Intelligence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our different analytics and insights categories
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {dataCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <Link href={`/data/${category.id}`}>
                    <button className={`w-full py-2 bg-gradient-to-r ${category.color} rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      Explore
                    </button>
                  </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Data Features</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Advanced analytics capabilities for readers and authors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📉</div>
                <h3 className="text-xl font-bold mb-2">Interactive Visualizations</h3>
                <p className="text-gray-400">
                  Dynamic charts and graphs that help you understand reading patterns and story performance
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-2">Predictive Algorithms</h3>
                <p className="text-gray-400">
                  Machine learning models that forecast story trends and reader preferences
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">👤</div>
                <h3 className="text-xl font-bold mb-2">Personalized Dashboards</h3>
                <p className="text-gray-400">
                  Custom analytics views tailored to your reading habits and author goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Data Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Example of the kind of data intelligence available to members
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Genre Popularity Heatmap (Last 30 Days)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Cyberpunk</span>
                  <span className="text-cyan-400">87%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Space Opera</span>
                  <span className="text-purple-400">76%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '76%'}}></div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span>Climate Fiction</span>
                  <span className="text-amber-400">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/membership">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                  Unlock Full Analytics
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Unlock Story Intelligence</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Gain deeper insights into reading patterns, story performance, and future trends with our advanced analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                  Become a Member
                </button>
              </Link>
              <Link href="/stories">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Browse Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}