import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import collections from '../../models/collections';

export default function ArchiveCollection() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the collection by slug
  const collection = collections.find(collection => collection.slug === slug);

  // If collection not found, show 404-like message
  if (!collection) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
          <p className="text-gray-400 mb-8">The requested collection could not be found.</p>
          <Link href="/archive">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
              Back to Archive
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{collection.title} | The Nexus Archive</title>
        <meta name="description" content={collection.description} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link href="/archive">
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Archive
            </button>
          </Link>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden mb-12">
            <div className={`h-2 bg-gradient-to-r ${collection.color}`}></div>
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h1 className="text-4xl font-bold">{collection.title}</h1>
                {collection.is_premium && (
                  <span className="inline-block px-3 py-1 text-sm font-bold text-amber-300 bg-amber-900/30 rounded-full">
                    PREMIUM COLLECTION
                  </span>
                )}
              </div>
              <p className="text-xl text-gray-300 mb-8">{collection.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  <span>{collection.rating}/5</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">⏱️</span>
                  <span>{collection.estimated_read_time}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-2">📚</span>
                  <span>{collection.story_count} stories</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300">
                  Read Collection
                </button>
                {collection.special_features.interactive_timeline && (
                  <Link href={`/archive/${collection.slug}/timeline`}>
                    <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                      Interactive Timeline
                    </button>
                  </Link>
                )}
                {collection.special_features.comparison_tool && (
                  <Link href={`/archive/${collection.slug}/compare`}>
                    <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                      Compare Models
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">About This Collection</h2>
              <p className="text-gray-300 mb-6">
                This collection explores various aspects of {collection.title.toLowerCase()}, bringing together 
                diverse perspectives and narratives that examine the theme from multiple angles.
              </p>
              <p className="text-gray-300">
                Curated by our expert team, these stories represent the finest examples of speculative fiction 
                dealing with this important theme in contemporary science fiction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Collection Features</h2>
              <ul className="space-y-4">
                {collection.special_features.interactive_timeline && (
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Interactive Timeline</span>
                  </li>
                )}
                {collection.special_features.comparison_tool && (
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Comparison Tool</span>
                  </li>
                )}
                {collection.special_features.expert_commentary && (
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Expert Commentary</span>
                  </li>
                )}
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Curator Notes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Discussion Forum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// getStaticPaths - generates all possible paths for collections
export async function getStaticPaths() {
  const paths = collections.map(collection => ({
    params: { slug: collection.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

// getStaticProps - passes data to the component
export async function getStaticProps({ params }) {
  return {
    props: {
      // Data is fetched client-side in this case
    }
  };
}