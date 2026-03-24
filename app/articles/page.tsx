import { Metadata } from 'next';
import { VscBook } from 'react-icons/vsc';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Articles',
};

export default function ArticlesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscBook className={styles.icon} size={24} />
            </div>
            
            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Articles</h1>
              </div>
              
              <p className={styles.subtitle}>
                This section is currently being updated. Stay tuned for technical 
                articles on web development, system design, and AI applications.
              </p>
            </div>
          </div>
        </header>

        <div className={styles.articlesList}>
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'var(--text-secondary, #888)',
            fontSize: '0.9rem',
          }}>
            <p>🚧 Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
