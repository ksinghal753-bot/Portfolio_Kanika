/**
 * KANIKA.SYS — Central Portfolio Configuration & Resume Integration
 */

export const personalInfo = {
  name: "Kanika Singhal",
  systemId: "KANIKA.SYS",
  version: "v3.9.0-RELEASE",
  role: "Aspiring Software Developer",
  subRole: "Computer Science Engineering Student",
  education: "3rd-Year B.Tech Computer Science Engineering",
  university: "Sharda University Agra (2024 – 2028)",
  location: "Agra, Uttar Pradesh, India",
  phone: "+91 8958974114",
  email: "ksinghal753@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/kanika-singhal-b2991b340/",
  githubUsername: "ksinghal753-bot",
  githubUrl: "https://github.com/ksinghal753-bot",
  avatar: "/assets/profile/kanika_photo.jpg",
  resumePath: "/resume.html",
  firstYearCgpa: "9.76",
  secondYearCgpa: "9.69",
  tagline: "Motivated Computer Science student building clean software systems and solving real-world problems.",
  bio: "I am a motivated B.Tech Computer Science Engineering Third-year student with a good foundation in programming and problem solving. I am eager to gain hands-on experience through an internship and apply my academic knowledge to real world projects while learning in a professional environment."
};

export const stats = [
  {
    value: "09.76",
    label: "1ST YR CGPA",
    detail: "Sharda University",
    icon: "GraduationCap"
  },
  {
    value: "09.69",
    label: "2ND YR CGPA",
    detail: "Academic Excellence",
    icon: "Award"
  },
  {
    value: "3rd",
    label: "YEAR",
    detail: "B.Tech CSE (2024-2028)",
    icon: "Calendar"
  },
  {
    value: "100%",
    label: "MOTIVATION",
    detail: "Internship & SDE Ready",
    icon: "Flame"
  }
];

export const educationHistory = [
  {
    institution: "Sharda University Agra",
    degree: "Bachelor of Technology (CSE)",
    location: "Uttar Pradesh",
    period: "Aug. 2024 – 2028",
    status: "Current Year: Third",
    metrics: [
      "First Year CGPA: 9.76",
      "Second Year CGPA: 9.69",
      "Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, OOP"
    ]
  },
  {
    institution: "Holy Public Junior College",
    degree: "Intermediate (Class XII)",
    location: "Bodla, Agra",
    period: "2023 – 2024",
    status: "Completed",
    metrics: [
      "Senior Secondary Science & Computer Education",
      "Strong foundation in Mathematics, Physics & Computational Logic"
    ]
  }
];

export const terminalCommands = {
  whoami: {
    command: "$ whoami",
    output: "Kanika Singhal — 3rd-Year CSE Student at Sharda University Agra | Aspiring Software Developer"
  },
  cgpa: {
    command: "$ cat academics.json",
    output: "{\n  \"university\": \"Sharda University Agra\",\n  \"degree\": \"B.Tech CSE (2024-2028)\",\n  \"year\": \"3rd Year\",\n  \"year1_cgpa\": 9.76,\n  \"year2_cgpa\": 9.69\n}"
  },
  role: {
    command: "$ role",
    output: "Computer Science Engineer | Aspiring Software Developer | Full-Stack Enthusiast"
  },
  interests: {
    command: "$ interests",
    output: "Software Development, Problem Solving, Database Architecture, UI/UX Engineering"
  },
  currently_learning: {
    command: "$ currently_learning",
    output: "Data Structures & Algorithms (DSA), Advanced Full-Stack Systems, AI API Integrations"
  },
  status: {
    command: "$ status",
    output: "🟢 Open for SDE Internships & Software Developer Roles. Ready to build!"
  }
};

