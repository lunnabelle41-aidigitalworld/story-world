import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Privacy Policy - Story World</title>
        <meta name="description" content="Privacy Policy for Story World" />
      </Head>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last updated: December 6, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us. This may include your name, email address, 
              and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to track activity on our website and 
              hold certain information. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-gray-700">
              We may employ third-party companies and individuals to facilitate our service, provide 
              the service on our behalf, or assist us in analyzing how our service is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at 
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
