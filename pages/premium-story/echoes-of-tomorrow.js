import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EchoesOfTomorrow() {
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
        <title>Echoes of Tomorrow - Nexus Premium Story</title>
        <meta name="description" content="When a physicist discovers that memories can be transmitted across time, she must confront the consequences of knowing the future." />
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
              Temporal Fiction
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Echoes of Tomorrow
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-4">
                DN
              </div>
              <div>
                <p className="font-bold">Dr. Kai Nakamura</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>91% Resonance</span>
            </div>
            
            <div className="bg-black/30 px-4 py-2 rounded-full">
              <span>25 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When a physicist discovers that memories can be transmitted across time, she must confront the consequences of knowing the future.
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
                <li><a href="#chapter1" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 1: The Discovery</a></li>
                <li><a href="#chapter2" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 2: Memories Across Time</a></li>
                <li><a href="#chapter3" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 3: The Burden of Foresight</a></li>
                <li><a href="#chapter4" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 4: Walking the Knife's Edge</a></li>
                <li><a href="#chapter5" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 5: The Temporal Ethics Council</a></li>
              </ul>
            )}
          </div>
        )}

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="chapter1" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 1: The Discovery</h2>
            
            <p className="text-lg mb-8">Dr. Elena Vasquez stared at the oscilloscope readings in disbelief. The temporal resonance waves she had detected weren't just theoretical—they were carrying information. Not random data, but structured memories from another time period entirely.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal laboratory equipment" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">Dr. Vasquez observing temporal resonance waves</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-8">The discovery had begun as a routine experiment in quantum temporal mechanics. Using a modified version of the Large Hadron Collider, her team had been attempting to detect minute fluctuations in spacetime that might indicate the presence of temporal anomalies. What they found instead was something far more profound—a channel through which consciousness itself could flow across the barriers of time.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Research team" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Research Team</p>
                  <p className="text-gray-300 text-sm">Analyzing temporal data</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Temporal visualization" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Temporal Visualization</p>
                  <p className="text-gray-300 text-sm">Mapping consciousness across time</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="chapter2" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 2: Memories Across Time</h2>
            
            <p className="text-lg mb-8">As the days passed, the memories became clearer. They weren't random thoughts or dreams, but coherent experiences from people who lived in a future where humanity had colonized dozens of star systems. The memories showed technologies that seemed impossibly advanced, societies that had transcended many of the conflicts that plagued the present day, and warnings about events that hadn't yet occurred.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Future city" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Future Vision
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">A glimpse of humanity's potential future</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">But with knowledge of the future came an unbearable burden. Dr. Vasquez began to see events that would unfold in the coming months—accidents that could be prevented, disasters that could be averted, but also tragedies that seemed unavoidable. She realized that changing the future might create paradoxes that could unravel the very fabric of reality.</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Ethics of Temporal Knowledge</h3>
              <p className="text-lg mb-4">If you could see the future, would you act to change it, or accept it as inevitable? Dr. Vasquez faced the ultimate moral dilemma—whether to use her knowledge to save lives or preserve the integrity of time itself.</p>
              <p className="text-lg">The weight of foresight pressed down on her like a physical force. Every morning brought new memories, new visions of what was to come, and new decisions about how much to intervene.</p>
            </div>
          </div>
          
          <div id="chapter3" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 3: The Burden of Foresight</h2>
            
            <p className="text-lg mb-8">Dr. Vasquez found herself caught in a web of temporal ethics. Each morning she woke to new memories from the future, each more vivid and detailed than the last. She saw celebrations and tragedies, births and deaths, discoveries and losses. The sheer volume of information was overwhelming, and the responsibility of what to do with it felt crushing.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-500/30">
                <h4 className="font-bold text-lg mb-3 text-purple-300">Prevention vs Preservation</h4>
                <p className="text-gray-300">Should she prevent small tragedies that wouldn't alter the timeline significantly, or refrain from any intervention to preserve temporal integrity?</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl border border-cyan-500/30">
                <h4 className="font-bold text-lg mb-3 text-cyan-300">Personal vs Universal</h4>
                <p className="text-gray-300">How could she balance saving individual lives against the potential risk to the entire timeline of human history?</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl border border-pink-500/30">
                <h4 className="font-bold text-lg mb-3 text-pink-300">Knowledge vs Sanity</h4>
                <p className="text-gray-300">The constant influx of future memories was taking a toll on her mental health. How long could she bear this burden?</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">She began keeping meticulous records of every memory, every vision, every potential intervention. Her laboratory became a shrine to temporal ethics, walls covered with timelines and decision matrices. Colleagues began to worry about her obsession, but she couldn't stop. The future was coming, whether she liked it or not.</p>
          </div>
          
          <div id="chapter4" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 4: Walking the Knife's Edge</h2>
            
            <p className="text-lg mb-8">In the end, she chose a middle path. She used her knowledge to prevent small tragedies without altering the major course of events. She saved lives in accidents that could be avoided without consequence, but refrained from interfering with the larger sweep of history. It was a delicate balance, walking the knife's edge between fate and free will.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal sunset" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The sun sets on a future shaped by careful choices</p>
                </div>
              </div>
            </div>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Ripple Effect</h3>
              <p className="text-lg mb-4">Even small interventions had consequences. Saving one person might mean they went on to prevent a larger tragedy, or it might mean they inadvertently caused one. Dr. Vasquez had to weigh each potential action against a web of possible outcomes.</p>
              <p className="text-lg">She developed a system of temporal triage—intervening only when she could be reasonably certain that the benefits outweighed the risks, and only when the intervention wouldn't create paradoxes or timeline disruptions.</p>
            </div>
            
            <p className="text-lg mb-8">The process was exhausting. Each morning she would review the new memories, cross-reference them with her previous interventions, and calculate the potential ripple effects. Some days she would intervene three or four times. Other days she would stand by and watch tragedy unfold, her hands tied by the need to preserve temporal integrity.</p>
          </div>
          
          <div id="chapter5" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 5: The Temporal Ethics Council</h2>
            
            <p className="text-lg mb-8">Years later, as she looked back on her discovery, Dr. Vasquez realized that the true gift of temporal memory wasn't the ability to see the future, but the wisdom to understand that some knowledge comes with responsibilities too great to bear alone. She established the Temporal Ethics Council to oversee future research, ensuring that the power to glimpse tomorrow would never again rest in the hands of a single person.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Temporal council" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                New Governance
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The founding of the Temporal Ethics Council</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">The Council consisted of philosophers, ethicists, physicists, and representatives from various affected communities. They developed protocols for temporal research, guidelines for intervention, and safeguards against the concentration of temporal power. Most importantly, they created a system of checks and balances that would prevent any single individual from bearing the burden that had nearly destroyed Dr. Vasquez.</p>
            
            <div className="my-12 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 max-w-3xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Epilogue</h3>
                <p className="text-lg">Dr. Vasquez retired to a quiet life, but the echoes of tomorrow continued to shape her world. The Council flourished, guiding humanity's cautious exploration of temporal phenomena. The future remained uncertain, but no longer unknowable, and the burden of foresight was shared among many rather than resting on the shoulders of one. In the end, she had learned that the greatest discoveries were not those that revealed the future, but those that taught humanity how to face it together.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">As she watched the first Council meeting from the observation gallery, Dr. Vasquez smiled. The future was still coming, but now it would arrive guided by wisdom rather than desperation, shaped by collective responsibility rather than individual obsession. The echoes of tomorrow would continue to whisper their secrets, but humanity was finally ready to listen.</p>
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