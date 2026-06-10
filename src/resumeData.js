export const CONTACT = {
  phone: '+91 90199 99084',
  email: 'surajskote@gmail.com',
  github: 'https://github.com/Surajkote',
  linkedin: 'https://linkedin.com/in/surajskote',
}

export const EDUCATION = [
  {
    period: '2025 – 2029',
    institution: "Masters' Union",
    location: 'Gurugram',
    degree: 'Undergraduate Programme in Data Science & AI',
    bullets: [
      'Member of Ambassadors Council',
      'Mentored 10+ students for AI Hackathon competition',
      'Led campus tours and career fairs across cities',
      'Volunteered for multiple networking events',
    ],
  },
  {
    period: '2025 – 2029',
    institution: 'IIT Guwahati',
    location: 'Gurgaon',
    degree: 'B.Sc. in Data Science & AI',
    bullets: ['Dual Degree'],
  },
  {
    period: '2024 – 2025',
    institution: 'Vedanta PU College',
    location: 'Bengaluru',
    degree: 'Class 12',
    bullets: ['Scored 94%'],
  },
  {
    period: '2023 – 2024',
    institution: 'Sadhana PU College',
    location: 'Bengaluru',
    degree: 'Class 11',
    bullets: ['Scored 96%'],
  },
  {
    period: '2015 – 2023',
    institution: 'Deccan International School',
    location: 'Bengaluru',
    degree: 'Class 10',
    bullets: ['Scored 97%'],
  },
]

export const EXPERIENCE = [
  {
    period: "Feb '26 – Present",
    tag: 'Founder · Live Project',
    company: 'Forest',
    color: 'var(--neon-blue)',
    bullets: [
      'An AI-powered local file assistant that lets you find any file by describing its content in plain language — no need to remember file names.',
      'Once found, you can chat with your files, generate presentations, and export PDFs — all through a single conversational interface.',
    ],
    tags: ['LLM', 'RAG', 'NLP', 'File Intelligence', 'Streamlit'],
  },
  {
    period: "Oct '25 – Jan '26",
    tag: 'Co-Founder',
    company: 'Elara',
    color: 'var(--neon-purple)',
    bullets: [
      'Identified major inefficiencies in digital marketing workflows where teams spend excessive time on manual data analysis, ad monitoring; designed and built an AI system that converts client data into actionable strategy and automated execution.',
      'Developed an intelligent pipeline that analyzes datasets, generates insights, recommends target audience, messaging, formats and budgets, and automates campaign execution and performance optimization.',
      'Implemented LLM-based reasoning with a RAG pipeline and vector database, integrated with multi-platform automation (LinkedIn, Instagram, Google & Meta Ads) to continuously improve KPIs such as CTR and conversions.',
    ],
    tags: ['LLM', 'RAG', 'Vector DB', 'LangGraph', 'Multi-platform Ads'],
  },
]

