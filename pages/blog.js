import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Interactive Storytelling",
      excerpt: "How emerging technologies are reshaping the way we consume and interact with narrative content.",
      author: "Dr. Elena Vasquez",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Meet Our Rising Stars: New Authors to Watch",
      excerpt: "Introducing five groundbreaking writers who are pushing the boundaries of speculative fiction.",
      author: "Alex Rivera",
      date: "April 28, 2023",
      readTime: "6 min read",
      category: "Community"
    },
    {
      id: 3,
      title: "Building Immersive Worlds: A Creator's Guide",
      excerpt: "Essential techniques for crafting believable and engaging fictional universes.",
      author: "Sophia Chen",
      date: "April 12, 2023",
      readTime: "10 min read",
      category: "Writing Tips"
    },
    {
      id: 4,
      title: "The Neuroscience of Empathy in Fiction",
      excerpt: "Understanding how stories activate our mirror neurons and create emotional connections.",
      author: "Dr. James Wright",
      date: "March 30, 2023",
      readTime: "12 min read",
      category: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Blog - Nexus | Futuristic Storytelling Platform</title>
        <meta name="description" content="Insights, news, and perspectives from the Nexus community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Nexus Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, news, and perspectives from the Nexus community of visionary authors and readers
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm">Featured</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Technology</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 hover:text-cyan-300 transition-colors">
              <Link href="/blog/the-future-of-interactive-storytelling">
                The Future of Interactive Storytelling
              </Link>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              How emerging technologies like virtual reality, augmented reality, and artificial intelligence 
              are reshaping the way we consume and interact with narrative content, creating entirely new 
              forms of immersive storytelling experiences.
            </p>
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-900 to-purple-900 mr-4"></div>
                <div>
                  <p className="font-medium">Dr. Elena Vasquez</p>
                  <p className="text-gray-400 text-sm">May 15, 2023 • 8 min read</p>
                </div>
              </div>
              <Link href="/blog/the-future-of-interactive-storytelling">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                  Read Article
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-cyan-300 transition-colors">
                  <Link href={`/blog/post-${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 mr-3"></div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.date} • {post.readTime}</p>
                    </div>
                  </div>
                  <Link href={`/blog/post-${post.id}`}>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-cyan-500/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, author interviews, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}