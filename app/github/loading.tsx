import styles from '@/styles/GithubPage.module.css';

export default function GithubLoading() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'var(--bg-secondary, #1e1e1e)',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
            <div className={styles.profileInfo}>
              <div
                style={{
                  width: 120,
                  height: 24,
                  borderRadius: 4,
                  background: 'var(--bg-secondary, #1e1e1e)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
              <div
                style={{
                  width: 80,
                  height: 16,
                  borderRadius: 4,
                  marginTop: 4,
                  background: 'var(--bg-secondary, #1e1e1e)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </header>

        <div className={styles.statsGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.statCard} style={{ opacity: 0.5 }}>
              <div
                style={{
                  width: '100%',
                  height: 60,
                  borderRadius: 6,
                  background: 'var(--bg-secondary, #1e1e1e)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }}
              />
            </div>
          ))}
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>
    </div>
  );
}
