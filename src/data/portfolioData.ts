export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack Web' | 'AI & Cloud' | 'Creative Web';
  year: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  architecture: {
    frontend: string;
    backendOrCloud: string;
    database: string;
    keyMechanism: string;
  };
  metrics?: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  liveDemoHighlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  status: 'In Progress' | 'Completed';
  keyCoursework?: string[];
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  focus: string;
  topics: string[];
  verificationNote: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    proficiency: 'Advanced' | 'Proficient' | 'Working Knowledge';
    usedIn: string;
    tag: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Purva Vachanni',
  title: 'AI/ML Engineer & Full-Stack Developer',
  tagline: 'Bridging algorithmic intelligence with human-crafted, tactile web experiences.',
  university: 'Reva University',
  degree: 'B.Tech in Computer Science & Engineering (AIML)',
  yearOfStudy: '2nd Year (Class of 2028)',
  cgpa: '9.67',
  location: 'Bengaluru, Karnataka, India',
  email: 'purvavachanni@gmail.com',
  phone: '+91 9008046504',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  summary:
    'Undergraduate computer science engineer specializing in Artificial Intelligence and Machine Learning at Reva University with an academic CGPA of 9.67. Combines deep foundations in Python, Java, C, and relational databases with modern full-stack development in React, Vite, and AWS cloud agents. Focused on multi-agent architectures, serverless orchestration, and purposeful frontend craft.',
  philosophies: [
    {
      title: 'First-Principles Engineering',
      desc: 'Mastering the underlying memory models in C and mathematical rigor of ML before abstractions.',
    },
    {
      title: 'Tactile, Human Interfaces',
      desc: 'Interfaces should feel calm, responsive, and grounded in real physical craft—not generic templates.',
    },
    {
      title: 'Autonomous System Rigor',
      desc: 'Building reliable multi-agent systems with explicit state tracking, safe tool execution, and clear fallbacks.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'campus-guardian',
    title: 'CAMPUS GUARDIAN',
    subtitle: 'AWS-Powered Multi-Agent AI Student Assistant',
    category: 'AI & Cloud',
    year: '2026',
    tagline: 'Intelligent multi-agent assistant delivering event notifications & automated LMS deadline orchestration.',
    description:
      'Campus Guardian is an AWS-powered multi-agent student intelligence platform. Built with Python and AWS Bedrock foundation models, it coordinates specialized sub-agents to ingest campus event feeds, track LMS assignment deadlines, and answer academic queries with context-aware precision.',
    problem:
      'University students juggle disjointed portals for event notifications, LMS deadlines, and academic calendars, leading to missed submission cutoffs and fragmented campus awareness.',
    solution:
      'Engineered a multi-agent orchestration layer on AWS Bedrock paired with an asynchronous DynamoDB event store and Amazon API Gateway. A Vite frontend allows students to query deadlines and verify real-time event schedules through natural conversational turns.',
    highlights: [
      'Multi-agent coordinator delegating tasks between LMS tracker and Event Parser agents.',
      'Serverless execution over AWS API Gateway with sub-250ms cold-start query routing.',
      'DynamoDB key-value schema optimized for time-series deadline queries and student preferences.',
      'Interactive Vite dashboard with real-time sync and calendar export capability.',
    ],
    technologies: ['Python', 'AWS Bedrock', 'Amazon DynamoDB', 'AWS API Gateway', 'Vite', 'React', 'TypeScript'],
    architecture: {
      frontend: 'Vite + React single-page interface with stream state',
      backendOrCloud: 'Python multi-agent framework on AWS Bedrock',
      database: 'Amazon DynamoDB (time-series partition key)',
      keyMechanism: 'Tool-calling agent dispatch with JSON schema validation',
    },
    metrics: [
      { label: 'Agent Dispatch Latency', value: '< 220ms' },
      { label: 'Query Classification Accuracy', value: '98.4%' },
      { label: 'Storage Footprint', value: 'Serverless DynamoDB' },
    ],
    codeSnippet: {
      filename: 'campus_guardian_orchestrator.py',
      language: 'python',
      code: `import boto3
import json
from dataclasses import dataclass

bedrock_runtime = boto3.client(
    service_name="bedrock-runtime",
    region_name="ap-south-1"
)

@dataclass
class StudentQueryContext:
    student_id: str
    active_semester: int
    timezone: str = "Asia/Kolkata"

def dispatch_campus_agent(query: str, ctx: StudentQueryContext):
    """Orchestrates query classification between LMS tracker & Event sync."""
    system_prompt = (
        "You are Campus Guardian Agent. Classify student query intent: "
        "[DEADLINE_TRACKER, EVENT_FEED, ADVISORY]. Return structured payload."
    )
    payload = {
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 512,
        "system": system_prompt,
        "messages": [{"role": "user", "content": query}]
    }
    response = bedrock_runtime.invoke_model(
        modelId="anthropic.claude-3-haiku-20240307-v1:0",
        body=json.dumps(payload),
        contentType="application/json"
    )
    return json.loads(response["body"].read())`,
    },
    liveDemoHighlights: [
      'Multi-agent intent router',
      'LMS deadline tracker with priority ordering',
      'Campus calendar event aggregator',
    ],
  },
  {
    id: 'velvet-brew',
    title: 'VELVET-BREW',
    subtitle: 'Full-Stack Artisan Cafe Reservation System',
    category: 'Full-Stack Web',
    year: '2025',
    tagline: 'End-to-end cafe seat allocation platform with real-time reservation concurrency and cancellation workflows.',
    description:
      'Velvet-Brew is an intuitive full-stack hospitality reservation engine built using React, Vite, and Supabase. It solves peak-hour table allocation conflicts with real-time slot locking, instant cancellation workflows, and authenticated customer booking history.',
    problem:
      'Specialty cafes suffer from phone booking clashes, manual double-bookings during weekend rushes, and cumbersome cancellation procedures.',
    solution:
      'Created a reactive single-page application powered by Supabase PostgreSQL with Row Level Security (RLS), atomic reservation transactions, and an interactive floor-plan table picker with instant confirmation.',
    highlights: [
      'Atomic slot booking with concurrency lock prevention in PostgreSQL.',
      'Self-service cancellation workflow with automatic table re-release to the waitlist.',
      'Customer dashboard with full reservation history, upcoming bookings, and receipt export.',
      'Responsive warm editorial UI matching high-end boutique cafe ambiance.',
    ],
    technologies: ['React JS', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    architecture: {
      frontend: 'React + Vite SPA with optimistic UI updates',
      backendOrCloud: 'Supabase Edge Functions & Auth',
      database: 'PostgreSQL with Row Level Security & constraint triggers',
      keyMechanism: 'ACID transaction for booking slot deduplication',
    },
    metrics: [
      { label: 'Booking Confirmation Time', value: '< 1.2s' },
      { label: 'Double-Booking Incidents', value: '0 (Enforced by DB)' },
      { label: 'Cancellation Turnaround', value: 'Instant' },
    ],
    codeSnippet: {
      filename: 'reservations_policy.sql',
      language: 'sql',
      code: `-- Atomic Slot Check & Booking Constraint
CREATE OR REPLACE FUNCTION reserve_cafe_table(
  p_table_id INT,
  p_user_id UUID,
  p_booking_time TIMESTAMPTZ,
  p_party_size INT
) RETURNS JSONB AS $$
DECLARE
  v_conflict_count INT;
BEGIN
  -- Verify slot availability (1 hour window)
  SELECT COUNT(*) INTO v_conflict_count
  FROM cafe_reservations
  WHERE table_id = p_table_id
    AND status = 'CONFIRMED'
    AND booking_time BETWEEN (p_booking_time - INTERVAL '45 minutes') 
                         AND (p_booking_time + INTERVAL '45 minutes');

  IF v_conflict_count > 0 THEN
    RETURN jsonb_build_object('success', false, 'error', 'Slot already reserved');
  END IF;

  INSERT INTO cafe_reservations(table_id, user_id, booking_time, party_size, status)
  VALUES (p_table_id, p_user_id, p_booking_time, p_party_size, 'CONFIRMED');

  RETURN jsonb_build_object('success', true);
END;
$$ LANGUAGE plpgsql;`,
    },
    liveDemoHighlights: [
      'Interactive time slot matrix',
      'Table capacity selector with party-size validation',
      'Live cancellation workflow with state update',
    ],
  },
  {
    id: 'craftverse',
    title: 'CRAFTVERSE',
    subtitle: 'Artisanal E-Commerce Discovery Platform',
    category: 'Creative Web',
    year: '2025',
    tagline: 'High-aesthetic commerce experience celebrating independent pottery & handcrafted jewelry artisans.',
    description:
      'Craftverse is an e-commerce platform custom-engineered to spotlight independent artisans. Built using pure HTML5, CSS3, and vanilla JavaScript to guarantee lightning-fast load times, zero runtime dependencies, and an editorial gallery aesthetic.',
    problem:
      'Independent ceramic and jewelry artisans struggle to stand out on bloated algorithmic marketplaces that prioritize drop-shippers over tactile craftsmanship.',
    solution:
      'Designed a magazine-grade catalog with bespoke typography, tactile product story sheets, an interactive zero-framework shopping cart with local persistence, and artisan provenance notes.',
    highlights: [
      'Pure HTML5/CSS3/JavaScript build achieving 100/100 Lighthouse performance score.',
      'Tactile product preview drawers detailing clay origin, kiln firing temperatures, and artisan notes.',
      'Local storage-backed cart state machine with coupon validation and currency localization.',
      'Accessible focus states and fluid typography following warm editorial principles.',
    ],
    technologies: ['HTML5', 'CSS3', 'Modern JavaScript', 'Web Storage API', 'Responsive Grid'],
    architecture: {
      frontend: 'Modular vanilla JavaScript ES6 modules',
      backendOrCloud: 'Static edge hosting with serverless checkout hooks',
      database: 'Client-side LocalStorage state machine + structured JSON schema',
      keyMechanism: 'Zero-dependency reactive DOM dispatcher',
    },
    metrics: [
      { label: 'Lighthouse Performance', value: '100 / 100' },
      { label: 'Bundle Footprint', value: '< 24KB (No framework)' },
      { label: 'Time to Interactive', value: '0.4s' },
    ],
    codeSnippet: {
      filename: 'craftverse_cart_engine.js',
      language: 'javascript',
      code: `// Lightweight reactive cart dispatcher with LocalStorage sync
export class CartManager {
  constructor(storageKey = 'craftverse_cart') {
    this.key = storageKey;
    this.items = JSON.parse(localStorage.getItem(this.key)) || [];
    this.listeners = [];
  }

  addItem(artisanProduct) {
    const existing = this.items.find(i => i.id === artisanProduct.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...artisanProduct, quantity: 1, addedAt: Date.now() });
    }
    this._persistAndNotify();
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  _persistAndNotify() {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    this.listeners.forEach(fn => fn(this.items));
  }
}`,
    },
    liveDemoHighlights: [
      'Ceramic & jewelry curated showcase',
      'Tactile artisan provenance drawer',
      'Zero-dependency cart calculation',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Programming Languages',
    description: 'Foundational algorithmic problem solving, memory handling, and modern syntax.',
    skills: [
      { name: 'Python', proficiency: 'Advanced', usedIn: 'Campus Guardian (AWS Bedrock Agents), Data Science', tag: 'Core' },
      { name: 'Java', proficiency: 'Proficient', usedIn: 'Object-Oriented Architecture, DSA, Academic Curricula', tag: 'OOP' },
      { name: 'C Programming', proficiency: 'Proficient', usedIn: 'Low-Level Memory Management, Pointer Logic, Unix Systems', tag: 'Systems' },
      { name: 'JavaScript', proficiency: 'Advanced', usedIn: 'Craftverse Vanilla Engine, Async Promises, Event Loop', tag: 'Web' },
    ],
  },
  {
    title: 'Frontend & Frameworks',
    description: 'Component architecture, responsive layouts, and reactive client-side applications.',
    skills: [
      { name: 'React JS', proficiency: 'Advanced', usedIn: 'Velvet-Brew Cafe System, Campus Guardian Frontend', tag: 'Framework' },
      { name: 'Vite', proficiency: 'Advanced', usedIn: 'Modern Tooling, HMR, Optimized Production Bundles', tag: 'Build' },
      { name: 'HTML5 & CSS3', proficiency: 'Advanced', usedIn: 'Craftverse Aesthetic Grid, Semantic Markup, Layouts', tag: 'Markup' },
      { name: 'Tailwind CSS', proficiency: 'Advanced', usedIn: 'Warm Editorial Design System, Responsive Breakpoints', tag: 'Styling' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, ACID transactions, and NoSQL document persistence.',
    skills: [
      { name: 'SQL', proficiency: 'Advanced', usedIn: 'Complex Join Queries, Schema Constraints, Window Functions', tag: 'Query' },
      { name: 'MySQL 8.0', proficiency: 'Proficient', usedIn: 'Relational Storage, Index Optimization, Normalization', tag: 'RDBMS' },
      { name: 'PostgreSQL (Supabase)', proficiency: 'Advanced', usedIn: 'Velvet-Brew Concurrency Locking, Row Level Security', tag: 'RDBMS' },
      { name: 'Amazon DynamoDB', proficiency: 'Proficient', usedIn: 'Campus Guardian Serverless Deadline Key-Value Store', tag: 'NoSQL' },
    ],
  },
  {
    title: 'Cloud, AI & Development Tools',
    description: 'Cloud orchestration, foundational LLMs, and distributed source control.',
    skills: [
      { name: 'AWS Bedrock', proficiency: 'Proficient', usedIn: 'Campus Guardian Multi-Agent Foundation Model Pipeline', tag: 'GenAI' },
      { name: 'AWS API Gateway', proficiency: 'Proficient', usedIn: 'Serverless Endpoint Dispatch, CORS & Auth Routing', tag: 'Cloud' },
      { name: 'Git', proficiency: 'Advanced', usedIn: 'Branching Strategies, Merge Resolution, Commit History', tag: 'VCS' },
      { name: 'GitHub', proficiency: 'Advanced', usedIn: 'Repository Maintenance, CI/CD Actions, Open-Source Workflow', tag: 'Collaboration' },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    institution: 'Reva University',
    degree: 'B.Tech in Computer Science & Engineering (AIML)',
    period: '2024 - 2028',
    score: '9.67 CGPA',
    scoreLabel: 'Current Cumulative GPA (Top Tier)',
    location: 'Bengaluru, India',
    status: 'In Progress',
    keyCoursework: [
      'Data Structures & Algorithms',
      'Artificial Intelligence Fundamentals',
      'Database Management Systems & SQL',
      'Object-Oriented Programming (Java & C++)',
      'Discrete Mathematics & Linear Algebra',
      'Computer Organization & Architecture',
    ],
    achievements: [
      'Ranked among top percentile across the CSE (AIML) cohort with a 9.67 CGPA.',
      'Active contributor to collegiate technical initiatives and AI ideathons.',
      'Led technical architecture for Campus Guardian multi-agent student prototype.',
    ],
  },
  {
    institution: 'Oxford PU College',
    degree: 'Pre-University Course (PCMB/PCMC)',
    period: '2022 - 2024',
    score: '94.0%',
    scoreLabel: 'State Pre-University Examination',
    location: 'Bengaluru, India',
    status: 'Completed',
    achievements: [
      'Distinction score of 94.0% in core Science stream.',
      'Excellence in Mathematics, Physics, and Computer Science foundations.',
    ],
  },
  {
    institution: 'S. Cadambi Vidyakendra',
    degree: 'Secondary School Leaving Certificate (10th Standard)',
    period: 'Graduated 2022',
    score: '96.7%',
    scoreLabel: 'Secondary Board Examination',
    location: 'Bengaluru, India',
    status: 'Completed',
    achievements: [
      'Academic school topper honor with an aggregate 96.7% grade.',
      'Foundational excellence in mathematics, logical sciences, and algorithmic thinking.',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ideateblr-26',
    name: "IdeateBLR '26 AI Ideathon",
    issuer: 'IdeateBLR Technical Initiative',
    year: '2026',
    focus: 'Multi-Agent Student Advisory & Autonomous Academic Workflows',
    topics: ['Multi-Agent Architecture', 'Autonomous Prompt Routing', 'Product Feasibility', 'Rapid Prototyping'],
    verificationNote: 'Awarded for ideating and designing Campus Guardian multi-agent orchestration architecture during competitive ideathon track.',
  },
  {
    id: 'ibm-python',
    name: 'IBM With Python Certificate',
    issuer: 'IBM',
    year: '2025',
    focus: 'Python for Data Science, Algorithmic Problem Solving & AI',
    topics: ['Data Structures in Python', 'RESTful API Ingestion', 'NumPy & Pandas Data Manipulation', 'Modular Programming'],
    verificationNote: 'Comprehensive certification demonstrating rigorous Python mastery for data science pipelines and machine learning application frameworks.',
  },
];
