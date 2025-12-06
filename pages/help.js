import Head from 'next/head';
import Link from 'next/link';

export default function Help() {
  const helpTopics = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of navigating and using the Nexus platform",
      icon: "🧭"
    },
    {
      id: 2,
      title: "Account Management",
      description: "Manage your profile, subscription, and privacy settings",
      icon: "👤"
    },
    {
      id: 3,
      title: "Reading Stories",
      description: "How to discover, read, and interact with stories",
      icon: "📖"
    },
    {
      id: 4,
      title: "Community Features",
      description: "Participate in discussions, groups, and events",
      icon: "👥"
    },
    {
      id: 5,
      title: "For Authors",
      description: "Guidelines and tools for publishing your work",
      icon: "✍️"
    },
    {
      id: 6,
      title: "Technical Issues",
      description: "Troubleshooting common problems and bug reports",
      icon: "🔧"
    }
  ];

  const faqs = [
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your Account Settings page. Navigate to Billing Information and click 'Cancel Subscription'. Your access will continue until the end of your current billing period."
    },
    {
      question: "Can I read stories offline?",
      answer: "Yes! Nexus Premium members can download stories for offline reading. Simply click the download icon on any story page while logged into your Premium account."
    },
    {
      question: "How do I submit my own story?",
      answer: "Authors can submit stories through the Contributor Portal. Visit the Submit page for detailed guidelines and requirements. All submissions are reviewed by our editorial team within 7-10 business days."
    },
    {
      question: "What devices does Nexus support?",
      answer: "Nexus works on all modern web browsers and our dedicated mobile apps for iOS and Android. Our apps are optimized for phones, tablets, and e-readers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Help Center - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Get help with using the Nexus platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Find answers to common questions and learn how to make the most of your Nexus experience
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full bg-gray-800 border border-gray-700 rounded-full px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Help Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic) => (
              <div 
                key={topic.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {topic.description}
                </p>
                <Link href={`/help/topic-${topic.id}`}>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                    Explore Topic
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-4 last:mb-0"
              >
                <h3 className="text-xl font-bold mb-3 text-cyan-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-gray-300 mb-6">
                  Our support team is available 24/7 to assist you with any questions or issues you may have. 
                  We typically respond within 2 hours during business hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                      Contact Support
                    </button>
                  </Link>
                  <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 border border-gray-700">
                    Live Chat
                    <span className="inline-flex items-center ml-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="text-8xl">🤖</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}