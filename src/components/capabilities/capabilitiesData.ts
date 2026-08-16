export interface CapabilityNode {
  id: 'ai' | 'software' | 'data-business' | 'product';
  number: string;
  title: string;
  subtitle: string;
  accentColor: string;
  supportingCapabilities: string[];
  technologies?: string[];
  quote?: string;
  ossReference?: string;
}

export const CAPABILITY_NODES: CapabilityNode[] = [
  {
    id: 'ai',
    number: '01',
    title: 'AI ENGINEERING',
    subtitle: 'INTELLIGENT SYSTEMS & AUTOMATION',
    accentColor: '#E64A24',
    supportingCapabilities: [
      'LLM Applications',
      'Generative AI',
      'AI Agents',
      'AI Automation',
      'Computer Vision',
      'AI-Assisted Development',
    ],
  },
  {
    id: 'software',
    number: '02',
    title: 'SOFTWARE ENGINEERING',
    subtitle: 'CORE LANGUAGES & FRAMEWORKS',
    accentColor: '#B82024',
    supportingCapabilities: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'FastAPI',
      'Flutter',
    ],
  },
  {
    id: 'data-business',
    number: '03',
    title: 'DATA & BUSINESS',
    subtitle: 'ANALYTICS & DECISION SYSTEMS',
    accentColor: '#F27A32',
    supportingCapabilities: [
      'Data Analysis',
      'Data Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Data Visualization',
      'Statistical Fundamentals',
      'Business Analysis',
      'KPI Analysis',
      'Data-Driven Decision Making',
    ],
    quote: "I don't only build systems. I understand the data behind them and the business decisions they support.",
  },
  {
    id: 'product',
    number: '04',
    title: 'PRODUCT ENGINEERING',
    subtitle: 'CONCEPT TO PRODUCTION',
    accentColor: '#B9ADA1',
    supportingCapabilities: [
      'Full-Stack Development',
      'Web Applications',
      'Mobile Applications',
      'SaaS Products',
      'Product Architecture',
      'End-to-End Development',
    ],
    ossReference: 'OSS — Flagship AI Builder',
  },
];

export const SYSTEM_INTERSECTION_STATEMENT = 'AI × SOFTWARE × DATA × BUSINESS × PRODUCT';