export const skillsData = [
  {
    name: "C / C++",
    category: "Languages",
    level: "Proficient",
    description: "Core language for Data Structures, Algorithms, memory management, and computational logic.",
    highlight: "Primary language for algorithmic problem solving & DSA."
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    description: "OOP, algorithmic logic, practical coding exercises, GUI development & database integration.",
    highlight: "Scaler certified; used in desktop database applications."
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Proficient",
    description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation & dynamic web apps.",
    highlight: "Core web development and interactive frontend logic."
  },
  {
    name: "HTML / CSS",
    category: "Languages",
    level: "Expert",
    description: "Semantic HTML5, custom responsive CSS styling, modern flexbox/grid & UI engineering.",
    highlight: "Used across personal portfolio & AI web applications."
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core CS",
    level: "Proficient",
    description: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting & Algorithmic Optimization.",
    highlight: "Key foundation for efficient software development."
  },
  {
    name: "DBMS",
    category: "Core CS",
    level: "Proficient",
    description: "Relational database concepts, normalization, SQL queries, indexing, ACID properties.",
    highlight: "Database design & PostgreSQL / SQL integration."
  },
  {
    name: "Operating Systems (OS)",
    category: "Core CS",
    level: "Proficient",
    description: "Process synchronization, memory management, concurrency, threading & file systems.",
    highlight: "Foundational computer science principles."
  },
  {
    name: "Git",
    category: "Developer Tools",
    level: "Proficient",
    description: "Distributed version control, branch management, committing, and collaborative workflows.",
    highlight: "Standard version control for software projects."
  },
  {
    name: "VS Code",
    category: "Developer Tools",
    level: "Expert",
    description: "Primary IDE configured with modern developer extensions, linters, debuggers & terminals.",
    highlight: "Daily software development environment."
  },
  {
    name: "Visual Studio",
    category: "Developer Tools",
    level: "Proficient",
    description: "Integrated development environment for C/C++ compilation, debugging, and systems profiling.",
    highlight: "C++ development & debugging."
  },
  {
    name: "Team Work",
    category: "Soft Skills",
    level: "Expert",
    description: "Collaborative engineering, cross-functional peer problem solving, and cooperative task execution.",
    highlight: "Active collaboration on academic & software development projects."
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    level: "Expert",
    description: "Strong analytical mindset breaking down complex computational challenges into clean algorithmic steps.",
    highlight: "Algorithmic thinking and structured debugging."
  },
  {
    name: "Communication Skills",
    category: "Soft Skills",
    level: "Expert",
    description: "Clear, articulate technical and interpersonal communication in collaborative engineering teams.",
    highlight: "Effective project presentation & technical documentation."
  },
  {
    name: "Time Management",
    category: "Soft Skills",
    level: "Expert",
    description: "Prioritizing tasks and balancing academic excellence (9.69+ CGPA) with hands-on software development.",
    highlight: "Proven discipline balancing coursework & practical projects."
  }
];

export const softSkillsData = [
  { name: "Communication", desc: "Clear technical and interpersonal articulation in teams." },
  { name: "Time Management", desc: "Balancing academic rigor (9.76 CGPA) with practical development." },
  { name: "Teamwork", desc: "Collaborative problem solving and cooperative engineering." },
  { name: "Problem Solving", desc: "Analytical mindset breaking down complex engineering challenges." }
];

