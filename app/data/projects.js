export const projectsData = [
  {
    id: "internal-chatbot",
    slug: "internal-chatbot",
    title: "Internal Chatbot",
    tagline: "RAG powered chatbot to streamline technical support and knowledge retrieval.",
    shortDescription: "",
    role: "Full-Stack Dev",
    year: 2025,
    techStack: ["Ruby on Rails", "LangChain", "Local LLM", "API-based LLM", "Vector Database", "MySQL"],
    thumbnail: "",
    glowColor: "#f0abfc",
    glowBorder: "border-fuchsia-300",
    links: { 
    },

    overview: `The Support division handles a <strong class="text-zinc-200">high volume</strong> of user inquiries through a ticketing system. Previously, both new and experienced employees had to <strong class="text-zinc-200">manually search</strong> through a large number of resolved tickets, making the process time consuming.

    To address this, I developed a <strong class="text-zinc-200">chatbot that acts as an internal knowledge retrieval system</strong>. Instead of manually searching, users can ask questions and receive relevant past ticket resolutions <strong class="text-zinc-200">instantly</strong>. The system also integrates additional application level technical metadata to provide better context when resolving issues.

    By centralizing these resources, the chatbot reduces the time needed to search for past solutions and helps the team resolve issues more <strong class="text-zinc-200">efficiently</strong>.`,

    roleContributions: [
      "End-to-End RAG Architecture: Designed and built the full Retrieval Augmented Generation (RAG) pipeline to generate context aware responses based on internal data.",
      "Vector Database Setup: Integrated a vector database to enable fast and relevant semantic search across historical tickets and metadata.",
      "Data Engineering & Curation: Processed and structured raw data, filtering only the necessary information to keep the knowledge base relevant and usable."
    ],

    features: [
      { 
        title: "Natural Language Search", 
        description: "Users can ask troubleshooting questions in plain language without relying on rigid keyword filters." 
      },
      { 
        title: "Query Routing", 
        description: "Implements intent based routing to determine whether to retrieve past ticket resolutions or application related information." 
      },
      {
        title: "Source Citations",
        description: "Each response includes references to original data sources to reduce hallucinations and improve trust."
      }
    ],

    challenges: [
      {
        title: "Handling Tabular Data in RAG",
        challenge: "LLMs struggled to understand raw tabular data from Excel.",
        solution: "Built a custom parser to transform tables into a structured narrative format based on how domain experts interpret the data.",
        result: "Improved data usability and made tabular information retrievable within the RAG pipeline."
      },
      {
        title: "Optimizing Retrieval Accuracy",
        challenge: "Retrieving relevant results for technical queries and past ticket resolutions was inconsistent.",
        solution: "Implemented hybrid search combining embeddings and keyword based retrieval, and benchmarked multiple embedding models.",
        result: "Achieved more accurate and stable retrieval for both keyword based and natural language queries."
      },
      {
        title: "LLM Selection & Prompt Engineering",
        challenge: "Needed a fast and reliable LLM that could follow strict guidelines and avoid hallucinations.",
        solution: "Evaluated several models and designed system prompts with guardrails to ensure responses stayed grounded in retrieved data.",
        result: "Improved response consistency, reduced hallucinations, and maintained a consistent tone."
      }
    ],

    outcome: [
      {
        title: "From Research to Implementation",
        description: "Initially started as a research experiment and later approved for full development after being presented in an internal team meeting."
      },
      {
        title: "Internal Deployment",
        description: "Developed into a functional application and deployed in the internal staging environment."
      },
      {
        title: "Used by Support Team",
        description: "The application is now used by the Support team to find relevant ticket resolutions more efficiently, reducing manual search effort and helping resolve issues faster."
      }
    ]
  }
];