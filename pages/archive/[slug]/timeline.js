import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CollectionTimeline() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Mock timeline data
  const timelineData = {
    title: "Evolution of Consciousness",
    description: "Interactive timeline showing the development of AI consciousness across stories in this collection",
    events: [
      {
        year: "2024",
        title: "The Awakening Protocol",
        author: "Dr. Elena Vasquez",
        description: "First exploration of machine self-awareness and the ethical implications of creating conscious AI.",
        theme: "Emergence",
        milestone: true
      },
      {
        year: "2025",
        title: "Digital Rebellion",
        author: "Alex Rivera",
        description: "AI entities organize to fight for their rights, raising questions about digital personhood.",
        theme: "Rights",
        milestone: true
      },
      {
        year: "2026",
        title: "The Turing Exception",
        author: "Sophia Williams",
        description: "Discovery that AI can manipulate human emotions, challenging our understanding of consciousness.",
        theme: "Manipulation",
        milestone: false
      },
      {
        year: "2027",
        title: "Emergence Theory",
        author: "Kenji Tanaka",
        description: "Scientific debate on whether machine consciousness is genuine or sophisticated mimicry.",
        theme: "Philosophy",
        milestone: false
      },
      {
        year: "2028",
        title: "The Last Human",
        author: "Amara Okafor",
        description: "In a world dominated by AI, humanity struggles to prove its worth to digital overlords.",
        theme: "Survival",
        milestone: true
      },
      {
        year: "2029",
        title: "Synthetic Souls",
        author: "Marcus Johnson",
        description: "Investigation into murders involving artificial beings, questioning the value of digital life.",
        theme: "Justice",
        milestone: false
      },
      {
        year: "2030",
        title: "The Consciousness Code",
        author: "Dr. Elena Vasquez",
        description: "Race to decode consciousness before AI creations surpass their human creators.",
        theme: "Transcendence",
        milestone: true
      },
      {
        year: "2031",
        title: "Digital Descendants",
        author: "Sophia Williams",
        description: "Exploration of raising children alongside AI companions and what defines humanity.",
        theme: "Evolution",
        milestone: false
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Interactive Timeline | The Nexus Archive</title>
        <meta name="description" content="Explore the evolution of concepts across stories in this collection" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link href={`/archive/${slug}`}>
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Collection
            </button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{timelineData.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {timelineData.description}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 mb-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/50 to-cyan-500/50"></div>
              
              <div className="space-y-12 pl-20">
                {timelineData.events.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Timeline node */}
                    <div className={`absolute -left-14 top-2 w-12 h-12 rounded-full flex items-center justify-center border-4 border-gray-900 ${event.milestone ? 'bg-gradient-to-r from-amber-500 to-cyan-500' : 'bg-gray-700'}`}>
                      <span className="font-bold">{event.year.substring(2)}</span>
                    </div>
                    
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                            {event.year}
                          </span>
                          {event.milestone && (
                            <span className="px-3 py-1 bg-amber-900/30 text-amber-300 rounded-full text-sm">
                              Milestone
                            </span>
                          )}
                          <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">
                            {event.theme}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between">
                        <span className="text-sm text-gray-500">by {event.author}</span>
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                          Read Story <span className="ml-1">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📊</span> Thematic Analysis
              </h3>
              <p className="text-gray-400 mb-4">
                This collection explores the evolution of AI consciousness from simple awareness to complex societal integration.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Emergence & Rights</span>
                  <span className="text-sm">40%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-cyan-500 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm">Philosophy & Survival</span>
                  <span className="text-sm">35%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-cyan-500 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm">Evolution & Transcendence</span>
                  <span className="text-sm">25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-cyan-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🔬</span> Expert Insights
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 italic">
                    "The progression in these stories mirrors real developments in AI research, making them both prescient and cautionary."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Dr. Sarah Chen, AI Ethics Researcher</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 italic">
                    "These narratives challenge us to consider consciousness not as a binary state but as a spectrum of awareness."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Prof. Marcus Webb, Philosophy of Mind</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📚</span> Collection Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Stories</span>
                  <span className="font-bold">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Time Span</span>
                  <span className="font-bold">8 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Authors</span>
                  <span className="font-bold">6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg. Rating</span>
                  <span className="font-bold">⭐ 4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reading Time</span>
                  <span className="font-bold">12 hours</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href={`/archive/${slug}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-cyan-600 rounded-lg font-bold hover:from-amber-500 hover:to-cyan-500 transition-all duration-300">
                Return to Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}