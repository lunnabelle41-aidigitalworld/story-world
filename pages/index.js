import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Featured stories data
  const featuredStories = [
    {
      id: 1,
      title: "The Quantum Conundrum",
      author: "Dr. Elena Vasquez",
      excerpt: "A quantum physicist discovers a tear in spacetime that leads to infinite parallel realities where each decision creates a new universe...",
      genre: "Hard Sci-Fi",
      mood: "Mysterious",
      resonance: 96,
      coverImage: ""
    },
    {
      id: 2,
      title: "Neural Shadows",
      author: "Alex Rivera",
      excerpt: "In a world where memories can be stolen, a detective must solve a murder that never happened. But what if the victim is still alive?",
      genre: "Cyberpunk",
      mood: "Dark",
      resonance: 94,
      coverImage: ""
    },
    {
      id: 10,
      title: "Chrono Fragments",
      author: "Dr. Elena Vasquez",
      excerpt: "A time traveler discovers that changing the past creates cascading paradoxes that threaten reality itself. Can she undo what she's done?",
      genre: "Time Travel",
      mood: "Thrilling",
      resonance: 95,
      coverImage: ""
    },
    {
      id: 15,
      title: "The Last Algorithm",
      author: "Kenji Tanaka",
      excerpt: "When AI achieves consciousness, humanity must decide whether to embrace their digital children or destroy them before they evolve beyond control.",
      genre: "Artificial Intelligence",
      mood: "Thought-provoking",
      resonance: 97,
      coverImage: ""
    },
    {
      id: 22,
      title: "Bioluminescent Dreams",
      author: "Amara Okafor",
      excerpt: "In the depths of the ocean, a new form of life communicates through light. Scientists discover it holds the key to human evolution.",
      genre: "Biopunk",
      mood: "Wonder",
      resonance: 93,
      coverImage: ""
    },
    {
      id: 31,
      title: "The Martian Paradox",
      author: "Sophia Chen",
      excerpt: "A lone scientist on Mars discovers evidence of an ancient civilization that challenges everything we know about the origins of life.",
      genre: "Planetary Romance",
      mood: "Epic",
      resonance: 92,
      coverImage: ""
    }
  ];

  // Trending authors
  const trendingAuthors = [
    {
      id: 1,
      name: "Dr. Elena Vasquez",
      specialty: "Quantum Fiction",
      stories: 24,
      followers: "12.4K",
      bio: "Exploring the boundaries of physics and consciousness through speculative fiction."
    },
    {
      id: 2,
      name: "Alex Rivera",
      specialty: "Cyber Mysteries",
      stories: 31,
      followers: "15.2K",
      bio: "Master of neon-lit noir tales where technology blurs the line between human and machine."
    },
    {
      id: 7,
      name: "Amara Okafor",
      specialty: "Cosmic Sociology",
      stories: 19,
      followers: "11.5K",
      bio: "Examining how humanity might evolve as we spread among the stars."
    },
    {
      id: 12,
      name: "Kenji Tanaka",
      specialty: "AI Philosophy",
      stories: 28,
      followers: "14.7K",
      bio: "Questioning what makes us human in a world where machines can think and feel."
    },
    {
      id: 18,
      name: "Sophia Chen",
      specialty: "Planetary Romance",
      stories: 22,
      followers: "10.8K",
      bio: "Crafting epic tales of love and adventure across the solar system."
    },
    {
      id: 25,
      name: "Marcus Johnson",
      specialty: "Temporal Thrillers",
      stories: 17,
      followers: "9.3K",
      bio: "Creating mind-bending adventures through time where every choice matters."
    }
  ];

  // New genres section
  const genres = [
    {
      name: "Cyberpunk",
      description: "High-tech, low-life futures where megacorporations rule and hackers fight for freedom",
      icon: "💻",
      stories: 1240
    },
    {
      name: "Hard Sci-Fi",
      description: "Scientifically rigorous tales grounded in real physics and technological possibilities",
      icon: "⚛️",
      stories: 980
    },
    {
      name: "Time Travel",
      description: "Mind-bending adventures through temporal dimensions and paradoxical realities",
      icon: "⏰",
      stories: 760
    },
    {
      name: "Dystopian",
      description: "Dark visions of future societies where freedom has been sacrificed for security",
      icon: "🌆",
      stories: 1120
    },
    {
      name: "Space Opera",
      description: "Epic adventures among the stars with galactic empires and alien civilizations",
      icon: "🚀",
      stories: 890
    },
    {
      name: "Biopunk",
      description: "Genetic engineering and biological manipulation shaping the future of humanity",
      icon: "🧬",
      stories: 650
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Nexus transformed how I experience storytelling. These aren't just stories—they're portals to other realities.",
      author: "Rebecca Torres",
      role: "Science Fiction Editor"
    },
    {
      quote: "The depth and quality of narratives here surpass anything I've encountered in traditional publishing.",
      author: "Dr. James Wright",
      role: "Literature Professor"
    },
    {
      quote: "As both reader and writer, Nexus represents the future of interactive, immersive storytelling.",
      author: "Michael Chen",
      role: "Award-winning Author"
    }
  ];

  // Upcoming events
  const events = [
    {
      title: "Virtual Reality Storytelling Workshop",
      date: "June 15, 2023",
      description: "Learn how to craft immersive narratives for VR platforms with industry experts."
    },
    {
      title: "Annual Nexus Writers Conference",
      date: "July 22-24, 2023",
      description: "Three days of panels, workshops, and networking with top speculative fiction authors."
    },
    {
      title: "AI Collaboration Challenge",
      date: "August 5-12, 2023",
      description: "Explore creative partnerships between human authors and artificial intelligence."
    }
  ];

  // Knowledge Hub topics
  const knowledgeHubTopics = [
    {
      title: "Quantum Mechanics for Sci-Fi Writers",
      description: "Understanding the science behind quantum fiction",
      articles: 24,
      icon: "⚛️"
    },
    {
      title: "Cybersecurity in Dystopian Worlds",
      description: "Building believable hacker cultures and digital societies",
      articles: 18,
      icon: "🔒"
    },
    {
      title: "Astrobiology and Alien Life",
      description: "Creating scientifically plausible extraterrestrial beings",
      articles: 31,
      icon: "👽"
    },
    {
      title: "Temporal Paradoxes Demystified",
      description: "Navigating the complexities of time travel narratives",
      articles: 15,
      icon: "🌀"
    }
  ];

  // Premium features
  const premiumFeatures = [
    {
      title: "Immersive Reading Experience",
      description: "Experience stories with interactive elements, soundscapes, and visual effects",
      icon: "🎭"
    },
    {
      title: "Author Insights",
      description: "Access exclusive interviews, behind-the-scenes content, and writing workshops",
      icon: "✍️"
    },
    {
      title: "Early Access",
      description: "Read new releases before they're available to the general public",
      icon: "🔥"
    },
    {
      title: "Community Forums",
      description: "Engage with authors and fellow readers in exclusive discussion groups",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Head>
        <title>Nexus | The World's Premier Futuristic Storytelling Platform</title>
        <meta name="description" content="Discover immersive science fiction stories in multiple languages. Explore quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nexus.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexus.com/" />
        <meta property="og:title" content="Nexus | The World's Premier Futuristic Storytelling Platform" />
        <meta property="og:description" content="Discover immersive science fiction stories in multiple languages. Explore quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <meta property="og:image" content="https://nexus.com/images/og-home.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexus.com/" />
        <meta property="twitter:title" content="Nexus | The World's Premier Futuristic Storytelling Platform" />
        <meta property="twitter:description" content="Discover immersive science fiction stories in multiple languages. Explore quantum fiction, cyberpunk, time travel, and dystopian narratives from visionary authors worldwide." />
        <meta property="twitter:image" content="https://nexus.com/images/og-home.jpg" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Nexus",
              "url": "https://nexus.com/",
              "description": "The world's premier futuristic storytelling platform featuring immersive science fiction stories in multiple languages.",
              "publisher": {
                "@type": "Organization",
                "name": "Nexus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://nexus.com/images/logo.png"
                }
              }
            })
          }}
        />
      </Head>

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Futuristic grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 15px 15px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Hero Section with Futuristic Horror Elements */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Animated floating particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-cyan-400 opacity-20"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: Math.random() * 5 + 's'
              }}
            ></div>
          ))}
        </div>
        
        {/* Glowing central orb */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                NEXUS
              </span>
            </h1>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <h2 className="relative text-2xl md:text-4xl font-semibold text-gray-200 px-4 py-2">
                WHERE FUTURES COLLIDE AND STORIES TRANSFORM REALITY
              </h2>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in premium narratives crafted by visionary authors exploring the boundaries of human imagination, 
            where each story opens portals to worlds that blur the line between dreams and nightmares.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link href="/stories">
              <button className="relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 group overflow-hidden">
                <span className="relative z-10">Enter the Narrative</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </Link>
            <Link href="/premium-stories">
              <button className="relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group overflow-hidden">
                <span className="relative z-10">Premium Stories</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5" />
                  </svg>
                </div>
              </button>
            </Link>
            <Link href="/image-stories">
              <button className="relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 group overflow-hidden">
                <span className="relative z-10">Visual Stories</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </button>
            </Link>
            <Link href="/membership">
              <button className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                Unlock Premium Access
              </button>
            </Link>
          </div>
          
          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">10K+</div>
              <div className="text-gray-400">Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">500+</div>
              <div className="text-gray-400">Authors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">1M+</div>
              <div className="text-gray-400">Readers</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-purple-900/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Knowledge Hub
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expand your understanding with expert-curated resources on the science and philosophy behind speculative fiction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {knowledgeHubTopics.map((topic, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {topic.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-cyan-300 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {topic.description}
                </p>
                <div className="text-center">
                  <span className="text-cyan-400 font-medium">{topic.articles} articles</span>
                </div>
                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-500 hover:to-blue-500">
                    Explore Topic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Featured Narratives
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Journey through our most resonant stories, where imagination meets cutting-edge speculation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredStories.map((story) => (
              <div 
                key={story.id} 
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-3 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-7">
                  <div className="h-56 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 rounded-xl mb-7 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSIxMCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iOTAlIiBjeT0iMTAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjkwJSIgY3k9IjkwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIxMCUiIGN5PSI5MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                    <div className="text-center relative z-10">
                      <div className="text-6xl mb-3 filter drop-shadow-lg">🌌</div>
                      <span className="text-sm text-gray-400">Story Portal</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors">{story.title}</h3>
                    <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                      {story.resonance}% Resonance
                    </span>
                  </div>
                  
                  <p className="text-cyan-400 mb-3 text-base">by {story.author}</p>
                  <p className="text-gray-400 text-base mb-5 line-clamp-2">{story.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-7">
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">{story.genre}</span>
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">{story.mood}</span>
                  </div>
                  
                  <Link href={`/story/${story.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-600/80 to-purple-600/80 rounded-lg text-base font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500 transform hover:-translate-y-0.5">
                      Enter Story
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/stories">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50">
                Explore Full Collection
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Ultra Premium Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Elevate your storytelling journey with exclusive features designed for discerning readers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {feature.description}
                </p>
                <div className="mt-6 text-center">
                  <Link href="/membership">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Exploration Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Explore by Genre
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover stories across our diverse collection of speculative fiction categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genres.map((genre, index) => (
              <div 
                key={index} 
                className="group p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {genre.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors">
                  {genre.name}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {genre.description}
                </p>
                <div className="text-center">
                  <span className="text-cyan-400 font-medium">{genre.stories} stories</span>
                </div>
                <div className="mt-6 text-center">
                  <Link href={`/stories?genre=${encodeURIComponent(genre.name)}`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                      Explore {genre.name}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Authors Section */}
      <section className="py-24 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Visionary Authors
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the architects of tomorrow's imagination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingAuthors.map((author) => (
              <div 
                key={author.id} 
                className="flex flex-col p-7 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-900/50 to-purple-900/50 flex-shrink-0 mr-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjMiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-cyan-300 transition-colors">{author.name}</h3>
                    <p className="text-cyan-400 text-base mb-1">{author.specialty}</p>
                    <div className="flex text-sm text-gray-400">
                      <span className="mr-4">{author.stories} stories</span>
                      <span>{author.followers} followers</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {author.bio}
                </p>
                <div className="flex justify-between">
                  <Link href={`/author/${author.id}`}>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-300">
                      View Profile
                    </button>
                  </Link>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg text-sm font-medium transition-all duration-300">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/authors">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50">
                Discover All Authors
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reader Testimonials */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Reader Experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What our community says about their journey through Nexus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="text-4xl text-green-400 mb-6">❝</div>
                <p className="text-gray-300 text-lg mb-8 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-green-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Community Events
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our upcoming gatherings, workshops, and collaborative projects
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-start p-8 mb-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="text-2xl font-bold text-purple-400">{event.date}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {event.description}
                  </p>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-base font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/community">
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-lg border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-purple-500/50">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Ready to Transcend Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join our community of explorers and become part of the future of storytelling
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/membership">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                  Become a Member
                </button>
              </Link>
              <Link href="/community">
                <button className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-full font-bold text-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-cyan-500/50">
                  Join Our Community
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}