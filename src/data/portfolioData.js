export const personalInfo = {
  name: "Shrey Vilas Mangle",
  nickname: "Shrey",
  title: "AI Developer & Full-Stack Systems Engineer",
  tagline: "Architecting Intelligent AI Workflows, High-Throughput REST APIs & Scalable Data Platforms",
  bio: "Computer Engineering undergraduate with remote production experience at ATG World / Banao Technologies (Dubai) and Springers Capital (United States). Specialized in Python, FastAPI, React, LLM integrations, and high-volume data processing pipelines like First-Fly (246K+ records).",
  location: "Pune, Maharashtra, India",
  email: "shreymangle346@gmail.com",
  phone: "+91 9028525745",
  github: "https://github.com/ShreyMangle",
  linkedin: "https://www.linkedin.com/in/shrey-mangle-38ba5a286/",
  avatar: "https://avatars.githubusercontent.com/u/199966179?v=4",
  resumePath: `${import.meta.env.BASE_URL}Shrey_Mangle_Resume.pdf`,
  status: "Available for High-Impact AI & Software Engineering Roles (2026)",
};

export const keyStats = [
  { label: "Data Records Processed", value: "246,000+", sub: "In First-Fly Admission Platform" },
  { label: "Projected Cutoffs", value: "120,000+", sub: "Forecasting Pipeline Output" },
  { label: "Colleges Analyzed", value: "408", sub: "117 Engineering Branches" },
  { label: "Industry Experience", value: "2 Internships", sub: "ATG World / Banao & Springers Capital" },
];

export const experiences = [
  {
    company: "ATG World / Banao Technologies",
    role: "AI Developer Intern",
    period: "Feb 2026 – Present",
    badge: "Current Role",
    location: "Dubai, UAE (Remote)",
    highlights: [
      "Engineered backend microservices and production LLM application workflows using Python, FastAPI, and generative AI APIs for global client solutions.",
      "Implemented resilient API integrations, investigated complex software issues, and validated end-to-end multi-turn workflows.",
      "Contributed to core feature delivery, structured prompt-driven workflows, and Pydantic validation schemas to maximize uptime and output determinism.",
    ],
    skills: ["Python", "LLMs", "FastAPI", "Prompt Engineering", "API Integration", "Debugging", "Pydantic"],
  },
  {
    company: "Springers Capital",
    role: "AI Intern",
    period: "Nov 2025 – Jan 2026",
    badge: "Completed",
    location: "United States (Remote)",
    highlights: [
      "Implemented Python-based AI workflows and automated data-processing solutions for business decision-making and market analytics.",
      "Conducted systematic unit testing, edge-case debugging, output validation, and detailed technical documentation.",
      "Optimized data extraction pipelines to feed contextual AI models with high precision.",
    ],
    skills: ["Python", "AI Workflows", "Data Pipelines", "Unit Testing", "Output Validation", "Technical Docs"],
  },
];

