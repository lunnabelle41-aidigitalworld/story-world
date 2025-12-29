import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheNeuralCartographers() {
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
        <title>The Neural Cartographers - Nexus Premium Story</title>
        <meta name="description" content="Explorers map the landscape of human consciousness, discovering territories of emotion that exist in the space between neurons." />
        <meta property="og:title" content="The Neural Cartographers - Nexus Premium Story" />
        <meta property="og:description" content="Explorers map the landscape of human consciousness, discovering territories of emotion that exist in the space between neurons." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://nexus.com/premium-story/the-neural-cartographers" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/premium-story/the-neural-cartographers" />
        <meta property="twitter:title" content="The Neural Cartographers - Nexus Premium Story" />
        <meta property="twitter:description" content="Explorers map the landscape of human consciousness, discovering territories of emotion that exist in the space between neurons." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8 py-4 border-b border-gray-800">
          <Link href="/stories" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
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
              <li><a href="#expedition" className="text-gray-300 hover:text-white transition-colors">The Expedition</a></li>
              <li><a href="#exploration" className="text-gray-300 hover:text-white transition-colors">Deep Exploration</a></li>
              <li><a href="#discovery" className="text-gray-300 hover:text-white transition-colors">Startling Discovery</a></li>
              <li><a href="#space-between" className="text-gray-300 hover:text-white transition-colors">The Space Between</a></li>
              <li><a href="#conclusion" className="text-gray-300 hover:text-white transition-colors">New Understanding</a></li>
            </ul>
          </div>
        )}

        {/* Story Header */}
        <header className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-medium">
            Neural Sci-Fi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Neural Cartographers
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-3">
                MC
              </div>
              <div>
                <p className="font-medium">Dr. Marcus Chen</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              18 min read
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              92% Resonance
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explorers map the landscape of human consciousness, discovering territories of emotion that exist in the space between neurons.
          </p>
        </header>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="introduction">
            <p className="text-xl mb-8">In the neon-lit depths of Neo-Tokyo, the Neural Cartography Guild had mapped territories that existed nowhere in the physical world. Led by Captain Zara Al-Rashid, a team of explorers navigated the synaptic landscapes of human consciousness, charting emotional continents and psychological oceans that had never been seen by waking eyes.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1676823104070-48f1c5f4b5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Neural cartography" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Mapping the landscape of consciousness</p>
              </div>
            </div>
          </div>
          
          <div id="expedition">
            <p>The expedition began when Dr. Kai Nakamura, a neuroscientist with experimental neural interface technology, volunteered to serve as both explorer and mapmaker. Connected to the Guild's quantum-enhanced navigation system, he would journey into the unmapped territories of his own psyche, guided by the neural compass that translated electrochemical signals into navigational coordinates.</p>
          </div>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Cyberpunk cityscape" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Neo-Tokyo Nights</p>
                <p className="text-gray-300 text-sm">The setting for neural exploration</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Neural interface" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Neural Interface</p>
                <p className="text-gray-300 text-sm">Technology for consciousness exploration</p>
              </div>
            </div>
          </div>
          
          <div id="exploration">
            <p>As Dr. Nakamura's consciousness descended into the neural depths, the team watched his progress on holographic displays that visualized his journey through emotional space. They saw him traverse the Mountain Ranges of Memory, where forgotten experiences lay buried like ancient cities. They tracked his passage through the Ocean of Dreams, where subconscious desires flowed in currents of pure color.</p>
          </div>
          
          <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Emotional landscape" className="w-full max-w-4xl h-auto mx-auto" />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
              Emotional Geography
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">The uncharted territories of human feeling</p>
            </div>
          </div>
          
          <div id="discovery">
            <p>But it was in the Desert of Regret that Dr. Nakamura made his most startling discovery. Amid the shifting sands of missed opportunities and abandoned dreams, he found a crystalline structure that pulsed with unfamiliar energy. As he approached, the Guild's instruments detected patterns that didn't match any known neural activity—something that existed in the spaces between thoughts, in the gaps between synapses.</p>
          </div>
          
          <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
            <h3 id="space-between" className="text-2xl font-bold mb-6 text-cyan-400">The Space Between</h3>
            <p className="text-lg mb-4">The discovery challenged everything the Guild knew about consciousness. If awareness could exist in the spaces between neural activity, then the mind was far more expansive than previously imagined—less a network of connections and more a field of potential that extended beyond the physical boundaries of the brain.</p>
            <p className="text-lg">Captain Al-Rashid realized they had stumbled upon evidence of a distributed consciousness that connected all human minds through the quantum vacuum that separated individual neurons.</p>
          </div>
          
          <div id="conclusion">
            <p>As Dr. Nakamura explored the crystalline structure, he experienced something unprecedented—a merging of his individual consciousness with the collective awareness of humanity. He saw the hopes and fears of billions of people, felt the shared dreams that connected cultures across the globe, and understood the profound loneliness that drove human beings to seek connection.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Collective consciousness" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The unity of human experience</p>
              </div>
            </div>
          </div>
          
          <p>When he finally surfaced from the neural depths, Dr. Nakamura brought back more than maps—he brought a new understanding of what it meant to be human. The Neural Cartography Guild had not just charted the landscape of consciousness; they had discovered that every human mind was a node in a vast network of shared awareness, forever connected by the spaces between thoughts.</p>
        </article>

        {/* Story Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl font-bold mr-4">
                MC
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Marcus Chen</p>
                <p className="text-gray-400">Neural Scientist & Consciousness Explorer</p>
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
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Neural Sci-Fi</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Mysterious</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Cyberpunk</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Short Story</span>
          </div>
        </footer>
      </main>
    </div>
  );
}