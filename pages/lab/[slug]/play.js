import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ExperimentPlay() {
  const router = useRouter();
  const { slug } = router.query;
  
  // In a real implementation, this would load the actual experiment
  // For now, we'll show a placeholder
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Playing Experiment | The Nexus Laboratory</title>
        <meta name="description" content="Interactive experimental narrative experience" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link href={`/lab/${slug}`}>
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Experiment Details
            </button>
          </Link>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Interactive Experience: {slug || "Untitled Experiment"}
            </h1>
            
            <div className="bg-gray-800/50 rounded-xl p-8 mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                This interactive experience is loading. In a full implementation, this would be a rich, 
                multimedia narrative that responds to your choices and interactions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Branching Narrative</h3>
                  <p className="text-sm text-gray-400">Your choices affect the story outcome</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Immersive UI</h3>
                  <p className="text-sm text-gray-400">Custom interface for this experience</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-400">Save and resume your journey</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                Begin Experience
              </button>
              <Link href={`/lab/${slug}`}>
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Back to Details
                </button>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">About Experimental Narratives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-gray-800/30 p-6 rounded-xl">
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">🔬</span> Cutting-Edge Storytelling
                </h3>
                <p className="text-gray-400 text-sm">
                  Our experimental narratives push the boundaries of interactive fiction, 
                  incorporating multimedia elements, AI responsiveness, and innovative UI designs.
                </p>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-xl">
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="mr-2">🎮</span> Interactive Elements
                </h3>
                <p className="text-gray-400 text-sm">
                  Unlike traditional stories, these experiences require active participation. 
                  Your choices, timing, and interactions directly influence narrative outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}