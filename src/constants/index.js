import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  yes,
  snipstar,
  pixelpace,
  tossdown as tossdownLogo,
  prismware,
  css,
  html,
} from "../assets";

// Navigation Links (multi-page)
export const navLinks = [
  { id: "/", title: "Home", type: "route" },
  { id: "/projects", title: "Projects", type: "route" },
  { id: "/case-studies", title: "Case Studies", type: "route" },
  { id: "/experience", title: "Experience", type: "route" },
  { id: "contact", title: "Contact", type: "hash" },
];

// Hero Section Content
export const heroContent = {
  greeting: "Welcome",
  name: "Shehzada Ammad Ali",
  title: "Senior Software Engineer",
  company: "",
  tagline: "I Build Software That Saves Time, Cuts Costs & Grows Revenue",
  subtitle:
    "From AI-powered systems that slash manual review time by 40%, to e-commerce engines handling thousands of daily transactions — I turn complex engineering challenges into measurable business results.",
  cta: {
    primary: "Get In Touch",
    secondary: "View My Work",
  },
  stats: [
    { number: "40%", label: "Avg. Latency Reduced" },
    { number: "15+", label: "Products Shipped" },
    { number: "6+", label: "Years Delivering ROI" },
    { number: "95%", label: "Test Coverage Standard" },
  ],
};

// About / Founder Story
export const aboutContent = {
  sectionSubText: "Why Work With Me",
  sectionHeadText: "About Me.",
  paragraphs: [
    "I'm Shehzada Ammad Ali — a Senior Software Engineer who measures success in business outcomes, not just lines of code. I've helped companies reduce API latency by 40%, cut database load by 30%, and ship AI products that eliminate hours of manual legal review.",
    "Over 6+ years across telecom, e-commerce, blockchain, and AI industries, I've built systems that handle high traffic, scale under pressure, and pay for themselves. Whether it's a multivendor e-commerce engine processing thousands of orders or an NDA conflict detection tool that replaced a team of reviewers — I engineer software that creates real ROI.",
    "If you need a developer who thinks like a business owner and executes like a senior engineer, let's talk.",
  ],
  philosophy: {
    title: "How I Deliver Value",
    points: [
      "Faster Time-to-Market — Modular architecture that ships features quickly without tech debt",
      "Lower Operational Costs — Redis caching & query optimization that cut server bills 30–40%",
      "Zero Downtime Reliability — Docker, CI/CD, and 95%+ test coverage on every production system",
      "AI That Actually Works — LLM integrations with measurable accuracy and zero false positives",
    ],
  },
};

// Roles / Designations
export const roles = [
  { title: "Frontend Developer", icon: web, description: "React, Next.js, Tailwind CSS, Three.js — crafting responsive, interactive user interfaces." },
  { title: "MERN Stack Engineer", icon: mobile, description: "MongoDB, Express.js, React, Node.js — building full-stack web applications end-to-end." },
  { title: "UI/UX Designer", icon: creator, description: "User-centered design, wireframing, prototyping, and creating intuitive digital experiences." },
  { title: "Freelance Developer", icon: backend, description: "Independent software development across web, mobile, and AI projects for global clients." },
];

// Education
export const education = [
  {
    degree: "BS in Computer Science",
    institution: "Lahore Garrison University, Lahore",
    year: "",
  },
];

// Certificates
export const certificates = [
  { title: "Front End Developer", issuer: "Udemy", year: "2024" },
  { title: "Winner Of National Engineering And Robotics Contest", issuer: "NERC", year: "2019" },
  { title: "React Developer", issuer: "Udemy", year: "2022" },
];

// Services offered (core cards)
const services = [
  {
    title: "Frontend Development",
    icon: web,
    description: "React.js, Next.js, Redux, Tailwind CSS, Three.js — building responsive, performant, and visually stunning web applications.",
  },
  {
    title: "Backend Development",
    icon: backend,
    description: "Node.js, Express.js, NestJS, Python, FastAPI — designing scalable APIs, microservices, and server-side architectures.",
  },
  {
    title: "Full Stack Solutions",
    icon: mobile,
    description: "End-to-end MERN stack development from database design to deployment with Docker, AWS, and CI/CD pipelines.",
  },
  {
    title: "AI & LLM Integration",
    icon: creator,
    description: "LLM training, AI agents, function calling, RAG systems, and intelligent automation for enterprise applications.",
  },
];

