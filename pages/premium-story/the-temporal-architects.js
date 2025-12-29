import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheTemporalArchitects() {
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
        <title>The Temporal Architects - Nexus Premium Story</title>
        <meta name="description" content="Builders construct structures that exist across multiple timelines, creating monuments that serve as anchors for reality itself." />
        <meta property="og:title" content="The Temporal Architects - Nexus Premium Story" />
        <meta property="og:description" content="Builders construct structures that exist across multiple timelines, creating monuments that serve as anchors for reality itself." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://nexus.com/premium-story/the-temporal-architects" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/premium-story/the-temporal-architects" />
        <meta property="twitter:title" content="The Temporal Architects - Nexus Premium Story" />
        <meta property="twitter:description" content="Builders construct structures that exist across multiple timelines, creating monuments that serve as anchors for reality itself." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
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
              <li><a href="#project" className="text-gray-300 hover:text-white transition-colors">The Project</a></li>
              <li><a href="#foundation" className="text-gray-300 hover:text-white transition-colors">Temporal Foundation</a></li>
              <li><a href="#storm" className="text-gray-300 hover:text-white transition-colors">Temporal Storms</a></li>
              <li><a href="#architecture" className="text-gray-300 hover:text-white transition-colors">Architecture of Stability</a></li>
              <li><a href="#conclusion" className="text-gray-300 hover:text-white transition-colors">Scaffolding of Existence</a></li>
            </ul>
          </div>
        )}

        {/* Story Header */}
        <header className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-medium">
            Temporal Fiction
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Temporal Architects
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-3">
                EV
              </div>
              <div>
                <p className="font-medium">Dr. Elena Vasquez</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              32 min read
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              98% Resonance
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Builders construct structures that exist across multiple timelines, creating monuments that serve as anchors for reality itself.
          </p>
        </header>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="introduction">
            <p className="text-xl mb-8">Master Architect Yuki Tanaka stood before the Temporal Foundation, a structure that existed simultaneously in the year 2025, 2157, and 3042. The building's quantum anchor points stabilized three distinct timelines, creating a monument that served as both architectural marvel and reality anchor. As humanity's first Temporal Architect, Tanaka had revolutionized construction by designing buildings that transcended linear time.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal architecture" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The Temporal Foundation across multiple timelines</p>
              </div>
            </div>
          </div>
          
          <div id="project">
            <p>The project had begun when Dr. Elena Vasquez, a temporal physicist, discovered that certain materials could maintain structural integrity across divergent timelines. Working with Tanaka, she developed Chronosteel—an alloy that existed in quantum superposition, allowing it to occupy the same spatial coordinates in multiple temporal states simultaneously. The combination of Vasquez's temporal science and Tanaka's architectural vision resulted in buildings that were literally anchored in time.</p>
          </div>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Research team" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Interdisciplinary Team</p>
                <p className="text-gray-300 text-sm">Physics meets architecture</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Chronosteel" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Chronosteel Alloy</p>
                <p className="text-gray-300 text-sm">Material for temporal construction</p>
              </div>
            </div>
          </div>
          
          <div id="foundation">
            <p>The Temporal Foundation served different purposes in each timeline. In 2025, it housed the International Temporal Research Institute, where scientists studied the nature of time itself. In 2157, it functioned as a museum preserving artifacts from humanity's golden age. And in 3042, it became a sanctuary for time refugees—beings displaced by temporal anomalies who needed a stable anchor point to exist.</p>
          </div>
          
          <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Timeline convergence" className="w-full max-w-4xl h-auto mx-auto" />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
              Timeline Convergence
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">Multiple temporal states in a single structure</p>
            </div>
          </div>
          
          <div id="storm">
            <p>But the building's true purpose was revealed when temporal storms—cataclysmic disruptions in the flow of time—began threatening the stability of reality itself. The Temporal Foundation acted as a lighthouse, its quantum anchors stabilizing the tempestuous seas of chronology and preventing the collapse of causality across multiple timelines.</p>
          </div>
          
          <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
            <h3 id="architecture" className="text-2xl font-bold mb-6 text-cyan-400">The Architecture of Stability</h3>
            <p className="text-lg mb-4">Tanaka's design principles for temporal architecture went beyond mere construction—they encompassed the fundamental relationship between space, time, and consciousness:</p>
            <ul className="text-lg list-disc pl-8 space-y-2">
              <li>Structures must have quantum anchor points in at least three stable timelines</li>
              <li>Design elements should resonate across temporal frequencies to maintain coherence</li>
              <li>Buildings must serve complementary functions in each timeline to ensure stability</li>
              <li>Materials must exist in superposition to bridge temporal discontinuities</li>
            </ul>
            <p className="text-lg mt-4">These principles became the foundation of a new architectural discipline—temporal design.</p>
          </div>
          
          <div id="conclusion">
            <p>As more Temporal Architects emerged, humanity began constructing a network of timeline-stabilizing structures. The Temporal Web, as it came to be known, protected reality from the chaos of temporal paradoxes and ensured that cause-and-effect remained intact across the multiverse. Master Architect Tanaka had not just built buildings—he had constructed the scaffolding that held the fabric of existence together.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal web" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The Temporal Web protecting reality</p>
              </div>
            </div>
          </div>
          
          <p>In the end, the Temporal Foundation became more than a building—it became a symbol of humanity's mastery over one of the universe's most fundamental forces. And as Tanaka looked up at his creation, seeing it simultaneously in three different centuries, he realized that architecture was not just about shaping space, but about sculpting time itself.</p>
        </article>

        {/* Story Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-xl font-bold mr-4">
                EV
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Elena Vasquez</p>
                <p className="text-gray-400">Temporal Physicist & Architectural Theorist</p>
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
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Temporal Fiction</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Mind-bending</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Hard Science</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Novella</span>
          </div>
        </footer>
      </main>
    </div>
  );
}