import Head from 'next/head';
import Link from 'next/link';

export default function Vault() {
  // Vault categories
  const vaultCategories = [
    {
      id: "originals",
      title: "Originals",
      description: "Exclusive commissioned works and celebrity author exclusives",
      icon: "✍️",
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "behind-scenes",
      title: "Behind the Scenes",
      description: "Author notes, drafts, and creation process videos",
      icon: "🎬",
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "collectors-editions",
      title: "Collectors Editions",
      description: "Limited serial numbers and special artwork included",
      icon: "🏅",
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    },
    {
      id: "early-access",
      title: "Early Access",
      description: "Stories before public release and beta features",
      icon: "🚀",
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "physical-goods",
      title: "Physical Goods",
      description: "Connected digital stories and unlockable physical items",
      icon: "📦",
      color: "from-rose-900 to-gray-900",
      accent_color: "rose"
    }
  ];

  // Featured vault items
  const featuredItems = [
    {
      id: 1,
      title: "The Quantum Convergence",
      category: "originals",
      description: "An exclusive novella by Nebula Award winner Dr. Elena Vasquez, never published elsewhere",
      rarity: "Ultra Rare",
      serial: "001/100"
    },
    {
      id: 2,
      title: "Creation of Cyberverse",
      category: "behind-scenes",
      description: "Complete author notes, early drafts, and worldbuilding documents for the Cyberverse saga",
      rarity: "Rare",
      serial: "N/A"
    },
    {
      id: 3,
      title: "Stellar Odyssey Collector's Edition",
      category: "collectors-editions",
      description: "Limited edition with exclusive artwork, author commentary, and digital collectible",
      rarity: "Legendary",
      serial: "042/500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Vault | Nexus - Exclusive Premium Content</title>
        <meta name="description" content="Exclusive, ultra-premium content for top membership tier only" />
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
              Vault
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Exclusive, ultra-premium content
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Highest tier membership only. Limited edition content. Collector's items.
            </p>
          </div>
        </div>
      </section>

      {/* Access Requirement */}
      <section className="py-8 bg-gradient-to-r from-amber-900/50 to-amber-900/20 border-t border-b border-amber-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-300 font-medium">
            ⚠️ Premium Membership Required for Access | Cryptographic Access Control Enabled ⚠️
          </p>
        </div>
      </section>

      {/* Featured Vault Items */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vault Items</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-bold text-amber-300 bg-amber-900/30 rounded">
                      {item.rarity}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">🔢 {item.serial}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/vault/${item.category}/${item.id}`}>
                      <button className="flex-1 py-3 bg-gradient-to-r from-amber-600 to-purple-600 rounded-lg font-bold hover:from-amber-500 hover:to-purple-500 transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                    <button className="px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                      🔒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vault Collections</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our exclusive premium content categories
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {vaultCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <Link href={`/vault/${category.id}`}>
                    <button className={`w-full py-2 bg-gradient-to-r ${category.color} rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                      Enter Vault
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-20 bg-gradient-to-r from-amber-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Membership Benefits</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Unlock exclusive content and special privileges with our top membership tier
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">💎</span> Vault Access
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Exclusive commissioned works from top authors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Behind-the-scenes content and creation process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Limited edition collector's items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Early access to new releases</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl text-left">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🎟️</span> Special Privileges
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Priority access to live events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Direct communication with featured authors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Special recognition in community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span>Access to premium analytics dashboards</span>
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
            <h2 className="text-3xl font-bold mb-6">Unlock the Vault</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Gain access to our most exclusive content and become part of an elite community of storytelling enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-purple-600 rounded-lg font-bold hover:from-amber-500 hover:to-purple-500 transition-all duration-300">
                  Upgrade to Premium
                </button>
              </Link>
              <Link href="/stories">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Browse Public Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}