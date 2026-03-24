export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Data Labeling Support System',
    description:
      'A web-based data labeling platform managing end-to-end workflows with multi-role collaboration. Built with React.js, Vite, Ant Design.',
    logo: '/logos/datalabeling.png',
    link: 'https://github.com/h1eudayne/FE_DataLabelingSupportSystem',
    slug: 'data-labeling-support-system',
  },
  {
    title: 'HistoryMind AI',
    description:
      'An AI-powered Vietnamese History Q&A system using semantic search, FAISS, and NLU pipeline with 600+ vectors.',
    logo: '/logos/historymind.png',
    link: 'https://github.com/HistoryMindAI',
    slug: 'historymind-ai',
  },
  {
    title: 'EduFlow Platform',
    description:
      'An online education platform for course management and enrollment with role-based access control. Built with Spring Boot 3.',
    logo: '/logos/html_icon.svg',
    link: 'https://github.com/EduFlowPlatform',
    slug: 'eduflow-platform',
  },
];
