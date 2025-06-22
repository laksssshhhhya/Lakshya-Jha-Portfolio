import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  BookOpen,
  User,
  Briefcase,
  Award,
  Heart,
  ChevronDown,
  ExternalLink,
  Star,
  Calendar,
  MapPin,
  Phone,
  Download,
  Menu,
  X,
  Target,
  Code2,
  LucideLink,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [showSocialModal, setShowSocialModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Asklet - Quiz generator",
      description:
        "Intelligent quiz generation system powered by Large Language Models to create personalized educational content.",
      tech: [
        "Python",
        "Streamlit",
        "LangChain + Groq",
        "	Pandas",
        "ReportLab",
        "Pydantic",
        "Llama 3.1-8B",
      ],
      category: "AI/ML",
      status: "Completed",
      image: (
        <img
          src="/brain.png"
          alt="brain logo"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
      details:
        "Built an adaptive quiz system that generates questions based on user preferences and difficulty levels, with real-time scoring and detailed analytics.",
      github: "https://github.com/laksssshhhhya/Asklet-Quiz_Generator",
      live: "https://asklet.streamlit.app/",
    },
    {
      id: 2,
      title: "Urban Mobility Analysis",
      description:
        "Comprehensive analysis of urban transportation patterns using data visualization and machine learning algorithms to optimize city traffic flow.",
      tech: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn + Matplotlib",
        "Pydeck",
      ],
      category: "Data Science/Data Analysis",
      status: "Completed",
      image: (
        <img
          src="/logo cab.png"
          alt="cab logo"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
      details:
        "Analyzed traffic patterns across metropolitan areas, implemented predictive models for congestion forecasting, and created interactive dashboards for city planners.",
      github: "https://github.com/laksssshhhhya/Urban-Mobility-Analysis",
    },

    {
      id: 3,
      title: "React Component Library",
      description:
        "A collection of mini-projects demonstrating various React concepts, built as part of my learning journey.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      category: "Frontend",
      status: "In Progress",
      image: (
        <img
          src="/react.png"
          alt="react logo"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
      details:
        "Developing a comprehensive library of accessible, customizable React components with TypeScript support and extensive documentation.",
      github: "https://github.com/laksssshhhhya/react-concepts-projects",
    },
    {
      id: 4,
      title: "Crime Data Analysis Dashboard",
      description:
        "Data visualization dashboard to identify crime hotspots and time-based trends using exploratory data analysis for law enforcement insights.",
      tech: ["Python", "Power BI", "Data Analytics", "Visualization"],
      category: "Data Science",
      status: "Completed",
      image: (
        <img
          src="/crime.png"
          alt="crime logo"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
      details:
        "Built comprehensive crime analysis dashboard with interactive visualizations to help law enforcement identify patterns, hotspots, and trends for better resource allocation.",
    },
    {
      id: 5,
      title: "Poetry Platform",
      description:
        "Bilingual poetry sharing platform supporting both Hindi and English with community features.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      category: "Full Stack",
      status: "In Progress",
      image: (
        <img
          src="/quill.png"
          alt="poetry logo"
          className="w-16 h-16 rounded-full object-cover"
        />
      ),
      details:
        "Creating a platform for poets to share their work in multiple languages with features like collaborative editing and community feedback.",
    },
  ];

  const poems = [
    {
      id: 1,
      title: "Moon without scars",
      language: "English",
      preview:
        "She's moonlight\nin a quiet garden,\nStars spill off her lips.\nThis is my chance...",
      category: "Contemporary Metaphorical",
      date: "2024",
      content:
        "She's moonlight\nin a quiet garden,\nStars spill off her lips.\nThis is my chance - maiden\nHow do I gaze a whole universe... Any tips?\n\nShe holds the universe \nin those shiny eyes,\nThere is a meteor shower\nwhen she cries. \n\nShe has a ethereal soul,...",
    },
    {
      id: 2,
      title: "इजाज़त",
      language: "Hindi",
      preview:
        "डूबी हुई सी रहती हैं साँसे मेरी,\nबचाए भी भला कौन मुझे\nये दरिया सी जो हैं आँखें तेरी,\nवाक़िफ़ कराए भी तो...",
      category: "Urdu-Hindi Rom",
      date: "2024",
      content:
        "डूबी हुई सी रहती हैं साँसे मेरी,\nबचाए भी भला कौन मुझे\nये दरिया सी जो हैं आँखें तेरी,\nवाक़िफ़ कराए भी तो कौन तुझे\nमेरी ख़्वाहिश-ए-दिल की डूबना चाहूँ\nइजाज़त हो अगर,\nतो मैं तेरी आँखों को समंदर लिखना चाहूँ।\n\nउन्हीं आँखों में उलझा काजल भी...",
    },
    {
      id: 3,
      title: "Wrist watch",
      language: "English",
      preview:
        "You always somehow mends the things\ninside me that are not even broken.\nYou always create an aura that makes me\nfell like my heart...",
      category: "Contemporary Romantic",
      date: "2024",
      content:
        "You always somehow mends the things\ninside me that are not even broken.\nYou always create an aura that makes me\nfell like my heart is a solemn.\nYou always know how to manage the monster behind those rib cages.\nYou know the language of poets,\nYou know why they bleed you on those pages.\n\nMay be one day you came to know, whenever...",
    },
    {
      id: 4,
      title: "Life's irony",
      language: "English",
      preview:
        "In a quiet small town, where the sunsets painted the sky in shades of pink and orange, lived a boy named Logan. His heart had a secret...",
      category: "Short story",
      date: "2024",
      content:
        "In a quiet small town, where the sunsets painted the sky in shades of pink and orange, lived a boy named Logan. His heart had a secret, one he had held for nine long years. This secret was a love, deep and unspoken, for a girl named Lana. They had been friends since childhood, but Lana was oblivious to Logan’s feelings.\n\n Logan’s best friend, Lucas, had been the keeper of this secret. One evening, unable to see his friend suffer any longer, Lucas decided it was time to reveal the truth to Lana....",
    },
    {
      id: 5,
      title: "Write Yourself as you want.",
      language: "English",
      preview:
        "I am the unpenned poem, the silent verse etched in invisible ink. I am the story that unfolds in the spaces between breaths...",
      category: "Introspective Prose",
      date: "2024",
      content:
        "I am the unpenned poem, the silent verse etched in invisible ink. I am the story that unfolds in the spaces between breaths, in the pauses of conversation, in the quiet moments when the world feels too loud. I am the one who finds solace in solitude, yet cherishes the company of others. I walk the delicate tightrope between the comfort of being alone and the warmth of human connection. I am a paradox, a quiet storm, a gentle whisper in a noisy world. My thoughts often echo the existential musings of Kafka....",
    },
  ];

  const skills = [
    { name: "C/C++", level: 90, category: "Language" },
    { name: "Python", level: 90, category: "Language" },
    { name: "Java", level: 80, category: "Language" },
    { name: "JavaScript", level: 70, category: "Language" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "React.js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "FastAPI", level: 30, category: "Backend" },
    { name: "Power BI", level: 40, category: "Analytics" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "Firebase", level: 50, category: "Cloud" },
    { name: "Data Analytics", level: 85, category: "Analytics" },
  ];

  const experiences = [
    {
      title: "B.Tech in Computer Science",
      company: "Jaypee University Of Engineering And Technology",
      period: "May 2022 - May 2026",
      location: "Guna, India",
      description:
        "Currently pursuing Bachelor's in Technology with CGPA: 8.3. Strong foundation in programming, data structures, algorithms, and software engineering.",
      achievements: [
        "CGPA: 8.3/10",
        "Core subjects: Operating System, DBMS, DSA, Software Engineering",
        "Active in coding competitions and hackathons",
        "Led multiple teams across various domains and competitions",
      ],
    },
    {
      title: "Creative Content Writer",
      company: "Writer's Pocket",
      period: "Sept 2023 - Oct 2023",
      location: "Remote",
      description:
        "Created creative and poetic content for Writer's Pocket's monthly anthology, developing engaging literary pieces.",
      achievements: [
        "Enhanced artistic appeal of publications",
        "Contributed to thematic storytelling",
        "Poetry selection for anthology",
      ],
    },
    {
      title: "Hackathon Finalist - Build-a-thon",
      company: "Saras AI Institute",
      period: "November 2024",
      location: "Online",
      description:
        "Developed a humorous chatbot to solve coding queries using Flowise AI tool in a team of four.",
      achievements: [
        "Built interactive AI-powered solution",
        "Focused on engagement and humor",
        "Team collaboration and project management",
        "Lead the team effectively",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "poetry",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="text-6xl mb-4">{project.image}</div>
        <p className="text-gray-300 mb-4">{project.details}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-300"
                : "bg-yellow-500/20 text-yellow-300"
            }`}
          >
            {project.status}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const PoemModal = ({ poem, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{poem.title}</h3>
            <p className="text-gray-400">
              {poem.language} • {poem.category}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {poem.content}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-gray-500">{poem.date}</span>
          <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300">
            <Heart size={16} />
            Like
          </button>
        </div>
      </div>
    </div>
  );

  const SocialModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 w-full max-w-md">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">Explore More</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-300 mb-6">
          Dive into my creative world through these platforms.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://instagram.com/tumchaandho"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all text-center"
          >
            Instagram Collection
          </a>
          <a
            href="https://medium.com/@lakshya2003jha" // replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-all text-center"
          >
            Medium Articles
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedPoem && (
        <PoemModal poem={selectedPoem} onClose={() => setSelectedPoem(null)} />
      )}
      {showSocialModal && (
        <SocialModal onClose={() => setShowSocialModal(false)} />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lakshya Jha
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Poetry",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Poetry",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-35.5 h-35.5 rounded-full bg-gradient-to-br from-black-400 to-blue-500 mx-auto mb-6 flex items-center justify-center">
              <img
                src="/me-enhance.jpeg"
                alt="Lakshya"
                className="w-34 h-34 rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-snug bg-gradient-to-tl from-purple-400 to-blue-600 text-transparent bg-clip-text backdrop-blur-lg border-b">
              Lakshya Jha
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              B.Tech Student • Developer • Poet
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about exploring new technologies, building innovative
              solutions, and expressing creativity through code and poetry in
              both Hindi and English.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/laksssshhhhya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-800/70 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/lakshyajha2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-800/70 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lakshya2003jha@gmail.com"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-800/70 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold">Tech Enthusiast</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science, I'm passionate
                  about exploring diverse technology stacks and experimenting
                  with cutting-edge frameworks. My curiosity drives me to
                  constantly learn and adapt to new technologies.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold">
                    Poet & Creative Writer
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Beyond coding, I express my creativity through poetry in both
                  Hindi and English.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Winner of 30-minute instant poetry competitions in 2023 and
                  2024. Former Creative Content Writer at Writer's Pocket,
                  contributing to monthly anthologies and thematic storytelling.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Code2 className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold">Current Focus</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Full-stack web development
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Data Science & Analytics
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Exploring LLMs & DevOps
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">
                      Creative Writing & Poetry
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">
                  Location & Contact
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2 text-blue-400" />
                    <span>Guna, India - 473001</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone size={16} className="mr-2 text-green-400" />
                    <span>+91 9301785326</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail size={16} className="mr-2 text-purple-400" />
                    <span>lakshya2003jha@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {["Language", "Frontend", "Backend", "Tools & Analytics"].map(
              (category) => (
                <div
                  key={category}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => {
                        if (category === "Language")
                          return skill.category === "Language";
                        if (category === "Frontend")
                          return skill.category === "Frontend";
                        if (category === "Backend")
                          return (
                            skill.category === "Backend" ||
                            skill.category === "Database" ||
                            skill.category === "Cloud"
                          );
                        if (category === "Tools & Analytics")
                          return (
                            skill.category === "Tools" ||
                            skill.category === "Analytics"
                          );
                        return false;
                      })
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center align-middle items-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {project.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Senior Secondary Education (12th)
                  </h3>
                  <p className="text-blue-400">
                    Christ Senior Secondary School
                  </p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2022</span>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">Score - 83%</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Secondary Education (10th)
                  </h3>
                  <p className="text-blue-400">
                    Christ Senior Secondary School
                  </p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">2020</span>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">Score - 85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Certifications
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 p-0 bg-amber-50 rounded-full mr-4 text-"
                    src="/hp-cropped.svg"
                  ></img>
                  <span className="text-gray-300 text-m mr-3">
                    Data Science & Analytics
                  </span>
                  <a
                    href="/HPLife.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LucideLink
                      className="text-blue-400"
                      size={18}
                    ></LucideLink>
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 p-0.5 bg-amber-50 rounded-full mr-4"
                    src="/saras-cropped.svg"
                  ></img>
                  <span className="text-gray-300 text-m mr-3">
                    "Build-AI-thon" - Hackathon
                  </span>
                  <a
                    href="/SarasAI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LucideLink
                      className="text-blue-400"
                      size={18}
                    ></LucideLink>
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 p-0.5 bg-amber-50 rounded-full mr-4 text-"
                    src="/coursera.png"
                  ></img>
                  <span className="text-gray-300 text-m mr-3">
                    Project Certificate - Wordpress
                  </span>
                  <a
                    href="/Coursera.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LucideLink
                      className="text-blue-400"
                      size={18}
                    ></LucideLink>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Section */}
      <section id="poetry" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Poetry & Creative Writing
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
              <div
                key={poem.id}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedPoem(poem)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{poem.title}</h3>
                  <span className="text-sm text-gray-400">{poem.language}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {poem.preview.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{poem.category}</span>
                  <span className="text-xs text-gray-400">{poem.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 place-items-center">
            <p className="text-purple-300 mb-6">
              "2X Winner of 30-minute instant poetry competitions • Follow my
              poetry journey"
            </p>
            <div className="text-center mt-12 flex w-70">
              <button
                onClick={() => setShowSocialModal(true)}
                className="px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition-all text-blue-400 mx-auto mb-4"
              >
                View Full Collection
              </button>
              <a
                href="/Wingword certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="ml-4 p-1 border border-gray-600 rounded-full hover:bg-gray-800 transition-all mx-auto mb-4">
                  <Award className="text-blue-400 my-2 mx-2" size={24} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just chat about technology and creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <a
              href="mailto:lakshya2003jha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-colors">
                <Mail className="text-pink-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base break-all">
                  lakshya2003jha@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/laksssshhhhya"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-purple-400/50 transition-colors">
                <Github className="text-purple-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  github.com/laksssshhhhya
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/lakshyajha2003"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-200 sm:col-span-2 lg:col-span-1"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-colors">
                <Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  linkedin.com/in/lakshyajha2003
                </p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto">
            <a
              href="https://leetcode.com/LakshyaJha/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-orange-400/50 transition-colors">
                <SiLeetcode
                  className="text-orange-400 mx-auto mb-4"
                  size={32}
                />
                <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  leetcode.com/LakshyaJha
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/919301785326"
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-colors">
                <FaWhatsapp className="text-green-400 mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Chat on WhatsApp
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <a href="/Lakshya_Jha.pdf" download="Lakshya_Jha_Resume.pdf">
              <button className="px-6 sm:px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 transform hover:scale-105">
                <Download size={20} />
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">CV</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Built with 🫶 by Lakshya.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
