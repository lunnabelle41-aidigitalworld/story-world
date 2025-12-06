import Head from 'next/head';
import Link from 'next/link';

export default function Guidelines() {
  const guidelines = [
    {
      title: "Respect All Members",
      description: "Treat all community members with dignity and respect, regardless of their background, experience level, or opinions.",
      examples: [
        "Use inclusive language and avoid discriminatory remarks",
        "Disagree constructively without personal attacks",
        "Be welcoming to newcomers and offer help when possible"
      ]
    },
    {
      title: "Constructive Criticism",
      description: "When discussing creative works, focus on the content and provide thoughtful, actionable feedback.",
      examples: [
        "Comment on specific elements like plot, character development, or world-building",
        "Offer suggestions for improvement rather than just pointing out flaws",
        "Acknowledge strengths alongside areas for growth"
      ]
    },
    {
      title: "Original Content Only",
      description: "Share only your own work or content you have explicit permission to distribute.",
      examples: [
        "Do not plagiarize or copy content from other sources",
        "Properly attribute any external sources or inspirations",
        "Respect copyright and intellectual property rights"
      ]
    },
    {
      title: "No Harassment",
      description: "Harassment of any kind will not be tolerated in our community spaces.",
      examples: [
        "Do not engage in personal attacks or threats",
        "Avoid repeated unwanted contact after being asked to stop",
        "Report harassment when you witness it"
      ]
    }
  ];

  const enforcement = [
    {
      level: "First Offense",
      action: "Verbal warning and educational resources provided",
      timeframe: "Immediate"
    },
    {
      level: "Second Offense",
      action: "Temporary suspension (1-7 days) and mandatory review of guidelines",
      timeframe: "Within 24 hours"
    },
    {
      level: "Third Offense",
      action: "Extended suspension (1-4 weeks) with appeal process",
      timeframe: "Within 24 hours"
    },
    {
      level: "Severe Violation",
      action: "Permanent ban without appeal for egregious violations",
      timeframe: "Immediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Community Guidelines - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Our community standards and expectations for all members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Community Guidelines
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating a safe, inclusive, and inspiring environment for storytellers and readers
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-gray-300 text-lg mb-6">
              At Nexus, we believe that diverse voices and perspectives enrich our collective storytelling experience. 
              These guidelines are designed to foster a community where creativity can flourish while maintaining a 
              respectful and inclusive environment for all members.
            </p>
            <p className="text-gray-300 text-lg">
              By participating in our community, you agree to uphold these standards and contribute to a positive 
              experience for everyone. Our moderation team actively monitors community spaces to ensure these 
              guidelines are followed.
            </p>
          </div>
        </section>

        {/* Core Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Core Principles</h2>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {guidelines.map((guideline, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-start mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mr-4">0{index + 1}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{guideline.title}</h3>
                    <p className="text-gray-300 text-lg">{guideline.description}</p>
                  </div>
                </div>
                <div className="pl-10">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Examples:</h4>
                  <ul className="space-y-2">
                    {guideline.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enforcement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Enforcement Policy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <p className="text-gray-300 text-lg mb-8">
                Violations of our community guidelines are addressed progressively, with consideration for 
                intent and impact. Our goal is always to educate and reintegrate community members when possible.
              </p>
              
              <div className="space-y-6">
                {enforcement.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="text-lg font-semibold text-cyan-400">{item.level}</div>
                      <div className="text-gray-500 text-sm">{item.timeframe}</div>
                    </div>
                    <div className="md:w-3/4">
                      <div className="text-gray-300">{item.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Reporting Issues</h2>
            <p className="text-gray-300 text-lg mb-8">
              If you encounter behavior that violates our guidelines, please report it immediately. 
              All reports are confidential and reviewed by our moderation team within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3">In-App Reporting</h3>
                <p className="text-gray-400 mb-4">
                  Use the report button on any post, comment, or user profile
                </p>
                <Link href="/report">
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Learn More →
                  </button>
                </Link>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-3">Email Support</h3>
                <p className="text-gray-400 mb-4">
                  Send detailed reports to community@nexus-stories.com
                </p>
                <Link href="mailto:community@nexus-stories.com">
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Contact Us →
                  </button>
                </Link>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Emergency Response</h3>
                <p className="text-gray-400 mb-4">
                  For immediate threats, contact abuse@nexus-stories.com
                </p>
                <Link href="mailto:abuse@nexus-stories.com">
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Report Abuse →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}