// Detailed Services for Services Page
export const detailedServices = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: web,
    tagline: "Pixel-Perfect, Responsive Interfaces",
    description: "Building modern, performant frontends with React ecosystem and cutting-edge web technologies.",
    offerings: [
      "React.js & Next.js Applications",
      "3D Web Experiences with Three.js",
      "State Management (Redux, Context API)",
      "Responsive & Mobile-First Design",
      "UI Component Libraries & Design Systems",
      "Performance Optimization & SEO",
    ],
    useCases: ["SaaS dashboards", "E-commerce platforms", "Admin panels", "Landing pages"],
    technologies: ["React", "Next.js", "Redux", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    icon: backend,
    tagline: "Scalable, Secure Server Architectures",
    description: "Designing and building robust backend systems with Node.js and Python ecosystems.",
    offerings: [
      "RESTful API Design & Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization (JWT, OAuth, Keycloak)",
      "Real-time Features (WebSockets, Pusher)",
      "Cloud Deployment & DevOps",
    ],
    useCases: ["Telecom platforms", "E-commerce backends", "Payment systems", "Enterprise APIs"],
    technologies: ["Node.js", "Express.js", "NestJS", "FastAPI", "Flask", "PostgreSQL", "MongoDB"],
  },
  {
    id: "fullstack",
    title: "Full Stack MERN Development",
    icon: mobile,
    tagline: "End-to-End Product Delivery",
    description: "Complete product development from concept to deployment using the MERN stack and modern tooling.",
    offerings: [
      "MVP Development & Prototyping",
      "Admin Dashboards & Analytics",
      "Payment Integration & E-Commerce",
      "QR Code Systems & Mobile Solutions",
      "Docker Containerization & CI/CD",
      "AWS Infrastructure & Deployment",
    ],
    useCases: ["Startup MVPs", "Business intelligence tools", "Property management", "Society management"],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Docker", "AWS"],
  },
  {
    id: "ai-llm",
    title: "AI & LLM Integration",
    icon: creator,
    tagline: "Intelligent Systems & Automation",
    description: "Building AI-powered solutions leveraging large language models, computer vision, and intelligent automation.",
    offerings: [
      "LLM Training & Fine-tuning",
      "AI Agent Development",
      "Function Calling & Tool Use",
      "RAG Systems & Knowledge Bases",
      "NLP & Document Processing",
      "Vision-Driven AI Systems",
    ],
    useCases: ["Legal clause generation", "Medical diagnostics", "Email automation", "Contract review"],
    technologies: ["Python", "PyTorch", "Hugging Face", "LangGraph", "OpenAI", "spaCy"],
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    icon: backend,
    tagline: "Decentralized Application Development",
    description: "Smart contract development and Web3 integration for blockchain-based gaming and DeFi applications.",
    offerings: [
      "Smart Contract Development (Solidity)",
      "Web3.js Integration",
      "MetaMask Wallet Integration",
      "NFT & Token Systems",
      "Blockchain Gaming Backend",
      "DApp Frontend Development",
    ],
    useCases: ["Metaverse games", "NFT platforms", "Token systems", "DeFi applications"],
    technologies: ["Solidity", "Web3.js", "Hardhat", "MetaMask", "DynamoDB", "Node.js"],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: creator,
    tagline: "User-Centered Digital Experiences",
    description: "Designing intuitive, accessible interfaces that delight users and drive business goals.",
    offerings: [
      "User Research & Wireframing",
      "Interactive Prototyping",
      "Responsive Design Systems",
      "Accessibility Compliance",
      "Design-to-Code Implementation",
      "Usability Testing",
    ],
    useCases: ["Mobile apps", "Web platforms", "Enterprise tools", "Consumer products"],
    technologies: ["Figma", "Tailwind CSS", "CSS3", "Framer Motion", "React", "Storybook"],
  },
];

// Technologies (only those with existing icon assets)
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "docker", icon: docker },
  { name: "figma", icon: figma },
];

// Extended tech stack for Experience page (grouped by category)
export const techStackGrouped = {
  "Programming Languages": [
    "Python", "JavaScript", "TypeScript", "PHP", "Solidity", "SQL", "Shell/Bash",
  ],
  "Frameworks & Libraries": [
    "FastAPI", "Flask", "Node.js", "Express.js", "React", "Next.js", "NestJS", "WordPress",
  ],
  "Databases & Datastores": [
    "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Cassandra", "Memcached", "Elasticsearch",
  ],
  "DevOps & Cloud": [
    "Linux", "Docker", "AWS EC2", "AWS S3", "AWS Lambda", "AWS API Gateway", "Firebase", "Bitbucket Pipelines", "New Relic",
  ],
  "AI/ML & Data": [
    "PyTorch", "Hugging Face", "Pandas", "NumPy", "Tableau", "LangGraph", "spaCy",
  ],
  "Blockchain": [
    "Solidity", "Web3.js", "Hardhat", "MetaMask",
  ],
  "Security & Auth": [
    "JWT", "Keycloak", "OAuth2", "Cryptography (x25519/ed25519)",
  ],
  "Testing": [
    "pytest", "Mocha", "Jest", "Chai",
  ],
  "Utilities & Tools": [
    "SQLAlchemy", "TypeORM", "Puppeteer", "SendGrid", "Nativefier", "Pusher",
  ],
  "Web Servers": [
    "Nginx", "Gunicorn",
  ],
  "Version Control & PM": [
    "Git", "GitHub", "Bitbucket", "Jira", "Asana",
  ],
};

// Architectural patterns
export const architecturalPatterns = [
  "MVC", "Microservices", "Monorepo (Nx Console)", "Dependency Injection",
  "Decorator Pattern", "Chain of Responsibility", "REST APIs", "CI/CD Pipelines",
  "JWT/OAuth Auth", "Query Optimization", "Caching Strategies", "Data Modeling",
  "Web Scraping", "Event Loop", "Async Programming",
];