export const projectsData = [
  {
    id: "ai-todo",
    number: "PROJECT 01",
    title: "EasyDo — AI Integrated To-Do List",
    subtitle: "Smart Task Management & AI Prioritization",
    tagline: "Interactive To-Do list application engineered to streamline daily task management and boost productivity.",
    description: "An interactive To-Do list application designed to streamline daily task management and boost personal productivity. Engineered the front-end using HTML and CSS, and integrated AI-driven features for smart task categorization, priority scoring, and workload estimation.",
    techStack: ["HTML", "CSS", "AI APIs", "JavaScript"],
    image: "/assets/projects/easydo/easydo_dashboard.png",
    screenshots: [
      {
        title: "Main Dashboard",
        url: "/assets/projects/easydo/easydo_dashboard.png",
        desc: "Interactive dashboard with metrics, task statistics, priority tracking & completion progress."
      },
      {
        title: "All Tasks View",
        url: "/assets/projects/easydo/easydo_tasks.png",
        desc: "Comprehensive task manager with category filtering, search, and priority sorting."
      },
      {
        title: "Task Creation Interface",
        url: "/assets/projects/easydo/easydo_add_task.png",
        desc: "Smart task creation modal with title, description, due date, category, and priority selector."
      },
      {
        title: "Appearance & Themes",
        url: "/assets/projects/easydo/easydo_appearance.png",
        desc: "Custom theme selector with Dark Midnight, Ocean Blue, Rose Gold, Forest Green, Purple Haze, and Light Clean."
      },
      {
        title: "Security Settings",
        url: "/assets/projects/easydo/easydo_security.png",
        desc: "Password management, Two-Factor Authentication (2FA) toggle, and active session controls."
      },
      {
        title: "Privacy & Account",
        url: "/assets/projects/easydo/easydo_privacy.png",
        desc: "Profile visibility settings, task sharing permissions, data analytics controls, and account management."
      },
      {
        title: "Profile & System Settings",
        url: "/assets/projects/easydo/easydo_settings.png",
        desc: "User profile preferences, appearance styling, and customizable account configurations."
      },
      {
        title: "Navigation Sidebar",
        url: "/assets/projects/easydo/easydo_sidebar.png",
        desc: "Dark cyber purple collapsible navigation drawer with live task counters."
      }
    ],
    github: "https://github.com/ksinghal753-bot/EasyDo",
    demo: "#",
    features: [
      "AI-driven task classification into Urgent, Core Work, and Scheduled buckets",
      "Streamlined daily task management UI engineered with responsive HTML and CSS",
      "Dynamic priority scoring and smart recommendations for high-leverage work",
      "Persistent state tracking ensuring productivity workflows are saved seamlessly"
    ],
    architecture: "Lightweight frontend client architecture integrated with AI categorization APIs, prioritizing fast rendering and frictionless task entry.",
    role: "Sole Developer (Frontend Architecture, AI API Integration, UI Design)"
  },
  {
    id: "personal-portfolio",
    number: "PROJECT 02",
    title: "Personal Portfolio Website",
    subtitle: "Interactive Developer Experience & UI Showcase",
    tagline: "Designed and developed a fully responsive personal portfolio website to showcase technical skills and projects.",
    description: "Designed and developed a fully responsive personal portfolio website to showcase technical skills, academic accomplishments, and projects. Implemented semantic HTML5 and customized CSS styling to create an intuitive, visually appealing, and highly engaging user interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    image: "/assets/projects/portfolio/portfolio_hero.png",
    screenshots: [
      {
        title: "Hero Interface & Identity",
        url: "/assets/projects/portfolio/portfolio_hero.png",
        desc: "Cinematic personal developer interface with interactive navigation, quick status metrics, and direct links."
      },
      {
        title: "About Me & CS Disciplines",
        url: "/assets/projects/portfolio/portfolio_about.png",
        desc: "Developer overview detailing B.Tech CSE background, core strengths, and problem-solving focus."
      },
      {
        title: "Education, Metrics & Pursuits",
        url: "/assets/projects/portfolio/portfolio_education.png",
        desc: "Academic timeline highlighting 9.76 and 9.69 CGPA, key performance indicators, and soft skill pillars."
      },
      {
        title: "Interactive System Terminal",
        url: "/assets/projects/portfolio/portfolio_terminal.png",
        desc: "Terminal CLI interface with simulated commands, animated outputs, and interactive status queries."
      },
      {
        title: "Technical Skills Matrix",
        url: "/assets/projects/portfolio/portfolio_skills.png",
        desc: "Categorized skill matrix with interactive tabs covering Programming Languages, Core CS, and Developer Tools."
      },
      {
        title: "Core Skills — HTML/CSS, DSA & DBMS",
        url: "/assets/projects/portfolio/portfolio_skills2.png",
        desc: "Detailed skill cards for HTML/CSS, Data Structures & Algorithms, and Database Management Systems."
      },
      {
        title: "Dev Tools & Soft Skills",
        url: "/assets/projects/portfolio/portfolio_skills3.png",
        desc: "Visual Studio, Git, VS Code, Teamwork, Problem Solving, Communication and Time Management skill cards."
      },
      {
        title: "Featured Projects Overview",
        url: "/assets/projects/portfolio/portfolio_projects_overview.png",
        desc: "FEATURED_PROJECTS section header with PROJECT 01 (EasyDo) showcase and interactive live preview."
      },
      {
        title: "Project 02 — Personal Portfolio",
        url: "/assets/projects/portfolio/portfolio_project02.png",
        desc: "PROJECT 02 card featuring the Personal Portfolio Website with full-screen mock preview and tech stack."
      },
      {
        title: "Experiences — Academic Timeline",
        url: "/assets/projects/portfolio/portfolio_experience1.png",
        desc: "EXPERIENCES section with animated timeline showing B.Tech CSE at Sharda University Agra with CGPA highlights."
      },
      {
        title: "Experiences — DRDO Internship",
        url: "/assets/projects/portfolio/portfolio_experience2.png",
        desc: "Internship at ADRDE-DRDO card detailing Address Management System development and engineering contributions."
      },
      {
        title: "Certifications — CyberOps, Python & AI",
        url: "/assets/projects/portfolio/portfolio_certifications1.png",
        desc: "CERTIFICATIONS section row 1: CyberOps Associate (Cisco), Python Course (Scaler), Cyber Smart AI Prime."
      },
      {
        title: "Certifications — DRDO, MLSA & Build with Bharat",
        url: "/assets/projects/portfolio/portfolio_certifications2.png",
        desc: "CERTIFICATIONS section row 2: Internship Certificate (DRDO), MLSA Azure Dev Day, Build with Bharat."
      },
      {
        title: "GitHub Code Repository",
        url: "/assets/projects/portfolio/portfolio_github.png",
        desc: "GitHub section featuring activity heatmap, repo cards for DRDO Address Management System and AI To-Do List."
      },
      {
        title: "Official Resume — Curriculum Vitae",
        url: "/assets/projects/portfolio/portfolio_resume.png",
        desc: "Interactive resume panel with OPEN RESUME IN NEW TAB and DOWNLOAD options, CGPA highlights, and internship status."
      },
      {
        title: "Beyond the Code — Passions",
        url: "/assets/projects/portfolio/portfolio_beyond.png",
        desc: "BEYOND_THE_CODE section showcasing Problem Solving, Dancing, Painting & Visual Arts, and Continuous Learning pillars."
      },
      {
        title: "Contact — Let's Build Something Meaningful",
        url: "/assets/projects/portfolio/portfolio_contact.png",
        desc: "Direct communication section with email, phone, GitHub/LinkedIn links, and encrypted message transmission form."
      },
      {
        title: "Footer — Still Curious. Still Learning. Still Building.",
        url: "/assets/projects/portfolio/portfolio_footer.png",
        desc: "Cinematic footer with brand statement, social links (GitHub, LinkedIn, Email), and KANIKA.SYS version tag."
      }
    ],
    github: "https://github.com/ksinghal753-bot",
    demo: "#",
    features: [
      "Modern cinematic developer interface with high-tech visual aesthetics",
      "Semantic HTML5 structure and customized CSS for maximum responsiveness across devices",
      "Interactive components, project showcases, certification archives, and live resume preview",
      "Synthesized audio feedback, canvas starfield ambience, and dark glassmorphic styling"
    ],
    architecture: "Component-driven reactive architecture with centralized data modeling, custom design tokens, and smooth hardware-accelerated animations.",
    role: "Sole Designer & Developer"
  },
  {
    id: "address-management",
    number: "PROJECT 03",
    title: "Address Management System- Internship Project",
    subtitle: "Desktop Records Management Application",
    tagline: "Desktop record management system with secure administrative controls and PostgreSQL DBMS integration.",
    description: "An offline desktop application designed to manage official address records efficiently, with administrative and user-level functionality. Built with Python and Tkinter, it integrates directly with a PostgreSQL relational database to deliver high data integrity, quick search indexing, and reliable record CRUD operations.",
    techStack: ["Python", "Tkinter", "PostgreSQL", "DBMS", "SQL"],
    image: "/assets/projects/drdo/drdo_role_selection.png",
    screenshots: [
      {
        title: "Role Selection Portal",
        url: "/assets/projects/drdo/drdo_role_selection.png",
        desc: "Role-based access gateway for Admin and General User operations at ADRDE, DRDO."
      },
      {
        title: "Administrator Sign In",
        url: "/assets/projects/drdo/drdo_admin_signin.png",
        desc: "Secure authentication portal for ADRDE Address Directory administration."
      },
      {
        title: "Admin Management Dashboard",
        url: "/assets/projects/drdo/drdo_admin_dashboard.png",
        desc: "Centralized hub for Add Address, Address Database, Manage Departments, and Manage Users."
      },
      {
        title: "Address Database & Records View",
        url: "/assets/projects/drdo/drdo_records_table.png",
        desc: "Interactive database table with Department filtering, multi-actions, DB backup & recovery, and export tools."
      },
      {
        title: "Address Entry Interface",
        url: "/assets/projects/drdo/drdo_add_address.png",
        desc: "Structured address data entry with department, designation, office name, state, and PIN code."
      },
      {
        title: "Live Envelope Preview & Dispatch",
        url: "/assets/projects/drdo/drdo_envelope_preview.png",
        desc: "Dynamic dispatch slip generation and envelope preview formatting with Hindi/English bilingual support."
      },
      {
        title: "Manage Departments Module",
        url: "/assets/projects/drdo/drdo_manage_departments.png",
        desc: "Bilingual department registry with Hindi/English designations, addition portal, and CRUD control."
      },
      {
        title: "User Access & Role Management",
        url: "/assets/projects/drdo/drdo_manage_users.png",
        desc: "User administration portal with role assignment, status toggling, password reset, and account security."
      },
      {
        title: "Print Options Selector",
        url: "/assets/projects/drdo/drdo_print_options.png",
        desc: "Print selected envelopes, department-specific lists, or the full official address directory."
      },
      {
        title: "Envelope Reference Details",
        url: "/assets/projects/drdo/drdo_envelope_reference.png",
        desc: "Reference configuration with Date, PARA No., dispatch speed category (Ordinary/Speed Post), and custom notes."
      },
      {
        title: "Export & Output Formats",
        url: "/assets/projects/drdo/drdo_output_format.png",
        desc: "Multi-format output support: Export as PDF, Export as Excel sheet, or send directly to connected printers."
      },
      {
        title: "Paper Size Configuration",
        url: "/assets/projects/drdo/drdo_paper_size.png",
        desc: "Custom print sizing supporting Standard Envelope (220 x 110 mm) and A4 Landscape (297 x 210 mm)."
      }
    ],
    github: "https://github.com/ksinghal753-bot/Address_Management_System_DRDO",
    demo: "#",
    features: [
      "Role-based authentication differentiating Admin and General Operator privileges",
      "Instant multi-parameter record search (by Record ID, Department, ZIP code, or Name)",
      "Automated database migrations, backup exports, and data validation routines",
      "Clean dark desktop GUI built using custom Tkinter styles with intuitive keyboard shortcuts"
    ],
    architecture: "Modular Python OOP architecture with distinct DAO (Data Access Object) database layer, ensuring clean separation of GUI presentation from relational database transactions.",
    role: "Sole Software Developer (System Architecture, Database Schema, Tkinter UI)"
  }
];

