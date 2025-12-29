import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheMemoryMerchants() {
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
        <title>The Memory Merchants - Nexus Premium Story</title>
        <meta name="description" content="In a world where memories can be bought and sold, a black market dealer discovers a memory that shouldn't exist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${isImmersive ? 'max-w-4xl mx-auto px-4 py-8' : 'container mx-auto px-4 py-8'}`}>
        {/* Navigation */}
        {!isImmersive && (
          <nav className="flex items-center justify-between mb-12 py-6 border-b border-gray-800">
            <Link href="/stories" className="flex items-center group">
              <svg className="w-6 h-6 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span className="group-hover:text-cyan-300 transition-colors">Back to Premium Stories</span>
            </Link>
            
            <button 
              onClick={toggleImmersiveMode}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path>
              </svg>
              {isImmersive ? 'Classic Mode' : 'Immersive Mode'}
            </button>
          </nav>
        )}

        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-black/30">
              Neural Sci-Fi
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Memory Merchants
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-4">
                ZA
              </div>
              <div>
                <p className="font-bold">Zara Al-Rashid</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>88% Resonance</span>
            </div>
            
            <div className="bg-black/30 px-4 py-2 rounded-full">
              <span>16 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In a world where memories can be bought and sold, a black market dealer discovers a memory that shouldn't exist.
          </p>
        </header>

        {/* Table of Contents */}
        {!isImmersive && (
          <div className="mb-16 p-6 rounded-2xl bg-gray-800/50 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Table of Contents</h2>
              <button 
                onClick={() => setShowTOC(!showTOC)}
                className="text-cyan-400 hover:text-cyan-300"
              >
                {showTOC ? 'Hide' : 'Show'}
              </button>
            </div>
            
            {showTOC && (
              <ul className="space-y-2">
                <li><a href="#chapter1" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 1: The Underground Trade</a></li>
                <li><a href="#chapter2" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 2: An Unusual Client</a></li>
                <li><a href="#chapter3" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 3: The Impossible Memory</a></li>
                <li><a href="#chapter4" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 4: A Cruel Joke</a></li>
                <li><a href="#chapter5" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 5: Final Act of Compassion</a></li>
              </ul>
            )}
          </div>
        )}

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="chapter1" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 1: The Underground Trade</h2>
            
            <p className="text-lg mb-8">Jax operated from the shadows of Neo-Shanghai's underground, dealing in the most precious commodity of the 22nd century—memories. In the neon-soaked alleys beneath the corporate towers, he sold experiences that the wealthy couldn't acquire any other way: first loves, career triumphs, the birth of children, even the final moments of the terminally ill who sold their last memories for medical expenses.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Cyberpunk cityscape" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">Neo-Shanghai's towering corporate districts</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-8">The trade was illegal, of course. The Memory Protection Act of 2157 had made it a capital offense to traffic in authentic human experiences. But for those with the right connections and enough neuro-credits, Jax's services were worth the risk. His reputation was pristine—he never sold corrupted memories, never dealt in experiences obtained through coercion, and never asked questions about his clients' motivations.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Memory extraction" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Memory Extraction</p>
                  <p className="text-gray-300 text-sm">The delicate process of harvesting experiences</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Black market transaction" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Underground Deal</p>
                  <p className="text-gray-300 text-sm">A clandestine memory exchange</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="chapter2" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 2: An Unusual Client</h2>
            
            <p className="text-lg mb-8">Everything changed the night Maya Chen walked into his shop. She wasn't like his usual clientele—no designer implants, no obvious wealth, just nervous energy and haunted eyes. She wanted a specific memory: the experience of being loved unconditionally. Simple enough, except that Jax's supplier had been dead for three months, and the corporate memory vaults had been audited recently.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1676823104070-48f1c5f4b5dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Memory storage" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Forbidden Knowledge
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The hidden archive of stolen memories</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">He told her he'd need a week to acquire what she wanted. But when he accessed his private cache of memories—the ones too rare or dangerous for the legitimate market—he found something that made his blood run cold. Among the standard experiences, there was a memory labeled only with a date: December 21, 2025. Three weeks in the future.</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Impossible Memory</h3>
              <p className="text-lg mb-4">Memories from the future violated everything Jax understood about the nature of consciousness and time. Either someone had found a way to send experiences backward through time, or the memory was a sophisticated forgery designed to trap him.</p>
              <p className="text-lg">As he examined the data packet more closely, he realized it wasn't just any future memory—it was his own death, witnessed from the perspective of whoever had recorded it.</p>
            </div>
          </div>
          
          <div id="chapter3" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 3: The Trap</h2>
            
            <p className="text-lg mb-8">The memory showed him standing in this very shop, reaching for a vial of memories on the highest shelf. As his fingers closed around it, the shelf mechanism triggered, and a blade hidden in the wood sliced through his carotid artery. He would have exactly thirty-seven seconds to live, long enough to realize he'd been marked for death but not long enough to identify his killer.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-500/30">
                <h4 className="font-bold text-lg mb-3 text-purple-300">The Mechanism</h4>
                <p className="text-gray-300">The shelf was rigged with a pressure-sensitive trigger that would release a spring-loaded blade when a specific weight was applied.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl border border-cyan-500/30">
                <h4 className="font-bold text-lg mb-3 text-cyan-300">The Timeline</h4>
                <p className="text-gray-300">The memory showed events that would occur on December 21, 2025—three weeks after Jax discovered it in October 2025.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl border border-pink-500/30">
                <h4 className="font-bold text-lg mb-3 text-pink-300">The Witness</h4>
                <p className="text-gray-300">The memory was recorded from the perspective of someone standing behind him, suggesting an accomplice.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Jax spent sleepless nights analyzing the memory, trying to understand how it was possible. He consulted with hacker contacts, black market technologists, and even reached out to fringe physicists who studied temporal anomalies. The consensus was unanimous: memories from the future were theoretically impossible under known laws of physics.</p>
          </div>
          
          <div id="chapter4" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 4: A Cruel Joke</h2>
            
            <p className="text-lg mb-8">The memory showed him standing in this very shop, reaching for a vial of memories on the highest shelf. As his fingers closed around it, the shelf mechanism triggered, and a blade hidden in the wood sliced through his carotid artery. He would have exactly thirty-seven seconds to live, long enough to realize he'd been marked for death but not long enough to identify his killer.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Trapped alleyway" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The alley where futures are bought and sold</p>
                </div>
              </div>
            </div>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Paradox and Predestination</h3>
              <p className="text-lg mb-4">Jax realized he was trapped in a temporal paradox. The memory existed because he would experience the event, but he would experience the event because the memory existed. Trying to avoid his fate might be what ensured it came to pass.</p>
              <p className="text-lg">He spent the next three weeks preparing. He redesigned his shop, moved the shelves, installed security systems, and hired bodyguards. But on December 21st, he found himself drawn back to the old configuration, compelled by some force he couldn't name.</p>
            </div>
            
            <p className="text-lg mb-8">As he reached for the vial that contained his death, he understood the cruel joke—he couldn't escape a future he remembered experiencing. The very act of trying to avoid his fate was what ensured it came to pass. The memory wasn't a warning; it was a trap encoded with the inevitability of its own fulfillment.</p>
          </div>
          
          <div id="chapter5" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 5: Final Act of Compassion</h2>
            
            <p className="text-lg mb-8">Jax spent the next three weeks preparing. He redesigned his shop, moved the shelves, installed security systems, and hired bodyguards. But on December 21st, he found himself drawn back to the old configuration, compelled by some force he couldn't name. As he reached for the vial that contained his death, he understood the cruel joke—he couldn't escape a future he remembered experiencing.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Final moment" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Inevitable End
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The moment of predestined death</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">In selling Maya the memory of unconditional love, he had sealed his own fate. The experience she purchased was his own final act of compassion, a gift from a man who knew he was dying to a woman who needed to know that love still existed in the world.</p>
            
            <div className="my-12 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 max-w-3xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Epilogue</h3>
                <p className="text-lg">Maya Chen would carry Jax's final act of kindness with her always—a memory of being loved unconditionally, purchased with the life of a man who understood that some gifts are worth dying to give. The memory merchant's shop closed permanently the day after his death, but his legacy lived on in every person who received the gift of someone else's authentic experience.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">In the end, Jax realized that his death was not a punishment but a completion—a final transaction that gave meaning to his entire existence. He had spent his life dealing in memories, and his own death would become the most precious memory he ever sold.</p>
          </div>
        </article>

        {/* Footer Navigation */}
        {!isImmersive && (
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-6">
            <Link href="/stories" className="flex items-center group">
              <svg className="w-6 h-6 mr-2 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span className="group-hover:text-cyan-300 transition-colors">Back to Premium Stories</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                Previous Chapter
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full transition-colors">
                Next Story
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}