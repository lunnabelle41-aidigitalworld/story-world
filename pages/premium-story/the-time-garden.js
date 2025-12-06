import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function TheTimeGarden() {
  const [immersiveMode, setImmersiveMode] = useState(false);

  // Toggle immersive mode
  const toggleImmersiveMode = () => {
    setImmersiveMode(!immersiveMode);
    if (!immersiveMode) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white ${immersiveMode ? 'fixed inset-0 z-50' : ''}`}>
      <Head>
        <title>The Time Garden - Nexus Premium Story</title>
        <meta name="description" content="A botanist discovers that certain plants can grow in multiple timelines simultaneously, leading to a lush garden that exists across centuries." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexus.com/premium-story/the-time-garden" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Time Garden - Nexus Premium Story" />
        <meta property="og:description" content="A botanist discovers that certain plants can grow in multiple timelines simultaneously, leading to a lush garden that exists across centuries." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The Time Garden - Nexus Premium Story" />
        <meta property="twitter:description" content="A botanist discovers that certain plants can grow in multiple timelines simultaneously, leading to a lush garden that exists across centuries." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" />
      </Head>

      {/* Immersive Mode Toggle */}
      <button 
        onClick={toggleImmersiveMode}
        className="fixed bottom-8 right-8 z-40 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-medium text-sm hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/30"
      >
        {immersiveMode ? 'Exit Immersive' : 'Enter Immersive'}
      </button>

      {/* Story Header */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/20"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider">
              Premium Story
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Time Garden
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A botanist discovers that certain plants can grow in multiple timelines simultaneously, leading to a lush garden that exists across centuries.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>by Amara Okafor</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>22 min read</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>November 15, 2025</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-cyan-900/50 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
              Temporal Fiction
            </span>
            <span className="bg-purple-900/50 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
              Whimsical
            </span>
            <span className="bg-pink-900/50 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
              Biopunk
            </span>
          </div>
          
          <button 
            onClick={() => document.getElementById('story-content').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center mx-auto group"
          >
            Begin Reading
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Story Content */}
      <main id="story-content" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <p>Dr. Zara Kimanzi knelt among the crystalline petals of the Temporal Lily, her fingers trembling as she recorded its impossible biology. The flower existed in three distinct time periods simultaneously - its roots anchored in the Devonian period, its stem thriving in the present day, and its bloom reaching into the distant future.</p>
              
              <div className="my-12 text-center">
                <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal garden" className="w-full max-w-4xl h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg">The Time Garden in full temporal bloom</p>
                  </div>
                </div>
              </div>
              
              <p>Her discovery had begun three months ago when satellite imagery revealed anomalous growth patterns in the Amazon rainforest - vegetation that appeared to be simultaneously ancient and futuristic. Now, standing in her secret garden hidden deep in the Congo Basin, she was surrounded by botanical impossibilities.</p>
              
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Rainforest" className="w-full h-80 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold">The Living Laboratory</p>
                    <p className="text-gray-300 text-sm">Where time grows wild</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                  <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Botanical research" className="w-full h-80 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold">Temporal Botany</p>
                    <p className="text-gray-300 text-sm">Research in impossible ecosystems</p>
                  </div>
                </div>
              </div>
              
              <p>Around her, the Chrono-Vine wrapped itself around trees from different epochs, its leaves shifting through various stages of evolution as they spiraled upward. Nearby, the Paradox Palm bore fruit that ripened backwards - falling from the ground to hang from its branches before finally disappearing into the soil where they had first sprouted.</p>
              
              <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1516035741802-5f0b393b0ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal plant" className="w-full max-w-4xl h-auto mx-auto" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                  Evolutionary Miracle
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">A plant that transcends linear time</p>
                </div>
              </div>
              
              <p>As Zara documented each specimen, she noticed something extraordinary - the plants were communicating across time periods, sharing genetic information that accelerated their evolution. The garden was not just a collection of temporal anomalies; it was a living library of botanical knowledge spanning millions of years.</p>
              
              <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Temporal Ecosystem</h3>
                <p className="text-lg mb-4">In this impossible garden, the past, present, and future coexisted in perfect harmony. Plants shared wisdom across centuries, creating an evolutionary shortcut that bypassed the slow march of natural selection.</p>
                <p className="text-lg">Zara realized she was witnessing the birth of a new form of life - one that existed outside the constraints of linear time.</p>
              </div>
              
              <p>But her research attracted unwanted attention. Corporate biotech firms wanted to exploit the temporal plants for rapid drug development, while government agencies saw military applications in accelerated materials science. Zara faced a choice - share her discovery with the world and risk its destruction, or protect it forever in secrecy.</p>
              
              <div className="my-12 text-center">
                <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Starlit garden" className="w-full max-w-4xl h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg">The garden under eternal starlight</p>
                  </div>
                </div>
              </div>
              
              <p>In the end, she chose a third path - using her knowledge to teach the plants to hide themselves from human detection. The Time Garden would continue to grow and evolve, but it would do so unseen, preserving its secrets for future generations who might be wise enough to appreciate its wonder without exploiting its power.</p>
            </div>
          </div>
          
          {/* Story Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Resonance</h3>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="text-2xl font-bold">92%</span>
              </div>
              <p className="text-gray-400 mt-2">Reader engagement score</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Length</h3>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-2xl font-bold">22 min</span>
              </div>
              <p className="text-gray-400 mt-2">Estimated reading time</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Published</h3>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-2xl font-bold">2025</span>
              </div>
              <p className="text-gray-400 mt-2">Publication date</p>
            </div>
          </div>
          
          {/* Continue Reading */}
          <div className="text-center">
            <Link href="/premium-stories">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                Explore More Premium Stories
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Immersive Mode Overlay */}
      {immersiveMode && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Immersive Experience Active
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              You are now experiencing the story in immersive mode.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🌌</div>
                <p className="text-cyan-400 font-bold">Story Universe</p>
                <p className="text-gray-400">Expanded</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🌀</div>
                <p className="text-purple-400 font-bold">Narrative Depth</p>
                <p className="text-gray-400">Enhanced</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">👁️</div>
                <p className="text-pink-400 font-bold">Reading Focus</p>
                <p className="text-gray-400">Maximized</p>
              </div>
            </div>
            <button 
              onClick={toggleImmersiveMode}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
            >
              Exit Immersive Mode
            </button>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .prose :where(p):not(:where([class~="not-prose"] *)) {
          color: #e2e8f0;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        
        .prose :where(strong):not(:where([class~="not-prose"] *)) {
          color: #00f5ff;
        }
        
        .prose :where(h3):not(:where([class~="not-prose"] *)) {
          color: #00f5ff;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}