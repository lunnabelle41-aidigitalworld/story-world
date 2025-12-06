import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheGravityWars() {
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
        <title>The Gravity Wars - Nexus Premium Story</title>
        <meta name="description" content="On a tidally locked planet where gravity varies dramatically, two factions fight for control of the neutral zone where Earth-normal gravity exists." />
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
              Planetary Romance
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Gravity Wars
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-lg font-bold mr-4">
                KA
              </div>
              <div>
                <p className="font-bold">Kofi Asante</p>
                <p className="text-gray-400 text-sm">Author</p>
              </div>
            </div>
            
            <div className="flex items-center bg-black/30 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>89% Resonance</span>
            </div>
            
            <div className="bg-black/30 px-4 py-2 rounded-full">
              <span>28 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            On a tidally locked planet where gravity varies dramatically, two factions fight for control of the neutral zone where Earth-normal gravity exists.
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
                <li><a href="#chapter1" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 1: Two Worlds</a></li>
                <li><a href="#chapter2" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 2: The Neutral Zone</a></li>
                <li><a href="#chapter3" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 3: Graviton Crystals</a></li>
                <li><a href="#chapter4" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 4: The Physics of War</a></li>
                <li><a href="#chapter5" className="text-cyan-400 hover:text-cyan-300 transition-colors">Chapter 5: Zero Gravity</a></li>
              </ul>
            )}
          </div>
        )}

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="chapter1" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 1: Two Worlds</h2>
            
            <p className="text-lg mb-8">On the tidally locked planet Proxima Centauri b, where one side baked under eternal day and the other froze in perpetual night, the neutral zone became the most contested territory in human space. Here, where the gravitational forces of the massive red dwarf star and the planet's own mass balanced to create Earth-normal conditions, two civilizations fought for survival.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Proxima Centauri b surface" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The Neutral Zone - Humanity's last refuge</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-8">Captain Zara Al-Rashid commanded the Low-G Raiders, inhabitants of the twilight region where reduced gravity allowed for enhanced mobility and speed. Their lightweight frames and augmented reflexes made them masters of guerrilla warfare, striking fast from the heights before vanishing into the thin atmosphere.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Low-G combat suit" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">Low-G Raider Armor</p>
                  <p className="text-gray-300 text-sm">Enhanced mobility systems</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                <img src="https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="High-G defense position" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-bold">High-G Fortress</p>
                  <p className="text-gray-300 text-sm">Heavy defense installations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="chapter2" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 2: The Neutral Zone</h2>
            
            <p className="text-lg mb-8">Opposing them were the High-G Sentinels, descendants of the original colonists who had adapted to the crushing gravitational forces of the night side. Their dense bones and powerful musculature made them nearly invulnerable to conventional weapons, turning them into living tanks that could withstand bombardment that would level mountains.</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Gravitational map" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Strategic Overview
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Gravity variation across Proxima Centauri b</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">The conflict escalated when both factions discovered that the Neutral Zone contained rare graviton crystals—resources that could power interstellar drives and terraforming equipment. Control of these crystals meant control of humanity's future expansion into the galaxy.</p>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Physics of Survival</h3>
              <p className="text-lg mb-4">In environments where a single step could launch you into orbit or crush you like a grape, warfare became an intricate dance of physics and strategy.</p>
              <p className="text-lg">Captain Al-Rashid's forces utilized electromagnetic grappling systems to navigate the variable gravity zones, while the Sentinels employed seismic charges that could alter local gravitational fields.</p>
            </div>
          </div>
          
          <div id="chapter3" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 3: Graviton Crystals</h2>
            
            <p className="text-lg mb-8">The discovery of graviton crystals changed everything. These formations, created by the unique gravitational stresses of the planet, were the key to faster-than-light travel. Each crystal contained enough energy to power a colony ship for decades, making them the most valuable resource in human space.</p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-500/30">
                <h4 className="font-bold text-lg mb-3 text-purple-300">Energy Potential</h4>
                <p className="text-gray-300">A single graviton crystal could power an entire city for years or propel a ship to nearby star systems without requiring massive fuel stores.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl border border-cyan-500/30">
                <h4 className="font-bold text-lg mb-3 text-cyan-300">Formation Process</h4>
                <p className="text-gray-300">The crystals formed over millennia as gravitational forces compressed exotic matter into stable lattice structures with unique properties.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl border border-pink-500/30">
                <h4 className="font-bold text-lg mb-3 text-pink-300">Extraction Dangers</h4>
                <p className="text-gray-300">Removing crystals from their formation sites could destabilize local gravity fields, creating dangerous anomalies.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Both factions realized that controlling the crystals meant controlling humanity's destiny. The Low-G Raiders wanted to use them to establish colonies throughout the galaxy, spreading human consciousness to new worlds. The High-G Sentinels believed humanity should consolidate its power on Proxima Centauri b, becoming masters of their current domain before expanding.</p>
          </div>
          
          <div id="chapter4" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 4: The Physics of War</h2>
            
            <p className="text-lg mb-8">The war reached its climax during the Battle of Lagrange Point Seven, where both armies clashed in zero gravity. The Raiders' agility met the Sentinels' brute strength in a spectacle of human adaptation pushed to its limits. Explosions bloomed like flowers in the vacuum, and combatants bounced between asteroids like deadly pinballs.</p>
            
            <div className="my-12 text-center">
              <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1454789313533-1bfb0ef74302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Zero-G battle" className="w-full max-w-4xl h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg">The climactic battle in zero gravity</p>
                </div>
              </div>
            </div>
            
            <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Tactical Innovations</h3>
              <p className="text-lg mb-4">The Raiders developed gravitic disruption grenades that could temporarily nullify local gravity fields, allowing them to maneuver in three dimensions while their opponents tumbled helplessly.</p>
              <p className="text-lg">The Sentinels countered with kinetic impact weapons that, in zero gravity, could accelerate projectiles to devastating velocities with minimal recoil.</p>
            </div>
            
            <p className="text-lg mb-8">Captain Al-Rashid found herself face-to-face with Commander Thane, leader of the Sentinels, as they drifted in the void. For a moment, surrounded by the carnage of their war, both realized the futility of their conflict.</p>
          </div>
          
          <div id="chapter5" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Chapter 5: Zero Gravity</h2>
            
            <p className="text-lg mb-8">"We're killing each other for resources that could benefit both our peoples," Al-Rashid said, her voice transmitted through their comm systems. "The crystals aren't finite—they regenerate slowly, but they regenerate."</p>
            
            <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Peace agreement" className="w-full max-w-4xl h-auto mx-auto" />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                Historic Accord
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">The signing of the Neutral Zone Accords</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Commander Thane nodded slowly. "Perhaps it's time we stopped seeing each other as enemies and started seeing each other as fellow travelers on this strange world."</p>
            
            <div className="my-12 text-center">
              <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30 max-w-3xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Epilogue</h3>
                <p className="text-lg">The Neutral Zone Accords established a joint administration for the graviton crystal fields. Raiders and Sentinels worked together to develop sustainable extraction techniques, and the wealth generated funded expeditions to other star systems. Ultimately, neither side could claim victory. The Neutral Zone remained contested territory, a reminder that in the vast cosmos, humanity's greatest enemy was not the harshness of alien worlds, but its own inability to share paradise.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">Years later, as the first joint expedition prepared to depart for Alpha Centauri, Captain Al-Rashid and Commander Thane stood together watching the ships being loaded. They had learned that cooperation was stronger than conflict, and that the true frontier was not the stars, but the boundaries of the human heart.</p>
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