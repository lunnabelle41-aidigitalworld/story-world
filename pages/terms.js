import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the Nexus platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      details: [
        "These terms apply to all visitors, users, and others who access or use the service",
        "By using the service, you represent that you are at least 13 years of age",
        "We may update these terms at any time without notice",
        "Your continued use of the service after any changes constitutes acceptance of those changes"
      ]
    },
    {
      title: "Use of Service",
      content: "Nexus provides a platform for discovering, reading, and sharing speculative fiction stories. You agree to use the service only for lawful purposes and in accordance with these terms.",
      details: [
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You agree to notify us immediately of any unauthorized access to your account",
        "You may not use the service for any illegal or unauthorized purpose",
        "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service"
      ]
    },
    {
      title: "Content Ownership",
      content: "All content on the Nexus platform, including stories, graphics, logos, and software, is the property of Nexus or its content suppliers and is protected by international copyright laws.",
      details: [
        "Stories published on the platform remain the property of their respective authors",
        "By submitting content, you grant Nexus a worldwide, non-exclusive license to display and distribute your content",
        "You represent and warrant that you own or have the necessary rights to all content you submit",
        "Nexus reserves the right to remove any content that violates these terms or our policies"
      ]
    },
    {
      title: "Subscription and Payments",
      content: "Certain features of the Nexus platform require payment of fees. By purchasing a subscription, you agree to pay all fees associated with your chosen plan.",
      details: [
        "All payments are non-refundable except as required by law",
        "Subscriptions automatically renew unless cancelled by you",
        "We reserve the right to change our fees and billing methods at any time",
        "You are responsible for all taxes associated with your subscription"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Terms of Service - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Terms and conditions for using the Nexus platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Welcome to Nexus</h2>
            <p className="text-gray-300 text-lg mb-6">
              These terms of service outline the rules and regulations for the use of Nexus's website 
              and services. By accessing this website, we assume you accept these terms of service 
              in full. Do not continue to use Nexus's website if you do not accept all of the terms 
              of service stated on this page.
            </p>
            <p className="text-gray-300 text-lg">
              The following terminology applies to these Terms of Service, Privacy Statement and 
              Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, 
              the person accessing this website and accepting the Company's terms of service. 
              "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", 
              "Parties", or "Us", refers to both the Client and ourselves, or either the Client or 
              ourselves.
            </p>
          </div>
        </section>

        {/* Terms Sections */}
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

        {/* Limitation of Liability */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              In no event shall Nexus, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential or 
              punitive damages, including without limitation, loss of profits, data, use, 
              goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Your access to or use of or inability to access or use the service</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Any conduct or content of any third party on the service</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Any content obtained from the service</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Unauthorized access, use or alteration of your transmissions or content</span>
              </li>
            </ul>
            <p className="text-gray-300 text-lg">
              Our liability is limited to the maximum extent permitted by law. In no event shall 
              our total liability to you for all damages exceed the amount paid by you, if any, 
              for accessing the service during the twelve (12) months immediately preceding the 
              event giving rise to the claim.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-cyan-300">Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms shall be governed and construed in accordance with the laws of 
                California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300">
                Our failure to enforce any right or provision of these Terms will not be 
                considered a waiver of those rights. If any provision of these Terms is held 
                to be invalid or unenforceable by a court, the remaining provisions of these 
                Terms will remain in effect.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">legal@nexus-stories.com</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Innovation Drive, San Francisco, CA 94103</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Policies */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Related Policies</h2>
            <p className="text-gray-300 mb-6">
              These Terms of Service work together with our Privacy Policy and Cookie Policy to 
              govern your use of the Nexus platform. Please review these related documents:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/cookies">
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 border border-gray-700">
                  Cookie Policy
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}