export const certificatesData = [
  {
    id: "cert-cyberops",
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity Certification",
    date: "26 Jan 2026",
    image: "/assets/certificates/cisco_cyberops.png",
    skills: ["Cisco CyberOps", "Security Monitoring", "Threat Detection", "Incident Response", "Network Security"],
    description: "Official Cisco Networking Academy certificate awarded to Kanika Singhal for successfully completing CyberOps Associate offered by NIIT Foundation."
  },
  {
    id: "cert-scaler-python",
    title: "Python Course for Beginners With Certification",
    issuer: "Scaler Topics",
    category: "Programming Certification",
    date: "14 December 2025",
    image: "/assets/certificates/scaler_python.png",
    skills: ["Python", "121 Video Tutorials", "16 Modules", "10 Challenges", "OOP Concepts"],
    description: "Certificate of Excellence awarded to Kanika Singhal in recognition of completing 'Python Course for Beginners With Certification: Mastering the Essentials' on Scaler Topics."
  },
  {
    id: "cert-cyber-smart-ai",
    title: "Cyber Smart AI Prime",
    issuer: "CISCO CSR • DSCI • NIIT Foundation",
    category: "Cybersecurity & AI",
    date: "13 March 2026",
    image: "/assets/certificates/cyber_smart_ai_prime.png",
    skills: ["Cyber Smart AI Prime", "Cyber Suraksha Pulse", "Data Protection", "AI & Cyber Security"],
    description: "Certificate of Participation awarded to Kanika Singhal for actively participating in the Program in Cyber Smart AI Prime under the Cyber Suraksha Pulse Program."
  },
  {
    id: "cert-drdo",
    title: "Internship Certificate",
    issuer: "DRDO — ADRDE",
    category: "Internship",
    date: "14 July 2026",
    image: "/assets/certificates/drdo_certificate.png",
    skills: ["DRDO ADRDE", "Software Development", "Systems Engineering", "Performance: Very Good"],
    description: "Official Training Certificate awarded to Kanika Singhal for technical training and software development at Aerial Delivery Research and Development Establishment (ADRDE), DRDO, Ministry of Defence."
  },
  {
    id: "cert-mlsa-azure",
    title: "MLSA Azure Dev Day Seminar",
    issuer: "Microsoft Learn Student Ambassador (GLA Chapter)",
    category: "Cloud & Dev Seminar",
    date: "15 October 2025",
    image: "/assets/certificates/mlsa_azure_devday.png",
    skills: ["Microsoft Azure", "Cloud Computing", "MLSA Seminar", "DevDay"],
    description: "Certificate of Participation presented to Kanika Singhal for successfully attending Azure DevDay held at Dr. B.R. Ambedkar University by MLSA GLA Chapter."
  },
  {
    id: "cert-build-with-bharat",
    title: "Build with Bharat",
    issuer: "Codeverse • Insights • GitHub",
    category: "Hackathon & Innovation",
    date: "01 August 2026",
    image: "/assets/certificates/build_with_bharat.png",
    skills: ["Build with Bharat", "Microsoft Gurugram", "GitHub", "Team Tm_BODMAS", "Tech Innovation"],
    description: "Certificate of Participation proudly presented to Kanika Singhal for participating in BUILD WITH BHARAT by CODEVERSE under team Tm_BODMAS at Microsoft, Gurugram."
  }
];

