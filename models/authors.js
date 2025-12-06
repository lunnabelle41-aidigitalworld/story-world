// Authors data
const authors = [
  {
    id: 1,
    name: "Dr. Elena Vasquez",
    specialty: "Quantum Fiction",
    bio: "Renowned physicist turned storyteller, exploring the intersection of hard science and narrative possibility. With a PhD in Quantum Mechanics from MIT and over a decade of research experience, Elena brings authentic scientific rigor to her speculative fiction.",
    stories: 24,
    followers: 12400,
    following: 342,
    genres: ["Hard Sci-Fi", "Quantum Fiction", "Speculative Science", "Time Travel"],
    avatar: "",
    verified: true,
    joinDate: "2023-05-15",
    languages: ["english", "spanish", "french", "german", "chinese"],
    website: "https://dr-elena-vasquez.com",
    social: {
      twitter: "@DrElenaVasquez",
      linkedin: "dr-elena-vasquez-phd"
    },
    achievements: [
      "Nebula Award Winner (2024)",
      "John W. Campbell Memorial Award (2023)",
      "Hugo Award Finalist (2023, 2024)",
      "Published in Nature Journal (2022)",
      "MIT Physics Department Alumna"
    ]
  },
  {
    id: 2,
    name: "Alex Rivera",
    specialty: "Cyber Mysteries",
    bio: "Former cybersecurity expert crafting noir tales in digital landscapes of tomorrow. Alex brings authentic technical knowledge to his cyberpunk narratives, creating stories that feel both futuristic and eerily plausible.",
    stories: 31,
    followers: 15200,
    following: 421,
    genres: ["Cyberpunk", "Digital Noir", "Techno-Thriller", "AI Dystopia"],
    avatar: "",
    verified: true,
    joinDate: "2022-11-30",
    languages: ["english", "spanish", "french", "german"],
    website: "https://alexriverra.com",
    social: {
      twitter: "@AlexRiveraWR",
      linkedin: "alex-rivera-writer"
    },
    achievements: [
      "Philip K. Dick Award Finalist (2024)",
      "Cyberpunk Writers Guild Member",
      "Former Senior Security Analyst at TechGlobal",
      "BS Computer Science, Stanford University"
    ]
  },
  {
    id: 3,
    name: "Sophia Williams",
    specialty: "Social Futurism",
    bio: "Sociologist examining tomorrow's societal structures through speculative fiction lenses. Sophia's background in urban sociology informs her dystopian and utopian narratives, creating worlds that feel both fantastical and deeply human.",
    stories: 27,
    followers: 14200,
    following: 387,
    genres: ["Dystopian", "Utopian Fiction", "Social Sci-Fi"],
    avatar: "",
    verified: true,
    joinDate: "2022-09-05",
    languages: ["english", "spanish", "french"],
    website: "https://sophiawritesfutures.com",
    social: {
      twitter: "@SophiaWFutures",
      linkedin: "sophia-williams-futurist"
    },
    achievements: [
      "Arthur C. Clarke Award Shortlist (2023)",
      "PhD in Sociology, Oxford University",
      "Fulbright Scholar",
      "Contributor to Future Studies Quarterly"
    ]
  },
  {
    id: 4,
    name: "Marcus Chen",
    specialty: "Biopunk Narratives",
    bio: "Bioengineer specializing in genetic narratives that blur the line between science and fiction. Marcus draws from his experience in synthetic biology to craft stories that explore the ethical implications of biotechnology.",
    stories: 18,
    followers: 9700,
    following: 298,
    genres: ["Biopunk", "Genetic Fiction", "Medical Thriller"],
    avatar: "",
    verified: true,
    joinDate: "2023-08-22",
    languages: ["english", "chinese"],
    website: "https://marcuschenbiofiction.com",
    social: {
      twitter: "@BioNarrativeMC",
      linkedin: "marcus-chen-biofiction"
    },
    achievements: [
      "BS Bioengineering, UC Berkeley",
      "Former Research Scientist at BioTech Innovations",
      "Published in Journal of Synthetic Biology",
      "Winner, BioSci-Fi Short Story Contest (2023)"
    ]
  },
  {
    id: 5,
    name: "Zara Nightshade",
    specialty: "Cyber Mysteries",
    bio: "Digital anthropologist exploring virtual societies and online consciousness. Zara's unique perspective on how technology shapes human interaction informs her noir-style cyber mysteries set in fully realized digital worlds.",
    stories: 22,
    followers: 11500,
    following: 356,
    genres: ["Cyberpunk", "Digital Noir", "Virtual Reality Fiction"],
    avatar: "",
    verified: true,
    joinDate: "2023-01-10",
    languages: ["english", "arabic"],
    website: "https://zaralooksatbytes.com",
    social: {
      twitter: "@ZaraLooksBytes",
      linkedin: "zara-nightshade-digital-anthropology"
    },
    achievements: [
      "MA Digital Anthropology, MIT",
      "TED Talk: \"Consciousness in the Cloud\" (2024)",
      "Consultant for Virtual World Design",
      "Winner, Digital Literature Award (2023)"
    ]
  },
  {
    id: 6,
    name: "Kenji Tanaka",
    specialty: "Ocean Futures",
    bio: "Marine biologist envisioning aquatic civilizations in climate-changed worlds. Kenji combines his expertise in marine ecosystems with speculative fiction to create stories that explore humanity's relationship with the ocean in future scenarios.",
    stories: 15,
    followers: 8300,
    following: 245,
    genres: ["Climate Fiction", "Aquatic Sci-Fi", "Ecological Thriller"],
    avatar: "",
    verified: false,
    joinDate: "2024-01-10",
    languages: ["english", "japanese"],
    website: "https://kenjitanksthesea.com",
    social: {
      twitter: "@KenjiTanksSea",
      linkedin: "kenji-tanaka-marbio"
    },
    achievements: [
      "PhD Marine Biology, University of Tokyo",
      "Research Fellow, Oceanographic Institute",
      "Documentary Consultant: \"Rising Tides\" (2023)",
      "Published in Marine Ecology Progress Series"
    ]
  },
  {
    id: 7,
    name: "Amara Okafor",
    specialty: "Cosmic Sociology",
    bio: "Anthropologist exploring interstellar cultures and the human condition across galaxies. Amara's background in cultural anthropology brings depth to her xenofiction, creating alien societies that feel both exotic and comprehensible.",
    stories: 19,
    followers: 11500,
    following: 312,
    genres: ["Space Opera", "Xenofiction", "Interstellar Drama"],
    avatar: "",
    verified: true,
    joinDate: "2023-03-17",
    languages: ["english", "igbo"],
    website: "https://amaraamongstars.com",
    social: {
      twitter: "@AmaraAmongStars",
      linkedin: "amara-okafor-xenoanthro"
    },
    achievements: [
      "PhD Cultural Anthropology, Harvard University",
      "Fulbright-Hays Fellow",
      "Author of \"Cultures Among Stars\" (2022)",
      "Keynote Speaker, Interstellar Studies Conference (2023)"
    ]
  }
];

