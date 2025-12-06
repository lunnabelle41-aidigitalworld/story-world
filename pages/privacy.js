import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, submit stories, participate in community discussions, or contact us for support. This may include your name, email address, profile information, and content you create or share.",
      details: [
        "Account information (name, email, profile picture)",
        "Content you submit (stories, comments, forum posts)",
        "Communication preferences and settings",
        "Payment information for premium subscriptions"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience on our platform.",
      details: [
        "To provide and maintain our services",
        "To personalize your reading and discovery experience",
        "To communicate with you about your account and our services",
        "To process transactions and send related information",
        "To monitor and analyze usage patterns and trends"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:",
      details: [
        "With your consent or at your direction",
        "To comply with legal obligations or protect our rights",
        "With service providers who assist in operating our platform",
        "In connection with a merger, acquisition, or sale of assets"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      details: [
        "Encryption of data in transit and at rest",
        "Regular security assessments and audits",
        "Access controls and authentication measures",
        "Employee training on data protection practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Privacy Policy - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="How we collect, use, and protect your personal information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Commitment to Your Privacy</h2>
            <p className="text-gray-300 text-lg mb-6">
              At Nexus, we are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
            <p className="text-gray-300 text-lg">
              Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site or use our services.
            </p>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-cyan-300">
                  {index + 1}. {section.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {section.content}
                </p>
                <ul className="space-y-3">
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Right to access and obtain a copy of your personal data</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Right to rectify inaccurate personal data</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Right to erase your personal data</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Right to restrict or object to processing</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/contact/privacy">
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all duration-300">
                    Contact Privacy Team
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-cyan-300">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">privacy@nexus-stories.com</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Innovation Drive, San Francisco, CA 94103</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Link */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to track activity on our service 
              and store certain information. For more information about our use of cookies, 
              please review our Cookie Policy.
            </p>
            <Link href="/cookies">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                View Cookie Policy
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}