import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import authorsData from '../../models/authors';
import storiesData from '../../models/stories';

export default function AuthorDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [activeTab, setActiveTab] = useState('stories');
  const [followed, setFollowed] = useState(false);
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState(null);
  const [authorStories, setAuthorStories] = useState([]);

  // Find the author based on the slug (ID)
  useEffect(() => {
    if (slug) {
      const authorId = parseInt(slug);
      const foundAuthor = authorsData.find(a => a.id === authorId);
      
      if (foundAuthor) {
        setAuthor(foundAuthor);
        
        // Find all stories by this author across all languages
        const stories = [];
        for (const language in storiesData) {
          const langStories = storiesData[language].filter(s => s.authorId === authorId);
          stories.push(...langStories);
        }
        setAuthorStories(stories);
      }
    }
  }, [slug]);

  // If author not found, show 404
  if (slug && author === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
          <p className="text-gray-400 mb-8">The author you're looking for doesn't exist or has been moved.</p>
          <Link href="/authors">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
              Browse All Authors
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Show loading state
  if (!author) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Mock events data
  const events = [
    {
      id: 1,
      title: `${author.name} Virtual Workshop`,
      date: "Dec 15, 2025",
      time: "2:00 PM EST",
      description: `Join ${author.name} for an interactive workshop on ${author.specialty.toLowerCase()}.`,
      type: "Workshop"
    },
    {
      id: 2,
      title: `Book Signing: ${authorStories[0]?.title || "Latest Work"}`,
      date: "Dec 22, 2025",
      time: "7:00 PM EST",
      description: "Live virtual book signing event with Q&A session.",
      type: "Event"
    }
  ];

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert('Message sent! (This is a demo)');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{author.name} - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content={`${author.name} - ${author.specialty}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Author Header */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex-shrink-0 mr-8 mb-6 md:mb-0 flex items-center justify-center">
              <div className="text-4xl">👤</div>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold mr-3">{author.name}</h1>
                    {author.verified && (
                      <span className="text-blue-400" title="Verified Author">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-purple-400 text-xl mb-4">{author.specialty}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setFollowed(!followed)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      followed 
                        ? 'bg-purple-900/30 border border-purple-500 text-purple-300' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                    }`}
                  >
                    {followed ? 'Following' : 'Follow'}
                  </button>
                  <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700">
                    Message
                  </button>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-3xl">{author.bio}</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Stories</span>
                  <span className="block text-xl font-bold">{author.stories}</span>
                </div>
                <div>
                  <span className="text-gray-500">Followers</span>
                  <span className="block text-xl font-bold">{author.followers.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-500">Following</span>
                  <span className="block text-xl font-bold">{author.following}</span>
                </div>
                <div>
                  <span className="text-gray-500">Member Since</span>
                  <span className="block text-xl font-bold">{new Date(author.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {author.languages.map((lang, index) => (
                  <span key={index} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm capitalize">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-8">
          <div className="flex border-b border-gray-700">
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'stories' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('stories')}
            >
              Stories ({authorStories.length})
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'about' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === 'events' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </div>
        </section>

        {/* Stories Tab */}
        {activeTab === 'stories' && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorStories.map((story) => (
              <div 
                key={story.id} 
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative p-5">
                  <div className="h-40 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-1">📖</div>
                      <span className="text-xs text-gray-400">Story Cover</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors line-clamp-1">{story.title}</h3>
                    <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                      {story.resonance}% Res
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded text-xs capitalize">{story.language}</span>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{story.readTime}</span>
                    <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                  </div>
                  
                  <Link href={`/story/${story.id}`}>
                    <button className="w-full mt-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                      Read Story
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            
            {authorStories.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2">No stories published yet</h3>
                <p className="text-gray-400">Check back later for new stories from this author</p>
              </div>
            )}
          </section>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Author Biography</h2>
              <p className="text-gray-300 mb-6">
                {author.name}'s journey as an author is as fascinating as their stories themselves. 
                With a background in {author.genres[0] || "speculative fiction"}, they bring authenticity 
                and depth to their narratives.
              </p>
              <p className="text-gray-300 mb-6">
                Their work explores themes of {author.specialty.toLowerCase()}, creating worlds that 
                feel both fantastical and deeply human. Over the years, they've developed a distinctive 
                voice that resonates with readers across the globe.
              </p>
              <p className="text-gray-300">
                When not writing, {author.name} engages with the literary community through workshops, 
                mentoring emerging authors, and participating in science fiction conventions worldwide.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-purple-300">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {author.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-700/30 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {author.genres.map((genre, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-700/50 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Connect</h3>
                <div className="space-y-4">
                  <a href={author.website} className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-600/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>Personal Website</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-600/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span>{author.social?.twitter || "Twitter"}</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-600/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-purple-300">Send a Message</h3>
                <form onSubmit={handleMessageSubmit}>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full mt-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-sm">
                    {event.type}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date} at {event.time}</span>
                </div>
                
                <p className="text-gray-300 mb-6">{event.description}</p>
                
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                  Register Now
                </button>
              </div>
            ))}
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 border-dashed">
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-2">More Events Coming Soon</h3>
                <p className="text-gray-400 mb-6">Subscribe to get notified about upcoming events</p>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-lg mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>© 2025 Nexus. Crafting the future of storytelling.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}