// Add the missing Vietnamese authors
authors.push(
  {
    id: 132,
    name: "Nguyễn Minh Châu",
    specialty: "Khoa học viễn tưởng Thần kinh",
    bio: "Nhà văn chuyên về khoa học viễn tưởng thần kinh và tư duy nhân tạo. Với nền tảng vững chắc về khoa học thần kinh, Nguyễn Minh Châu mang đến những câu chuyện khám phá bản chất của ý thức và tư duy.",
    stories: 12,
    followers: 8500,
    following: 234,
    genres: ["Khoa học viễn tưởng Thần kinh", "Tư duy nhân tạo", "Thực tại lượng tử"],
    avatar: "",
    verified: true,
    joinDate: "2024-03-15",
    languages: ["vietnamese", "english"],
    website: "https://nguyenminhchau.com",
    social: {
      twitter: "@NguyenMinhChau",
      linkedin: "nguyen-minh-chau-writer"
    },
    achievements: [
      "Giải thưởng Văn học Khoa học Viễn tưởng Việt Nam (2023)",
      "Thành viên Hội Văn học Khoa học Viễn tưởng Quốc tế",
      "Cựu nghiên cứu sinh Đại học Stanford"
    ]
  },
  {
    id: 133,
    name: "Trần Thị Hương",
    specialty: "Khoa học viễn tưởng Thời gian",
    bio: "Nhà văn chuyên về du hành thời gian và nghịch lý thời gian. Trần Thị Hương kết hợp kiến thức vật lý lý thuyết với khả năng kể chuyện xuất sắc để tạo ra những tác phẩm hấp dẫn về thời gian và không gian.",
    stories: 9,
    followers: 7200,
    following: 198,
    genres: ["Du hành thời gian", "Nghịch lý thời gian", "Khoa học viễn tưởng xã hội"],
    avatar: "",
    verified: true,
    joinDate: "2024-05-22",
    languages: ["vietnamese", "english"],
    website: "https://tranthihuong.com",
    social: {
      twitter: "@TranThiHuong",
      linkedin: "tran-thi-huong-author"
    },
    achievements: [
      "Giải thưởng Sáng tác Khoa học Viễn tưởng (2023)",
      "Thạc sĩ Vật lý Lý thuyết, Đại học Cambridge",
      "Tác giả của 'Những Quy luật của Thời gian' (2022)"
    ]
  },
  {
    id: 134,
    name: "Lê Văn Phong",
    specialty: "Cyberpunk",
    bio: "Nhà văn chuyên về cyberpunk và công nghệ tương lai. Lê Văn Phong mang đến những câu chuyện đậm chất công nghệ với các chủ đề về trí tuệ nhân tạo, thực tế ảo và xã hội số.",
    stories: 15,
    followers: 9800,
    following: 287,
    genres: ["Cyberpunk", "Trí tuệ nhân tạo", "Xã hội số"],
    avatar: "",
    verified: true,
    joinDate: "2023-11-30",
    languages: ["vietnamese", "english"],
    website: "https://levanphong.com",
    social: {
      twitter: "@LeVanPhong",
      linkedin: "le-van-phong-cyberpunk"
    },
    achievements: [
      "Giải thưởng Văn học Công nghệ (2024)",
      "Kỹ sư Phần mềm, Đại học Berkeley",
      "Cựu chuyên gia an ninh mạng tại TechGlobal"
    ]
  }
);

export default authors;