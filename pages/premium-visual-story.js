import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PremiumVisualStory() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mock story data - in a real implementation, this would come from props or API
  const story = {
    id: 1,
    title: "The Quantum Convergence",
    subtitle: "A Visual Odyssey Through Parallel Dimensions",
    author: "Dr. Elena Vasquez",
    authorId: 1,
    readTime: "12 minutes",
    publishDate: "December 5, 2025",
    excerpt: "When quantum physicists discover a convergence point between parallel dimensions, reality itself becomes a canvas for infinite possibilities.",
    theme: {
      primaryColor: "#00f5ff",
      secondaryColor: "#8a2be2",
      backgroundColor: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      textColor: "#ffffff"
    },
    sections: [
      {
        id: 1,
        type: "hero",
        title: "The Quantum Convergence",
        subtitle: "A Visual Odyssey Through Parallel Dimensions",
        backgroundImage: "https://images.unsplash.com/photo-1454789313533-1bfb0ef74302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        backgroundVideo: null,
        content: "When quantum physicists discover a convergence point between parallel dimensions, reality itself becomes a canvas for infinite possibilities."
      },
      {
        id: 2,
        type: "fullscreen",
        title: "The Discovery",
        image: "https://images.unsplash.com/photo-1518364538820-ede1c118d4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        content: "Dr. Yuki Tanaka observed the first signs of dimensional bleed-through in her laboratory. Particles were appearing and disappearing in patterns that defied conventional physics. What she initially dismissed as equipment malfunction became the most significant discovery in human history.",
        overlayColor: "rgba(0, 0, 0, 0.6)"
      },
      {
        id: 3,
        type: "split",
        title: "The Research Team",
        leftContent: {
          type: "image",
          url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          alt: "Dr. Yuki Tanaka in her laboratory"
        },
        rightContent: {
          type: "text",
          content: `<p>Dr. Yuki Tanaka leads an international team of quantum physicists at the Geneva Research Institute. Her groundbreaking work in quantum entanglement laid the foundation for detecting dimensional anomalies.</p>
          <p>Joined by Dr. Marcus Chen from MIT and Dr. Amara Okafor from the African Institute of Mathematical Sciences, the team represents a new era of collaborative scientific discovery.</p>`
        },
        ratio: "50-50"
      },
      {
        id: 4,
        type: "gallery",
        title: "Dimensional Artifacts",
        images: [
          {
            url: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Crystalline structure emitting quantum energy",
            caption: "Quantum Crystal Formation - The first artifact to exhibit dimensional properties"
          },
          {
            url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Holographic projection of parallel dimension",
            caption: "Holographic Dimensional Interface - Real-time visualization of parallel Earth"
          },
          {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Research team analyzing quantum data",
            caption: "Quantum Data Analysis - Mapping dimensional convergence patterns"
          },
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Laboratory equipment monitoring dimensional fluctuations",
            caption: "Convergence Monitoring - Tracking stability of dimensional bleed-through"
          }
        ],
        layout: "grid"
      },
      {
        id: 5,
        type: "interactive",
        title: "The Convergence Point",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        content: "At the heart of the phenomenon lies the Convergence Point - a region where the fabric of spacetime becomes permeable to parallel dimensions. Interactive hotspots reveal critical data about this unprecedented event.",
        interactions: [
          {
            x: 30,
            y: 40,
            title: "Energy Signature",
            content: "Quantum energy readings spike to 3.7 terajoules per cubic meter - unprecedented levels that challenge our understanding of physical laws."
          },
          {
            x: 70,
            y: 60,
            title: "Temporal Displacement",
            content: "Time dilation effects detected at 0.003 seconds variance. Objects near the convergence experience subjective time differently."
          },
          {
            x: 50,
            y: 20,
            title: "Gravitational Anomaly",
            content: "Gravity readings fluctuate by ±15% in the convergence zone, suggesting interaction with alternate gravitational fields."
          }
        ]
      },
      {
        id: 6,
        type: "text-video",
        title: "Implications",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-night-sky-4060-large.mp4",
        content: `<p>The discovery of dimensional convergence fundamentally alters our understanding of reality. If stable passages between dimensions can be created and controlled, humanity stands on the threshold of unlimited expansion.</p>
        <p>However, the implications extend far beyond exploration. If parallel versions of Earth exist, what moral obligations do we have to those other versions of ourselves? The convergence presents both infinite opportunity and existential questions that may define the next chapter of human evolution.</p>`,
        overlayOpacity: 0.6
      },
      {
        id: 7,
        type: "conclusion",
        title: "The Journey Continues",
        backgroundImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
        content: `<p>As Dr. Tanaka and her team prepare for the next phase of research, the world watches with anticipation. The Quantum Convergence Project represents humanity's boldest step into the unknown.</p>
        <p>In laboratories around the globe, scientists are racing to replicate and understand this phenomenon. The future is no longer bound by the limitations of a single dimension.</p>
        <p>The journey through the quantum frontier has only just begun.</p>`,
        cta: {
          text: "Explore More Quantum Stories",
          link: "/stories?genre=quantum"
        }
      }
    ]
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Visual Experience</h2>
          <p className="text-gray-400 mt-2">Preparing your cinematic journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Head>
        <title>{story.title} - Nexus Premium Visual Story</title>
        <meta name="description" content={story.excerpt} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://nexus.com/premium-visual-story/${story.id}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${story.title} - Nexus Premium Visual Story`} />
        <meta property="og:description" content={story.excerpt} />
        <meta property="og:image" content={story.sections[0].backgroundImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${story.title} - Nexus Premium Visual Story`} />
        <meta property="twitter:description" content={story.excerpt} />
        <meta property="twitter:image" content={story.sections[0].backgroundImage} />
      </Head>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Chapter Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {story.sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                document.getElementById(`section-${section.id}`).scrollIntoView({ behavior: 'smooth' });
                setCurrentSection(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Story Sections */}
      {story.sections.map((section, index) => (
        <div 
          key={section.id} 
          id={`section-${section.id}`}
          className="relative"
          onMouseEnter={() => setCurrentSection(index)}
        >
          {/* Hero Section */}
          {section.type === 'hero' && (
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
              {/* Background Image with Parallax Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${section.backgroundImage})`,
                  transform: `translateY(${window.scrollY * 0.5}px)`
                }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
              
              {/* Animated Particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-cyan-400/20"
                    style={{
                      width: `${Math.random() * 10 + 2}px`,
                      height: `${Math.random() * 10 + 2}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider">
                    Premium Visual Story
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {section.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {section.subtitle}
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>by {story.author}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{story.readTime} experience</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{story.publishDate}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center mx-auto group"
                >
                  Begin Visual Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </section>
          )}

          {/* Fullscreen Section */}
          {section.type === 'fullscreen' && (
            <section className="min-h-screen relative flex items-center justify-center">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${section.image})` }}
              >
                <div 
                  className="absolute inset-0"
                  style={{ backgroundColor: section.overlayColor || 'rgba(0, 0, 0, 0.5)' }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {section.title}
                </h2>
                
                <div className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                  {section.content}
                </div>
              </div>
            </section>
          )}

          {/* Split Screen Section */}
          {section.type === 'split' && (
            <section className="min-h-screen flex items-center py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {section.title}
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2">
                    {section.leftContent.type === 'image' && (
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <img 
                          src={section.leftContent.url} 
                          alt={section.leftContent.alt}
                          className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.rightContent.content }}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Gallery Section */}
          {section.type === 'gallery' && (
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {section.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.images.map((image, idx) => (
                    <div 
                      key={idx} 
                      className="group relative overflow-hidden rounded-2xl cursor-pointer"
                      onClick={() => {
                        // In a real implementation, this would open a lightbox
                        console.log('Opening lightbox for', image.alt);
                      }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <p className="text-white text-lg font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Interactive Section */}
          {section.type === 'interactive' && (
            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  {section.title}
                </h2>
                
                <div className="max-w-6xl mx-auto">
                  <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                    {section.content}
                  </p>
                  
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={section.image} 
                      alt="Interactive visualization of the convergence point"
                      className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                    />
                    
                    {/* Interactive Hotspots */}
                    {section.interactions.map((interaction, idx) => (
                      <div 
                        key={idx}
                        className="absolute w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform group"
                        style={{ left: `${interaction.x}%`, top: `${interaction.y}%` }}
                        onClick={() => alert(`${interaction.title}: ${interaction.content}`)}
                      >
                        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                        <span className="relative text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Text with Video Background */}
          {section.type === 'text-video' && (
            <section className="min-h-screen flex items-center py-20 relative">
              {/* Background Video */}
              <div className="absolute inset-0 overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-30"
                >
                  <source src={section.videoUrl} type="video/mp4" />
                </video>
                <div 
                  className="absolute inset-0"
                  style={{ backgroundColor: `rgba(0, 0, 0, ${section.overlayOpacity || 0.5})` }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-lg rounded-3xl p-12 border border-gray-700">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    {section.title}
                  </h2>
                  
                  <div 
                    className="prose prose-invert prose-xl max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Conclusion Section */}
          {section.type === 'conclusion' && (
            <section className="min-h-screen flex items-center relative py-20">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${section.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-black/80"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    {section.title}
                  </h2>
                  
                  <div 
                    className="text-xl md:text-2xl text-gray-200 mb-16 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  
                  <Link href={section.cta.link}>
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-bold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                      {section.cta.text}
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .prose :where(p):not(:where([class~="not-prose"] *)) {
          color: #e2e8f0;
          margin-bottom: 1.5rem;
        }
        
        .prose :where(strong):not(:where([class~="not-prose"] *)) {
          color: #00f5ff;
        }
      `}</style>
    </div>
  );
}