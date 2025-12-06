import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheQuantumGarden() {
  const [isImmersive, setIsImmersive] = useState(false);
  const [showTOC, setShowTOC] = useState(false);

  useEffect(() => {
    // Check if user prefers immersive mode
    const immersivePref = localStorage.getItem('immersiveMode') === 'true';
    setIsImmersive(immersivePref);
  }, []);

  const toggleImmersiveMode = () => {
    const newMode = !isImmersive;
    setIsImmersive(newMode);
    localStorage.setItem('immersiveMode', newMode.toString());
  };

  return (
    <div className={`min-h-screen ${isImmersive ? 'bg-black text-white' : 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'}`}>
      <Head>
        <title>The Quantum Garden - Nexus Premium Story</title>
        <meta name="description" content="A botanist discovers that plants can exist in quantum superposition, leading to gardens that bloom in multiple dimensions simultaneously." />
        <meta property="og:title" content="The Quantum Garden - Nexus Premium Story" />
        <meta property="og:description" content="A botanist discovers that plants can exist in quantum superposition, leading to gardens that bloom in multiple dimensions simultaneously." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://nexus.com/premium-story/the-quantum-garden" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/premium-story/the-quantum-garden" />
        <meta property="twitter:title" content="The Quantum Garden - Nexus Premium Story" />
        <meta property="twitter:description" content="A botanist discovers that plants can exist in quantum superposition, leading to gardens that bloom in multiple dimensions simultaneously." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8 py-4 border-b border-gray-800">
          <Link href="/premium-stories" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Premium Stories
          </Link>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowTOC(!showTOC)}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition-colors"
            >
              {showTOC ? 'Hide Contents' : 'Show Contents'}
            </button>
            
            <button 
              onClick={toggleImmersiveMode}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full text-sm transition-all"
            >
              {isImmersive ? 'Classic Mode' : 'Immersive Mode'}
            </button>
          </div>
        </nav>

        {/* Table of Contents */}
        {showTOC && (
          <div className="mb-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Table of Contents</h3>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-gray-300 hover:text-white transition-colors">Introduction</a></li>
              <li><a href="#discovery" className="text-gray-300 hover:text-white transition-colors">The Discovery</a></li>
              <li><a href="#implications" className="text-gray-300 hover:text-white transition-colors">Staggering Implications</a></li>
              <li><a href="#observer-effect" className="text-gray-300 hover:text-white transition-colors">The Observer Effect</a></li>
              <li><a href="#consciousness-hypothesis" className="text-gray-300 hover:text-white transition-colors">The Consciousness Hypothesis</a></li>
              <li><a href="#conclusion" className="text-gray-300 hover:text-white transition-colors">A New Understanding</a></li>
            </ul>
          </div>
        )}

        {/* Story Header */}
        <header className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-medium">
            Quantum Fiction
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Quantum Garden
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-3">
                AO
              </div>
              <div>
                <p className="font-medium">Dr. Amara Okafor</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              26 min read
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              96% Resonance
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A botanist discovers that plants can exist in quantum superposition, leading to gardens that bloom in multiple dimensions simultaneously.
          </p>
        </header>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="introduction">
            <p className="text-xl mb-8">Dr. Amara Okafor knelt among the crystalline petals of the Quantum Rose, her instruments detecting impossible readings. The flower existed in a state of quantum superposition—simultaneously blooming and not blooming, rooted in multiple soil types, and photosynthesizing light from different suns. Her discovery would revolutionize both botany and quantum physics, revealing that consciousness itself might be the key to collapsing probability waves.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Quantum garden" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The Quantum Garden in full superposition</p>
              </div>
            </div>
          </div>
          
          <div id="discovery">
            <p>Working in her isolated laboratory in the Martian biodome, Dr. Okafor had been experimenting with plants engineered to survive in the red planet's harsh environment. But when she introduced quantum dots into the soil—a technique meant to enhance nutrient absorption—something extraordinary happened. The plants began exhibiting quantum properties, existing in multiple states simultaneously.</p>
          </div>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Research team" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Research Team</p>
                <p className="text-gray-300 text-sm">Analyzing quantum plant behavior</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Quantum visualization" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Quantum Visualization</p>
                <p className="text-gray-300 text-sm">Mapping plant superposition states</p>
              </div>
            </div>
          </div>
          
          <div id="implications">
            <p>The implications were staggering. If plants could exist in superposition, what about animals? Humans? Dr. Okafor's team soon discovered that the quantum plants responded to observation—blooming fully only when consciously observed, reverting to probabilistic states when unwatched. They had stumbled upon a living demonstration of the observer effect, with profound implications for the nature of reality itself.</p>
          </div>
          
          <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Observer effect" className="w-full max-w-4xl h-auto mx-auto" />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
              Conscious Observation
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">The role of consciousness in collapsing probability waves</p>
            </div>
          </div>
          
          <div id="observer-effect">
            <p>As news of the discovery spread, teams from across the solar system arrived to study the Quantum Garden. Philosophers debated whether the plants were truly conscious or simply following quantum mechanical laws. Physicists marveled at the macroscopic demonstration of quantum effects. And botanists wondered if Earth's plants had always exhibited these properties, hidden by the constant observation of countless organisms.</p>
          </div>
          
          <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
            <h3 id="consciousness-hypothesis" className="text-2xl font-bold mb-6 text-cyan-400">The Consciousness Hypothesis</h3>
            <p className="text-lg mb-4">Dr. Okafor proposed a radical theory: consciousness itself was the mechanism by which quantum superpositions collapsed into definite states. The Quantum Garden wasn't just demonstrating quantum effects—it was revealing the fundamental role of awareness in shaping reality.</p>
            <p className="text-lg">If proven correct, her hypothesis would unify physics and philosophy, suggesting that the universe was not just governed by mathematical laws, but was actively shaped by the act of observation.</p>
          </div>
          
          <div id="conclusion">
            <p>In the end, the Quantum Garden became more than a scientific curiosity—it became a symbol of humanity's growing understanding of its place in the cosmos. No longer passive observers of reality, humans had become active participants in the ongoing creation of the universe itself. And in the shimmering petals of the Quantum Rose, they saw reflected the beautiful uncertainty of existence.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Quantum sunset" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">A new understanding of reality blooms</p>
              </div>
            </div>
          </div>
          
          <p>Years later, as Dr. Okafor tended to her expanded Quantum Garden—with plants that existed in dozens of simultaneous states—she realized that her greatest discovery wasn't the plants themselves, but the profound truth they revealed: that consciousness and reality were not separate entities, but two aspects of a single, magnificent whole.</p>
        </article>

        {/* Story Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl font-bold mr-4">
                AO
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Amara Okafor</p>
                <p className="text-gray-400">Quantum Botanist & Reality Theorist</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-medium transition-all">
                Share Story
              </button>
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors">
                Save to Library
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Quantum Fiction</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Wonder</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Hard Science</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Novella</span>
          </div>
        </footer>
      </main>
    </div>
  );
}