export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-powered-frontend-experiences",
    title: "Building AI-Powered Frontend Experiences",
    excerpt:
      "Exploring how modern frontend engineering can combine React, Next.js, AI APIs, and thoughtful UX to create intelligent digital experiences.",
    category: "AI Engineering",
    date: "September 18, 2026",
    readTime: "6 min read",
    image: "/images/blog/ai-frontend.jpg",
    tags: ["AI", "Next.js", "React"],
    featured: true,

    content: [
      {
        heading: "Why AI belongs in the frontend",
        paragraphs: [
          "AI is changing how people interact with digital products. Modern interfaces are moving beyond static information and becoming more contextual, interactive, and helpful.",
          "As a frontend developer, I am interested in the intersection between user experience and AI capabilities. The goal is not simply to add an AI button, but to create experiences where intelligence genuinely improves the product.",
        ],
      },
      {
        heading: "Combining frontend and AI",
        paragraphs: [
          "React and Next.js provide a strong foundation for building modern interfaces, while AI APIs can provide reasoning, generation, classification, and other intelligent capabilities.",
          "Combining these technologies allows developers to build applications that can understand user input, process information, and return useful results through familiar interfaces.",
        ],
      },
      {
        heading: "My approach",
        paragraphs: [
          "My approach is to start with the user experience first. Before integrating an AI model, I consider what problem the AI actually solves and how the result should be presented.",
          "Loading states, errors, accessibility, responsive design, validation, and human verification are equally important parts of an AI-powered frontend.",
        ],
      },
    ],
  },

  {
    slug: "my-flyrank-ai-internship-journey",
    title: "My FlyRank AI Internship Journey",
    excerpt:
      "Lessons, experiments, and practical experience from my journey through AI Fluency and Frontend AI Engineering.",
    category: "AI Fluency",
    date: "September 15, 2026",
    readTime: "5 min read",
    image: "/images/blog/flyrank-ai.jpg",
    tags: ["FlyRank", "AI", "Learning"],

    content: [
      {
        heading: "Starting the journey",
        paragraphs: [
          "My FlyRank AI internship has been an important part of my transition from traditional frontend development toward AI-focused engineering.",
          "The experience introduced me to practical AI workflows and encouraged me to think about how AI can be integrated into real software products.",
        ],
      },
      {
        heading: "Learning through practical assignments",
        paragraphs: [
          "Instead of focusing only on theory, I worked through practical assignments involving AI-assisted development, frontend engineering, debugging, documentation, automation, and experimentation.",
          "These assignments helped me understand that working effectively with AI requires clear requirements, good context, verification, and continuous iteration.",
        ],
      },
      {
        heading: "What I am taking forward",
        paragraphs: [
          "The biggest lesson for me is that AI should support engineering rather than replace engineering fundamentals.",
          "I am continuing to strengthen my React and Next.js foundation while exploring AI SDKs, agents, tools, structured outputs, and AI-assisted workflows.",
        ],
      },
    ],
  },

  {
    slug: "working-with-claude-for-development",
    title: "Working with Claude for Modern Development",
    excerpt:
      "How AI-assisted development can improve exploration, debugging, documentation, and frontend engineering workflows.",
    category: "AI Tools",
    date: "September 10, 2026",
    readTime: "7 min read",
    image: "/images/blog/claude.jpg",
    tags: ["Claude", "AI", "Development"],

    content: [
      {
        heading: "AI-assisted development",
        paragraphs: [
          "AI coding assistants can support developers across many stages of development. They can help explore unfamiliar code, explain errors, suggest approaches, and improve documentation.",
          "The most useful workflow is not simply asking AI to write an entire application. Instead, I prefer breaking larger problems into smaller tasks and verifying each result.",
        ],
      },
      {
        heading: "Beyond code generation",
        paragraphs: [
          "One of the most valuable aspects of working with AI is using it as a reasoning and exploration partner.",
          "For example, an AI assistant can help compare implementation approaches, identify potential edge cases, explain unfamiliar APIs, and create test scenarios.",
        ],
      },
      {
        heading: "Human verification still matters",
        paragraphs: [
          "Generated code still needs human review. Developers need to understand the implementation, verify assumptions, test the application, and consider security and performance.",
          "AI can accelerate development, but engineering judgment remains an important part of the workflow.",
        ],
      },
    ],
  },

  {
    slug: "building-with-nextjs-and-ai-sdk",
    title: "Building with Next.js and AI SDK",
    excerpt:
      "A practical look at connecting a modern Next.js application with AI capabilities, tools, structured data, and reliable error handling.",
    category: "Frontend AI",
    date: "September 5, 2026",
    readTime: "8 min read",
    image: "/images/blog/nextjs-ai.jpg",
    tags: ["Next.js", "AI SDK", "TypeScript"],

    content: [
      {
        heading: "Why Next.js for AI applications",
        paragraphs: [
          "Next.js provides a convenient architecture for building applications that combine frontend interfaces with server-side functionality.",
          "This makes it possible to keep sensitive API operations on the server while providing a responsive frontend experience.",
        ],
      },
      {
        heading: "Tools and structured data",
        paragraphs: [
          "AI applications become more useful when models can interact with well-defined tools and structured data.",
          "Schema validation can also make AI-generated results easier to consume safely inside a TypeScript application.",
        ],
      },
      {
        heading: "Handling failures",
        paragraphs: [
          "AI APIs can fail because of network problems, invalid input, rate limits, or unexpected model responses.",
          "A production-ready application should therefore include proper loading states, error handling, validation, and useful fallback experiences.",
        ],
      },
    ],
  },

  {
    slug: "from-frontend-developer-to-ai-engineer",
    title: "From Frontend Developer to AI Engineer",
    excerpt:
      "How I am expanding my frontend foundation into AI-focused engineering and building intelligent user experiences.",
    category: "Career",
    date: "August 30, 2026",
    readTime: "5 min read",
    image: "/images/blog/frontend-ai.jpg",
    tags: ["Career", "Frontend", "AI"],

    content: [
      {
        heading: "Starting with frontend",
        paragraphs: [
          "My development journey started with web technologies and gradually moved toward React, Next.js, backend APIs, databases, authentication, and full-stack applications.",
        ],
      },
      {
        heading: "Why AI engineering",
        paragraphs: [
          "As AI becomes increasingly integrated into software products, frontend engineers have an opportunity to create better interfaces for intelligent systems.",
          "This is why I am focusing on combining my existing frontend skills with AI engineering concepts.",
        ],
      },
      {
        heading: "The next chapter",
        paragraphs: [
          "My current focus includes AI-assisted development, AI SDKs, agents, tool calling, structured outputs, and building practical AI-powered interfaces.",
        ],
      },
    ],
  },

  {
    slug: "building-my-developer-portfolio",
    title: "Building My Developer Portfolio",
    excerpt:
      "The ideas, technologies, design decisions, and AI experiments behind my personal developer portfolio.",
    category: "Portfolio",
    date: "August 25, 2026",
    readTime: "4 min read",
    image: "/images/blog/portfolio.jpg",
    tags: ["Portfolio", "Next.js", "Design"],

    content: [
      {
        heading: "More than a resume",
        paragraphs: [
          "I wanted my portfolio to be more than a digital resume. It should communicate how I think, what I build, and the technologies I am exploring.",
        ],
      },
      {
        heading: "The technology",
        paragraphs: [
          "The portfolio uses modern frontend technologies with a strong focus on performance, responsive design, accessibility, and interactive experiences.",
        ],
      },
      {
        heading: "AI-focused direction",
        paragraphs: [
          "The portfolio is also becoming a place where I can document experiments involving AI, frontend engineering, automation, and intelligent digital experiences.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}