import Head from 'next/head';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Terms of Service - Story World</title>
        <meta name="description" content="Terms of Service for Story World" />
      </Head>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last updated: December 6, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Story World. These Terms of Service govern your use of our website and services. 
              By accessing or using our service, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
            <p className="text-gray-700">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for maintaining the confidentiality of your account and password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Content</h2>
            <p className="text-gray-700">
              Our service allows you to post, link, store, share, and otherwise make available certain 
              information, text, or other material. You are responsible for the content you post.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The Service and its original content, features, and functionality are and will remain the 
              exclusive property of Story World and its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Story World, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential or punitive 
              damages resulting from your access to or use of, or inability to access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will provide notice of any 
              changes by posting the new Terms on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at 
              <a href="mailto:contact@storyworld.com" className="text-blue-600 hover:underline">
                contact@storyworld.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