export const projects = [
  {
    id: "first-fly",
    title: "First-Fly – MHT-CET Admission Intelligence Platform",
    tagline: "Scalable admissions analytics engine processing 246,000+ cutoff records with predictive forecasting.",
    category: "Full Stack & AI",
    badge: "Flagship Full-Stack",
    featured: true,
    stats: "246K+ Cutoffs • 408 Colleges • 120K Predictions",
    description:
      "A comprehensive admission intelligence platform built to eliminate guessing for Maharashtra engineering aspirants. Features an automated ETL pipeline that normalizes historical cutoff tables from official government PDFs, coupled with a regression forecasting model and recommendation engine that classifies colleges into SAFE, MODERATE, and DREAM tiers.",
    tech: ["Python", "FastAPI", "React 19", "SQLAlchemy", "SQLite", "Scikit-Learn", "Vercel", "Render"],
    features: [
      "Automated ETL pipeline standardizing historical data across 408 colleges and 117 branches",
      "Forecasting pipeline generating 120,000+ projected cutoff percentiles",
      "Decision engine ranking colleges into SAFE, MODERATE, or DREAM admission categories",
      "High-throughput FastAPI REST backend with Pydantic validation and SQLAlchemy ORM",
      "Modern React UI with instant client-side filtering, search, and category analytics",
    ],
    github: "https://github.com/ShreyMangle/first-fly-showcase",
    linkText: "View GitHub Repo",
  },
  {
    id: "vocalis-ai",
    title: "Vocalis AI – Intelligent Voice Platform",
    tagline: "End-to-end conversational voice engine uniting speech-to-text, LLM context, and audio generation.",
    category: "AI & Speech",
    badge: "Flagship AI",
    featured: true,
    stats: "Low Latency • Speech Pipeline • Context Aware",
    description:
      "An intelligent conversational voice system designed for seamless human-machine dialogue. Structured into modular pipelines covering audio ingestion, Whisper-based speech-to-text transcription, LLM reasoning with prompt constraints, and automated response vocalization.",
    tech: ["Python", "Speech-to-Text", "Whisper", "NLP", "FastAPI", "Audio Processing"],
    features: [
      "Modular streaming audio pipeline with noise filtering and silence detection",
      "Fast API-driven component orchestration for contextual AI inference",
      "Prompt-guided personality and constraint validation to prevent hallucinations",
      "Real-time synthesis interface ready for voice assistant and customer support integration",
    ],
    github: "https://github.com/ShreyMangle/Visual-Learning-AI-Video-Synthesis-System",
    linkText: "View GitHub Repo",
  },
  {
    id: "langgraph-debate",
    title: "Multi-Agent Debate System (LangGraph)",
    tagline: "Stateful autonomous multi-agent reasoning framework with structured argument DAGs.",
    category: "AI Agents",
    badge: "Agentic AI",
    featured: true,
    stats: "Graph Execution • State Checkpoints • Deep Trace Logs",
    description:
      "A sophisticated multi-agent debate platform built on LangGraph. Multiple specialized LLM agents (proponent, opponent, judge, fact-checker) analyze complex propositions, exchange rebuttals, verify claims, and reach synthesized verdicts with full trace logs.",
    tech: ["Python", "LangGraph", "LangChain", "Groq Cloud", "LLM Orchestration"],
    features: [
      "Graph-based control flow with conditional edges, cycle detection, and consensus checks",
      "State persistence and rewind capabilities to inspect intermediate agent reasoning",
      "Automated evaluation metrics comparing arguments against factual constraints",
    ],
    github: "https://github.com/ShreyMangle/multi-agent-debate-langgraph",
    linkText: "View GitHub Repo",
  },
  {
    id: "sih-forecaster",
    title: "SIH25192 – POWERGRID Infrastructure Forecaster",
    tagline: "Machine learning predictive suite for government electrical transmission project timelines.",
    category: "Machine Learning",
    badge: "Hackathon Project",
    featured: true,
    stats: "Smart India Hackathon • Cost & Timeline Forecast",
    description:
      "Developed for the Smart India Hackathon to solve critical delays in high-voltage POWERGRID transmission projects. Leveraged historical procurement and construction datasets to train predictive models forecasting schedule overruns and budget deviations.",
    tech: ["Python", "Scikit-Learn", "Pandas", "XGBoost", "Feature Engineering"],
    features: [
      "Multi-variate regression and gradient boosting models for milestone completion forecasting",
      "Automated risk scoring based on geographic terrain, contractor rating, and weather seasonality",
      "Data preprocessing pipeline handling missing sensors and disparate procurement logs",
    ],
    github: "https://github.com/ShreyMangle/SIH25192-Project-Forecaster",
    linkText: "View GitHub Repo",
  },
  {
    id: "ai-exam-planner",
    title: "AI Exam & Study Planner",
    tagline: "Ultra-fast study roadmap generator powered by FastAPI and Groq LPU inference.",
    category: "Full Stack & AI",
    badge: "FastAPI + Groq",
    featured: false,
    stats: "Sub-Second Inference • Dynamic Timetables",
    description:
      "A personalized exam preparation assistant that digests student syllabi, available study hours, and exam deadlines to construct dynamic daily milestones, powered by Groq's low-latency LPU endpoints.",
    tech: ["Python", "FastAPI", "Groq Cloud", "Llama 3", "Pydantic", "HTML5/CSS3"],
    features: [
      "High-speed generation of prioritized study schedules",
      "Difficulty-weighted topic allocation using cognitive load algorithms",
      "FastAPI backend with structured JSON schema outputs",
    ],
    github: "https://github.com/ShreyMangle/ai-exam-planner",
    linkText: "View GitHub Repo",
  },
  {
    id: "paperiq-ai",
    title: "PaperIQ AI – Research Synthesis Engine",
    tagline: "Automated conceptual breakdown and visual learning extraction for research papers.",
    category: "AI & Speech",
    badge: "Research Tool",
    featured: false,
    stats: "PDF Parsing • Concept Mapping",
    description:
      "Analyzes complex academic and technical papers to synthesize key contributions, extract methodology diagrams, and formulate interactive question-answering summaries.",
    tech: ["Python", "NLP", "FastAPI", "JavaScript", "PDF Miner"],
    features: [
      "Automated document layout analysis and section hierarchy extraction",
      "Context-aware query engine answering deep methodological questions",
    ],
    github: "https://github.com/ShreyMangle/PaperIQ-AI",
    linkText: "View GitHub Repo",
  },
];

