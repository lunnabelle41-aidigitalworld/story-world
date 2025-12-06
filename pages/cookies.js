import Head from 'next/head';
import Link from 'next/link';

export default function Cookies() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      purpose: "Necessary for the website to function properly",
      examples: [
        "Authentication cookies to keep you logged in",
        "Security cookies to detect malicious activity",
        "Load balancing cookies to ensure site stability"
      ],
      duration: "Session or up to 1 year"
    },
    {
      name: "Performance Cookies",
      purpose: "Help us understand how visitors interact with our website",
      examples: [
        "Analytics cookies to measure site usage",
        "Performance cookies to improve page load times",
        "Error reporting cookies to identify technical issues"
      ],
      duration: "Up to 2 years"
    },
    {
      name: "Functionality Cookies",
      purpose: "Enable enhanced functionality and personalization",
      examples: [
        "Preference cookies to remember your settings",
        "Language selection cookies",
        "Social media sharing cookies"
      ],
      duration: "Up to 1 year"
    },
    {
      name: "Targeting Cookies",
      purpose: "Used to deliver relevant advertising to you",
      examples: [
        "Advertising cookies to track ad performance",
        "Retargeting cookies to show relevant ads",
        "Third-party advertising cookies"
      ],
      duration: "Up to 13 months"
    }
  ];

  const thirdParties = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and usage reporting",
      policy: "https://policies.google.com/privacy"
    },
    {
      name: "Facebook Pixel",
      purpose: "Advertising and conversion tracking",
      policy: "https://www.facebook.com/privacy/policy/"
    },
    {
      name: "Twitter Analytics",
      purpose: "Social media engagement tracking",
      policy: "https://twitter.com/en/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Cookie Policy - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Information about how we use cookies on our platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">About Cookies</h2>
            <p className="text-gray-300 text-lg mb-6">
              This Cookie Policy explains what cookies are, how we use them, and your choices regarding 
              cookies when you use our website and services. Cookies are small text files that are 
              placed on your device when you visit a website. They are widely used to make websites 
              work more efficiently and to provide information to the owners of the site.
            </p>
            <p className="text-gray-300 text-lg">
              By using our website, you consent to the use of cookies in accordance with this policy. 
              If you do not agree to the use of cookies, you should adjust your browser settings 
              accordingly or refrain from using our website.
            </p>
          </div>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300">How We Use Cookies</h2>
            <p className="text-gray-300 text-lg mb-6">
              We use cookies for a variety of purposes, including to ensure the proper functioning 
              of our website, to enhance your user experience, and to analyze how our website is used. 
              Below is a detailed breakdown of the types of cookies we use:
            </p>
            
            <div className="space-y-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="border-b border-gray-700 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold mb-3">{cookie.name}</h3>
                  <p className="text-gray-400 mb-4">{cookie.purpose}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Examples:</h4>
                  <ul className="space-y-2 mb-4">
                    {cookie.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400">{example}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Duration: {cookie.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Third-Party Cookies</h2>
            <p className="text-gray-300 text-lg mb-6">
              In some special cases, we also use cookies provided by trusted third parties. 
              The following section details which third-party cookies you might encounter 
              through our website:
            </p>
            
            <div className="space-y-6">
              {thirdParties.map((party, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold">{party.name}</h3>
                  </div>
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <p className="text-gray-400">{party.purpose}</p>
                  </div>
                  <div className="md:w-1/3">
                    <a 
                      href={party.policy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                    >
                      Privacy Policy
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Cookie Choices */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-cyan-300">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and/or delete cookies as you wish. You can delete all cookies 
                that are already on your computer, and you can set most browsers to prevent 
                them from being placed.
              </p>
              <p className="text-gray-300 mb-6">
                If you do this, however, you may have to manually adjust some preferences 
                every time you visit a site, and some services and functionalities may not work.
              </p>
              <div className="mt-6">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all duration-300">
                  Cookie Settings
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or other technologies, 
                please email us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">cookies@nexus-stories.com</span>
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
              This Cookie Policy works together with our Privacy Policy and Terms of Service to 
              govern your use of the Nexus platform. Please review these related documents:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/terms">
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 border border-gray-700">
                  Terms of Service
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}