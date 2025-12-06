import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TheBioluminescentCities() {
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
        <title>The Bioluminescent Cities - Nexus Premium Story</title>
        <meta name="description" content="Engineers design urban environments that glow with living light, creating cities powered by genetically modified organisms." />
        <meta property="og:title" content="The Bioluminescent Cities - Nexus Premium Story" />
        <meta property="og:description" content="Engineers design urban environments that glow with living light, creating cities powered by genetically modified organisms." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://nexus.com/premium-story/the-bioluminescent-cities" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/premium-story/the-bioluminescent-cities" />
        <meta property="twitter:title" content="The Bioluminescent Cities - Nexus Premium Story" />
        <meta property="twitter:description" content="Engineers design urban environments that glow with living light, creating cities powered by genetically modified organisms." />
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
              <li><a href="#project" className="text-gray-300 hover:text-white transition-colors">The Project</a></li>
              <li><a href="#cities" className="text-gray-300 hover:text-white transition-colors">Living Cities</a></li>
              <li><a href="#systems" className="text-gray-300 hover:text-white transition-colors">Adaptive Systems</a></li>
              <li><a href="#principles" className="text-gray-300 hover:text-white transition-colors">Living Architecture</a></li>
              <li><a href="#conclusion" className="text-gray-300 hover:text-white transition-colors">Harmony with Nature</a></li>
            </ul>
          </div>
        )}

        {/* Story Header */}
        <header className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-medium">
            Biopunk
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            The Bioluminescent Cities
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
              24 min read
            </div>
            
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              93% Resonance
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineers design urban environments that glow with living light, creating cities powered by genetically modified organisms.
          </p>
        </header>

        {/* Story Content */}
        <article className="prose prose-lg max-w-none">
          <div id="introduction">
            <p className="text-xl mb-8">Chief Biologist Zara Kimanzi stood on the observation deck of Lumina Tower, watching the city of Neo-Singapore pulse with living light. The skyscrapers glowed in gentle waves of blue and green, their surfaces covered in genetically modified algae that converted sunlight into both energy and illumination. Her creation had transformed urban living from a drain on the planet's resources into a symbiotic relationship with nature itself.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Bioluminescent city" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Neo-Singapore's living skyline</p>
              </div>
            </div>
          </div>
          
          <div id="project">
            <p>The project had begun as a response to the energy crisis of 2045, when traditional power sources could no longer sustain the world's growing population. Working with Dr. Kai Nakamura, a specialist in synthetic biology, Kimanzi had developed Bio-Light—a strain of algae that could be programmed to produce specific colors and intensities of light while simultaneously purifying the air and sequestering carbon dioxide. The organisms were housed in transparent bio-reactors integrated into building facades, creating living walls that served multiple ecological functions.</p>
          </div>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img src="https://images.unsplash.com/photo-1555529669-e87a20a69f6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Research team" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Bioengineering Team</p>
                <p className="text-gray-300 text-sm">Developing sustainable urban solutions</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Bio-Light algae" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">Bio-Light Organisms</p>
                <p className="text-gray-300 text-sm">Genetically modified illumination</p>
              </div>
            </div>
          </div>
          
          <div id="cities">
            <p>But the bioluminescent cities offered more than just sustainable lighting. The living buildings responded to environmental conditions, dimming during daylight hours and brightening when cloud cover blocked the sun. They adapted to seasonal changes, shifting from cool blues in winter to warm yellows in summer. And they healed themselves, with microorganisms that could repair damage to the bio-reactors and even evolve to handle new pollutants.</p>
          </div>
          
          <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Adaptive architecture" className="w-full max-w-4xl h-auto mx-auto" />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
              Adaptive Design
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">Buildings that respond to their environment</p>
            </div>
          </div>
          
          <div id="systems">
            <p>As the bioluminescent city model spread to other metropolitan areas, Kimanzi and her team developed new strains of organisms for different applications. Oxygenators purified the air in industrial zones, while Nutri-Grow systems produced food on vertical farms integrated into residential towers. The cities became self-sustaining ecosystems where human habitation and natural processes worked in harmony.</p>
          </div>
          
          <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
            <h3 id="principles" className="text-2xl font-bold mb-6 text-cyan-400">The Principles of Living Architecture</h3>
            <p className="text-lg mb-4">The success of bioluminescent cities rested on several key principles:</p>
            <ul className="text-lg list-disc pl-8 space-y-2">
              <li>Buildings must function as ecosystems, not just structures</li>
              <li>Organisms should serve multiple purposes to maximize efficiency</li>
              <li>Systems must be adaptive to respond to changing conditions</li>
              <li>Design should enhance biodiversity rather than replace it</li>
            </ul>
            <p className="text-lg mt-4">These principles created urban environments that actively improved the planet rather than depleting it.</p>
          </div>
          
          <div id="conclusion">
            <p>The transformation was not without challenges. Traditional energy companies fought against the adoption of living systems, and some citizens were uncomfortable with the idea of buildings that could theoretically evolve beyond human control. But as the benefits became undeniable—cleaner air, lower costs, and cities that actually helped heal the environment—resistance faded.</p>
          </div>
          
          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Harmonious city" className="w-full max-w-4xl h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Humanity's cities in harmony with nature</p>
              </div>
            </div>
          </div>
          
          <p>Years later, as Kimanzi watched children play in the glowing parks of Neo-Singapore, she reflected on how far urban civilization had come. The bioluminescent cities had not just solved the energy crisis—they had redefined humanity's relationship with the natural world. In teaching buildings to live, they had learned to live more fully themselves.</p>
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
                <p className="text-gray-400">Bioengineer & Urban Ecologist</p>
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
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Biopunk</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Hopeful</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Ecopunk</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Novella</span>
          </div>
        </footer>
      </main>
    </div>
  );
}