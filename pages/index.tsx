import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

const codeLines = [
  { "code": "# Import core libraries", "type": "comment" },
  { "code": "import numpy as np", "type": "import" },
  { "code": "import pandas as pd", "type": "import" },
  { "code": "from sklearn.neural_network import MLPClassifier", "type": "import" },
  { "code": "from life import Curiosity, Creativity", "type": "import" },
  { "code": "", "type": "blank" },

  { "code": "# Personal dataset", "type": "comment" },
  { "code": "name = 'Shikhar Pandey'", "type": "variable" },
  { "code": "location = 'Chandrapur, Maharashtra'", "type": "variable" },
  { "code": "skills = ['Machine Learning', 'Data Science', 'Full Stack Development', 'Problem Solving']", "type": "variable" },
  { "code": "", "type": "blank" },

  { "code": "# Achievements", "type": "comment" },
  { "code": "publications = ['IEEE: Optimizing Resource Efficiency in Smart Greenhouses through IoT']", "type": "variable" },
  { "code": "", "type": "blank" },

  { "code": "# Model training loop for life", "type": "comment" },
  { "code": "while True:", "type": "function" },
  { "code": "    learn()", "type": "function-call" },
  { "code": "    build()", "type": "function-call" },
  { "code": "    innovate()", "type": "function-call" },
  { "code": "    update_tech_trends()", "type": "function-call" },
  { "code": "", "type": "blank" },

  { "code": "# Beyond code", "type": "comment" },
  { "code": "hobbies = ['Poetry', 'Reading', 'Tech Exploration']", "type": "variable" },
  { "code": "print('Keep learning, keep building 🚀')", "type": "function-call" },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Shikhar <span className={styles.accentText}>Pandey</span>
          </h1>

          <div className={styles.developerRole}>Aspiring Software Engineer</div>

          <p className={styles.bio}>
            I create intelligent applications that combine AI, machine learning, 
            and modern web technologies to deliver impactful solutions.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