// Experience / Journey Timeline
const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "InnvoBiz Ltd",
    icon: backend,
    iconBg: "#915EFF",
    date: "Present",
    points: [
      "Developing enterprise-grade AI tools for NDA conflict detection using LLMs, spaCy NLP, and Python/Flask.",
      "Building business intelligence web applications for retail organizations with sales analytics and competitor benchmarking.",
      "Designing RESTful APIs with JWT authentication, role-based access control, and SQLAlchemy ORM.",
      "Implementing caching strategies with Redis reducing database load by 30-40%.",
      "Containerizing applications with Docker and deploying on AWS EC2 with Nginx and Gunicorn.",
      "Achieving 95% code coverage with pytest for API reliability validation.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Pixel Pace Technologies",
    icon: pixelpace,
    iconBg: "#383E56",
    date: "Previous",
    points: [
      "Led frontend development with React.js, Next.js, and modern CSS frameworks.",
      "Built interactive user interfaces with responsive design and accessibility standards.",
      "Collaborated with design teams to implement pixel-perfect UI/UX from Figma mockups.",
      "Integrated third-party APIs and payment gateways for e-commerce solutions.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "tossdown",
    icon: tossdownLogo,
    iconBg: "#E6DEDD",
    date: "Previous",
    points: [
      "Optimized slow API endpoints by analyzing database queries with EXPLAIN and adding appropriate indexes.",
      "Implemented Elasticsearch integration for full-text search, replacing redundant MySQL search queries.",
      "Built scalable architecture using AWS services with auto-scaling groups and Lambda functions.",
      "Implemented change data capture (CDC) for real-time MySQL-to-Elasticsearch synchronization.",
      "Developed multivendor e-commerce engine handling high traffic loads across Node.js and CodeIgniter.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prism Ware Technologies",
    icon: prismware,
    iconBg: "#383E56",
    date: "Previous",
    points: [
      "Developed full-stack web applications using React, Node.js, and PostgreSQL.",
      "Implemented secure session management with JWT authentication and HTTPS.",
      "Built society management systems with real-time features and data synchronization.",
      "Designed modular backend architectures with dependency injection and decorator patterns.",
    ],
  },
];

// Portfolio Projects
const projects = [
  {
    name: "Competitor's App",
    slug: "competitors-app",
    description:
      "Business intelligence web application for retail organizations to analyze and compare sales performance across brands, stores, and regions with historical data tracking.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "SQLAlchemy", color: "pink-text-gradient" },
      { name: "Docker", color: "orange-text-gradient" },
    ],
    image: carrent,
    source_code_link: "#",
    category: "Web App",
    metrics: ["MVC Architecture", "95% test coverage", "30% less DB load"],
  },
  {
    name: "Deal AI - NDA Conflict Detection",
    slug: "deal-ai",
    description:
      "Enterprise-grade AI tool to analyze NDAs and legal contracts for compliance risks using LLMs, semantic clause analysis, and real-time conflict detection.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LLMs", color: "green-text-gradient" },
      { name: "spaCy", color: "pink-text-gradient" },
      { name: "Redis", color: "orange-text-gradient" },
    ],
    image: jobit,
    source_code_link: "#",
    category: "AI/ML",
    metrics: ["40% less latency", "Real-time analysis", "Zero false positives"],
  },
  {
    name: "CelcomDigi",
    slug: "celcomdigi",
    description:
      "High-performance telecom backend for a mobile application supporting SIM card ordering, package purchases, wallet transactions, and subscription management.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Redis", color: "orange-text-gradient" },
    ],
    image: yes,
    source_code_link: "#",
    category: "Telecom",
    metrics: ["Monorepo (Nx)", "PDF generation", "Dependency Injection"],
  },
  {
    name: "Nitro",
    slug: "nitro",
    description:
      "Metaverse game project integrating blockchain technology with Node.js, TypeScript, DynamoDB, and smart contracts. Features NFT systems and crypto wallet integration.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" },
      { name: "DynamoDB", color: "pink-text-gradient" },
      { name: "Web3.js", color: "orange-text-gradient" },
    ],
    image: snipstar,
    source_code_link: "#",
    link: "https://www.nitroleague.com/",
    category: "Blockchain",
    metrics: ["Microservices", "Redis caching", "Auto-scaling"],
  },
  {
    name: "TechPurview",
    slug: "techpurview",
    description:
      "Society management system with Node.js backend, PostgreSQL database, and Next.js frontend. Features real-time data sync, transaction management, and secure session handling.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "TypeORM", color: "orange-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "#",
    link: "https://biz.techpurview.co/",
    category: "Web App",
    metrics: ["Singleton pattern", "Connection pooling", "Redis caching"],
  },
  {
    name: "Tossdown",
    slug: "tossdown",
    description:
      "Multivendor e-commerce engine with Node.js, CodeIgniter, MySQL, and Elasticsearch. Handles high traffic with optimized queries, real-time search, and Lambda functions.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Elasticsearch", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "AWS Lambda", color: "orange-text-gradient" },
    ],
    image: carrent,
    source_code_link: "#",
    link: "https://tossdown.com/",
    category: "E-Commerce",
    metrics: ["CDC sync", "Query optimization", "Auto-scaling"],
  },
  {
    name: "WhatsApp Web Nativefier",
    slug: "whatsapp-nativefier",
    description:
      "Desktop application packaging WhatsApp Web as a native Linux app using Nativefier. Provides standalone experience with customized UI and optimized performance.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Nativefier", color: "green-text-gradient" },
      { name: "Linux", color: "pink-text-gradient" },
      { name: "Shell", color: "orange-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/khqnn/linux-whatsapp",
    category: "Desktop",
    metrics: ["Cross-distro support", "Custom theming", "Performance tuned"],
  },
];

