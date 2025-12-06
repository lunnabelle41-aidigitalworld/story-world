import Head from 'next/head';
import Link from 'next/link';

export default function Partners() {
  const partnershipTypes = [
    {
      title: "Content Partnership",
      description: "Collaborate with us to bring exclusive content to our platform",
      benefits: [
        "Access to 1M+ engaged readers",
        "Revenue sharing on published content",
        "Cross-promotion opportunities",
        "Analytics and audience insights"
      ],
      icon: "📚"
    },
    {
      title: "Technology Integration",
      description: "Integrate your tools and services with our platform",
      benefits: [
        "API access to our content library",
        "Co-development opportunities",
        "Joint marketing campaigns",
        "Technical support and documentation"
      ],
      icon: "⚙️"
    },
    {
      title: "Event Sponsorship",
      description: "Sponsor our community events and workshops",
      benefits: [
        "Brand visibility at events",
        "Speaking opportunities",
        "Access to attendee demographics",
        "Lead generation opportunities"
      ],
      icon: "🎤"
    },
    {
      title: "Educational Alliance",
      description: "Partner with us to support creative writing programs",
      benefits: [
        "Curriculum development support",
        "Student internship programs",
        "Faculty collaboration opportunities",
        "Research partnership potential"
      ],
      icon: "🎓"
    }
  ];

  const partners = [
    { name: "FutureTech University", logo: "🏫", category: "Education" },
    { name: "Quantum Publishing House", logo: "🏢", category: "Publishing" },
    { name: "Creative Writers Guild", logo: "✍️", category: "Organization" },
    { name: "Sci-Fi Film Collective", logo: "🎬", category: "Entertainment" },
    { name: "Innovation Labs", logo: "🔬", category: "Technology" },
    { name: "Global Literature Foundation", logo: "🌍", category: "Non-Profit" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Partner With Us - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Explore partnership opportunities with the Nexus platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Partner With Nexus
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborate with us to shape the future of storytelling and connect with our global community of readers and writers
          </p>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">👥</div>
                  <h3 className="text-xl font-bold mb-3">Massive Audience</h3>
                  <p className="text-gray-400">
                    Connect with over 1 million engaged readers passionate about speculative fiction
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3">Rich Analytics</h3>
                  <p className="text-gray-400">
                    Access detailed insights into reader behavior and content performance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                  <p className="text-gray-400">
                    Be part of cutting-edge developments in interactive storytelling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{type.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-400">{type.description}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-4 text-cyan-300">Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/partners/${type.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Our Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Partners</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h3 className="font-bold text-lg mb-1">{partner.name}</h3>
                    <p className="text-gray-500 text-sm">{partner.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of innovative partners who are shaping the future of storytelling. 
              Our partnership team is ready to discuss how we can collaborate to achieve mutual success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact/partnerships">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Partnership Team
                </button>
              </Link>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105">
                Download Partnership Kit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}