export const skillCategories = [
  {
    title: "Backend & Systems",
    icon: "Server",
    color: "from-violet-500 to-indigo-600",
    skills: [
      { name: "FastAPI", level: "Expert", desc: "Async REST APIs, dependency injection, Pydantic" },
      { name: "Python", level: "Advanced", desc: "OOP, backend architectures, multiprocessing, ETL" },
      { name: "REST APIs", level: "Advanced", desc: "Design, rate-limiting, authentication, docs" },
      { name: "SQLAlchemy & ORM", level: "Advanced", desc: "Relational modeling, migrations, query optimization" },
      { name: "Flask & Django", level: "Proficient", desc: "Web services, templating, session handling" },
      { name: "Node.js", level: "Proficient", desc: "Event-driven scripting, API microservices" },
    ],
  },
  {
    title: "AI, LLMs & Machine Learning",
    icon: "Brain",
    color: "from-purple-500 to-violet-600",
    skills: [
      { name: "LLM Orchestration", level: "Advanced", desc: "Prompt design, context window optimization, tool calling" },
      { name: "LangGraph & LangChain", level: "Advanced", desc: "Multi-agent workflows, state DAGs, checkpointing" },
      { name: "Retrieval-Augmented Gen (RAG)", level: "Advanced", desc: "Vector search, hybrid chunking, reranking" },
      { name: "Speech & NLP (Whisper)", level: "Proficient", desc: "Audio transcription, tokenization, intent recognition" },
      { name: "Scikit-Learn", level: "Advanced", desc: "Classification, regression, cross-validation, feature prep" },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    color: "from-fuchsia-500 to-violet-500",
    skills: [
      { name: "React 19 / Modern React", level: "Advanced", desc: "Hooks, state management, suspense, responsive UI" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, closures, modern DOM APIs" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Custom themes, glassmorphism, responsive grids" },
      { name: "HTML5 & Modern CSS", level: "Expert", desc: "Semantic layout, CSS variables, fluid typography" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "PostgreSQL", level: "Advanced", desc: "Relational integrity, indexing, complex analytical joins" },
      { name: "MySQL", level: "Advanced", desc: "ACID transactions, normalization, schema design" },
      { name: "MongoDB", level: "Proficient", desc: "Document models, aggregation pipelines" },
      { name: "SQLite", level: "Expert", desc: "Embedded high-throughput querying, First-Fly DB" },
    ],
  },
  {
    title: "Core CS & Engineering",
    icon: "Cpu",
    color: "from-violet-600 to-blue-600",
    skills: [
      { name: "C++", level: "Advanced", desc: "Data structures, memory management, algorithms" },
      { name: "Data Structures & Algorithms", level: "Strong", desc: "Trees, graphs, dynamic programming, sorting" },
      { name: "DBMS & Systems Design", level: "Strong", desc: "Normalization, transaction isolation, concurrency" },
      { name: "Operating Systems & Networks", level: "Strong", desc: "Processes, threads, TCP/IP, HTTP/3, sockets" },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: "Wrench",
    color: "from-purple-600 to-indigo-500",
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Branching workflows, version control, CI/CD" },
      { name: "Docker", level: "Proficient", desc: "Containerization, multi-stage builds, Docker Compose" },
      { name: "Postman & API Testing", level: "Advanced", desc: "Collection runs, automated test assertions" },
      { name: "ETL Pipelines", level: "Advanced", desc: "PDF extraction, regex parsing, data standardization" },
    ],
  },
];

export const education = [
  {
    institution: "MES Wadia College of Engineering, Pune",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    period: "2023 – 2027",
    location: "Pune, Maharashtra",
    badge: "Undergraduate (3rd Year)",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    institution: "Late Bhairomal Tanwani Junior College, Pune",
    degree: "Higher Secondary Certificate (HSC) – Science",
    period: "2021 – 2023",
    location: "Pune, Maharashtra",
    badge: "Completed",
    courses: ["Computer Science", "Physics", "Mathematics", "Chemistry"],
  },
];

export const certifications = [
  {
    title: "Ultimate RAG (Retrieval-Augmented Generation) Bootcamp",
    issuer: "Udemy",
    icon: "Sparkles",
    focus: "Vector embeddings, dense retrieval, hybrid search & production LLM synthesis",
  },
  {
    title: "Data Science, ML, Deep Learning & NLP Bootcamp",
    issuer: "Udemy",
    icon: "Activity",
    focus: "Supervised & unsupervised learning, deep neural nets, NLP architectures",
  },
  {
    title: "Complete SQL, MySQL, PostgreSQL & MongoDB Bootcamp",
    issuer: "Udemy",
    icon: "Database",
    focus: "Complex SQL querying, stored procedures, indexing & NoSQL document models",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB Official University",
    icon: "Award",
    focus: "Schema design, Atlas cluster setup, aggregation pipelines",
  },
];

export const cliCommands = {
  help: "Available commands: 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'stats', 'resume', 'clear'",
  about: "Shrey Vilas Mangle — AI Developer Intern @ ATG World / Banao Technologies (Dubai, Remote), Computer Engineering student at MES Wadia College of Engineering Pune. Passionate about LLMs, high-throughput backend APIs, and real-world system solutions.",
  stats: "• 246K+ Cutoff Records Processed\n• 120K+ Projections Generated\n• 408 Colleges Analyzed\n• 2 Global Remote AI Internships (Dubai & US)",
  skills: "FastAPI • Python • LangGraph • LLMs • React 19 • PostgreSQL • SQLite • Docker • C++ • Scikit-Learn • REST APIs",
  projects: "1. First-Fly (246K records admission engine)\n2. Vocalis AI (Intelligent Voice Platform)\n3. Multi-Agent Debate LangGraph\n4. SIH25192 POWERGRID Forecaster",
  experience: "• AI Developer Intern @ ATG World / Banao Technologies [Dubai, UAE - Remote] (Feb 2026 - Present)\n• AI Intern @ Springers Capital [United States - Remote] (Nov 2025 - Jan 2026)",
  education: "B.E. Computer Engineering (2023-2027), MES Wadia College of Engineering, Pune",
  contact: "Email: shreymangle346@gmail.com | Phone: +91 9028525745 | LinkedIn: /in/shrey-mangle-38ba5a286",
  resume: "Resume available at /Shrey_Mangle_Resume.pdf. Click the 'Download Resume' button to save it!",
};

