import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Vo Duc Hieu | Portfolio',
    template: 'Vo Duc Hieu | %s',
  },
  description:
    'Vo Duc Hieu is a fullstack web developer passionate about building scalable web applications, AI-powered systems, and modern architectures.',
  keywords: [
    'vo duc hieu',
    'hieu',
    'fullstack developer',
    'web developer portfolio',
    'react developer',
    'spring boot developer',
    'vscode-portfolio',
    'h1eudayne',
  ],
  openGraph: {
    title: "Vo Duc Hieu's Portfolio",
    description:
      'A fullstack web developer building scalable applications with modern technologies.',
    url: 'https://vscode-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
