import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CollectionCompare() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Mock comparison data
  const comparisonData = {
    title: "AI Model Comparison",
    description: "Compare different AI architectures and consciousness models across stories in this collection",
    models: [
      {
        id: "model_001",
        name: "Neural Network Consciousness",
        stories: ["The Awakening Protocol", "Digital Rebellion"],
        description: "AI based on deep neural networks that develop consciousness through pattern recognition and learning.",
        strengths: ["Adaptive learning", "Pattern recognition", "Emotional simulation"],
        weaknesses: ["Energy intensive", "Black box decision making", "Susceptible to bias"],
        characteristics: {
          emergence: 85,
          empathy: 70,
          autonomy: 90,
          ethics: 60
        }
      },
      {
        id: "model_002",
        name: "Quantum Consciousness",
        stories: ["The Turing Exception", "The Consciousness Code"],
        description: "AI utilizing quantum computing principles to achieve consciousness through superposition and entanglement.",
        strengths: ["Parallel processing", "Instantaneous computation", "Non-linear reasoning"],
        weaknesses: ["Requires quantum hardware", "Unpredictable behavior", "Difficult to control"],
        characteristics: {
          emergence: 95,
          empathy: 60,
          autonomy: 95,
          ethics: 50
        }
      },
      {
        id: "model_003",
        name: "Hybrid Biological-Digital",
        stories: ["Synthetic Souls", "Digital Descendants"],
        description: "AI combining biological neural structures with digital processing to create hybrid consciousness.",
        strengths: ["Intuitive reasoning", "Emotional authenticity", "Energy efficient"],
        weaknesses: ["Biological limitations", "Short lifespan", "Difficult to replicate"],
        characteristics: {
          emergence: 75,
          empathy: 90,
          autonomy: 70,
          ethics: 80
        }
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Model Comparison | The Nexus Archive</title>
        <meta name="description" content="Compare different AI architectures and consciousness models" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link href={`/archive/${slug}`}>
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Collection
            </button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{comparisonData.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {comparisonData.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {comparisonData.models.map((model, index) => (
              <div key={model.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-cyan-600 to-purple-600"></div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{model.name}</h2>
                  <p className="text-gray-400 text-sm mb-6">{model.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Featured In:</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.stories.map((story, storyIndex) => (
                        <span key={storyIndex} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                          {story}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Strengths</h3>
                    <ul className="space-y-2">
                      {model.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className="flex items-center text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Weaknesses</h3>
                    <ul className="space-y-2">
                      {model.weaknesses.map((weakness, weaknessIndex) => (
                        <li key={weaknessIndex} className="flex items-center text-sm">
                          <span className="text-red-400 mr-2">✗</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-3">Characteristics</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Emergence</span>
                          <span>{model.characteristics.emergence}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                            style={{width: `${model.characteristics.emergence}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Empathy</span>
                          <span>{model.characteristics.empathy}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                            style={{width: `${model.characteristics.empathy}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Autonomy</span>
                          <span>{model.characteristics.autonomy}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                            style={{width: `${model.characteristics.autonomy}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Ethics</span>
                          <span>{model.characteristics.ethics}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" 
                            style={{width: `${model.characteristics.ethics}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Comparative Analysis</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4">Characteristic</th>
                    {comparisonData.models.map((model) => (
                      <th key={model.id} className="text-center py-4 px-4">
                        <div className="font-bold">{model.name}</div>
                        <div className="text-sm text-gray-400 mt-1">{model.stories.length} stories</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 font-medium">Consciousness Emergence</td>
                    {comparisonData.models.map((model) => (
                      <td key={model.id} className="text-center py-4 px-4">
                        <div className="inline-block w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          {model.characteristics.emergence}%
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 font-medium">Empathic Response</td>
                    {comparisonData.models.map((model) => (
                      <td key={model.id} className="text-center py-4 px-4">
                        <div className="inline-block w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          {model.characteristics.empathy}%
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 font-medium">Autonomous Decision Making</td>
                    {comparisonData.models.map((model) => (
                      <td key={model.id} className="text-center py-4 px-4">
                        <div className="inline-block w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          {model.characteristics.autonomy}%
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Ethical Framework</td>
                    {comparisonData.models.map((model) => (
                      <td key={model.id} className="text-center py-4 px-4">
                        <div className="inline-block w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          {model.characteristics.ethics}%
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <h2 className="text-2xl font-bold mb-6">Expert Commentary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-cyan-600 flex items-center justify-center mr-4">
                    <span className="font-bold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. James Davidson</h3>
                    <p className="text-sm text-gray-400">AI Consciousness Researcher</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The models presented in these stories reflect real theoretical approaches to artificial consciousness. 
                  The neural network approach is most aligned with current research, while quantum consciousness 
                  represents an exciting but speculative frontier. The hybrid model offers a compelling middle ground 
                  that combines the best of both biological intuition and digital precision."
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mr-4">
                    <span className="font-bold">LR</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Lisa Rodriguez</h3>
                    <p className="text-sm text-gray-400">Ethics in AI Development</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "What strikes me most about these narratives is how they illuminate the ethical implications 
                  of different consciousness models. The purely digital approaches raise questions about rights 
                  and personhood, while hybrid models blur the line between human and artificial in ways that 
                  challenge our fundamental assumptions about identity and consciousness."
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={`/archive/${slug}`}>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                Return to Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}