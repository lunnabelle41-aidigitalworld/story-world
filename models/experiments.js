// Experiments data for the Lab section
const experiments = [
  // Category A: Interactive Stories
  {
    id: "exp_001",
    type: "lab_experiment",
    category: "interactive",
    slug: "quantum-detective",
    title: "The Quantum Detective",
    parent_slug: "lab",
    developer_id: "dev_005",
    description: "A branching narrative with time travel mechanics where your choices affect both past and future events. With 27 possible endings and a visual consequence tracker.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "30 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "Three.js", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 27,
      save_slots: 5,
      real_time_elements: false,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "screen_reader", "closed_caption"],
    content_warnings: ["time_paradox_confusion", "moral_dilemmas"],
    rating: 4.9,
    estimated_completion_time: "45 minutes",
    release_date: "2024-03-01",
    is_featured: true,
    color: "from-violet-900 to-gray-900",
    accent_color: "violet"
  },
  {
    id: "exp_002",
    type: "lab_experiment",
    category: "interactive",
    slug: "corp-espionage",
    title: "Corporate Espionage Simulator",
    parent_slug: "lab",
    developer_id: "dev_007",
    description: "Real-time decision making under pressure in a cyberpunk corporate espionage scenario. Navigate through email/chat interfaces to complete missions.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "25 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "Socket.io"]
    },
    interaction_data: {
      branching_factor: 18,
      save_slots: 3,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "high_contrast_mode"],
    content_warnings: ["corporate_violence", "ethical_dilemmas"],
    rating: 4.7,
    estimated_completion_time: "35 minutes",
    release_date: "2024-04-15",
    is_featured: false,
    color: "from-cyan-900 to-gray-900",
    accent_color: "cyan"
  },
  {
    id: "exp_003",
    type: "lab_experiment",
    category: "interactive",
    slug: "memory-fragments",
    title: "Memory Fragments",
    parent_slug: "lab",
    developer_id: "dev_003",
    description: "Non-linear story told through discoverable memory fragments. Puzzle-based progression where you reconstruct the narrative by finding and connecting fragments.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "40 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "WebGL", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 32,
      save_slots: 4,
      real_time_elements: false,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "color_blind_mode"],
    content_warnings: ["memory_loss", "identity_crisis"],
    rating: 4.8,
    estimated_completion_time: "50 minutes",
    release_date: "2024-05-20",
    is_featured: true,
    color: "from-purple-900 to-gray-900",
    accent_color: "purple"
  },
  {
    id: "exp_004",
    type: "lab_experiment",
    category: "interactive",
    slug: "neural-merger",
    title: "Neural Merger",
    parent_slug: "lab",
    developer_id: "dev_009",
    description: "Experience the merging of two consciousnesses in this deeply personal interactive narrative. Your emotional responses influence how the merger unfolds.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "35 minutes",
      compatible_devices: ["desktop"],
      tech_stack: ["React", "WebAudio API", "Facial Recognition API"]
    },
    interaction_data: {
      branching_factor: 22,
      save_slots: 3,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "alternative_input"],
    content_warnings: ["psychological_distress", "identity_dissolution"],
    rating: 4.9,
    estimated_completion_time: "45 minutes",
    release_date: "2024-06-10",
    is_featured: true,
    color: "from-pink-900 to-gray-900",
    accent_color: "pink"
  },
  {
    id: "exp_005",
    type: "lab_experiment",
    category: "interactive",
    slug: "temporal-anomaly",
    title: "Temporal Anomaly",
    parent_slug: "lab",
    developer_id: "dev_011",
    description: "Navigate a time loop where each iteration reveals new information. Your choices in one timeline affect possibilities in another.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "45 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "Three.js", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 35,
      save_slots: 6,
      real_time_elements: false,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "time_extension_mode"],
    content_warnings: ["temporal_disorientation", "existential_crisis"],
    rating: 4.8,
    estimated_completion_time: "60 minutes",
    release_date: "2024-07-08",
    is_featured: false,
    color: "from-blue-900 to-gray-900",
    accent_color: "blue"
  },

  // Category B: AI-Assisted Stories
  {
    id: "exp_006",
    type: "lab_experiment",
    category: "ai-assisted",
    slug: "ai-story-weaver",
    title: "AI Story Weaver",
    parent_slug: "lab",
    developer_id: "dev_013",
    description: "Co-create stories with our AI by inputting parameters and preferences. Get unique stories tailored to your style and interests.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "20 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "TensorFlow.js"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: 10,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "voice_input"],
    content_warnings: [],
    rating: 4.6,
    estimated_completion_time: "30 minutes",
    release_date: "2024-04-05",
    is_featured: true,
    color: "from-amber-900 to-gray-900",
    accent_color: "amber"
  },
  {
    id: "exp_007",
    type: "lab_experiment",
    category: "ai-assisted",
    slug: "character-generator",
    title: "Dynamic Character Generator",
    parent_slug: "lab",
    developer_id: "dev_015",
    description: "AI generates characters based on your preferences. Characters can appear across multiple lab experiences with evolving personalities.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "15 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "GPT-API"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: 20,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "voice_input"],
    content_warnings: [],
    rating: 4.7,
    estimated_completion_time: "25 minutes",
    release_date: "2024-05-12",
    is_featured: false,
    color: "from-emerald-900 to-gray-900",
    accent_color: "emerald"
  },
  {
    id: "exp_008",
    type: "lab_experiment",
    category: "ai-assisted",
    slug: "world-builder",
    title: "AI World Builder",
    parent_slug: "lab",
    developer_id: "dev_017",
    description: "Create entire fictional worlds with AI assistance. Define parameters and let the AI generate consistent geography, cultures, and histories.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "30 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "GPT-API", "DALL-E API"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: 15,
      real_time_elements: true,
      multiplayer: true
    },
    accessibility_features: ["keyboard_nav", "voice_input", "visual_descriptions"],
    content_warnings: [],
    rating: 4.8,
    estimated_completion_time: "45 minutes",
    release_date: "2024-06-25",
    is_featured: true,
    color: "from-green-900 to-gray-900",
    accent_color: "green"
  },
  {
    id: "exp_009",
    type: "lab_experiment",
    category: "ai-assisted",
    slug: "narrative-composer",
    title: "Narrative Composer",
    parent_slug: "lab",
    developer_id: "dev_019",
    description: "Compose complex narratives with AI assistance. Mix and match story elements, characters, and plot devices to create unique tales.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "25 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "GPT-API"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: 12,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "voice_input"],
    content_warnings: [],
    rating: 4.7,
    estimated_completion_time: "35 minutes",
    release_date: "2024-08-18",
    is_featured: false,
    color: "from-teal-900 to-gray-900",
    accent_color: "teal"
  },

  // Category C: Multimedia Stories
  {
    id: "exp_010",
    type: "lab_experiment",
    category: "multimedia",
    slug: "sound-of-mars",
    title: "The Sound of Mars",
    parent_slug: "lab",
    developer_id: "dev_021",
    description: "Audio-driven narrative with spatial sound and binaural recordings for an immersive experience. Visual minimalism puts focus on the auditory journey.",
    requirements: {
      has_audio: true,
      requires_interaction: false,
      min_session_time: "22 minutes",
      compatible_devices: ["desktop", "tablet", "mobile", "headphones_recommended"],
      tech_stack: ["React", "WebAudio API", "Spatial Audio Library"]
    },
    interaction_data: {
      branching_factor: 1,
      save_slots: 1,
      real_time_elements: false,
      multiplayer: false
    },
    accessibility_features: ["closed_caption", "transcript_download", "visualizer_mode"],
    content_warnings: ["isolation", "planetary_loneliness"],
    rating: 4.9,
    estimated_completion_time: "22 minutes",
    release_date: "2024-03-22",
    is_featured: true,
    color: "from-red-900 to-gray-900",
    accent_color: "red"
  },
  {
    id: "exp_011",
    type: "lab_experiment",
    category: "multimedia",
    slug: "data-stream-noir",
    title: "Data Stream Noir",
    parent_slug: "lab",
    developer_id: "dev_023",
    description: "Story told through simulated data streams in a hacker terminal interface. Decode messages and solve puzzles to progress through the narrative.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "30 minutes",
      compatible_devices: ["desktop"],
      tech_stack: ["React", "Terminal Emulator", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 15,
      save_slots: 3,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["high_contrast_mode", "keyboard_nav", "closed_caption"],
    content_warnings: ["cyber_intrusion", "corporate_secrets"],
    rating: 4.8,
    estimated_completion_time: "40 minutes",
    release_date: "2024-05-30",
    is_featured: false,
    color: "from-lime-900 to-gray-900",
    accent_color: "lime"
  },
  {
    id: "exp_012",
    type: "lab_experiment",
    category: "multimedia",
    slug: "hologram-lover",
    title: "Hologram Lover",
    parent_slug: "lab",
    developer_id: "dev_025",
    description: "A love story experienced through augmented reality. Interact with holographic characters and environments using your device's camera.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "25 minutes",
      compatible_devices: ["mobile", "tablet_ar_supported"],
      tech_stack: ["React", "AR.js", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 12,
      save_slots: 2,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["audio_description", "closed_caption", "touch_alternatives"],
    content_warnings: ["virtual_relationship", "emotional_attachment"],
    rating: 4.7,
    estimated_completion_time: "30 minutes",
    release_date: "2024-07-14",
    is_featured: true,
    color: "from-rose-900 to-gray-900",
    accent_color: "rose"
  },
  {
    id: "exp_013",
    type: "lab_experiment",
    category: "multimedia",
    slug: "neural-symphony",
    title: "Neural Symphony",
    parent_slug: "lab",
    developer_id: "dev_027",
    description: "Experience a story through music and visuals that respond to your biometric data. If you have a heart rate monitor, the narrative adapts to your physiological responses.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "20 minutes",
      compatible_devices: ["desktop", "wearable_device_optional"],
      tech_stack: ["React", "WebAudio API", "Biometric API"]
    },
    interaction_data: {
      branching_factor: 8,
      save_slots: 1,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["fixed_narrative_mode", "closed_caption", "visualizer_mode"],
    content_warnings: ["physiological_stress", "surreal_imagery"],
    rating: 4.9,
    estimated_completion_time: "25 minutes",
    release_date: "2024-09-05",
    is_featured: true,
    color: "from-indigo-900 to-gray-900",
    accent_color: "indigo"
  },

  // Category D: Game-Like Stories
  {
    id: "exp_014",
    type: "lab_experiment",
    category: "game-like",
    slug: "colony-builder",
    title: "Colony Builder: Narrative",
    parent_slug: "lab",
    developer_id: "dev_029",
    description: "Build a colony where story emerges from your decisions. Resource management affects narrative outcomes in this blend of city builder and interactive fiction.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "60 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "Three.js", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: 5,
      real_time_elements: false,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "high_contrast_mode", "save_anywhere"],
    content_warnings: ["resource_scarcity", "colonial_ethics"],
    rating: 4.8,
    estimated_completion_time: "90 minutes",
    release_date: "2024-04-18",
    is_featured: true,
    color: "from-yellow-900 to-gray-900",
    accent_color: "yellow"
  },
  {
    id: "exp_015",
    type: "lab_experiment",
    category: "game-like",
    slug: "contact-protocol",
    title: "First Contact Protocol",
    parent_slug: "lab",
    developer_id: "dev_031",
    description: "Puzzle-solving to communicate with aliens. Linguistic discovery mechanics challenge you to decode alien languages and establish peaceful contact.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "45 minutes",
      compatible_devices: ["desktop", "tablet"],
      tech_stack: ["React", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 25,
      save_slots: 3,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "hint_system"],
    content_warnings: ["communication_failure", "xenophobia"],
    rating: 4.7,
    estimated_completion_time: "60 minutes",
    release_date: "2024-06-30",
    is_featured: false,
    color: "from-sky-900 to-gray-900",
    accent_color: "sky"
  },
  {
    id: "exp_016",
    type: "lab_experiment",
    category: "game-like",
    slug: "quantum-heist",
    title: "Quantum Heist",
    parent_slug: "lab",
    developer_id: "dev_033",
    description: "Plan and execute a heist across multiple quantum realities. Each attempt reveals new information about the target and security systems.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "50 minutes",
      compatible_devices: ["desktop"],
      tech_stack: ["React", "Three.js", "WebAudio API"]
    },
    interaction_data: {
      branching_factor: 40,
      save_slots: 4,
      real_time_elements: true,
      multiplayer: false
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "slow_motion_mode"],
    content_warnings: ["criminal_activity", "temporal_instability"],
    rating: 4.9,
    estimated_completion_time: "70 minutes",
    release_date: "2024-08-22",
    is_featured: true,
    color: "from-fuchsia-900 to-gray-900",
    accent_color: "fuchsia"
  },

  // Category E: Collaborative Stories
  {
    id: "exp_017",
    type: "lab_experiment",
    category: "collaborative",
    slug: "global-brain",
    title: "Global Brain",
    parent_slug: "lab",
    developer_id: "dev_035",
    description: "Community-written story where each user adds one paragraph. Real-time updating narrative with voting system for direction changes.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "10 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "Socket.io", "Real-time Database"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: null,
      real_time_elements: true,
      multiplayer: true
    },
    accessibility_features: ["keyboard_nav", "high_contrast_mode", "paragraph_history"],
    content_warnings: ["community_content", "moderation_required"],
    rating: 4.6,
    estimated_completion_time: "ongoing",
    release_date: "2024-03-10",
    is_featured: true,
    color: "from-green-900 to-gray-900",
    accent_color: "green"
  },
  {
    id: "exp_018",
    type: "lab_experiment",
    category: "collaborative",
    slug: "time-capsule",
    title: "Nexus Time Capsule",
    parent_slug: "lab",
    developer_id: "dev_037",
    description: "Year-long collaborative story about future predictions. Each month adds a new chapter based on current events with archives comparing predictions vs. reality.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "15 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "Real-time Database"]
    },
    interaction_data: {
      branching_factor: 12,
      save_slots: null,
      real_time_elements: true,
      multiplayer: true
    },
    accessibility_features: ["keyboard_nav", "prediction_archive", "comparison_tool"],
    content_warnings: ["speculative_content", "future_anxiety"],
    rating: 4.8,
    estimated_completion_time: "12 months",
    release_date: "2024-01-01",
    is_featured: true,
    color: "from-amber-900 to-gray-900",
    accent_color: "amber"
  },
  {
    id: "exp_019",
    type: "lab_experiment",
    category: "collaborative",
    slug: "collective-memory",
    title: "Collective Memory",
    parent_slug: "lab",
    developer_id: "dev_039",
    description: "Crowdsourced memory palace where users contribute personal and fictional memories to create a shared repository of human experience.",
    requirements: {
      has_audio: true,
      requires_interaction: true,
      min_session_time: "20 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "WebAudio API", "Real-time Database"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: null,
      real_time_elements: true,
      multiplayer: true
    },
    accessibility_features: ["keyboard_nav", "closed_caption", "memory_search"],
    content_warnings: ["personal_disclosure", "emotional_content"],
    rating: 4.7,
    estimated_completion_time: "ongoing",
    release_date: "2024-05-05",
    is_featured: false,
    color: "from-purple-900 to-gray-900",
    accent_color: "purple"
  },
  {
    id: "exp_020",
    type: "lab_experiment",
    category: "collaborative",
    slug: "shared-dreams",
    title: "Shared Dreams",
    parent_slug: "lab",
    developer_id: "dev_041",
    description: "Collaborative dream journal where users contribute surreal narrative fragments that others can weave into coherent dream sequences.",
    requirements: {
      has_audio: false,
      requires_interaction: true,
      min_session_time: "15 minutes",
      compatible_devices: ["desktop", "tablet", "mobile"],
      tech_stack: ["React", "Real-time Database"]
    },
    interaction_data: {
      branching_factor: null,
      save_slots: null,
      real_time_elements: true,
      multiplayer: true
    },
    accessibility_features: ["keyboard_nav", "dream_visualizer", "fragment_search"],
    content_warnings: ["surreal_imagery", "subconscious_content"],
    rating: 4.8,
    estimated_completion_time: "ongoing",
    release_date: "2024-07-28",
    is_featured: true,
    color: "from-indigo-900 to-gray-900",
    accent_color: "indigo"
  }
];

export default experiments;