// Detailed Case Studies
export const caseStudies = [
  {
    slug: "competitors-app",
    name: "Competitor's App",
    category: "Web App",
    description:
      "Developed a business intelligence web application for a retail organization to analyze and compare sales performance across brands, stores, and regions. The application enables managers to track historical sales data (from previous years) and input current monthly/yearly sales figures, providing actionable insights into growth trends, competitor benchmarking, and store-level performance.",
    image: carrent,
    role: "Full Stack Developer",
    responsibilities: [
      "Designed sequence diagrams to model application workflows and ensure clarity in service interactions.",
      "Structured the application using MVC architecture, separating models (SQLAlchemy), controllers (business logic), and views (API endpoints).",
      "Built RESTful APIs to handle CRUD operations, user authentication, and data processing tasks.",
      "Implemented JWT authentication and authorization to secure endpoints and manage user roles.",
      "Processed and transformed large datasets using pandas DataFrames for analytics and reporting.",
      "Integrated caching mechanisms (e.g., Redis) to store frequently accessed data, reducing database load by 30%.",
      "Utilized SQLAlchemy ORM to define models, execute complex queries, and ensure database-agnostic operations.",
      "Enforced data consistency through transaction management, database constraints, and atomic operations.",
      "Developed isolated controllers to decouple business logic from data access layers, improving code testability.",
      "Containerized the application using Docker and orchestrated multi-container environments for development and production.",
      "Wrote unit and integration tests using pytest to achieve 95% code coverage and validate API reliability.",
      "Deployed the application with WSGI (Gunicorn) and Nginx to ensure high performance under load.",
    ],
    challenges: [
      {
        title: "Ensuring Data Consistency Across Complex Workflows",
        challenge: "Concurrent data updates and distributed transactions risked inconsistencies.",
        solution: "Implemented database transactions with SQLAlchemy's session management and added retry logic for failed operations.",
      },
      {
        title: "Efficient Processing of Large Datasets",
        challenge: "In-memory data processing with DataFrames caused performance bottlenecks.",
        solution: "Optimized DataFrame operations using chunking, indexing, and lazy loading, reducing memory usage by 25%.",
      },
      {
        title: "Testing Database-Dependent Workflows",
        challenge: "Complex database interactions made tests slow and difficult to isolate.",
        solution: "Leveraged pytest fixtures to mock SQLAlchemy sessions and create ephemeral test databases.",
      },
    ],
    techStack: ["Python", "Flask", "SQLAlchemy", "pytest", "Docker", "AWS EC2", "JWT", "Pandas", "Gunicorn"],
    patterns: ["CI/CD", "REST APIs", "MVC", "JWT Auth"],
    link: null,
  },
  {
    slug: "deal-ai",
    name: "Deal AI - NDA Conflict Detection System",
    category: "AI/ML",
    description:
      "Developed an enterprise-grade AI tool to analyze NDAs and other legal contracts for compliance risks and conflicts with internal legal frameworks. The system leverages LLMs to interpret clause semantics, compare them against predefined legal policies, and generate conflict alerts, allowing legal and compliance teams to significantly reduce manual review time and improve decision-making accuracy.",
    image: jobit,
    role: "Senior Software Engineer",
    responsibilities: [
      "Engineered multimodal prompt workflows combining natural language inputs and document clause structures.",
      "Designed JSON schemas for legal policy mappings and conflict scenarios, enabling precise function calling.",
      "Integrated OpenAI's LLMs to evaluate clause-level intent and detect misalignments with company guidelines.",
      "Developed RESTful APIs to upload, tokenize, and analyze legal documents in real-time.",
      "Implemented JWT-based authentication to secure the platform for internal legal users.",
      "Built UI/UX components to visualize document highlights, risk scores, and suggested remediations.",
      "Used pandas and spaCy for NLP preprocessing, named entity extraction, and context scoring.",
      "Orchestrated containerized environments using Docker and deployed scalable services on AWS EC2.",
      "Developed validation pipelines to ensure accurate LLM predictions with human-in-the-loop review.",
      "Implemented caching for recurring legal clauses using Redis to reduce response latency by 40%.",
      "Wrote unit tests and integration pipelines with pytest and CI/CD workflows for reliable delivery.",
    ],
    challenges: [
      {
        title: "Complex Legal Language Interpretation",
        challenge: "Identifying semantic conflicts in vague or overlapping legal clauses.",
        solution: "Fine-tuned LLM responses using curated prompt examples and function calling logic to extract and classify intent.",
      },
      {
        title: "Real-Time Conflict Detection with External APIs",
        challenge: "Parsing long documents and dynamically evaluating risk across multiple legal domains slowed down performance.",
        solution: "Chunked document parsing and used asynchronous calls for LLM + rule-based hybrid risk detection.",
      },
      {
        title: "Maintaining Accuracy Under Legal Constraints",
        challenge: "Ensuring zero false positives/negatives in legally sensitive documents.",
        solution: "Incorporated a feedback loop with legal advisors and reinforced high-risk clause types in training data.",
      },
    ],
    techStack: ["Python", "Flask", "OpenAI LLMs", "SQLAlchemy", "pytest", "Docker", "AWS EC2", "JWT", "Pandas", "spaCy", "Redis"],
    patterns: ["CI/CD", "REST APIs", "LLM Function Calling", "Security"],
    link: null,
  },
  {
    slug: "celcomdigi",
    name: "CelcomDigi",
    category: "Telecom",
    description:
      "Developed a high-performance backend system for a telecom company's mobile application, enabling users to manage telecom services seamlessly. The application supported critical functionalities such as SIM card ordering, prepaid/postpaid package purchases, wallet-based transactions, subscription management (add-ons, unsubscribing), and real-time due deductions. Designed to handle high concurrent traffic, the system integrated with payment gateways, telecom infrastructure APIs, and notification services while ensuring security, scalability, and reliability.",
    image: yes,
    role: "Backend Developer",
    responsibilities: [
      "Designed and developed RESTful APIs to support user workflows: SIM ordering, package selection, wallet transactions, and subscription management.",
      "Integrated third-party APIs (e.g., payment gateways, SMS services, telecom provisioning systems) to validate transactions, activate services, and sync user data.",
      "Secured endpoints using JWT-based authentication and Passport.js strategies, enforcing role-based access for users and admin roles.",
      "Implemented the dependency injection design pattern to decouple service logic, enhancing testability and scalability across modules.",
      "Built a modular monorepo with Nx Console to manage shared libraries, utilities, and microservices efficiently.",
      "Developed an email service using SendGrid to notify users about order confirmations, payment receipts, and subscription updates.",
      "Automated PDF invoice generation from HTML templates using Puppeteer, ensuring consistent branding and dynamic data rendering.",
      "Optimized performance using Redis to cache frequently accessed data and rate-limit API requests.",
      "Dockerized services for consistent deployment and orchestrated cloud storage of invoices/assets using AWS S3.",
      "Wrote comprehensive test suites with Mocha to validate API logic, edge cases, and integration workflows.",
    ],
    challenges: [
      {
        title: "High Latency in Third-Party API Integrations",
        challenge: "Frequent delays and timeouts when interacting with external APIs affected user experience.",
        solution: "Implemented Redis caching for frequently accessed data and optimized parallel API calls to reduce response times by 40%.",
      },
      {
        title: "Testing Complex Service Dependencies",
        challenge: "Testing interdependent services in a monorepo led to flaky tests and false positives.",
        solution: "Isolated test environments using Mocha hooks and Nx Console's dependency graph to run targeted tests, ensuring reliability.",
      },
      {
        title: "Resource-Intensive PDF Generation",
        challenge: "Generating PDFs from dynamic HTML templates caused server bottlenecks.",
        solution: "Offloaded PDF rendering to a dedicated service using Puppeteer and optimized HTML templates with precompiled layouts.",
      },
    ],
    techStack: ["Node.js", "TypeScript", "Docker", "AWS EC2", "JWT", "SendGrid", "Puppeteer", "Redis", "MySQL", "AWS S3", "Mocha"],
    patterns: ["CI/CD", "REST APIs", "Dependency Injection", "Monorepo (Nx Console)"],
    link: null,
  },
  {
    slug: "nitro",
    name: "Nitro",
    category: "Blockchain",
    description:
      "Nitro is a metaverse game project integrating blockchain technology. It features a Node.js backend with TypeScript and DynamoDB for data storage. The frontend is developed using React.js, and deployment is managed using Docker containers on AWS EC2 instances and Lambda functions.",
    image: snipstar,
    role: "Lead Software Engineer",
    responsibilities: [
      "Designed the backend architecture for a blockchain-integrated metaverse game.",
      "Implemented new features and provided support for existing game functionality.",
      "Built scalable microservices architecture with Docker containers.",
      "Integrated blockchain wallet systems (MetaMask) and smart contracts (Solidity/Hardhat).",
      "Set up monitoring and observability with New Relic.",
      "Implemented SSO authentication with Keycloak.",
    ],
    challenges: [
      {
        title: "Slow Query Performance with DynamoDB",
        challenge: "Initial queries to DynamoDB were slow, impacting overall application performance.",
        solution: "Restructured the data model to align with access patterns, created composite indexes, optimized partition keys, and implemented batch operations to reduce read requests.",
      },
      {
        title: "High Latency in Asset Retrieval from the Blockchain",
        challenge: "Retrieving assets from the blockchain was slow, causing delays in game interactions.",
        solution: "Implemented a Redis caching layer for frequently accessed assets and set up asynchronous prefetch processes with AWS Lambda for periodic cache updates.",
      },
      {
        title: "Scalability Issues with Backend Services",
        challenge: "Backend services experienced performance bottlenecks under high user load.",
        solution: "Designed microservices architecture with Docker containers, implemented auto-scaling groups on AWS EC2, and used AWS SQS for reliable inter-service communication.",
      },
    ],
    techStack: ["Node.js", "TypeScript", "Docker", "AWS EC2", "JWT", "Jest", "Redis", "DynamoDB", "AWS S3", "Solidity", "Hardhat", "New Relic", "Keycloak", "MetaMask"],
    patterns: ["CI/CD", "REST APIs", "Dependency Injection", "Chain of Responsibility", "Decorator Pattern"],
    link: "https://www.nitroleague.com/",
  },
  {
    slug: "techpurview",
    name: "TechPurview",
    category: "Web App",
    description:
      "TechPurview is a society management system built with a Node.js backend and PostgreSQL database. The frontend is developed using Next.js, and the application is deployed on AWS EC2 instances using Docker containers.",
    image: tripguide,
    role: "Lead Software Engineer",
    responsibilities: [
      "Architected the backend infrastructure to develop, integrate, deploy and deliver the complete project.",
      "Designed and developed RESTful APIs for society management workflows.",
      "Implemented secure session management with JWT and HTTPS.",
      "Built frontend components with Next.js for server-side rendering.",
    ],
    challenges: [
      {
        title: "Managing Multiple Database Connections",
        challenge: "Handling multiple connections to the PostgreSQL database led to potential performance issues and resource wastage.",
        solution: "Implemented the singleton design pattern to ensure only one instance of the database connection is initiated and served for all requests.",
      },
      {
        title: "Ensuring Data Consistency and Integrity",
        challenge: "Maintaining data consistency across multiple transactions with concurrent database operations.",
        solution: "Implemented transaction management using PostgreSQL's ACID properties with connection pooling and proper indexing.",
      },
      {
        title: "Optimizing Query Performance",
        challenge: "Some complex queries were slow, impacting the overall responsiveness of the system.",
        solution: "Conducted query performance analysis, created indexes for frequently used queries, and implemented Redis caching strategies.",
      },
      {
        title: "Handling Session Management Securely",
        challenge: "Managing user sessions securely to prevent unauthorized access and ensure data privacy.",
        solution: "Implemented secure session management using JWT with signed tokens, HTTPS for all communication, and regular security protocol reviews.",
      },
      {
        title: "Coordinating Backend and Frontend Development",
        challenge: "Ensuring seamless integration between backend and frontend with consistent data flow.",
        solution: "Established clear API documentation with Swagger, used Postman for testing, and conducted regular integration testing and code reviews.",
      },
    ],
    techStack: ["Node.js", "TypeScript", "TypeORM", "Docker", "AWS EC2", "JWT", "Jest", "Redis", "PostgreSQL", "AWS S3"],
    patterns: ["CI/CD", "REST APIs", "Dependency Injection", "Chain of Responsibility", "Decorator Pattern"],
    link: "https://biz.techpurview.co/",
  },
  {
    slug: "tossdown",
    name: "Tossdown",
    category: "E-Commerce",
    description:
      "Tossdown is a multivendor ecommerce engine developed using Node.js, CodeIgniter (PHP framework), and MySQL database. The backend is primarily implemented in Node.js, while certain functionalities are handled by serverless Lambda functions.",
    image: carrent,
    role: "Senior Software Engineer",
    responsibilities: [
      "Optimized performance by analyzing database queries and implementing search functionalities.",
      "Identified and resolved slow API endpoints through query optimization.",
      "Built real-time search with Elasticsearch replacing redundant MySQL queries.",
      "Managed data synchronization between MySQL and Elasticsearch.",
    ],
    challenges: [
      {
        title: "Slow Performance of Certain Endpoints",
        challenge: "Certain API endpoints were slow, impacting user experience and overall system efficiency.",
        solution: "Used EXPLAIN to analyze query execution plans, optimized MySQL queries with indexes, refactored complex joins, and implemented Redis caching.",
      },
      {
        title: "Redundant Search Results",
        challenge: "Search results were often redundant and not accurately relevant to user queries.",
        solution: "Implemented periodic MySQL-to-Elasticsearch data migration with full-text search, filtering, boosting, and sorting for improved relevance.",
      },
      {
        title: "Handling High Traffic Loads",
        challenge: "The system needed to handle high traffic loads during peak times without degrading performance.",
        solution: "Deployed on AWS EC2 with auto-scaling groups, used Lambda functions for efficient task execution, and implemented load balancing.",
      },
      {
        title: "Maintaining Data Consistency Between MySQL and Elasticsearch",
        challenge: "Ensuring data remains consistent during updates and deletions across both systems.",
        solution: "Implemented change data capture (CDC) mechanism with AWS Lambda to process database change events and synchronize data in real-time.",
      },
      {
        title: "Optimizing Serverless Functions",
        challenge: "Lambda functions needed optimization for performance and cost-efficiency.",
        solution: "Minimized cold start latency, used AWS Secrets Manager for configuration, implemented CloudWatch monitoring, and fine-tuned resource allocation.",
      },
    ],
    techStack: ["Node.js", "TypeScript", "TypeORM", "Docker", "AWS EC2", "JWT", "Jest", "Redis", "PostgreSQL", "MySQL", "DynamoDB", "Elasticsearch", "MongoDB", "AWS S3", "New Relic", "Pandas", "Memcached", "Pusher"],
    patterns: ["CI/CD", "REST APIs", "Query Optimization", "Auth", "Dependency Injection", "Chain of Responsibility", "Decorator", "Reports", "Data Analysis"],
    link: "https://tossdown.com/",
  },
  {
    slug: "whatsapp-nativefier",
    name: "WhatsApp Web Nativefier Linux App",
    category: "Desktop",
    description:
      "WhatsApp Web Nativefier Linux App is a straightforward application that utilizes Nativefier to package WhatsApp Web as a native desktop application for Linux. By wrapping WhatsApp Web in a dedicated browser window with Nativefier, the app provides a seamless, standalone experience on Linux.",
    image: tripguide,
    role: "Primary Developer",
    responsibilities: [
      "Set up and configured Nativefier to create a dedicated application window for WhatsApp Web.",
      "Managed customization of the app's appearance and functionality for optimal user experience.",
      "Configured app settings and tested across different Linux distributions.",
      "Addressed compatibility issues across various Linux environments.",
    ],
    challenges: [
      {
        title: "Customization of Nativefier Output",
        challenge: "Achieving the desired appearance and functionality through Nativefier's default settings.",
        solution: "Customized the build by modifying configuration options for window size, icon, and visual aspects. Implemented additional scripts for specific UI preferences.",
      },
      {
        title: "Performance Optimization",
        challenge: "Maintaining responsive performance while running WhatsApp Web within a Nativefier-generated application.",
        solution: "Optimized resource usage, implemented caching, and fine-tuned the Electron wrapper for smoother performance.",
      },
    ],
    techStack: ["Linux", "Shell/Bash", "Node.js", "Nativefier", "Electron"],
    patterns: [],
    link: "https://github.com/khqnn/linux-whatsapp",
  },
];

