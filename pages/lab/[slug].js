import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LabSection() {
  const router = useRouter();
  const { slug } = router.query;

  // Define lab sections data
  const labSections = {
    experiments: {
      title: "Experiments",
      description: "Ongoing experimental storytelling projects and prototypes",
      icon: "🔬",
      color: "from-cyan-900 to-gray-900",
      accent_color: "cyan",
      content: "Explore our cutting-edge experiments in interactive storytelling, narrative AI, and immersive experiences. These projects represent our ongoing research into the future of digital literature."
    },
    tools: {
      title: "Tools",
      description: "Creative tools for authors in beta testing",
      icon: "🛠️",
      color: "from-purple-900 to-gray-900",
      accent_color: "purple",
      content: "Access beta versions of our authoring tools designed to help writers create innovative, interactive narratives. These tools are constantly evolving based on user feedback and technological advances."
    },
    research: {
      title: "Research",
      description: "Academic papers and insights on storytelling & neuroscience",
      icon: "📚",
      color: "from-amber-900 to-gray-900",
      accent_color: "amber",
      content: "Dive into our research publications exploring the intersection of storytelling, cognitive science, and emerging technologies. Our findings inform both our platform development and our understanding of narrative impact."
    },
    playground: {
      title: "Playground",
      description: "Sandbox for testing new formats and user-submitted experiments",
      icon: "🎪",
      color: "from-emerald-900 to-gray-900",
      accent_color: "emerald",
      content: "A creative sandbox where our community can experiment with new storytelling formats and share their innovations. This space showcases user-generated experimental narratives and provides tools for collaborative creation."
    }
  };

  // Get the current section data
  const section = labSections[slug] || null;

  // If section not found, show 404-like message
  if (!section) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Lab Section Not Found</h1>
          <p className="text-gray-400 mb-8">The requested laboratory section could not be found.</p>
          <Link href="/lab">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
              Back to Laboratory
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{section.title} | Nexus Laboratory</title>
        <meta name="description" content={section.description} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link href="/lab">
            <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <span className="mr-2">←</span> Back to Laboratory
            </button>
          </Link>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden mb-12">
            <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{section.icon}</span>
                <h1 className="text-4xl font-bold">{section.title}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">{section.description}</p>
              <p className="text-gray-400">{section.content}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
              <p className="text-gray-300 mb-6">
                This section currently contains several active projects. New experiments are added regularly as we continue to push the boundaries of digital storytelling.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-bold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                View Projects
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Contribute</h2>
              <p className="text-gray-300 mb-6">
                We welcome contributions from the community. Whether you're a writer, developer, researcher, or enthusiast, there are opportunities to participate in our experimental programs.
              </p>
              <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold border border-gray-700 transition-all duration-300">
                Learn How to Contribute
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <h2 className="text-2xl font-bold mb-6">About This Section</h2>
            <p className="text-gray-300 mb-6">
              The Nexus Laboratory is our dedicated space for experimentation and innovation in digital storytelling. 
              Each section represents a different approach to pushing the boundaries of narrative form and reader engagement.
            </p>
            <p className="text-gray-300">
              Our lab operates on the principle that the future of storytelling lies in the intersection of creative vision 
              and technological possibility. By providing a platform for bold experimentation, we aim to discover new 
              forms of narrative that can only exist in the digital medium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// getStaticPaths - generates all possible paths for lab sections
export async function getStaticPaths() {
  const sections = ['experiments', 'tools', 'research', 'playground'];
  
  const paths = sections.map(section => ({
    params: { slug: section }
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