export const experienceData = [
  {
    id: "sharda-academic",
    organization: "Sharda University Agra",
    location: "Uttar Pradesh",
    role: "B.Tech Computer Science Engineering",
    period: "Aug. 2024 – 2028 (3rd Year)",
    category: "Academic Excellence",
    highlights: [
      "Maintaining outstanding academic performance: First Year CGPA: 9.76, Second Year CGPA: 9.69.",
      "Mastering core CS topics: Data Structures & Algorithms, DBMS, Operating Systems, C/C++, and Python.",
      "Actively developing practical projects: AI-Integrated To-Do List, Personal Portfolio, and Database Management Systems."
    ],
    tech: ["C/C++", "Python", "DSA", "DBMS", "OS", "HTML/CSS", "JavaScript"]
  },
  {
    id: "drdo-adrde",
    organization: "DRDO — ADRDE",
    location: "Agra, India",
    role: "Internship at ADRDE-DRDO",
    period: "Internship Log // Verified",
    category: "Defence R&D",
    highlights: [
      "Gained hands-on software development experience during an internship at Aerial Delivery Research and Development Establishment (ADRDE), DRDO, working on real-world software requirements and engineering workflows.",
      "Developed an offline Address Management System to digitize and efficiently manage official correspondence address records within the organization.",
      "Implemented role-based Admin/User access with features such as adding, editing, updating, searching, viewing, printing, and deleting records, supported by secure local database storage."
    ],
    tech: ["Software Development", "System Workflows", "Technical Documentation", "Engineering Principles"]
  }
];

export const beyondCode = {
  pillars: ["LEARN", "BUILD", "CREATE", "IMPROVE", "REPEAT"],
  interests: [
    {
      title: "Problem Solving",
      icon: "Code2",
      description: "Tackling algorithmic challenges, optimizing time-space complexities, and writing clean, scalable logic."
    },
    {
      title: "Dancing",
      icon: "Sparkles",
      description: "Expressing rhythm, discipline, and creative energy through movement — keeping mind and spirit agile."
    },
    {
      title: "Painting & Visual Arts",
      icon: "Palette",
      description: "Exploring composition, color theory, and balance — directly inspiring modern, aesthetic UI engineering."
    },
    {
      title: "Continuous Learning",
      icon: "Compass",
      description: "Constantly staying curious about emerging frameworks, architectural patterns, and engineering paradigms."
    }
  ]
};
