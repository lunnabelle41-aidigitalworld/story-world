import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function NeuralArchitects() {
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
        <title>Neural Architects - Nexus Premium Story</title>
        <meta name="description" content="In a future where memories can be constructed and traded, a renegade architect discovers the dark truth behind humanity's collective consciousness." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexus.com/premium-story/neural-architects" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Neural Architects - Nexus Premium Story" />
        <meta property="og:description" content="In a future where memories can be constructed and traded, a renegade architect discovers the dark truth behind humanity's collective consciousness." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Neural Architects - Nexus Premium Story" />
        <meta property="twitter:description" content="In a future where memories can be constructed and traded, a renegade architect discovers the dark truth behind humanity's collective consciousness." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" />
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
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)` }}
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
            Neural Architects
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            In a future where memories can be constructed and traded, a renegade architect discovers the dark truth behind humanity's collective consciousness.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>by Marcus Chen</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>12 min read</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>November 28, 2025</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-cyan-900/50 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
              Neural Sci-Fi
            </span>
            <span className="bg-purple-900/50 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
              Philosophical
            </span>
            <span className="bg-pink-900/50 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
              Cyberpunk
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
              <p>In the neon-lit corridors of Neo-Tokyo, Dr. Akira Sato worked late into the night, crafting memories for clients who could afford the luxury of perfect experiences. As the lead architect at MemForge Industries, he had designed thousands of neural constructs - from childhood fantasies to romantic encounters that never happened.</p>
              
              <div className="my-12 text-center">
                <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1676823104070-48f1c5f4b5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Neural architecture visualization" className="w-full max-w-4xl h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg">Visualization of a neural memory construct</p>
                  </div>
                </div>
              </div>
              
              <p>But when a mysterious client commissioned a memory of a conversation that had never taken place - one that revealed secrets about the company's true purpose - Akira began to question everything he thought he knew about reality.</p>
              
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                  <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Cyberpunk cityscape" className="w-full h-80 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold">Neo-Tokyo Nights</p>
                    <p className="text-gray-300 text-sm">The setting for neural manipulation</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                  <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Neural interface" className="w-full h-80 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold">Neural Interface</p>
                    <p className="text-gray-300 text-sm">Technology for memory construction</p>
                  </div>
                </div>
              </div>
              
              <p>"Memories are the foundation of identity," his mentor had once told him. "To manipulate memories is to reshape the soul itself." Now, as Akira delved deeper into the mystery, he realized that MemForge wasn't just creating memories - they were rewriting the collective consciousness of humanity itself.</p>
              
              <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Collective consciousness" className="w-full max-w-4xl h-auto mx-auto" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                  Collective Mind
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The interconnected neural network of human consciousness</p>
                </div>
              </div>
              
              <p>As he uncovered layer after layer of deception, Akira faced an impossible choice: expose the truth and risk destroying the fabricated happiness of millions, or remain silent and become complicit in the greatest conspiracy in human history.</p>
              
              <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Ethics of Memory</h3>
                <p className="text-lg mb-4">If memories can be perfectly fabricated, what makes an experience real? If happiness can be artificially induced, is it less valuable than earned joy?</p>
                <p className="text-lg">Akira's discovery challenged the very foundations of human identity and free will, forcing him to confront the darkest implications of technological advancement.</p>
              </div>
              
              <p>In the end, he chose to release the truth into the neural network, allowing every person with an implanted memory to know the difference between their authentic experiences and manufactured ones. The consequences were immediate and profound - society fractured as people struggled to distinguish reality from fabrication.</p>
              
              <div className="my-12 text-center">
                <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Dawn breaking over city" className="w-full max-w-4xl h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg">A new dawn of awareness and authenticity</p>
                  </div>
                </div>
              </div>
              
              <p>But from the chaos emerged something unexpected - a new form of human consciousness that embraced both authentic and artificial experiences as equally valid parts of the human condition. Akira had not destroyed humanity's happiness; he had expanded its definition.</p>
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
                <span className="text-2xl font-bold">94%</span>
              </div>
              <p className="text-gray-400 mt-2">Reader engagement score</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Length</h3>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-2xl font-bold">12 min</span>
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
            <Link href="/stories">
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