export const PROJECTS = [
  {
    category: 'Agentic AI',
    color: 'var(--neon-blue)',
    icon: '⬡',
    items: [
      {
        name: 'Project Prahari',
        desc: 'Autonomous multi-agent vendor intelligence system using LangGraph — processed 60 purchase orders, 18 email threads, and 10 contracts across 10 vendors to generate board-ready renewal recommendations end-to-end.',
        tags: ['LangGraph', 'Multi-Agent', 'NLP', 'Automation'],
      },
      {
        name: 'Fraud Detection System',
        desc: 'Engineered a multi-agent architecture with adaptive ML to detect evolving fraud patterns across shifting merchant categories, geographics, and temporal habits — maintaining low false positive rates under dynamic conditions.',
        tags: ['ML', 'Adaptive AI', 'Multi-Agent'],
      },
      {
        name: 'Cold Calling agent',
        desc: "Designed and deployed an autonomous cold calling employee hiring agent ,which call's multiple applicants and performs a thorough first level screening with basic details ,consserving HR time by 50%.",
        tags: ['Vapi', 'Twilio', 'Vercel', 'Automation'],
      },
      {
        name: 'Cold Emailing agent',
        desc: 'Built an agent to acquire clients ,emailed more than 100+ companies per day by finding their emails through scanning respective websites ,checking if the email is valid and operational ,drafting customized messages for each startup/company based on their website content.',
        tags: ['Openrouter', 'Groq', 'Hunter.io', 'Langgraph'],
      },
    ],
  },
  {
    category: 'Machine Learning',
    color: 'var(--neon-cyan)',
    icon: '◈',
    items: [
      {
        name: 'CNN on CIFAR-10',
        desc: 'Trained and locally hosted a CNN model on the CIFAR-10 dataset using Python & Streamlit — classifies 10 image categories (cat, dog, car, etc.) with 90% accuracy.',
        tags: ['CNN', 'PyTorch', 'Streamlit', 'CIFAR-10'],
      },
      {
        name: 'AnimeGAN-v2',
        desc: 'Trained and launched an image modification model that generates animated, painted images of uploaded photos in 4 different styles using Python and Streamlit.',
        tags: ['GAN', 'Computer Vision', 'Streamlit'],
      },
      {
        name: 'Post Virality Predictor',
        desc: 'Multimodal model (K-Means Clustering + LightGBM) that predicts how viral a social media post will be on a scale of 1–100 based on sample post data.',
        tags: ['LightGBM', 'K-Means', 'Multimodal'],
      },
      {
        name: 'Song Popularity Predictor',
        desc: 'Built a Random Forest regression model from scratch to predict song popularity based on audio features (loudness, tone, etc.) from a Kaggle Spotify dataset.',
        tags: ['Random Forest', 'Regression', 'Kaggle'],
      },
      {
        name: 'Stable Diffusion v1.5',
        desc: 'Trained and locally hosted an image generation model generating 360/540p images from text prompts.',
        tags: ['Stable Diffusion', 'Generative AI'],
      },
    ],
  },
  {
    category: 'Chatbot & RAG',
    color: 'var(--neon-purple)',
    icon: '◉',
    items: [
      {
        name: 'E-Commerce RAG Chatbots',
        desc: 'Built multiple custom RAG-based agentic chatbots using n8n, Langflow, and Zapier for e-commerce companies like Myntra and Zomato based on sample data.',
        tags: ['RAG', 'n8n', 'Langflow', 'Zapier'],
      },
      {
        name: 'Mental Health Chatbot',
        desc: 'Prompt-engineered a mental health support chatbot using Langflow for teenagers seeking mental help or a virtual friend.',
        tags: ['Prompt Engineering', 'Langflow', 'LLM'],
      },
    ],
  },
  {
    category: 'Data Analysis',
    color: '#00d4aa',
    icon: '▣',
    items: [
      {
        name: 'Kaggle Dashboard Suite',
        desc: 'Analysed 5+ Kaggle datasets using Excel advanced functions (VLOOKUP, XLOOKUP) and created easy-to-understand, insightful dashboards.',
        tags: ['Excel', 'Kaggle', 'Dashboards'],
      },
      {
        name: 'Python Data Analysis',
        desc: 'Cleaned and analysed 5+ datasets using NumPy, Pandas, and Matplotlib; implemented Gradient Descent, PCA, and SVD mechanisms in Python.',
        tags: ['NumPy', 'Pandas', 'Matplotlib', 'PCA'],
      },
    ],
  },
]

export const SKILLS = [
  'Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib',
  'SQL', 'C', 'C++', 'HTML', 'Streamlit',
  'Langflow', 'n8n', 'Kaggle', 'RAG', 'LangGraph',
  'LLMs', 'Prompt Engineering', 'Computer Vision',
  'Tableau', 'Advanced Excel', 'Dashboards', 'Automation',
  'Supabase', 'Firebase', 'VS Code', 'GitHub',
  'Hypothesis Testing', 'Data Cleaning', 'PowerPoint',
  'Frontend Dev', 'UI/UX', 'Vibe Coding', 'AI', 'Research',
]

export const EXTRACURRICULAR = [
  { date: 'November 2025', desc: 'Managed real-time pitches to investors | Mentored 10+ students for AI Hackathon | Participated in Unstop Product Management case competition.' },
  { date: 'October 2025', desc: 'Developed & programmed a real-time temperature monitoring system using Arduino, DHT11 sensor, and SSD1306 OLED display.' },
  { date: 'December 2025', desc: 'Published a Medium article on the mathematical difference between Linear Regression and Random Forest ML models.' },
  { date: 'November 2023', desc: 'Participated in multiple regional Table Tennis tournaments.' },
]

export const POSITIONS = [
  {
    org: "Masters' Union, Gurugram",
    role: 'Ambassadors Council — Member',
    bullets: [
      'Led multiple campus tours and career fairs in different cities.',
      'Volunteered for multiple networking events and mentored 10+ high school students for AI Hackathon competition.',
    ],
  },
]
