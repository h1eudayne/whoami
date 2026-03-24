'use client';

import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Vo Duc Hieu</h1>
              <p className={styles.role}>Fullstack Web Developer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Ho Chi Minh City, Vietnam
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/h1eudayne" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                A Software Engineering student at FPT University with hands-on experience 
                in fullstack web development, AI applications, and cybersecurity. 
                A member of Little Boy&apos;s.
              </p>
              
              <p className={styles.paragraph}>
                Passionate about system design, distributed architecture, and building 
                scalable, high-performance backend services. Aspiring to become a 
                Solution Architect specializing in large-scale systems.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>12/2023 — Present</span>
                </div>
                <h3 className={styles.expRole}>Software Engineering</h3>
                <p className={styles.expCompany}>FPT University — Ho Chi Minh City</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Highlight Projects</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>06/2025 — Present</span>
                </div>
                <h3 className={styles.expRole}>Frontend Lead — Data Labeling Support System</h3>
                <p className={styles.expCompany}>Team of 4 members</p>
                <ul className={styles.expList}>
                  <li>Led frontend development with React.js, Vite, Ant Design</li>
                  <li>Implemented role-based access control (Admin, Manager, Annotator, Reviewer)</li>
                  <li>Built responsive UI, data tables, and analytics dashboards</li>
                  <li>Set up CI/CD with GitHub Actions, deployed on Vercel</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>12/2024 — Present</span>
                </div>
                <h3 className={styles.expRole}>Fullstack & AI Engineer — HistoryMind AI</h3>
                <p className={styles.expCompany}>Solo Project</p>
                <ul className={styles.expList}>
                  <li>Built AI-powered Vietnamese History Q&A system with semantic search</li>
                  <li>Developed full pipeline: React + Spring Boot (WebFlux) + FastAPI + FAISS</li>
                  <li>Implemented NLU pipeline with Vietnamese SBERT</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>12/2024</span>
                </div>
                <h3 className={styles.expRole}>Fullstack Developer — EduFlow Platform</h3>
                <p className={styles.expCompany}>Team of 6 members</p>
                <ul className={styles.expList}>
                  <li>Built RESTful APIs with Spring Boot 3, Spring Security + JWT</li>
                  <li>Implemented email verification, media management with Cloudinary</li>
                  <li>Developed course CRUD, enrollment, and role-based access control</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>TailwindCSS</span>
                    <span className={styles.skillTag}>Ant Design</span>
                    <span className={styles.skillTag}>Vite</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Spring Boot 3</span>
                    <span className={styles.skillTag}>FastAPI</span>
                    <span className={styles.skillTag}>Spring Security</span>
                    <span className={styles.skillTag}>JWT</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Database</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MySQL</span>
                    <span className={styles.skillTag}>PostgreSQL</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Firebase</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>DevOps & Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>GitHub Actions</span>
                    <span className={styles.skillTag}>Vercel</span>
                    <span className={styles.skillTag}>NginX</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>AI / ML</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>FAISS</span>
                    <span className={styles.skillTag}>NLU</span>
                    <span className={styles.skillTag}>SBERT</span>
                    <span className={styles.skillTag}>Semantic Search</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Security</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Burp Suite</span>
                    <span className={styles.skillTag}>Nmap</span>
                    <span className={styles.skillTag}>Ghidra</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Career Objective Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Career Objective</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Aiming to develop expertise in fullstack development, AI/ML applications, 
                and system architecture. Targeting a Solution Architect position specializing 
                in distributed system design and scalable enterprise architectures within 7-10 years.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