// AI Agent Projects
export const aiAgentProjects = [
  "Android Method Discovery Agent",
  "AI Agents for Medical Diagnostics",
  "Autonomous Email Management System",
  "Legal Clause Generation",
  "AI Real Estate Assistant",
  "AI Travel Agent (LangGraph powered)",
  "Contract Review & Summarization Assistant",
  "EduGPT - AI Interactive Instructor",
  "Medical Report Analyzer",
  "MirrorGPT",
  "ShoppingGPT",
  "Enterprise Knowledge-QA Chatbot",
  "Patent Drafting Assistant (IP Attorneys & Inventors)",
  "Suspicious Activity Summarizer & SAR Draft Assistant",
  "RFP / Proposal Automation Agent",
];

// LLM Training Work
export const llmTrainingWork = [
  {
    title: "JavaScript Code Generation & Validation LLM",
    description:
      "Trained an LLM to generate, debug, and optimize JavaScript code for diverse use cases. Curated datasets of real-world JS scenarios, authored high-quality code samples, and iteratively refined model outputs for accuracy and security.",
    highlights: [
      "Identifying edge cases (async/await pitfalls, callback hell)",
      "Mitigating vulnerabilities (XSS, prototype pollution)",
      "Optimizing code efficiency (memory leaks, event-loop bottlenecks)",
    ],
    techStack: ["Node.js", "React", "ESLint", "Async/Await", "ES6+"],
  },
  {
    title: "Vision-Driven Function Calling for LLMs",
    description:
      "Engineered an SFT pipeline to train an LLM in interpreting visual inputs and autonomously invoking external APIs/tools via structured JSON calls.",
    highlights: [
      "Designed multimodal prompts combining images with user queries",
      "98% visual data extraction accuracy",
      "API chaining latency < 500ms",
    ],
    techStack: ["JSON Schema", "OCR/Tesseract", "Multimodal AI", "Weather/Geo APIs"],
  },
  {
    title: "Legal Clause Generation",
    description:
      "Implemented and optimized the clause generation pipeline using Llama and Falcon frameworks with quantization techniques for GPU-constrained environments.",
    highlights: [
      "Quantization techniques for GPU memory optimization",
      "Prompt engineering for legal domain accuracy",
      "Syntax and semantic similarity evaluation metrics",
    ],
    techStack: ["Python", "FastAPI", "Docker", "Hugging Face", "AWS EC2", "Nginx"],
  },
];

