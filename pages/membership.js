import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('premium');

  // Membership plans
  const plans = [
    {
      id: 'basic',
      name: 'Explorer',
      price: { monthly: 5, annual: 4 },
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: 'Perfect for casual readers exploring the future of storytelling',
      features: [
        'Access to all public stories',
        'Basic search and filtering',
        'Community discussions',
        'Save up to 5 stories',
        'Standard reading experience'
      ],
      cta: 'Join Free',
      popular: false
    },
    {
      id: 'premium',
      name: 'Visionary',
      price: { monthly: 12, annual: 10 },
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: 'For dedicated readers and emerging writers shaping tomorrow\'s narratives',
      features: [
        'Everything in Explorer',
        'Early access to new stories',
        'Advanced search and filtering',
        'Save unlimited stories',
        'Enhanced reading experience',
        'Author Q&A sessions',
        'Exclusive community forums',
        'Monthly book recommendations'
      ],
      cta: 'Choose Plan',
      popular: true
    },
    {
      id: 'elite',
      name: 'Creator',
      price: { monthly: 25, annual: 20 },
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      description: 'For professional authors and ultimate fans driving the future of fiction',
      features: [
        'Everything in Visionary',
        'Submit your own stories',
        'Analytics dashboard',
        'Priority support',
        'Premium reading themes',
        'Offline reading mode',
        'Exclusive author workshops',
        'Early beta access to new features',
        'Personalized story recommendations',
        'VIP community events'
      ],
      cta: 'Choose Plan',
      popular: false
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: '📚',
      title: 'Unlimited Access',
      description: 'Read thousands of premium stories without limits'
    },
    {
      icon: '🚀',
      title: 'Early Access',
      description: 'Get new stories before anyone else'
    },
    {
      icon: '🎨',
      title: 'Enhanced Experience',
      description: 'Immersive reading with customizable themes'
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'Connect with authors and fellow readers'
    },
    {
      icon: '✍️',
      title: 'Publishing',
      description: 'Share your own stories with the world'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Track your reading habits and preferences'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Nexus Premium transformed how I discover and experience science fiction. The early access to stories is incredible!",
      author: "Dr. Elena Vasquez",
      role: "Award-winning Author"
    },
    {
      quote: "As a writer, the Creator tier gives me everything I need to publish and grow my audience. Worth every penny!",
      author: "Marcus Chen",
      role: "Published Author"
    },
    {
      quote: "The community features make this platform special. I've connected with readers who truly understand my work.",
      author: "Zara Nightshade",
      role: "Sci-Fi Enthusiast"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Premium Membership - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Unlock the full potential of Nexus with our premium membership tiers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            Premium Membership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Unlock exclusive content, early access, and enhanced features designed for the most passionate readers and writers
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'bg-gradient-to-r from-orange-600 to-red-600' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full ml-2">Save 20%</span>
            </button>
          </div>
        </section>

        {/* Plans */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/50 scale-105' 
                    : 'bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-orange-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                  </span>
                  <span className="text-gray-400"> {plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Premium Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            What Our Members Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <div className="text-yellow-400 text-4xl mb-4">❝</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                question: "Do you offer discounts for students?",
                answer: "Yes, we offer a 30% discount for students with valid educational email addresses. Contact our support team for more information."
              },
              {
                question: "Can I switch between plans?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be prorated based on your remaining billing period."
              },
              {
                question: "Is there a free trial?",
                answer: "We offer a 7-day free trial for our Premium and Creator plans. No credit card required to start your trial."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">Join thousands of readers and writers shaping tomorrow's stories</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <Link href="/stories">
                  <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300">
                    Explore Stories
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>© 2025 Nexus. Crafting the future of storytelling.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}