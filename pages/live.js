import Head from 'next/head';
import Link from 'next/link';

export default function Live() {
  // Live event categories
  const liveCategories = [
    {
      id: "now-streaming",
      title: "Now Streaming",
      description: "Current live readings and author Q&A sessions",
      icon: "🔴",
      count: 3,
      color: "from-red-900 to-gray-900",
      accent_color: "red"
    },
    {
      id: "scheduled",
      title: "Scheduled",
      description: "Upcoming events and workshop schedules",
      icon: "📅",
      count: 12,
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan"
    },
    {
      id: "interactive-events",
      title: "Interactive Events",
      description: "Audience participation events and community building",
      icon: "👥",
      count: 8,
      color: "from-purple-900 to-gray-900",
      accent_color: "purple"
    },
    {
      id: "archives",
      title: "Archives",
      description: "Recorded past events and highlight reels",
      icon: "📼",
      count: 45,
      color: "from-amber-900 to-gray-900",
      accent_color: "amber"
    },
    {
      id: "watch-parties",
      title: "Watch Parties",
      description: "Synchronized group readings and live commentary",
      icon: "🎉",
      count: 6,
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald"
    }
  ];

  // Current live events
  const currentLiveEvents = [
    {
      id: 1,
      title: "Quantum Futures Reading",
      author: "Dr. Elena Vasquez",
      description: "Live reading of 'The Consciousness Gardeners' with Q&A",
      viewers: 243,
      startTime: "Live Now",
      category: "now-streaming"
    },
    {
      id: 2,
      title: "Cyberpunk Worldbuilding Workshop",
      author: "Alex Rivera",
      description: "Interactive workshop on creating immersive cyberpunk settings",
      viewers: 178,
      startTime: "Live Now",
      category: "now-streaming"
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 3,
      title: "First Contact Protocols Premiere",
      author: "Sophia Williams",
      description: "Exclusive premiere of our latest interactive story with author discussion",
      date: "Tomorrow, 7:00 PM EST",
      registrants: 542,
      category: "scheduled"
    },
    {
      id: 4,
      title: "Choose-the-Plot Live",
      author: "Community Event",
      description: "Audience-driven storytelling where you decide what happens next",
      date: "Friday, 8:00 PM EST",
      registrants: 312,
      category: "interactive-events"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Live | Nexus - Real-time Storytelling Events</title>
        <meta name="description" content="Real-time storytelling events, live readings, and community interactions" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-red-500/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-cyan-500/30 rounded-lg animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Live
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Real-time storytelling events
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience stories as they unfold in real-time with live readings, author interactions, and community events.
            </p>
          </div>
        </div>
      </section>

      {/* Current Live Events */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Now</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          {currentLiveEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {currentLiveEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <span className="inline-block px-2 py-1 text-xs font-bold text-red-300 bg-red-900/30 rounded">
                        LIVE
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">by {event.author}</p>
                    <p className="text-gray-400 mb-6">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">👥 {event.viewers} viewers</span>
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">🔴 {event.startTime}</span>
                    </div>
                    <Link href={`/live/${event.category}/${event.id}`}>
                      <button className="w-full py-3 bg-gradient-to-r from-red-600 to-cyan-600 rounded-lg font-bold hover:from-red-500 hover:to-cyan-500 transition-all duration-300">
                        Join Live Event
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center bg-gray-800/50 rounded-2xl border border-gray-700 p-12">
              <div className="text-5xl mb-6">😴</div>
              <h3 className="text-2xl font-bold mb-4">No Events Currently Live</h3>
              <p className="text-gray-400 mb-6">
                Check back soon for our next live event, or browse upcoming events below.
              </p>
              <Link href="/live/scheduled">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                  View Schedule
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Mark your calendar for these exciting live storytelling events
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-2">by {event.author}</p>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">📅 {event.date}</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">👥 {event.registrants} registered</span>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/live/${event.category}/${event.id}`}>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold text-sm hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                        Register
                      </button>
                    </Link>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold text-sm border border-gray-700 transition-all duration-300">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Categories */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Types</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our different kinds of live storytelling experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {liveCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{category.count} events</span>
                    <Link href={`/live/${category.id}`}>
                      <button className={`px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg font-medium text-sm hover:opacity-90 transition-opacity`}>
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Requirements */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Live Event Technology</h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Cutting-edge technology that makes our real-time events possible
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">📡</div>
                <h3 className="text-xl font-bold mb-2">WebRTC Streaming</h3>
                <p className="text-gray-400">
                  Low-latency video and audio streaming for real-time interaction
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-2">Real-time Chat</h3>
                <p className="text-gray-400">
                  Instant messaging and audience participation features
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-2">Synchronized Media</h3>
                <p className="text-gray-400">
                  Coordinated video/audio playback for group experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Live Community</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of real-time storytelling experiences where stories come alive through community interaction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership">
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg font-bold hover:from-red-500 hover:to-purple-500 transition-all duration-300">
                  Become a Member
                </button>
              </Link>
              <Link href="/community">
                <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                  Join Community
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}