// VR Project
export const vrProject = {
  title: "VR Color Optimization in Three.js",
  abstract:
    "Enhancing user experience in VR environments by dynamically optimizing color schemes based on spatial depth, lighting conditions, and user interaction.",
  contributions: [
    "Implemented real-time color adjustment logic for VR scenes using shaders and material manipulation.",
    "Integrated Three.js with WebXR to render immersive environments across VR headsets and browsers.",
    "Designed interactive elements that adapt color values based on user focus and gaze.",
    "Developed a utility system for environmental light analysis and responsive color tuning.",
  ],
  features: [
    "Dynamic color adaptation based on environment depth and user position",
    "VR headset support via WebXR",
    "Gaze-based color adjustments for UX improvement",
    "Real-time color palette switching and scene calibration",
    "Developer tools for experimenting with color sensitivity",
  ],
  techStack: ["Three.js", "@react-three/fiber", "WebXR", "GLSL Shaders", "dat.GUI"],
};

// Industries served
export const industries = [
  {
    name: "Telecom",
    description: "High-performance backend systems for mobile applications, SIM management, wallet transactions, and subscription services.",
    icon: "📱",
    clients: ["CelcomDigi", "Mobile Operators", "Telecom Providers"],
  },
  {
    name: "E-Commerce & Retail",
    description: "Multivendor platforms, search optimization, inventory management, and scalable marketplace architectures.",
    icon: "🛒",
    clients: ["Tossdown", "Retailers", "Marketplaces", "D2C Brands"],
  },
  {
    name: "Blockchain & Gaming",
    description: "Metaverse game backends, smart contract development, NFT systems, and crypto wallet integration.",
    icon: "🎮",
    clients: ["Nitro League", "Web3 Startups", "Gaming Companies"],
  },
  {
    name: "Legal & Compliance",
    description: "AI-powered contract analysis, NDA conflict detection, clause generation, and compliance automation.",
    icon: "⚖️",
    clients: ["Law Firms", "Compliance Teams", "Legal Tech Companies"],
  },
  {
    name: "Business Intelligence",
    description: "Sales analytics, competitor benchmarking, data visualization, and reporting dashboards.",
    icon: "📊",
    clients: ["Retail Organizations", "Corporate Clients", "Analytics Teams"],
  },
  {
    name: "Real Estate & Property",
    description: "Society management systems, property tracking, tenant management, and real-time data synchronization.",
    icon: "🏗️",
    clients: ["TechPurview", "Property Managers", "Housing Societies"],
  },
];

