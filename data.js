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
      "React Developer",
      "TypeScript Developer",
      "UI Builder",
      "Problem Solver"
    ],
    description:
      "I build responsive websites, dashboards, and applications with React, TypeScript, and modern frontend tools, with a strong focus on usability, clean UI, and performance.",
    primaryCta: {
      label: "View My Work",
      href: "#projects"
    },
    secondaryCta: {
      label: "Download Resume",
      href: "Kalpesh_Kumar_Resume.pdf",
      download: true
    },
    stats: [
      { value: "3", label: "Relevant Roles" },
      { value: "2", label: "Key Projects" },
      { value: "8+", label: "Core Technologies" }
    ],
    codeLines: [
      { indent: "", content: '<span class="c-kw">const</span> <span class="c-fn">Developer</span> = () =&gt; {' },
      { indent: "pad", content: '  <span class="c-kw">return</span> (' },
      { indent: "pad2", content: '    &lt;<span class="c-tag">Frontend</span> <span class="c-attr">focus</span>=<span class="c-str">"products"</span>&gt;' },
      { indent: "pad3", content: '      <span class="c-str">// build responsive interfaces</span>' },
      { indent: "pad3", content: '      <span class="c-str">// connect APIs cleanly</span>' },
      { indent: "pad3", content: '      <span class="c-str">// ship reliable user experiences</span>' },
      { indent: "pad2", content: '    &lt;/<span class="c-tag">Frontend</span>&gt;' },
      { indent: "pad", content: '  );' },
      { indent: "", content: "};" }
    ],
    codeTags: ["React", "TypeScript", "React Native"]
  },
  about: {
    sectionLabel: "About Me",
    title: "Building web experiences that feel smooth, fast, and useful",
    paragraphs: [
      "I'm a frontend developer based in Rajasthan, India, with hands-on experience building dashboards, business websites, and application interfaces using React, TypeScript, and modern UI frameworks.",
      "Across agency and product teams, I've worked on reusable components, API integrations, debugging, and performance improvements while collaborating closely with designers and backend developers."
    ],
    chips: [
      "Rajasthan, India",
      "Open to Remote",
      "Available for Frontend Roles"
    ],
    photoLabel: "Kalpesh Kumar",
    badges: ["React + TypeScript", "API-Driven UI"]
  },
  skills: {
    sectionLabel: "What I Know",
    title: "My Tech Stack",
    subtitle: "Technologies and tools I use to build production-ready frontend experiences",
    categories: [
      {
        title: "Frontend",
        icon: "🎨",
        items: [
          { name: "HTML", level: 92 },
          { name: "CSS", level: 88 },
          { name: "JavaScript", level: 86 },
          { name: "TypeScript", level: 82 },
          { name: "React", level: 88 },
          { name: "React Native", level: 72 }
        ]
      },
      {
        title: "Tools & Libraries",
        icon: "🛠️",
        items: [
          { name: "Tailwind CSS", level: 84 },
          { name: "Bootstrap", level: 80 },
          { name: "Material UI", level: 78 },
          { name: "Git & GitHub", level: 82 },
          { name: "REST APIs", level: 85 },
          { name: "Microsoft Office", level: 70 }
        ]
      }
    ],
    pills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Git",
      "GitHub",
      "REST APIs"
    ]
  },
  projects: {
    sectionLabel: "What I've Built",
    title: "Featured Projects",
    subtitle: "Selected work based on the projects highlighted in my resume",
    items: [
      {
        title: "Career Setu",
        description:
          "A job platform frontend built from scratch with React and TypeScript where users can browse jobs, apply, and track their activity through a dedicated dashboard.",
        tags: ["React", "TypeScript", "REST APIs"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
        badge: "Featured",
        icon: "grid"
      },
      {
        title: "Team Vault",
        description:
          "A file manager dashboard with online and offline support, storage insights, and fast access to files, designed to keep the experience usable even without connectivity.",
        tags: ["React", "TypeScript", "Offline Sync"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        icon: "cloud"
      },
      {
        title: "Responsive Dashboard Work",
        description:
          "Client-focused dashboard and application interfaces built during professional roles, including API integrations, CRUD flows, authentication, and data visualization UI.",
        tags: ["React", "Dashboards", "UI Engineering"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        icon: "dashboard"
      }
    ]
  },
  experience: {
    sectionLabel: "My Journey",
    title: "Experience & Education",
    items: [
      {
        date: "Jun 2025 - Present",
        title: "Jr. Software Developer",
        company: "Itech Solutions Pvt Ltd",
        meta: "Full-time",
        description:
          "Building responsive websites, dashboards, and applications using React.js, TypeScript, and React Native while focusing on reusable components, API integrations, and smooth user experience.",
        tags: ["React.js", "TypeScript", "React Native", "APIs"]
      },
      {
        date: "Mar 2025 - May 2025",
        title: "Front-end Developer",
        company: "Marwad Tech Pvt Ltd",
        meta: "Professional Experience",
        description:
          "Developed responsive web applications in React, integrated RESTful APIs, and worked on authentication, CRUD features, debugging, and data visualization interfaces.",
        tags: ["React", "REST APIs", "Git", "Debugging"]
      },
      {
        date: "Jan 2024 - Jun 2024",
        title: "Front-end Developer",
        company: "Poodles Petcare Pvt Ltd",
        meta: "Professional Experience",
        description:
          "Created clean, responsive interfaces with reusable UI components, used Axios for dynamic data integration, and resolved UI issues while aligning with product requirements.",
        tags: ["Responsive UI", "Axios", "Components"]
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
