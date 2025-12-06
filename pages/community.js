import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });
  const [newComment, setNewComment] = useState('');

  // Mock data for discussions
  const discussions = [
    {
      id: 1,
      title: "What are your thoughts on the Fermi Paradox in modern sci-fi?",
      author: "Dr. Elena Vasquez",
      replies: 24,
      likes: 87,
      views: 342,
      lastActivity: "2 hours ago",
      category: "Science Discussion",
      isPinned: true
    },
    {
      id: 2,
      title: "Best time travel mechanics in fiction?",
      author: "Marcus Chen",
      replies: 42,
      likes: 126,
      views: 587,
      lastActivity: "5 hours ago",
      category: "Worldbuilding",
      isPinned: false
    },
    {
      id: 3,
      title: "How do you worldbuild a believable dystopia?",
      author: "Sophia Williams",
      replies: 18,
      likes: 64,
      views: 210,
      lastActivity: "1 day ago",
      category: "Writing Tips",
      isPinned: false
    },
    {
      id: 4,
      title: "Favorite AI characters in literature?",
      author: "Zara Nightshade",
      replies: 31,
      likes: 92,
      views: 421,
      lastActivity: "1 day ago",
      category: "Character Analysis",
      isPinned: false
    }
  ];

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 1,
      user: "Alex Rivera",
      action: "liked your post",
      target: "The Ethics of Memory Manipulation",
      time: "10 minutes ago"
    },
    {
      id: 2,
      user: "Kenji Tanaka",
      action: "replied to your discussion",
      target: "Best time travel mechanics in fiction?",
      time: "25 minutes ago"
    },
    {
      id: 3,
      user: "Amara Okafor",
      action: "started following you",
      target: "",
      time: "1 hour ago"
    },
    {
      id: 4,
      user: "Dr. Elena Vasquez",
      action: "published a new story",
      target: "Quantum Echoes",
      time: "3 hours ago"
    }
  ];

  // Handle new discussion submission
  const handleSubmitDiscussion = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    alert('Discussion submitted! (This is a demo)');
    setNewDiscussion({ title: '', content: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Community - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Connect with fellow readers and writers in our vibrant community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Community Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow readers, writers, and futurists in our vibrant discussion space
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-8">
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'discussions' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('discussions')}
              >
                Discussions
              </button>
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'create' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('create')}
              >
                Create Discussion
              </button>
            </div>

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {discussions.map((discussion) => (
                  <div 
                    key={discussion.id} 
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
                  >
                    {discussion.isPinned && (
                      <div className="flex items-center text-yellow-400 text-sm mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                        </svg>
                        Pinned
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold hover:text-green-400 transition-colors">
                        <Link href={`/community/discussion/${discussion.id}`}>{discussion.title}</Link>
                      </h3>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs whitespace-nowrap">
                        {discussion.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">Started by {discussion.author}</p>
                    <div className="flex text-sm text-gray-500">
                      <span className="mr-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {discussion.replies} replies
                      </span>
                      <span className="mr-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {discussion.likes} likes
                      </span>
                      <span className="mr-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {discussion.views} views
                      </span>
                      <span>Last activity {discussion.lastActivity}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Create Discussion Tab */}
            {activeTab === 'create' && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Start a New Discussion</h2>
                <form onSubmit={handleSubmitDiscussion}>
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Discussion Title</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="What would you like to discuss?"
                      value={newDiscussion.title}
                      onChange={(e) => setNewDiscussion({...newDiscussion, title: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Category</label>
                    <select className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>General Discussion</option>
                      <option>Science Discussion</option>
                      <option>Worldbuilding</option>
                      <option>Character Analysis</option>
                      <option>Writing Tips</option>
                      <option>Book Recommendations</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">Content</label>
                    <textarea
                      rows="8"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Share your thoughts, questions, or ideas..."
                      value={newDiscussion.content}
                      onChange={(e) => setNewDiscussion({...newDiscussion, content: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full font-medium transition-all duration-300 hover:from-green-500 hover:to-teal-500"
                    >
                      Post Discussion
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Stats Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">12.4K</div>
                  <div className="text-gray-400 text-sm">Members</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">842</div>
                  <div className="text-gray-400 text-sm">Discussions</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">3.7K</div>
                  <div className="text-gray-400 text-sm">Stories</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">24.8K</div>
                  <div className="text-gray-400 text-sm">Comments</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-900/50 to-teal-900/50 flex-shrink-0 mr-3 flex items-center justify-center">
                      <div className="text-xs">👤</div>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                        {activity.target && (
                          <> <Link href="#" className="text-green-400 hover:underline">{activity.target}</Link></>
                        )}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-center text-green-400 hover:text-green-300 text-sm">
                View All Activity →
              </button>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mt-8">
              <h3 className="text-xl font-bold mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Time Travel', 'AI Ethics', 'Space Exploration', 'Climate Fiction', 'Cyberpunk', 'Biopunk', 'Quantum Physics', 'Utopian Societies', 'Dystopian Worlds', 'Alien Civilizations'].map((tag, index) => (
                  <Link key={index} href="#">
                    <span className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600 rounded-full text-sm transition-colors">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
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