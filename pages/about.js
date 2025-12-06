import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>About Nexus</title>
        <meta name="description" content="Discover the mission and philosophy behind Nexus, the world's premier futuristic storytelling platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            The Nexus Vision
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting the future of storytelling through immersive experiences and premium content
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6">
              At Nexus, we believe that storytelling is the most powerful tool for exploring the future. 
              We've created a platform where visionary authors can share their boldest ideas, and readers 
              can immerse themselves in worlds that challenge, inspire, and transform.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our mission is to become the definitive destination for premium, futuristic fiction that 
              pushes the boundaries of imagination while maintaining the highest standards of literary 
              quality and reader experience.
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Design Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <div className="text-cyan-400 text-5xl mb-4">.less</div>
              <h3 className="text-xl font-bold mb-4">Less is More</h3>
              <p className="text-gray-300">
                We believe in intentional design where every element serves a purpose. Our minimalist 
                approach ensures that nothing distracts from the stories themselves.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <div className="text-cyan-400 text-5xl mb-4">∞</div>
              <h3 className="text-xl font-bold mb-4">Infinite Possibilities</h3>
              <p className="text-gray-300">
                Futurism means embracing the limitless potential of human imagination. We celebrate 
                stories that dare to explore what might be.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <div className="text-cyan-400 text-5xl mb-4">♦</div>
              <h3 className="text-xl font-bold mb-4">Diamond Standard</h3>
              <p className="text-gray-300">
                Quality over quantity. Every story on Nexus undergoes rigorous curation to ensure 
                it meets our exacting standards for literary excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Curation Promise */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Our Curation Promise
            </h2>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-900/50 to-purple-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                  <p className="text-gray-300">
                    Every story published on Nexus goes through our meticulous curation process. 
                    We evaluate each submission based on originality, literary quality, thematic 
                    coherence, and its contribution to the broader landscape of futuristic fiction.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-900/50 to-purple-900/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Futurism Standard</h3>
                  <p className="text-gray-300">
                    We define futurism broadly, encompassing hard science fiction, social speculation, 
                    biopunk, solarpunk, cyberpunk, and more. What unites our stories is their 
                    commitment to exploring the implications of change—technological, social, 
                    environmental, or existential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Interface Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Seamless Transitions</h3>
              <div className="h-48 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 animate-ping"></div>
                </div>
              </div>
              <p className="text-gray-300">
                Our interface flows like thought itself, with smooth transitions that mirror 
                the seamless progression of a well-told story.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Intelligent Design</h3>
              <div className="h-48 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-2 bg-cyan-500/30 rounded-full">
                  <div className="h-full bg-cyan-500 rounded-full w-1/3"></div>
                </div>
                <div className="absolute top-12 left-4 right-4 h-2 bg-purple-500/30 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full w-2/3"></div>
                </div>
              </div>
              <p className="text-gray-300">
                Every element serves a purpose. Our design system ensures consistency while 
                allowing for moments of surprise and delight.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join the Narrative</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a reader seeking new worlds or an author with a vision of tomorrow, 
              Nexus is your home for the stories that matter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Explore Stories
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 border border-gray-600">
                Submit Your Work
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© 2025 Nexus. Crafting the future of storytelling.</p>
        </div>
      </footer>
    </div>
  );
}