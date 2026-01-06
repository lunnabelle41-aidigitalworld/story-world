import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LunaAndTheWhisperingWoods() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>Luna and the Whispering Woods | Premium Story | Nexus</title>
        <meta name="description" content="A young girl discovers a magical forest where trees share ancient secrets and woodland creatures become her closest friends." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Ad - Only show if component is mounted */}
        {isMounted && (
          <div className="my-8">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-2894915343289598"
              data-ad-slot="2228311077"
            ></ins>
          </div>
        )}

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Luna and the Whispering Woods
            </h1>
            <div className="flex items-center justify-center text-gray-400 mb-4">
              <span className="mr-4">by Emma Rodriguez</span>
              <span>•</span>
              <span className="ml-4">15 min read</span>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A young girl discovers a magical forest where trees share ancient secrets and woodland creatures become her closest friends.
            </p>
          </header>

          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Luna entering the Whispering Woods" 
                className="w-full max-w-4xl h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Luna enters the magical Whispering Woods</p>
              </div>
            </div>
          </div>

          <p>Luna was only seven years old, but she had already discovered the secret path through the Whispering Woods. Every morning before breakfast, she would slip out of her cottage and follow the winding trail that led deep into the forest. The trees seemed to lean in and whisper secrets as she passed, sharing stories of the ancient times when magic flowed as freely as the streams.</p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <img 
                src="https://images.unsplash.com/photo-1534188753411-3e9bd37d5e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Rainbow fox" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">The Rainbow Fox</p>
                <p className="text-gray-300 text-sm">Guardian of the forest secrets</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9508c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient oak tree" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold">The Ancient Oak</p>
                <p className="text-gray-300 text-sm">Heart of the Whispering Woods</p>
              </div>
            </div>
          </div>

          <p>On this particular morning, Luna noticed something different. The ancient oak tree at the heart of the forest was glowing with a soft, silver light. As she approached, a small, iridescent fox stepped out from behind the massive trunk. Unlike any fox Luna had ever seen, this one had fur that shimmered with every color of the rainbow.</p>

          <p>"Hello, Luna," the fox spoke in a voice like wind chimes. "I am Prism, guardian of the forest's most precious secret. For years, I have watched you come here, showing respect for our trees and kindness to our creatures. Today, I believe you are ready to learn the greatest magic of all."</p>

          <div className="my-12 relative rounded-2xl overflow-hidden border-4 border-purple-500/30">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Memory Garden" 
              className="w-full max-w-4xl h-auto mx-auto rounded-2xl"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
              Memory Garden
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg">Where children's dreams take root and bloom</p>
            </div>
          </div>

          <p>Luna's eyes widened with wonder. She had always felt that the forest was special, but she never imagined she would meet a talking fox! Prism explained that the Whispering Woods were home to the Memory Garden, where the dreams and stories of children from all over the world took root and grew into magical flowers that bloomed with pure imagination.</p>

          <div className="my-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">The Power of Dreams</h3>
            <p className="text-lg mb-4">Prism explained that when children believe in magic, their dreams take root in special soil and grow into flowers that feed the forest's magic. The more children who believe, the more vibrant the garden becomes.</p>
            <p className="text-lg">"Your visits here, your respect for nature, and your willingness to believe in magic have helped our garden grow stronger," Prism said with a smile. "Will you help us share this magic with other children?"</p>
          </div>

          <p>Prism led Luna deeper into the forest, past groves of singing willows and meadows where butterflies painted stories in the air. At the center of it all was the Memory Garden, a circular clearing filled with flowers of every color imaginable. Each bloom pulsed gently with its own inner light, and when the wind blew, Luna could hear the faint echoes of children's laughter and dreams.</p>

          <div className="my-12 text-center">
            <div className="relative inline-block rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Luna with other children" 
                className="w-full max-w-4xl h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">Luna shares the magic with other children</p>
              </div>
            </div>
          </div>

          <p>Luna nodded eagerly. From that day forward, she became the forest's ambassador to the human world. She would return to the village and share stories of the Whispering Woods, inspiring other children to respect and care for nature. And sometimes, if they believed hard enough and showed true kindness to all creatures, Prism would grant them the gift of visiting the Memory Garden too.</p>

          <p>Years later, when Luna had grown up but still visited the Whispering Woods, she would see children from far and wide coming to experience the magic she had shared. The Memory Garden had grown larger than ever, fed by the dreams and wonder of countless young hearts. And Prism would smile, knowing that the magic of believing would continue for generations to come.</p>
        </article>

        <div className="mt-16 text-center">
          <Link href="/stories">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Explore More Premium Stories
            </button>
          </Link>
        </div>

        {/* Footer Ad - Only show if component is mounted */}
        {isMounted && (
          <div className="my-12">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-2894915343289598"
              data-ad-slot="2228311077"
            ></ins>
          </div>
        )}
      </div>
    </div>
  );
}