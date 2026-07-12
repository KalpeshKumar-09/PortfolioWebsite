const portfolioData = {
  brand: {
    logo: "KK",
    accent: ".",
    fileLabel: "portfolio.jsx"
  },
  meta: {
    siteTitle: "Kalpesh Kumar | Frontend Developer",
    homeTitle: "Portfolio | Kalpesh Kumar",
    contactTitle: "Contact | Kalpesh Kumar",
    footerYear: "2026"
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" }
  ],
  hero: {
    availability: "Open to opportunities",
    intro: "Hi, I'm",
    name: "Kalpesh Kumar",
    typedPhrases: [
      "Frontend Developer",
      "Full Stack Developer",
      "React.js Developer",
      "TypeScript Developer",
      "MERN Stack Learner"
    ],
    description:
      "Frontend-focused developer open to Frontend and Full Stack roles. I build responsive React.js, TypeScript, and React Native interfaces with clean UI, REST API integration, and practical product thinking.",
    primaryCta: {
      label: "View My Work",
      href: "#projects"
    },
    secondaryCta: {
      label: "View Resume",
      href: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view?usp=sharing",
      download: false
    },
    stats: [
      { value: "Frontend", label: "Primary Role" },
      { value: "Full Stack", label: "Also Interested" },
      { value: "React + APIs", label: "Core Skill" }
    ],
    codeLines: [
      { indent: "", content: '<span class="c-kw">const</span> <span class="c-fn">Developer</span> = () =&gt; {' },
      { indent: "pad", content: '  <span class="c-kw">return</span> (' },
      { indent: "pad2", content: '    &lt;<span class="c-tag">Profile</span> <span class="c-attr">stack</span>=<span class="c-str">"React + TypeScript"</span>&gt;' },
      { indent: "pad3", content: '      <span class="c-str">// reusable components</span>' },
      { indent: "pad3", content: '      <span class="c-str">// REST API integration</span>' },
      { indent: "pad3", content: '      <span class="c-str">// web and mobile UI</span>' },
      { indent: "pad2", content: '    &lt;/<span class="c-tag">Profile</span>&gt;' },
      { indent: "pad", content: '  );' },
      { indent: "", content: "};" }
    ],
    codeTags: ["React", "TypeScript", "React Native"]
  },
  about: {
    sectionLabel: "About Me",
    title: "Clean frontend interfaces with reliable product flows",
    paragraphs: [
      "I'm Kalpesh Kumar, a Computer Science graduate from Manipal University Jaipur with professional experience at Itech Solutions Pvt Ltd and Marwad Tech Pvt Ltd.",
      "My work includes responsive dashboards, job portals, file management products, authentication flows, CRUD interfaces, data visualization screens, offline-first features, and performance-focused frontend improvements."
    ],
    chips: [
      "Rajasthan, India",
      "Open to Remote",
      "React.js + TypeScript",
      "React Native",
      "Available for Frontend Roles"
    ],
    photoLabel: "Kalpesh Kumar",
    badges: ["CGPA 7.50", "React + TypeScript"]
  },
  skills: {
    sectionLabel: "What I Know",
    title: "My Tech Stack",
    subtitle: "Tools I use for responsive web apps, mobile interfaces, dashboards, and API-driven screens.",
    categories: [
      {
        title: "Frontend",
        icon: "🎨",
        items: [
          { name: "HTML5", level: 92 },
          { name: "CSS3", level: 88 },
          { name: "JavaScript", level: 86 },
          { name: "TypeScript", level: 82 },
          { name: "React.js", level: 88 },
          { name: "React Native", level: 76 }
        ]
      },
      {
        title: "Libraries & Tools",
        icon: "🛠️",
        items: [
          { name: "Tailwind CSS", level: 84 },
          { name: "Bootstrap", level: 80 },
          { name: "Material UI", level: 78 },
          { name: "Redux Toolkit", level: 76 },
          { name: "Axios", level: 84 },
          { name: "Git & GitHub", level: 82 }
        ]
      },
      {
        title: "Development Strengths",
        icon: "⚡",
        items: [
          { name: "REST API Integration", level: 86 },
          { name: "Responsive Web Apps", level: 90 },
          { name: "Cross-Browser Compatibility", level: 82 },
          { name: "UI/UX Implementation", level: 86 },
          { name: "Performance Optimization", level: 80 },
          { name: "Debugging", level: 84 }
        ]
      }
    ],
    pills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React.js",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Redux Toolkit",
      "Axios",
      "Git",
      "GitHub",
      "Postman",
      "REST APIs",
      "Responsive UI",
      "Debugging"
    ]
  },
  projects: {
    sectionLabel: "What I've Built",
    title: "Featured Projects",
    subtitle: "Selected work across React, TypeScript, REST APIs, dashboards, and mobile-ready interfaces.",
    items: [
      {
        title: "Career Setu",
        description:
          "Responsive job portal for web and mobile workflows where users can browse, search, apply for jobs, and track applications through a focused dashboard.",
        highlights: [
          "Built reusable React.js and TypeScript UI components from UI/UX designs.",
          "Integrated REST APIs for job listings, authentication, and application submissions.",
          "Created a dashboard for application status, recent activity, and user tracking.",
          "Improved performance through efficient state handling and API usage."
        ],
        tags: ["React.js", "TypeScript", "REST APIs", "Dashboard"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        badge: "Featured",
        icon: "grid"
      },
      {
        title: "Team Vault",
        description:
          "File management solution across web and mobile platforms with consistent dashboards, reusable components, and offline-first access.",
        highlights: [
          "Developed web and mobile interfaces with React.js, React Native, and TypeScript.",
          "Built responsive dashboards for a consistent Android, iOS, and web experience.",
          "Implemented offline support so users can access files without internet.",
          "Added automatic sync behavior when connectivity returns."
        ],
        tags: ["React Native", "TypeScript", "Offline Sync", "Mobile App"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        icon: "cloud"
      },
      {
        title: "Responsive Dashboard Work",
        description:
          "Professional frontend work across client websites, dashboards, CRUD flows, authentication screens, and data visualization interfaces.",
        highlights: [
          "Converted UI/UX designs into scalable, reusable frontend components.",
          "Integrated APIs and collaborated with backend teams on feature delivery.",
          "Fixed UI bugs, broken layouts, and browser compatibility issues."
        ],
        tags: ["React", "Dashboards", "CRUD", "Authentication"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        icon: "dashboard"
      }
    ]
  },
  experience: {
    sectionLabel: "Resume",
    title: "Experience & Education",
    items: [
      {
        date: "Jun 2025 - Present",
        title: "Jr. Software Developer",
        company: "Itech Solutions Pvt Ltd",
        meta: "Full-time",
        description:
          "Building responsive websites, dashboards, and applications using React.js, TypeScript, and React Native with a focus on clean UI and smooth user experience.",
        bullets: [
          "Develop reusable frontend components and integrate APIs for fast, scalable products.",
          "Convert UI/UX designs into clean, maintainable, and scalable frontend code.",
          "Debug frontend issues, participate in code reviews, and follow coding best practices.",
          "Collaborate with designers and backend developers in an Agile environment."
        ],
        tags: ["React.js", "TypeScript", "React Native", "APIs"]
      },
      {
        date: "Mar 2025 - May 2025",
        title: "Front-end Developer",
        company: "Marwad Tech Pvt Ltd",
        meta: "Professional Experience",
        description:
          "Developed responsive web applications in React, integrated RESTful APIs, and worked on authentication, CRUD features, debugging, and data visualization interfaces.",
        bullets: [
          "Built real-time data interactions through RESTful API integration.",
          "Worked with backend teams on API design and frontend feature implementation.",
          "Fixed UI bugs, broken layouts, and errors while improving team communication."
        ],
        tags: ["React", "REST APIs", "Git", "Debugging"]
      },
      {
        date: "2020 - 2024",
        title: "Bachelor of Technology - Computer Science",
        company: "Manipal University Jaipur, Rajasthan, India",
        meta: "CGPA: 7.50",
        description:
          "Completed B.Tech in Computer Science with a strong foundation in software development and practical project work.",
        tags: ["Computer Science", "B.Tech", "2024 Graduate"]
      }
    ]
  },
  cta: {
    title: "Ready to build something together?",
    description:
      "I'm currently open to frontend opportunities where I can contribute to modern web products, dashboards, and user-focused interfaces.",
    button: {
      label: "Send a Message",
      href: "contact.html"
    }
  },
  contact: {
    sectionLabel: "Get In Touch",
    title: "Let's Connect",
    subtitle:
      "Whether it's a job opportunity, freelance work, or a product idea, I'd be happy to hear what you're building.",
    infoTitle: "Let's build something together",
    infoSubtitle:
      "I'm open to frontend roles, collaborations, and project conversations. You can reach me through any of the channels below.",
    methods: [
      {
        type: "email",
        label: "Email",
        value: "sutharkalpesh101@gmail.com",
        href: "mailto:sutharkalpesh101@gmail.com"
      },
      {
        type: "phone",
        label: "Phone",
        value: "+91-8239269179",
        href: "tel:+918239269179"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/Kalpesh-Kumar",
        href: "https://linkedin.com/in/Kalpesh-Kumar"
      },
      {
        type: "github",
        label: "GitHub",
        value: "github.com/KalpeshKumar-09",
        href: "https://github.com/KalpeshKumar-09"
      },
      {
        type: "location",
        label: "Based in",
        value: "Rajasthan, India (Open to Remote)"
      }
    ],
    availability: "Available for new opportunities",
    inquiryOptions: [
      { value: "", label: "Select an option" },
      { value: "job", label: "Job Opportunity" },
      { value: "freelance", label: "Freelance Project" },
      { value: "collab", label: "Collaboration" },
      { value: "other", label: "General Inquiry" }
    ],
    successTitle: "Message Sent!",
    successMessage: "Thanks for reaching out. I'll get back to you within 24-48 hours."
  },
  footer: {
    links: [
      { label: "Home", href: "index.html#home" },
      { label: "About", href: "index.html#about" },
      { label: "Projects", href: "index.html#projects" },
      { label: "Contact", href: "contact.html" }
    ],
    socials: [
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/KalpeshKumar-09"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/in/Kalpesh-Kumar"
      },
      {
        type: "email",
        label: "Email",
        href: "mailto:sutharkalpesh101@gmail.com"
      }
    ],
    copyright:
      "© 2026 Kalpesh Kumar. Built with HTML, CSS & JavaScript."
  }
};
