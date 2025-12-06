import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ExperimentMakingOf() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Mock data for making-of content
  const makingOfData = {
    title: "The Creative Process Behind This Experiment",
    description: "An inside look at how this experimental narrative was crafted",
    developmentTimeline: [
      {
        date: "Jan 2024",
        title: "Conceptualization",
        description: "Initial brainstorming sessions to define the core interactive mechanics and narrative themes."
      },
      {
        date: "Mar 2024",
        title: "Prototyping",
        description: "Development of early interactive prototypes to test user engagement and narrative flow."
      },
      {
        date: "May 2024",
        title: "Story Development",
        description: "Writing and refinement of the narrative with branching pathways and interactive elements."
      },
      {
        date: "Jul 2024",
        title: "Technical Implementation",
        description: "Integration of multimedia elements, AI components, and custom UI interfaces."
      },
      {
        date: "Sep 2024",
        title: "Testing & Refinement",
        description: "Extensive user testing to optimize engagement and narrative coherence."
      },
      {
        date: "Nov 2024",
        title: "Launch",
        description: "Public release of the experimental narrative to the Nexus community."
      }
    ],
    team: [
      {
        name: "Alex Rivera",
        role: "Creative Director",
        bio: "Specializes in interactive storytelling and experimental narrative design."
      },
      {
        name: "Dr. Elena Vasquez",
        role: "Narrative Designer",
        bio: "Brings expertise in speculative fiction and immersive world-building."
      },
      {
        name: "Kenji Tanaka",
        role: "Technical Lead",
        bio: "Implements cutting-edge web technologies for interactive experiences."
      },
      {
        name: "Amara Okafor",
        role: "User Experience Designer",
        bio: "Focuses on intuitive interfaces and engaging user journeys."
      }
    ],
    technologies: [
      "React with Next.js",
      "WebGL for 3D graphics",
      "Web Audio API",
      "TensorFlow.js for AI components",
      "Socket.io for real-time features",
      "Tailwind CSS for responsive design"
    ],
    challenges: [
      "Balancing narrative depth with interactive complexity",
      "Ensuring accessibility across different user abilities",
      "Optimizing performance for real-time interactions",
      "Creating meaningful choices that impact the story"
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Making of {slug} | The Nexus Laboratory</title>
        <meta name="description" content="Behind the scenes look at the creation of this experimental narrative" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href={`/lab/${slug}`}>
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Experiment
            </button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Making of This Experiment</h1>
            <p className="text-xl text-gray-400">
              An inside look at the creative and technical process behind this experimental narrative
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Development Timeline</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-cyan-500/30"></div>
              
              <div className="space-y-12 pl-12">
                {makingOfData.developmentTimeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-cyan-600 border-4 border-gray-900"></div>
                    
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Creative Team</h2>
              <div className="space-y-6">
                {makingOfData.team.map((member, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-cyan-400 text-sm mb-1">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="grid grid-cols-1 gap-4">
                {makingOfData.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg flex items-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-cyan-400">⚡</span>
                    </div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-6">Key Challenges</h2>
              <div className="space-y-4">
                {makingOfData.challenges.map((challenge, index) => (
                  <div key={index} className="bg-amber-900/20 p-4 rounded-lg border border-amber-500/30 flex">
                    <span className="text-amber-400 mr-3 mt-0.5">⚠️</span>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <h2 className="text-2xl font-bold mb-6">Creator Insights</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mr-3">
                  <span className="font-bold">AR</span>
                </div>
                <div>
                  <h3 className="font-bold">Alex Rivera</h3>
                  <p className="text-sm text-gray-400">Creative Director</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "This experiment represents our boldest step yet in redefining what interactive storytelling can be. 
                We wanted to create an experience where the medium itself becomes part of the narrative, 
                where the act of reading transforms into active participation. The challenge was maintaining 
                narrative coherence while empowering users to shape their own journey through the story."
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-amber-600 flex items-center justify-center mr-3">
                  <span className="font-bold">EV</span>
                </div>
                <div>
                  <h3 className="font-bold">Dr. Elena Vasquez</h3>
                  <p className="text-sm text-gray-400">Narrative Designer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "What excites me most about this project is how it blurs the line between author and audience. 
                Traditional storytelling is a monologue - the author speaks and the reader listens. But in 
                experimental narratives like this one, we create a dialogue. Every choice the reader makes 
                becomes a collaboration in the creative process, resulting in a unique story experience that 
                exists only for them."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/lab/${slug}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                Return to Experiment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}