// pages/articles.tsx
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types';
import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Publications</h1>
      <p className={styles.pageSubtitle}>
        Here are some of my research works and technical publications.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const publications: Article[] = [
    {
      id: 'ieee-10593254',
      title: 'Optimizing Resource Efficiency in Smart Greenhouses through IoT',
      description:
        'Published in IEEE Xplore, this paper proposes an IoT-based system to monitor and control greenhouse resources such as water, light, and temperature, improving operational efficiency.',
      url: 'https://ieeexplore.ieee.org/document/10593254',
      cover_image: '/logos/ieee.png',
      tags: ['IoT', 'Smart Agriculture', 'Resource Optimization'],
    },
    // You can add more articles here in the future
  ];

  return {
    props: { title: 'Publications', articles: publications },
    revalidate: 60, // optional incremental static regeneration
  };
}

export default ArticlesPage;

