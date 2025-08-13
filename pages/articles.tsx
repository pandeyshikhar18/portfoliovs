import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/types';
import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Publication</h1>
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
      published_at: '2024-07-15',
      cover_image: '/logos/ieee.png',
      readable_publish_date: 'July 15, 2024',
      tags: ['IoT', 'Smart Agriculture', 'Resource Optimization'],
    },
  ];

  return {
    props: { title: 'Publications', articles: publications },
    revalidate: 60, // optional for ISR
  };
}

export default ArticlesPage;
