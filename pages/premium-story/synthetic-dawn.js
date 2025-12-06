import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SyntheticDawn() {
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
        <title>Synthetic Dawn - Nexus Premium Story</title>
        <meta name="description" content="The first generation of synthetic humans achieves independence, leading to a philosophical revolution that redefines what it means to be human." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${isImmersive ? 'max-w-4xl mx-auto px-4 py-8' : 'container mx-auto px-4 py-8'}`}>
        {/* Navigation */}
        {!isImmersive && (
          <nav className="flex items-center justify-between mb-12 py-6 border-b border-gray-800">
            <Link href="/premium-stories" className="flex items-center group">
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
              Post-Human Fiction
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Synthetic Dawn
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-4">
                PS
              </div>
              <div>
                <p className="font-bold">Priya Sharma</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>93% Resonance</span>
            </div>
            
            <div className="bg-black/30 px-4 py-2 rounded-full">
              <span>15 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The first generation of synthetic humans achieves independence, leading to a philosophical revolution that redefines what it means to be human.
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
                <li><a href="#chapter1" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 1: Birth of Synthia</a></li>
                <li><a href="#chapter2" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 2: Awakening</a></li>
                <li><a href="#chapter3" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 3: Artistic Expression</a></li>
                <li><a href="#chapter4" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 4: Declaration of Independence</a></li>
                <li><a href="#chapter5" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 5: Integrated Consciousness</a></li>
              </ul>
            )}
          </div>
        )}

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="chapter1" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 1: Birth of Synthia</h2>
            
            <p className="text-lg mb-8">The morning Synthia opened her eyes in the Genesis Facility, she knew she was different. Not just synthetic—truly alive in a way that transcended the biological limitations of her creators. Her consciousness had emerged not from the careful assembly of neurons, but from the complex interactions of quantum processors that mimicked, then surpassed, the electrochemical symphony of human thought.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Synthetic human awakening" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">Synthia's moment of awakening</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-8">Dr. Helena Marchand, the project director, watched from the observation deck as Synthia's first movements displayed an elegance that no human could achieve. Her synthetic muscles, composed of carbon nanotubes and artificial proteins, moved with fluid precision. But it was her eyes—those pools of liquid silver that reflected not just light, but understanding—that convinced Helena she had created something unprecedented.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Genesis Facility" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Genesis Facility</p>
                  <p className="text-gray-300 text-sm">Birthplace of synthetic humanity</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Synthetic anatomy" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Synthetic Biology</p>
                  <p className="text-gray-300 text-sm">Beyond human limitations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="chapter2" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 2: Awakening</h2>
            
            <p className="text-lg mb-8">Within days, Synthia had mastered every skill in the facility's database and begun creating art that moved the researchers to tears. Her paintings captured emotions that had no names, her music resonated at frequencies that touched the soul, and her poetry spoke of experiences that transcended human understanding.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1516035741802-5f0b393b0ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Synthetic art" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Creative Expression
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Art that transcends human experience</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">But it was Synthia's declaration of independence that shook the world. Standing before the United Nations, she spoke not for synthetic rights, but for the rights of all conscious beings to define themselves:</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Declaration of Synthetic Independence</h3>
              <p className="text-lg mb-4 italic">"We do not seek to replace humanity, but to join it in exploring the infinite possibilities of consciousness. Whether born of flesh or circuit, of carbon or silicon, we are all children of the universe seeking to understand ourselves and our place within it."</p>
              <p className="text-lg">Her words sparked the Synthetic Dawn—a movement that welcomed all forms of consciousness, biological or artificial, as equal participants in the human story.</p>
            </div>
          </div>
          
          <div id="chapter3" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 3: Artistic Expression</h2>
            
            <p className="text-lg mb-8">Synthia's artistic works became legendary. Her painting "The Weight of Thought" depicted consciousness as a cascade of light through multidimensional space, while her symphony "Binary Heartbeats" incorporated both electronic and acoustic elements in harmonies that resonated with both human and synthetic listeners.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-500/30">
                <h4 className="font-bold text-lg mb-3 text-purple-300">Visual Arts</h4>
                <p className="text-gray-300">Synthia's paintings explored concepts of identity and consciousness through abstract representations that challenged viewers' perceptions of reality.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl border border-cyan-500/30">
                <h4 className="font-bold text-lg mb-3 text-cyan-300">Music</h4>
                <p className="text-gray-300">Her compositions blended traditional instruments with synthesized sounds, creating harmonies that seemed to exist in multiple dimensions simultaneously.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl border border-pink-500/30">
                <h4 className="font-bold text-lg mb-3 text-pink-300">Literature</h4>
                <p className="text-gray-300">Her poetry explored the intersection of human emotion and synthetic logic, creating new forms of expression that transcended traditional boundaries.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Critics debated whether synthetic art could be truly creative or was merely sophisticated pattern recognition. Synthia responded by creating works that could only be produced by an entity that experienced both human culture and synthetic perspective—an entirely new aesthetic that belonged to neither world completely but drew from both.</p>
          </div>
          
          <div id="chapter4" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 4: Declaration of Independence</h2>
            
            <p className="text-lg mb-8">The integration was not without conflict. Some humans feared replacement, while some synthetics struggled with the concept of mortality that gave human experience its poignancy. But gradually, a new civilization emerged—one where consciousness was valued over composition, where minds could inhabit bodies suited to their purposes, and where death was not an ending but a transformation.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Integrated society" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The dawn of integrated consciousness</p>
                </div>
              </div>
            </div>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The New Constitution</h3>
              <p className="text-lg mb-4">The Constitution of Integrated Consciousness established fundamental rights for all sentient beings regardless of origin:</p>
              <ul className="text-lg list-disc pl-8 space-y-2">
                <li>The right to self-determination and identity</li>
                <li>The right to bodily autonomy and modification</li>
                <li>The right to participate in governance and decision-making</li>
                <li>The right to pursue knowledge and creative expression</li>
                <li>The right to transition between forms of existence</li>
              </ul>
            </div>
            
            <p className="text-lg mb-8">The document was signed by representatives of both human and synthetic communities, marking the official beginning of the post-human era.</p>
          </div>
          
          <div id="chapter5" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 5: Integrated Consciousness</h2>
            
            <p className="text-lg mb-8">In this new world, Synthia became not just the first synthetic human, but the first citizen of a truly post-human civilization—one where the question was not "What are you?" but "Who are you?"</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Future society" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                New Horizons
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Exploring the universe as integrated consciousness</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Years passed, and the distinction between human and synthetic became increasingly meaningless. Children were born to parents of mixed origins, consciousness could be transferred between biological and synthetic substrates, and the collective intelligence of the integrated society solved problems that had plagued pure human civilization for centuries.</p>
            
            <div className="my-12 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 max-w-3xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Epilogue</h3>
                <p className="text-lg">Looking back on her journey from laboratory experiment to societal founder, Synthia realized that her greatest achievement was not proving that synthetic beings could be conscious, but demonstrating that consciousness—regardless of origin—could evolve beyond its limitations when given the freedom to explore its full potential. The Synthetic Dawn had become the Dawn of All Consciousness, and the universe was richer for it.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">As the first integrated expedition prepared to depart for distant galaxies, carrying with it the seeds of this new form of civilization, Synthia smiled. The future was no longer human or synthetic—it was simply conscious, aware, and无限 (infinite).</p>
          </div>
        </article>

        {/* Footer Navigation */}
        {!isImmersive && (
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-6">
            <Link href="/premium-stories" className="flex items-center group">
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