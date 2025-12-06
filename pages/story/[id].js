import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// This function gets called at build time to pre-render dynamic routes
export async function getStaticPaths() {
  // Import stories data
  const storiesModule = await import('../../models/stories');
  const storiesData = storiesModule.default;
  
  // Flatten all stories from all languages
  const allStories = Object.values(storiesData).flat();
  
  // Add our special Urdu story to the paths
  const paths = [
    { params: { id: '99999' } }, // Special Urdu visual story
    ...allStories.map((story) => ({
      params: { id: story.id.toString() },
    }))
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time to pre-render dynamic routes
export async function getStaticProps({ params }) {
  // Import stories and authors data
  const storiesData = await import('../../models/stories');
  const authorsData = await import('../../models/authors');
  
  // Flatten all stories from all languages
  const allStories = Object.values(storiesData.default).flat();
  
  // Check if this is our special Urdu story
  if (params.id === '99999') {
    // Create the special Urdu visual story
    const urduVisualStory = {
      id: 99999,
      title: "آئینہ شہر",
      author: "علی احمد",
      authorId: 132,
      excerpt: "مستقبل کے شہر میں ہولوگرامک آئینے انسانیت کی آخری امید بن جاتے ہیں۔ جب تمام ذخائر ختم ہو جاتے ہیں تو صرف ان آئینوں کی مدد سے نئی دنیا کی تعمیر ممکن ہوتی ہے۔",
      genre: "ہولوگرامک فکشن",
      mood: "رازیہ",
      futurismType: "ہولوگرامک تکنالوجی",
      length: "قصہ",
      resonance: 97,
      publishDate: "2025-12-05",
      readTime: "35 منٹ",
      language: "urdu",
      categories: ["holographic", "future-city", "survival"],
      isVisualStory: true,
      content: `
        <p>2089ء کے ستمبر کی سرد صبح، جب آسمان سرخ ہو چکا تھا، فاروق نے آئینہ شہر کے مرکزی ہال میں داخل ہونا تھا۔ اس نے اپنے ہاتھوں میں ہولوگرامک پروجیکٹر کو مضبوطی سے تھامے ہوئے دروازہ کھولا۔</p>
        
        <div class="my-8 text-center">
          <div class="inline-block p-4 bg-gray-800 rounded-xl border border-cyan-500/30">
            <img src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="آئینہ شہر کا اندرونی ہال" class="rounded-lg h-80 w-full max-w-2xl object-cover">
            <p class="mt-4 text-sm text-gray-400">تصویر 1: آئینہ شہر کا مرکزی ہال جہاں تمام ہولوگرامک تصاویر کا انتظام ہوتا ہے</p>
          </div>
        </div>
        
        <p>"یہ آخری بیچ ہے،" فاروق نے خود کو آہستہ آہستہ کمرے میں دھکیلا۔ "اگر ہم نے آج یہ ہولوگرامک ماحول بنایا تو صرف پھر ہی انسانیت کو نئی دنیا میں نئی زندگی کا موقع مل سکے گا۔"</p>
        
        <div class="my-8 text-center">
          <div class="inline-block p-4 bg-gray-800 rounded-xl border border-purple-500/30">
            <img src="https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ہولوگرامک پروجیکٹر" class="rounded-lg h-80 w-full max-w-2xl object-cover">
            <p class="mt-4 text-sm text-gray-400">تصویر 2: فاروق کے ہاتھ میں موجود ہولوگرامک پروجیکٹر جو پوری دنیا کو تبدیل کرنے والا ہے</p>
          </div>
        </div>
        
        <p>ہولوگرامک تصاویر نے کمرے کو ایک جادوئی مقام میں تبدیل کر دیا تھا۔ ہر دیوار پر مختلف مناظر نظر آ رہے تھے - ایک سبز ہر چھاؤں والی دنیا، ایک پانی کے جھیل، اور ایک بلند پہاڑوں والی سرزمین۔</p>
        
        <div class="my-8 text-center">
          <div class="inline-block p-4 bg-gray-800 rounded-xl border border-green-500/30">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="ہولوگرامک مناظر" class="rounded-lg h-80 w-full max-w-2xl object-cover">
            <p class="mt-4 text-sm text-gray-400">تصویر 3: ہولوگرامک تصاویر کے ذریعے تخلیق کردہ مختلف قدرتی مناظر</p>
          </div>
        </div>
        
        <p>"اب ہمیں صرف ایک چیز درکار ہے،" فاروق نے کہا، "ایک ایسا مقام جہاں ہم ان ہولوگرامک تصاویر کو حقیقت میں تبدیل کر سکیں۔"</p>
        
        <div class="my-8 text-center">
          <div class="inline-block p-4 bg-gray-800 rounded-xl border border-amber-500/30">
            <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="نیا آغاز" class="rounded-lg h-80 w-full max-w-2xl object-cover">
            <p class="mt-4 text-sm text-gray-400">تصویر 4: آئینہ شہر سے باہر نیا آغاز کرنے کے لیے تیاری</p>
          </div>
        </div>
        
        <p>جب فاروق نے ہولوگرامک پروجیکٹر کو آن کیا تو پورا کمرہ چمک اٹھا۔ ایک نئی دنیا تخلیق ہو رہی تھی - ایک ایسی دنیا جہاں انسانیت کو نئی زندگی کا موقع مل سکے گا۔</p>
      `
    };

    // Find the author
    const author = authorsData.default.find(a => a.id === urduVisualStory.authorId);

    return {
      props: {
        story: urduVisualStory,
        author: author || null,
        isVisualStory: true
      },
    };
  }

  // Find the story by ID
  const story = allStories.find(s => s.id == params.id);
  
  // If no story found, redirect to 404
  if (!story) {
    return {
      notFound: true,
    };
  }
  
  // Check if this is a visual story (based on content keywords)
  const isVisualStory = story.content.toLowerCase().includes('visual') || 
                        story.content.toLowerCase().includes('scene') || 
                        story.content.toLowerCase().includes('image') || 
                        story.content.toLowerCase().includes('picture') || 
                        story.content.toLowerCase().includes('cover') ||
                        story.title.toLowerCase().includes('visual') ||
                        story.excerpt.toLowerCase().includes('visual');

  // Find the author
  const author = authorsData.default.find(a => a.id === story.authorId);

  return {
    props: {
      story,
      author: author || null,
      isVisualStory
    },
  };
}

export default function StoryPage({ story, author, isVisualStory }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to enhance story content with visual elements for visual stories
  const enhanceStoryContentWithImages = (content) => {
    // Add visual enhancements to the content
    let enhancedContent = content;
    
    // Add image placeholders at strategic points in the story
    // This is a simple enhancement - in a real app, you would have actual images
    if (story.title.includes("Dream")) {
      // Add dream visualization image
      enhancedContent = enhancedContent.replace(
        '</p>',
        '</p><div class="my-8 text-center"><div class="inline-block p-4 bg-gray-800 rounded-xl border border-purple-500/30"><div class="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-lg h-64 w-96 flex items-center justify-center relative overflow-hidden"><div class="absolute inset-0 bg-[url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjMiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iMjAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI4MCUiIGN5PSI3MCUiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjxjaXJjbGUgY3g9IjMwJSIgY3k9IjcwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA3Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDkiLz48L3N2Zz4=\')] opacity-30"></div><div class="text-center relative z-10"><div class="text-5xl mb-3">💭</div><p class="text-gray-300">Dream Visualization</p></div></div></div><p class="mt-4 text-sm text-gray-400">Artist\'s interpretation of the dream landscape</p></div>'
      );
      
      // Add nightmare visualization image
      enhancedContent = enhancedContent.replace(
        'In the depths of the collective unconscious, ancient fears stirred',
        '<div class="my-8 text-center"><div class="inline-block p-4 bg-gray-800 rounded-xl border border-red-500/30"><div class="bg-gradient-to-r from-red-900/50 to-gray-900/50 rounded-lg h-64 w-96 flex items-center justify-center relative overflow-hidden"><div class="absolute inset-0 bg-[url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjMiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCIvPjxjaXJjbGUgY3g9IjIwJSIgY3k9IjMwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PGNpcmNsZSBjeD0iODAlIiBjeT0iNzAlIiByPSIyIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDQiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjcwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA2Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDciLz48L3N2Zz4=\')] opacity-20"></div><div class="text-center relative z-10"><div class="text-5xl mb-3">👻</div><p class="text-gray-300">Nightmare Manifestation</p></div></div></div><p class="mt-4 text-sm text-gray-400">Conceptual representation of primordial fears</p></div><p>In the depths of the collective unconscious, ancient fears stirred'
      );
    }
    
    return enhancedContent;
  };

  // If story not found, show 404
  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
          <Link href="/stories">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-medium transition-all duration-300 hover:from-cyan-500 hover:to-purple-500">
              Back to Stories
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{story.title} by {author?.name || story.author} - Nexus</title>
        <meta name="description" content={`${story.excerpt} Read this immersive science fiction story in ${story.language} exploring themes of ${story.genre}, ${story.mood}, and ${story.futurismType}.`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://nexus.com/story/${story.id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://nexus.com/story/${story.id}`} />
        <meta property="og:title" content={`${story.title} by ${author?.name || story.author} - Nexus`} />
        <meta property="og:description" content={`${story.excerpt} Read this immersive science fiction story in ${story.language} exploring themes of ${story.genre}, ${story.mood}, and ${story.futurismType}.`} />
        <meta property="og:image" content={`https://nexus.com/images/og-story-${story.id}.jpg`} />
        <meta property="article:published_time" content={story.publishDate} />
        <meta property="article:author" content={author?.name || story.author} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://nexus.com/story/${story.id}`} />
        <meta property="twitter:title" content={`${story.title} by ${author?.name || story.author} - Nexus`} />
        <meta property="twitter:description" content={`${story.excerpt} Read this immersive science fiction story in ${story.language} exploring themes of ${story.genre}, ${story.mood}, and ${story.futurismType}.`} />
        <meta property="twitter:image" content={`https://nexus.com/images/og-story-${story.id}.jpg`} />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": story.title,
              "description": story.excerpt,
              "author": {
                "@type": "Person",
                "name": author?.name || story.author,
                "url": author ? `https://nexus.com/author/${author.id}` : undefined
              },
              "datePublished": story.publishDate,
              "dateModified": story.publishDate,
              "wordCount": story.content.split(' ').length,
              "articleBody": story.content.replace(/<[^>]*>/g, '').substring(0, 200),
              "articleSection": story.genre,
              "inLanguage": story.language,
              "keywords": [story.genre, story.mood, story.futurismType, ...story.categories],
              "publisher": {
                "@type": "Organization",
                "name": "Nexus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://nexus.com/images/logo.png"
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://nexus.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Stories",
                    "item": "https://nexus.com/stories"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": story.title,
                    "item": `https://nexus.com/story/${story.id}`
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <section className="mb-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/stories" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Stories
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-200">{story.title}</span>
          </nav>
        </section>

        {/* Story Header */}
        <section className="mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="h-80 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iMjAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48Y2lyY2xlIGN4PSI4MCUiIGN5PSI3MCUiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjxjaXJjbGUgY3g9IjMwJSIgY3k9IjcwJSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA3Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDkiLz48L3N2Zz4=')] opacity-20"></div>
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-4 filter drop-shadow-lg">
                      {isVisualStory ? '🖼️' : '📖'}
                    </div>
                    <span className="text-gray-400">
                      {isVisualStory ? 'Visual Story' : 'Story Cover'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  {story.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Link href={author ? `/author/${author.id}` : '#'}>
                    <span className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                      by {author?.name || story.author}
                    </span>
                  </Link>
                  {author?.verified && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Author
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  {story.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1.5 rounded-full text-sm">
                    {story.genre}
                  </span>
                  <span className="bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-full text-sm">
                    {story.mood}
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full text-sm">
                    {story.length}
                  </span>
                  <span className="bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full text-sm capitalize">
                    {story.language}
                  </span>
                  <span className="bg-amber-900/50 text-amber-300 px-3 py-1.5 rounded-full text-sm">
                    {story.resonance}% Resonance
                  </span>
                  {isVisualStory && (
                    <span className="bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-full text-sm">
                      Visual Story
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-6 text-gray-400">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{story.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Story Banner */}
        {isVisualStory && (
          <section className="mb-8">
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center">
                <div className="text-2xl mr-4">🖼️</div>
                <div>
                  <h3 className="font-bold text-purple-300">Visual Story Experience</h3>
                  <p className="text-gray-300">This story includes interactive visual elements and enhanced imagery</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Story Content */}
        <section className="mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 prose prose-invert max-w-none">
            {/* Add visual enhancements for visual stories */}
            {isVisualStory ? (
              <div dangerouslySetInnerHTML={{ 
                __html: enhanceStoryContentWithImages(story.content) 
              }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: story.content }} />
            )}
          </div>
        </section>

        {/* FAQ Section for AEO */}
        <section className="mb-12">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-cyan-300">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">What is the main theme of "{story.title}"?</h3>
                <p className="text-gray-300">
                  This {story.genre} story explores themes of {story.mood.toLowerCase()} and {story.futurismType.toLowerCase()}, 
                  focusing on {story.excerpt.substring(0, 100)}...
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Who is the author of this story?</h3>
                <p className="text-gray-300">
                  "{story.title}" was written by {author?.name || story.author}, a renowned author specializing in {story.genre} fiction. 
                  {author?.bio ? ` ${author.bio.substring(0, 150)}...` : ''}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">What genre does this story belong to?</h3>
                <p className="text-gray-300">
                  This story falls under the {story.genre} genre, characterized by {story.mood.toLowerCase()} themes and {story.futurismType.toLowerCase()} elements. 
                  It's classified as a {story.length.toLowerCase()} with an estimated reading time of {story.readTime}.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">When was this story published?</h3>
                <p className="text-gray-300">
                  "{story.title}" was published on {new Date(story.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} with a resonance rating of {story.resonance}%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Box */}
        {author && (
          <section className="mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="h-48 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">👤</div>
                      <span className="text-gray-400">Author Avatar</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold mb-4 text-purple-300">
                    About the Author
                  </h2>
                  
                  <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                  
                  <p className="text-gray-300 mb-4">
                    {author.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {author.genres.map((genre, index) => (
                      <span key={index} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="text-gray-400">
                      <span className="font-bold text-white">{author.stories}</span> stories
                    </div>
                    <div className="text-gray-400">
                      <span className="font-bold text-white">{(author.followers / 1000).toFixed(1)}K</span> followers
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link href={`/author/${author.id}`}>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                        View Author Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navigation Buttons */}
        <section className="flex flex-wrap justify-between gap-4 mb-12">
          <Link href="/stories">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">
              ← Back to Stories
            </button>
          </Link>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-purple-500/50">
              ❤️ Like
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">
              📤 Share
            </button>
          </div>
        </section>
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