import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Submit() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    email: '',
    genre: '',
    synopsis: '',
    story: ''
  });

  const genres = [
    'Cyberpunk', 'Hard Sci-Fi', 'Time Travel', 'Dystopian', 
    'Space Opera', 'Biopunk', 'Nanopunk', 'Steampunk',
    'Climate Fiction', 'Social Sci-Fi', 'Military Sci-Fi'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! Our editorial team will review your story within 7-10 business days.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Submit Your Story - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Share your futuristic stories with the Nexus community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Submit Your Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Share your vision of tomorrow with our global community of readers and writers
          </p>
        </section>

        {/* Submission Info */}
        <section className="mb-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold mb-3">Review Timeline</h3>
                <p className="text-gray-400">
                  Our editorial team reviews submissions within 7-10 business days
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Royalties</h3>
                <p className="text-gray-400">
                  Earn 70% royalties on all published stories through our reader engagement model
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Distribution</h3>
                <p className="text-gray-400">
                  Reach over 1 million readers across web, mobile, and ebook platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-8 text-center">Submission Form</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="title" className="block text-gray-300 mb-2 font-medium">
                      Story Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="author" className="block text-gray-300 mb-2 font-medium">
                      Author Name
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="genre" className="block text-gray-300 mb-2 font-medium">
                      Genre
                    </label>
                    <select
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a genre</option>
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="synopsis" className="block text-gray-300 mb-2 font-medium">
                    Synopsis (2-3 sentences)
                  </label>
                  <textarea
                    id="synopsis"
                    name="synopsis"
                    value={formData.synopsis}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="story" className="block text-gray-300 mb-2 font-medium">
                    Story Content
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleChange}
                    rows="15"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  ></textarea>
                  <p className="text-gray-500 text-sm mt-2">
                    Paste your complete story or the first chapter for longer works
                  </p>
                </div>
                
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-cyan-600 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-gray-300">
                    I agree to the <Link href="/guidelines" className="text-cyan-400 hover:text-cyan-300">Community Guidelines</Link> and confirm that this is my original work
                  </label>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Story
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Submission Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">What We're Looking For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Speculative fiction exploring future possibilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Strong character development and world-building</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Themes that resonate with contemporary issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Well-crafted prose with attention to detail</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">What We Don't Accept</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Explicit sexual content or gratuitous violence</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Discriminatory language or hate speech</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Plagiarized or copyrighted material</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">Stories under 1,000 words or over 50,000 words</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/guidelines">
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-all duration-300 border border-gray-700">
                  Read Full Guidelines
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}