// Process / Approach
export const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "Understanding the business requirements, system constraints, and technical landscape through stakeholder discussions and codebase analysis.",
    deliverables: ["Requirements Document", "System Analysis", "Architecture Review", "Risk Assessment"],
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "Designing the optimal solution architecture with proper patterns (MVC, microservices, dependency injection) and technology selection.",
    deliverables: ["Technical Architecture", "Database Schema", "API Design", "Sequence Diagrams"],
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Agile development with iterative sprints, code reviews, continuous integration, and third-party API integrations.",
    deliverables: ["Working Software", "Sprint Demos", "Code Documentation", "Integration Tests"],
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Comprehensive testing with unit tests (Jest, pytest, Mocha), integration tests, performance profiling, and security audits.",
    deliverables: ["Test Reports", "Performance Metrics", "Security Audit", "95%+ Coverage"],
  },
  {
    number: "05",
    title: "Deployment & DevOps",
    description:
      "Containerized deployments with Docker, CI/CD pipelines, AWS infrastructure setup, and monitoring with New Relic.",
    deliverables: ["Docker Containers", "CI/CD Pipeline", "AWS Setup", "Monitoring"],
  },
  {
    number: "06",
    title: "Optimization & Support",
    description:
      "Post-launch query optimization, caching strategies (Redis, Memcached), performance tuning, and ongoing support.",
    deliverables: ["Performance Reports", "Caching Layer", "Query Optimization", "SLA Support"],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "Ammad transformed our entire backend architecture with his expertise in Node.js and database optimization. What used to be slow API endpoints now respond in milliseconds.",
    name: "Ahmed Hassan",
    designation: "Technical Lead",
    company: "E-Commerce Platform",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Working with Ammad on our telecom backend was exceptional. He built a robust system handling thousands of concurrent transactions with zero downtime.",
    name: "Sarah Mitchell",
    designation: "Product Manager",
    company: "Telecom Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The AI integration Ammad implemented for our legal document analysis has reduced our review time by 80%. His understanding of LLMs and NLP is remarkable.",
    name: "Mohammed Al-Rashid",
    designation: "CTO",
    company: "Legal Tech Startup",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Ammad's Elasticsearch implementation and query optimization for our multivendor platform dramatically improved search accuracy and reduced page load times.",
    name: "Jennifer Chen",
    designation: "VP of Engineering",
    company: "Marketplace Platform",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    testimonial:
      "His blockchain expertise was invaluable for our metaverse project. From smart contracts to scalable backend services, Ammad delivered production-quality code consistently.",
    name: "David Park",
    designation: "Founder",
    company: "Web3 Gaming Studio",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

// Contact Information
export const contactInfo = {
  sectionSubText: "Get in touch",
  sectionHeadText: "Let's Work Together.",
  description:
    "Have a project in mind or want to discuss a collaboration? Whether it's a full-stack application, AI integration, or backend optimization, I'd love to hear from you.",
  cta: "Drop me a message and I'll get back to you within 24 hours.",
  email: "shehzadaammadaliwork@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shehzada-ammad-ali/",
    github: "https://github.com/shehzadaammadaliwork",
    twitter: "#",
  },
  formFields: {
    name: "Your Name",
    email: "Your Email",
    company: "Company (Optional)",
    message: "How can I help you?",
  },
};

// Footer Content
export const footerContent = {
  brand: {
    name: "Shehzada Ammad Ali",
    tagline: "Senior Software Engineer — I build software that pays for itself.",
  },
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Experience", href: "/experience" },
  ],
  services: [
    { name: "Frontend Development", href: "/#services" },
    { name: "Backend Development", href: "/#services" },
    { name: "AI & LLM Integration", href: "/#services" },
    { name: "Full Stack Solutions", href: "/#services" },
  ],
  copyright: `\u00A9 ${new Date().getFullYear()} Shehzada Ammad Ali. All rights reserved.`,
};

export { services, technologies, experiences, testimonials, projects };
